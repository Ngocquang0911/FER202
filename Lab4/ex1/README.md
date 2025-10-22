# Lab 4 - useReducer Hook Exercises

## 📁 Cấu trúc thư mục tối ưu

```
src/
├── components/           # React Components
│   ├── CounterComponent.jsx
│   ├── ToggleComponent.jsx
│   ├── LoginForm.jsx
│   ├── SignUpForm.jsx
│   ├── QuestionBank.jsx
│   ├── EnhancedQuestionBank.jsx
│   ├── ToastComponent.jsx
│   └── ModalComponent.jsx
├── hooks/               # Custom Hooks
│   └── useForm.js
├── constants/           # Constants & Configuration
│   └── index.js
├── App.js
└── index.js
```

## 🚀 Tính năng đã tối ưu

### 1. **ToastComponent** - Thông báo toast
- ✅ Hỗ trợ nhiều toast cùng lúc
- ✅ 4 loại: Success, Error, Warning, Info
- ✅ Auto-hide sau 3 giây
- ✅ Context API để sử dụng global

### 2. **ModalComponent** - Modal xác nhận
- ✅ Modal xác nhận với callback functions
- ✅ 4 loại: Info, Success, Error, Warning
- ✅ Customizable buttons và messages
- ✅ Context API để sử dụng global

### 3. **Custom Hooks**
- ✅ `useFormReducer()` - Generic form state management
- ✅ `useFormValidation()` - Form validation utilities
- ✅ `useToast()` - Toast notifications
- ✅ `useModal()` - Modal confirmations

### 4. **Constants**
- ✅ Centralized configuration
- ✅ Toast và Modal types
- ✅ Validation messages
- ✅ Demo credentials

## 🎯 Cách sử dụng

### Toast Notifications:
```javascript
const { showToast } = useToast();

// Success
showToast('Đăng nhập thành công!', 'success');

// Error
showToast('Lỗi đăng nhập!', 'error');

// Warning
showToast('Cảnh báo!', 'warning');

// Info
showToast('Thông tin', 'info');
```

### Modal Confirmations:
```javascript
const { showModal } = useModal();

showModal({
  title: 'Xác nhận',
  message: 'Bạn có chắc chắn?',
  type: 'warning',
  confirmText: 'Xác nhận',
  cancelText: 'Hủy',
  onConfirm: () => console.log('Confirmed'),
  onCancel: () => console.log('Cancelled')
});
```

### Form Management:
```javascript
const { state, setField, setLoading, resetForm } = useFormReducer(initialState);
const { validateEmail, validatePassword } = useFormValidation();
```

## 🔧 Tối ưu hóa đã thực hiện

1. **Code Reusability**: Components có thể tái sử dụng
2. **State Management**: useReducer cho state phức tạp
3. **Context API**: Global state cho Toast và Modal
4. **Custom Hooks**: Logic tái sử dụng
5. **Constants**: Centralized configuration
6. **Validation**: Reusable validation functions
7. **Error Handling**: Consistent error management
8. **Type Safety**: Clear type definitions

## 🎨 UI/UX Features

- **Responsive Design**: Bootstrap responsive grid
- **Loading States**: Visual feedback during operations
- **Form Validation**: Real-time validation with error messages
- **Toast Notifications**: Non-intrusive success/error messages
- **Modal Confirmations**: User-friendly confirmation dialogs
- **Vietnamese Interface**: Localized for Vietnamese users

## 🚀 Demo Credentials

- **Username**: admin
- **Password**: 123456

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 992px
- **Desktop**: > 992px

---

**Created by**: traltb@fe.edu.vn  
**Lab**: 4 - useReducer Hook Exercises  
**Framework**: React with Bootstrap