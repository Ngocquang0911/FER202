@echo off
echo ========================================
echo    LAB4 - PUSH TO FER202 REPOSITORY
echo ========================================
echo.

cd ex1

echo 1. Initializing Git repository...
git init

echo.
echo 2. Adding all files...
git add .

echo.
echo 3. Creating commit for Lab4...
git commit -m "Lab4: useReducer Hook Exercises

- Exercise 3: LoginForm with useReducer, Toast, Modal
- Exercise 4: SignUpForm with useReducer, validation, Cancel button  
- Exercise 6: Enhanced QuestionBank with timer, progress, high score
- ToastComponent và ModalComponent với Context API
- Custom hooks và constants
- Vietnamese interface với Bootstrap styling"

echo.
echo 4. Setting up remote repository...
echo Please run these commands manually:
echo.
echo git remote add origin https://github.com/YOUR_USERNAME/FER202.git
echo git branch -M main
echo git push -u origin main
echo.
echo Or if FER202 repository already exists:
echo git remote add origin https://github.com/YOUR_USERNAME/FER202.git
echo git pull origin main --allow-unrelated-histories
echo git push origin main
echo.
echo 5. Repository setup complete!
echo.
pause
