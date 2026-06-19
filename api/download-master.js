export default async function handler(req, res) {
  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
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

    // Fetch the raw file content directly from GitHub using the custom Accept header
    const getResponse = await fetch(apiUrl, {
      headers: {
        'Authorization': `Bearer ${GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github.v3.raw'
      }
    });

    if (getResponse.ok) {
      const csvContent = await getResponse.text();
      
      // Set headers to force a file download in the browser
      res.setHeader('Content-Type', 'text/csv');
      res.setHeader('Content-Disposition', 'attachment; filename=master_csv_of_templates.csv');
      
      return res.status(200).send(csvContent);
    } else if (getResponse.status === 404) {
       return res.status(404).json({ error: 'Master CSV not found on GitHub yet.' });
    } else {
      const errorData = await getResponse.json();
      throw new Error(`Failed to fetch from GitHub: ${errorData.message}`);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
}
