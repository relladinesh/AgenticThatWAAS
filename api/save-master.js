export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const payload = req.body;
    const rows = Array.isArray(payload) ? payload : [payload];
    
    // Required GitHub Environment Variables for Vercel
    const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
    const REPO_OWNER = process.env.GITHUB_REPO_OWNER;
    const REPO_NAME = process.env.GITHUB_REPO_NAME;
    
    if (!GITHUB_TOKEN || !REPO_OWNER || !REPO_NAME) {
      return res.status(500).json({ 
        error: 'GitHub credentials are not configured in Vercel Environment Variables. Please set GITHUB_TOKEN, GITHUB_REPO_OWNER, and GITHUB_REPO_NAME.' 
      });
    }

    const path = 'data/master_csv_of_templates.csv';
    const apiUrl = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${path}`;

    // 1. Fetch the existing file to get its content and SHA (required by GitHub API for updating)
    const getResponse = await fetch(apiUrl, {
      headers: {
        'Authorization': `Bearer ${GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github.v3+json'
      }
    });

    let existingContent = '';
    let sha = '';

    if (getResponse.ok) {
      const fileData = await getResponse.json();
      sha = fileData.sha;
      // GitHub content is base64 encoded
      existingContent = Buffer.from(fileData.content, 'base64').toString('utf8');
    } else if (getResponse.status === 404) {
      existingContent = 'business_name,category,template_code,slug,url,date_generated\n';
    } else {
      const errorData = await getResponse.json();
      throw new Error(`Failed to fetch from GitHub: ${errorData.message}`);
    }

    // 2. Append new rows and ensure no duplicates
    const timestamp = new Date().toISOString();
    const existingUrls = new Set();
    const lines = existingContent.split('\n');
    for (const line of lines) {
      const parts = line.split('","');
      if (parts.length >= 5) {
         let urlPart = parts[4].replace(/"/g, '').trim();
         existingUrls.add(urlPart.toLowerCase());
      }
    }

    let appendContent = '';
    for (const data of rows) {
      const safeUrl = data.url.toLowerCase();
      if (!existingUrls.has(safeUrl)) {
        appendContent += `"${data.businessName.toLowerCase()}","${data.category.toLowerCase()}","${data.template.toLowerCase()}","${data.slug.toLowerCase()}","${safeUrl}","${timestamp.toLowerCase()}"\n`;
        existingUrls.add(safeUrl);
      }
    }

    if (!appendContent) {
      return res.status(200).json({ success: true, message: 'No new rows to append.' });
    }

    const newContent = existingContent + appendContent;
    const newContentBase64 = Buffer.from(newContent).toString('base64');

    // 3. Commit the updated file directly to GitHub via API
    const putResponse = await fetch(apiUrl, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: 'Auto-update master CSV via Vercel',
        content: newContentBase64,
        sha: sha || undefined
      })
    });

    if (!putResponse.ok) {
      const errorData = await putResponse.json();
      throw new Error(`Failed to update GitHub: ${errorData.message}`);
    }

    res.status(200).json({ success: true, newRowsAdded: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
}
