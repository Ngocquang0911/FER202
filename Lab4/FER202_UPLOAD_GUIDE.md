# Hướng dẫn Push Lab4 lên Repository FER202

## 🎯 Mục tiêu: Push code Lab4 vào thư mục FER202 trên GitHub

## 📋 Các bước thực hiện:

### **Cách 1: Nếu FER202 repository chưa tồn tại**

#### 1. **Tạo repository FER202 trên GitHub**
```bash
# Đi tới https://github.com/YOUR_USERNAME
# Click "New repository"
# Repository name: FER202
# Description: FER202 - React Hooks Exercises
# Chọn Public hoặc Private
# KHÔNG check "Add a README file"
# Click "Create repository"
```

#### 2. **Push code từ thư mục ex1**
```bash
cd ex1
git init
git add .
git commit -m "Lab4: useReducer Hook Exercises

- Exercise 3: LoginForm with useReducer, Toast, Modal
- Exercise 4: SignUpForm with useReducer, validation, Cancel button  
- Exercise 6: Enhanced QuestionBank with timer, progress, high score
- ToastComponent và ModalComponent với Context API
- Custom hooks và constants
- Vietnamese interface với Bootstrap styling"

git remote add origin https://github.com/YOUR_USERNAME/FER202.git
git branch -M main
git push -u origin main
```

### **Cách 2: Nếu FER202 repository đã tồn tại**

#### 1. **Clone repository FER202**
```bash
git clone https://github.com/YOUR_USERNAME/FER202.git
cd FER202
```

#### 2. **Tạo thư mục Lab4**
```bash
mkdir Lab4
# Copy tất cả files từ ex1/ vào Lab4/
```

#### 3. **Push code**
```bash
git add .
git commit -m "Add Lab4: useReducer Hook Exercises"
git push origin main
```

### **Cách 3: Push trực tiếp từ thư mục hiện tại**

#### 1. **Khởi tạo git trong thư mục ex1**
```bash
cd ex1
git init
git add .
git commit -m "Lab4: useReducer Hook Exercises"
```

#### 2. **Add remote và push**
```bash
git remote add origin https://github.com/YOUR_USERNAME/FER202.git
git pull origin main --allow-unrelated-histories
git push origin main
```

## 📁 Cấu trúc sẽ có trong FER202:

```
FER202/
├── Lab4/
│   ├── src/
│   │   ├── components/
│   │   │   ├── LoginForm.jsx              # Exercise 3
│   │   │   ├── SignUpForm.jsx             # Exercise 4
│   │   │   ├── EnhancedQuestionBank.jsx   # Exercise 6
│   │   │   ├── ToastComponent.jsx         # Toast notifications
│   │   │   └── ModalComponent.jsx        # Modal confirmations
│   │   ├── hooks/
│   │   │   └── useForm.js                 # Custom hooks
│   │   ├── constants/
│   │   │   └── index.js                    # Constants
│   │   ├── App.js                         # Main app
│   │   └── index.js                       # Entry point
│   ├── public/                            # Static files
│   ├── package.json                       # Dependencies
│   ├── README.md                          # Documentation
│   └── .gitignore                         # Git ignore rules
├── Lab1/                                  # (nếu có)
├── Lab2/                                  # (nếu có)
├── Lab3/                                  # (nếu có)
└── README.md                              # Main README
```

## 🚀 Script tự động:

### **Chạy file batch:**
```bash
# Double-click file: push-to-fer202.bat
# Hoặc chạy trong Command Prompt:
push-to-fer202.bat
```

## 🔧 Troubleshooting:

### **Lỗi authentication:**
```bash
# Sử dụng Personal Access Token
git remote set-url origin https://YOUR_TOKEN@github.com/YOUR_USERNAME/FER202.git
```

### **Lỗi "unrelated histories":**
```bash
git pull origin main --allow-unrelated-histories
git push origin main
```

### **Lỗi "refusing to merge":**
```bash
git pull origin main --allow-unrelated-histories --no-edit
```

## 📝 Lưu ý quan trọng:

1. **Thay `YOUR_USERNAME`** bằng username GitHub của bạn
2. **Thay `YOUR_TOKEN`** bằng Personal Access Token nếu cần
3. **Đảm bảo** đã cài đặt Git và có tài khoản GitHub
4. **Kiểm tra** URL repository trước khi push
5. **Backup** code trước khi push (để tránh mất dữ liệu)

## 🎯 Kết quả mong đợi:

Sau khi push thành công, bạn sẽ có:
- Repository FER202 trên GitHub
- Thư mục Lab4 chứa toàn bộ code useReducer exercises
- Có thể clone và chạy: `npm install && npm start`
- Truy cập: http://localhost:3000

---

**Created by**: traltb@fe.edu.vn  
**Repository**: FER202  
**Lab**: 4 - useReducer Hook Exercises
