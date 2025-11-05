//1. Khởi tạo auth context
import React, { createContext } from "react";

// Dữ liệu mẫu thay thế cho API call
const mockAccounts = [
  {
    id: 1,
    username: 'admin',
    email: 'admin@example.com',
    password: '123456',
    role: 'admin',
    status: 'active'
  },
  {
    id: 2,
    username: 'user1',
    email: 'user1@example.com',
    password: '123456',
    role: 'user',
    status: 'active'
  },
  {
    id: 3,
    username: 'user2',
    email: 'user2@example.com',
    password: '123456',
    role: 'user',
    status: 'locked'
  }
];

//1. Khởi tạo context với giá trị mặc định
export const AuthContext = createContext({
  user: null, // thông tin user đã đăng nhập
  isAuthenticated: false, // trạng thái đăng nhập
  login: () => {}, // hàm đăng nhập
  logout: () => {}, // hàm đăng xuất
  error: null, // thông báo lỗi
  clearError: () => {} // hàm xóa lỗi
});

//2. Tạo provider để bao bọc ứng dụng
export const AuthProvider = ({ children }) => {
  // State quản lý authentication
  const [user, setUser] = React.useState(null);
  const [error, setError] = React.useState(null);

  // Hàm đăng nhập
  const login = (username, password) => {
    // Tìm user trong mock data
    const foundUser = mockAccounts.find(
      account => account.username === username && account.password === password
    );

    if (!foundUser) {
      setError('Tên đăng nhập hoặc mật khẩu không đúng');
      return false;
    }

    // Kiểm tra trạng thái tài khoản
    if (foundUser.status === 'locked') {
      setError('Tài khoản đã bị khóa');
      return false;
    }

    // Kiểm tra phân quyền admin
    if (foundUser.role !== 'admin') {
      setError('Chỉ admin mới được phép đăng nhập');
      return false;
    }

    // Đăng nhập thành công
    setUser(foundUser);
    setError(null);
    return true;
  };

  // Hàm đăng xuất
  const logout = () => {
    setUser(null);
    setError(null);
  };

  // Hàm xóa lỗi
  const clearError = () => {
    setError(null);
  };

  // Tạo object context chứa giá trị và các hàm
  const contextValue = {
    user,
    isAuthenticated: !!user,
    login,
    logout,
    error,
    clearError
  };

  //3. Cung cấp giá trị context cho các component con
  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

//4. Custom hook để sử dụng context dễ dàng hơn
export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
