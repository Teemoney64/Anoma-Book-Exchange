@echo off
echo Setting up Git repository for Anoma Book Exchange...

echo.
echo Step 1: Initialize Git repository
git init

echo.
echo Step 2: Add remote repository
git remote add origin https://github.com/teemoney64/Anoma-Book-Exchange.git

echo.
echo Step 3: Configure Git (you'll need to set your details)
echo Please run these commands with your GitHub details:
echo git config user.name "Your Name"
echo git config user.email "your-email@example.com"

echo.
echo Step 4: Add all files
git add .

echo.
echo Step 5: Create initial commit
git commit -m "Update Anoma Book Exchange: Enhanced UI, Vercel config, complete documentation"

echo.
echo Step 6: Push to main branch
git branch -M main
git push -u origin main

echo.
echo Deployment complete! Your site will be live at:
echo https://teemoney64.github.io/Anoma-Book-Exchange/

pause