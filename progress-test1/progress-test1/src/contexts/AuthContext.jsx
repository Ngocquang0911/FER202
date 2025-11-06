// AuthContext.jsx quản lý xác thực người dùng bằng Context API và useReducer
import React, { createContext, useContext, useReducer } from 'react';
import * as api from '../services/api';

// 1. Tạo Context
const AuthContext = createContext();

// 2. Khai báo Trạng thái khởi tạo Initial State
const initialAuthState = {
  isAuthenticated: false,
  user: null,
  isLoading: false,
  error: null,
};

// 3. Tạo hàm reducer để quản lý các hành động liên quan đến xác thực
const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_START':
      return { ...state, isLoading: true, error: null };
    case 'LOGIN_SUCCESS':
      // Lưu user vào Local Storage
      localStorage.setItem('user', JSON.stringify(action.payload));
      return { ...state, isLoading: false, isAuthenticated: true, user: action.payload, error: null };
    case 'LOGIN_FAILURE':
      // Lỗi từ server/invalid credentials
      return { ...state, isLoading: false, error: action.payload };
    case 'LOGOUT':
      // Xóa user khỏi Local Storage
      localStorage.removeItem('user');
      // Trở về trạng thái ban đầu
      return { ...initialAuthState };
    case 'CLEAR_ERROR':
      return { ...state, error: null };
    default:
      return state;
  }
};

// 4. Tạo AuthProvider để cung cấp Context cho các component con
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialAuthState);

  // Hàm action để xóa lỗi
  const clearError = () => {
    dispatch({ type: 'CLEAR_ERROR' });
  };

  // Hàm login nhận usernameOrEmail (identifier) và password
  const login = async ({ usernameOrEmail, password }) => {
    dispatch({ type: 'LOGIN_START' });

    try {
      // 1. Gọi API để đăng nhập và lấy thông tin user từ file db.json
      const accounts = await api.getUsers(); // Giả định getUsers() lấy tất cả users

      // 2. Kiểm tra thông tin đăng nhập bằng username HOẶC email (identifier)
      const user = accounts.find(
        (acc) =>
          (acc.username === usernameOrEmail || (acc.email && acc.email === usernameOrEmail)) &&
          acc.password === password
      );

      // 3. Cập nhật trạng thái dựa trên kết quả đăng nhập
      if (user) {
        dispatch({ type: 'LOGIN_SUCCESS', payload: user });
        return { success: true, user };
      } else {
        const errorMessage = 'Invalid username/email or password!';
        dispatch({ type: 'LOGIN_FAILURE', payload: errorMessage });
        return { success: false, error: errorMessage };
      }
    } catch (error) {
      const errorMessage = error.message || 'Login failed due to a network error.';
      dispatch({ type: 'LOGIN_FAILURE', payload: errorMessage });
      return { success: false, error: errorMessage };
    }
  };

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  // 5. Cung cấp trực tiếp các giá trị cần thiết qua Context value
  const contextValue = {
    isAuthenticated: state.isAuthenticated,
    user: state.user,
    loading: state.isLoading,
    error: state.error,

    // Actions
    login,
    logout,
    clearError,
  };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

// 6. Tạo custom hook để sử dụng AuthContext dễ dàng hơn
export const useAuth = () => useContext(AuthContext);
