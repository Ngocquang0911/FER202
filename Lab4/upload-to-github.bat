@echo off
echo ========================================
echo    LAB4 - UPLOAD TO GITHUB
echo ========================================
echo.

cd ex1

echo 1. Initializing Git repository...
git init

echo.
echo 2. Adding all files...
git add .

echo.
echo 3. Creating initial commit...
git commit -m "Initial commit: Lab4 - useReducer Hook Exercises

- Exercise 3: LoginForm with useReducer, Toast, Modal
- Exercise 4: SignUpForm with useReducer, validation, Cancel button
- Exercise 6: Enhanced QuestionBank with timer, progress, high score
- ToastComponent và ModalComponent với Context API
- Custom hooks và constants
- Vietnamese interface với Bootstrap styling"

echo.
echo 4. Repository setup complete!
echo.
echo Next steps:
echo 1. Go to https://github.com and create a new repository
echo 2. Copy the repository URL
echo 3. Run: git remote add origin YOUR_REPO_URL
echo 4. Run: git branch -M main
echo 5. Run: git push -u origin main
echo.
echo Example:
echo git remote add origin https://github.com/YOUR_USERNAME/Lab4-useReducer-Exercises.git
echo git branch -M main
echo git push -u origin main
echo.
pause
