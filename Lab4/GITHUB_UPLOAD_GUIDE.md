# Hướng dẫn Upload Code lên GitHub - Lab4

## 📋 Các bước thực hiện:

### 1. **Khởi tạo Git Repository**
```bash
cd ex1
git init
```

### 2. **Tạo file .gitignore**
```bash
echo "node_modules/" > .gitignore
echo "npm-debug.log*" >> .gitignore
echo "yarn-debug.log*" >> .gitignore
echo "yarn-error.log*" >> .gitignore
echo ".env.local" >> .gitignore
echo ".env.development.local" >> .gitignore
echo ".env.test.local" >> .gitignore
echo ".env.production.local" >> .gitignore
echo "build/" >> .gitignore
```

### 3. **Add và Commit files**
```bash
git add .
git commit -m "Initial commit: Lab4 - useReducer Hook Exercises

- Exercise 3: LoginForm with useReducer
- Exercise 4: SignUpForm with useReducer  
- Exercise 6: Enhanced QuestionBank with timer, progress, high score
- ToastComponent và ModalComponent với Context API
- Custom hooks và constants
- Vietnamese interface với Bootstrap styling"
```

### 4. **Tạo Repository trên GitHub**
1. Đi tới https://github.com
2. Click "New repository"
3. Repository name: `Lab4-useReducer-Exercises`
4. Description: `Lab 4 - React useReducer Hook Exercises with LoginForm, SignUpForm, and Enhanced QuestionBank`
5. Chọn Public hoặc Private
6. **KHÔNG** check "Add a README file"
7. Click "Create repository"

### 5. **Connect local repository với GitHub**
```bash
git remote add origin https://github.com/YOUR_USERNAME/Lab4-useReducer-Exercises.git
git branch -M main
git push -u origin main
```

### 6. **Nếu có lỗi authentication**
```bash
# Sử dụng Personal Access Token
git remote set-url origin https://YOUR_TOKEN@github.com/YOUR_USERNAME/Lab4-useReducer-Exercises.git
git push -u origin main
```

## 📁 Cấu trúc project sẽ được upload:

```
Lab4-useReducer-Exercises/
├── src/
│   ├── components/
│   │   ├── LoginForm.jsx              # Exercise 3
│   │   ├── SignUpForm.jsx             # Exercise 4
│   │   ├── EnhancedQuestionBank.jsx   # Exercise 6
│   │   ├── ToastComponent.jsx         # Toast notifications
│   │   └── ModalComponent.jsx        # Modal confirmations
│   ├── hooks/
│   │   └── useForm.js                 # Custom hooks
│   ├── constants/
│   │   └── index.js                    # Constants
│   ├── App.js                         # Main app
│   └── index.js                       # Entry point
├── public/                            # Static files
├── package.json                       # Dependencies
├── README.md                          # Documentation
└── .gitignore                         # Git ignore rules
```

## 🎯 Tính năng chính:

### **Exercise 3: LoginForm**
- ✅ useReducer state management
- ✅ Form validation với error handling
- ✅ Toast notifications
- ✅ Modal confirmations
- ✅ Loading states
- ✅ Demo credentials: admin/123456

### **Exercise 4: SignUpForm**
- ✅ useReducer cho complex state
- ✅ Comprehensive validation
- ✅ Toast notifications
- ✅ Modal confirmations
- ✅ Error handling per field
- ✅ Terms agreement checkbox

### **Exercise 6: Enhanced QuestionBank**
- ✅ useReducer cho quiz state
- ✅ Immediate feedback (✅/❌)
- ✅ Progress bar (1/3, 2/3, 3/3)
- ✅ Countdown timer (10s với warning <5s)
- ✅ High score tracking (localStorage)
- ✅ React Icons
- ✅ Auto-submit khi hết giờ

## 🚀 Sau khi upload:

1. **Clone repository**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/Lab4-useReducer-Exercises.git
   cd Lab4-useReducer-Exercises
   npm install
   npm start
   ```

2. **Truy cập**: http://localhost:3000

3. **Test các tính năng**:
   - LoginForm với demo credentials
   - SignUpForm với validation
   - Enhanced QuestionBank với timer và high score

## 📝 Lưu ý:

- Thay `YOUR_USERNAME` bằng username GitHub của bạn
- Thay `YOUR_TOKEN` bằng Personal Access Token nếu cần
- Đảm bảo đã cài đặt Git và có tài khoản GitHub
- Nếu gặp lỗi, kiểm tra lại URL repository và authentication

---

**Created by**: traltb@fe.edu.vn  
**Lab**: 4 - useReducer Hook Exercises  
**Framework**: React with Bootstrap
