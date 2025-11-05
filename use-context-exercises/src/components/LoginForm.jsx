//LoginForm.jsx is a functional component that uses the useReducer hook to manage form state and AuthContext for authentication.
import React, { useReducer } from 'react';
import { Button, Form, Card, Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';

// 1. Khởi tạo trạng thái ban đầu cho form
const initialState = {
  username: '',
  password: '',
  errors: {}
};

// 2. Định nghĩa hàm reducer
function formReducer(state, action) {
  switch (action.type) {
    case 'SET_FIELD':
      return {
        ...state,
        [action.field]: action.value,
        errors: { ...state.errors, [action.field]: '' } // Xóa lỗi khi user nhập
      };
    case 'SET_ERRORS':
      return {
        ...state,
        errors: action.errors
      };
    case 'RESET_FORM':
      return initialState;
    default:
      return state;
  }
}

function LoginForm() {
  // 3. Sử dụng useReducer để quản lý trạng thái form
  const [state, dispatch] = useReducer(formReducer, initialState);

  // Sử dụng AuthContext
  const { login, logout, isAuthenticated, user, error, clearError } = useAuth();

  // Action handlers
  const handleInputChange = (field) => (e) => {
    dispatch({
      type: 'SET_FIELD',
      field,
      value: e.target.value
    });
    // Xóa lỗi auth khi user nhập
    if (error) {
      clearError();
    }
  };

  const validateForm = () => {
    const errors = {};

    // Validation username
    if (!state.username.trim()) {
      errors.username = 'Tên đăng nhập không được để trống';
    } else if (state.username.length < 3) {
      errors.username = 'Tên đăng nhập phải có ít nhất 3 ký tự';
    }

    // Validation password
    if (!state.password.trim()) {
      errors.password = 'Mật khẩu không được để trống';
    } else if (state.password.length < 6) {
      errors.password = 'Mật khẩu phải có ít nhất 6 ký tự';
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      dispatch({ type: 'SET_ERRORS', errors });
      return;
    }

    // Thực hiện đăng nhập
    const success = login(state.username, state.password);
    if (success) {
      dispatch({ type: 'RESET_FORM' });
    }
  };

  const handleLogout = () => {
    logout();
  };

  // Style cho form
  const formStyle = {
    maxWidth: '400px',
    margin: '50px auto',
    padding: '20px'
  };

  const buttonStyle = {
    width: '100%',
    marginTop: '10px'
  };

  // Nếu đã đăng nhập, hiển thị thông tin user
  if (isAuthenticated) {
    return (
      <Card style={formStyle}>
        <Card.Body>
          <Card.Title className="text-center">Đăng nhập thành công!</Card.Title>
          <div className="text-center mb-3">
            <p><strong>Xin chào:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Vai trò:</strong> {user.role}</p>
            <p><strong>Trạng thái:</strong> {user.status}</p>
          </div>
          <Button 
            variant="danger" 
            onClick={handleLogout}
            style={buttonStyle}
          >
            Đăng xuất
          </Button>
        </Card.Body>
      </Card>
    );
  }

  return (
    <Card style={formStyle}>
      <Card.Body>
        <Card.Title className="text-center">Đăng nhập hệ thống</Card.Title>
        
        {/* Hiển thị lỗi từ AuthContext */}
        {error && (
          <Alert variant="danger" className="mt-3">
            {error}
          </Alert>
        )}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Tên đăng nhập</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nhập tên đăng nhập"
              value={state.username}
              onChange={handleInputChange('username')}
              isInvalid={!!state.errors.username}
            />
            <Form.Control.Feedback type="invalid">
              {state.errors.username}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Mật khẩu</Form.Label>
            <Form.Control
              type="password"
              placeholder="Nhập mật khẩu"
              value={state.password}
              onChange={handleInputChange('password')}
              isInvalid={!!state.errors.password}
            />
            <Form.Control.Feedback type="invalid">
              {state.errors.password}
            </Form.Control.Feedback>
          </Form.Group>

          <Button 
            variant="primary" 
            type="submit" 
            style={buttonStyle}
          >
            Đăng nhập
          </Button>
        </Form>

        <div className="mt-3">
          <small className="text-muted">
            <strong>Tài khoản demo:</strong><br/>
            Username: admin, Password: 123456<br/>
            (Chỉ admin mới được phép đăng nhập)
          </small>
        </div>
      </Card.Body>
    </Card>
  );
}

export default LoginForm;
