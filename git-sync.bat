@echo off
echo ====================================
echo Starting Git Sync...
echo ====================================

echo [1/4] Adding all changes...
git add .

echo [2/4] Committing changes...
git commit -m "Auto-sync update %date% %time%"

echo [3/4] Pulling latest changes from GitHub...
git pull origin main --no-rebase

echo [4/4] Pushing to GitHub...
git push origin main

echo ====================================
echo Sync Complete! Your code is now live.
echo ====================================
pause
