// AppRoutes.js định nghĩa các route cho ứng dụng sử dụng React Router
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext.jsx';
import LoginPage from '../pages/LoginPage';
import DashboardPage from '../pages/DashboardPage';
import AddPaymentPage from '../pages/AddPaymentPage';
import PaymentDetailsPage from '../pages/PaymentDetailsPage';
import EditPaymentPage from '../pages/EditPaymentPage';
import UserList from '../pages/UserList';

// Component để bảo vệ các route cần xác thực
const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
};

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Trang mặc định: chuyển hướng tới /home */}
        <Route path="/" element={<Navigate to="/home" replace />} />
        {/* Trang login */}
        <Route path="/login" element={<LoginPage />} />
        {/* Trang home được bảo vệ */}
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <DashboardPage />
            </PrivateRoute>
          }
        />
        {/* Payment routes */}
        <Route
          path="/payments/add"
          element={
            <PrivateRoute>
              <AddPaymentPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/payments/:id"
          element={
            <PrivateRoute>
              <PaymentDetailsPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/payments/:id/edit"
          element={
            <PrivateRoute>
              <EditPaymentPage />
            </PrivateRoute>
          }
        />
        {/* User management */}
        <Route
          path="/users"
          element={
            <PrivateRoute>
              <UserList />
            </PrivateRoute>
          }
        />
        {/* Mặc định điều hướng */}
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
