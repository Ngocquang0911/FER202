import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { AuthProvider } from './contexts/AuthContext.jsx';
import { PaymentProvider } from './contexts/PaymentContext.jsx';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    // Đặt AuthProvider ở cấp cao nhất trong ứng dụng để cung cấp Context cho toàn bộ ứng dụng
    <AuthProvider>
      <div className="App">
        {/* Sử dụng PaymentProvider để quản lý state thanh toán (phụ thuộc Auth) */}
        <PaymentProvider>
          {/* Sử dụng AppRoutes để quản lý các route trong ứng dụng */}
          <AppRoutes />
        </PaymentProvider>
      </div>
    </AuthProvider>
  );
}

export default App;
