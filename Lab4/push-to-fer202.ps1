# PowerShell Script để Push Lab4 lên FER202 Repository
# Chạy script này trong PowerShell với quyền Administrator

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "    LAB4 - PUSH TO FER202 REPOSITORY" -ForegroundColor Cyan  
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Chuyển vào thư mục ex1
Set-Location "ex1"

Write-Host "1. Initializing Git repository..." -ForegroundColor Yellow
git init

Write-Host ""
Write-Host "2. Adding all files..." -ForegroundColor Yellow
git add .

Write-Host ""
Write-Host "3. Creating commit for Lab4..." -ForegroundColor Yellow
git commit -m "Lab4: useReducer Hook Exercises

- Exercise 3: LoginForm with useReducer, Toast, Modal
- Exercise 4: SignUpForm with useReducer, validation, Cancel button  
- Exercise 6: Enhanced QuestionBank with timer, progress, high score
- ToastComponent và ModalComponent với Context API
- Custom hooks và constants
- Vietnamese interface với Bootstrap styling"

Write-Host ""
Write-Host "4. Repository setup complete!" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "1. Go to https://github.com and create repository 'FER202'" -ForegroundColor White
Write-Host "2. Run these commands:" -ForegroundColor White
Write-Host ""
Write-Host "   git remote add origin https://github.com/YOUR_USERNAME/FER202.git" -ForegroundColor Gray
Write-Host "   git branch -M main" -ForegroundColor Gray
Write-Host "   git push -u origin main" -ForegroundColor Gray
Write-Host ""
Write-Host "   Or if FER202 already exists:" -ForegroundColor White
Write-Host "   git remote add origin https://github.com/YOUR_USERNAME/FER202.git" -ForegroundColor Gray
Write-Host "   git pull origin main --allow-unrelated-histories" -ForegroundColor Gray
Write-Host "   git push origin main" -ForegroundColor Gray
Write-Host ""

Read-Host "Press Enter to continue..."
