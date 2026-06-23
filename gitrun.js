import { execSync } from 'child_process';

try {
  console.log('📦 Staging files...');
  execSync('git add .', { stdio: 'inherit' });

  // Get commit message from command line arguments, or use a default
  const commitMsg = process.argv.slice(2).join(' ') || 'auto update from gitrun';
  
  console.log(`\n💾 Committing changes: "${commitMsg}"`);
  try {
    execSync(`git commit -m "${commitMsg}"`, { stdio: 'inherit' });
  } catch (commitErr) {
    console.log('⚠️ No new changes to commit, or commit failed. Proceeding to push...');
  }

  console.log('\n🚀 Pushing to GitHub...');
  execSync('git push', { stdio: 'inherit' });

  console.log('\n✅ Success! Your changes have been pushed to GitHub.');
} catch (error) {
  console.error('\n❌ An error occurred while running git commands:');
  console.error(error.message);
}
