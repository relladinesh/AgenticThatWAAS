import { execSync } from 'child_process';

const { 
  GITHUB_TOKEN, 
  GITHUB_REPO_OWNER, 
  GITHUB_REPO_NAME,
  VERCEL_GIT_COMMIT_REF // Vercel automatically provides the branch name
} = process.env;

// If we are not in Vercel, or missing credentials, skip
if (!process.env.VERCEL) {
  console.log('Not running in Vercel. Skipping auto-push.');
  process.exit(0);
}

if (!GITHUB_TOKEN || !GITHUB_REPO_OWNER || !GITHUB_REPO_NAME) {
  console.log('GitHub credentials missing. Skipping auto-push.');
  process.exit(0);
}

const branchName = VERCEL_GIT_COMMIT_REF || 'main';

try {
  console.log('Checking for newly generated registry files...');
  
  // Check if there are any changes in the specific files we care about
  const status = execSync('git status --porcelain "data csv/" "src/templates/"').toString();
  
  if (!status.trim()) {
    console.log('No new files or templates to push. Everything is up to date.');
    process.exit(0);
  }

  console.log('Changes detected! Configuring Git for Vercel Bot...');
  execSync('git config --global user.name "ShowcasePro Auto-Bot"');
  execSync('git config --global user.email "bot@showcasepro.app"');

  // Set the remote URL to use the Personal Access Token for authentication
  const remoteUrl = `https://${GITHUB_TOKEN}@github.com/${GITHUB_REPO_OWNER}/${GITHUB_REPO_NAME}.git`;
  execSync(`git remote set-url origin ${remoteUrl}`);
  
  console.log('Adding generated files to commit...');
  // Force add just in case they were in .gitignore
  execSync('git add -f "data csv/business_templates.csv" "src/templates/"');
  
  // IMPORTANT: We use [skip ci] so Vercel doesn't trigger an infinite build loop!
  console.log('Committing files...');
  execSync('git commit -m "Auto-generated templates and registry update from Vercel [skip ci]"');
  
  console.log(`Pushing commit to branch: ${branchName}...`);
  execSync(`git push origin HEAD:${branchName}`);
  
  console.log('✅ Successfully pushed generated files to GitHub!');
} catch (error) {
  console.error('❌ Failed to push changes to GitHub.');
  if (error.stdout) console.error(error.stdout.toString());
  if (error.stderr) console.error(error.stderr.toString());
  // We do NOT exit with an error code because we don't want to break the build just because a push failed.
}
