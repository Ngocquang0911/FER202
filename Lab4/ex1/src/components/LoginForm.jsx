import React, { useReducer } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { useToast } from './ToastComponent';
import { useModal } from './ModalComponent';

// Initial state
const initialState = {
  username: '',
  password: '',
  isLoading: false,
  success: false
};

// Reducer
function loginReducer(state, action) {
  switch (action.type) {
    case 'SET_FIELD':
      return { ...state, [action.field]: action.value };
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    case 'LOGIN_SUCCESS':
      return { ...state, isLoading: false, success: true };
    case 'RESET_FORM':
      return initialState;
    default:
      return state;
  }
}

function LoginForm() {
  const [state, dispatch] = useReducer(loginReducer, initialState);
  const { username, password, isLoading, success } = state;
  const { showToast } = useToast();
  const { showModal } = useModal();

  const handleInputChange = (field, value) => {
    dispatch({ type: 'SET_FIELD', field, value });
  };

  const validateForm = () => {
    if (!username.trim()) {
      showToast('Vui lòng nhập tên đăng nhập', 'error');
      return false;
    }
    if (!password.trim()) {
      showToast('Vui lòng nhập mật khẩu', 'error');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    dispatch({ type: 'SET_LOADING', payload: true });

    // Simulate API call
    setTimeout(() => {
      if (username === 'admin' && password === '123456') {
        dispatch({ type: 'LOGIN_SUCCESS' });
        showToast(`Chào mừng ${username}! Đăng nhập thành công!`, 'success');
      } else {
        dispatch({ type: 'SET_LOADING', payload: false });
        showToast('Tên đăng nhập hoặc mật khẩu không đúng', 'error');
      }
    }, 1500);
  };

  const handleReset = () => {
    showModal({
      title: 'Xác nhận Reset',
      message: 'Bạn có chắc chắn muốn reset form đăng nhập?',
      type: 'warning',
      confirmText: 'Reset',
      cancelText: 'Hủy',
      onConfirm: () => {
        dispatch({ type: 'RESET_FORM' });
        showToast('Form đã được reset', 'info');
      }
    });
  };

  const handleCancel = () => {
    showModal({
      title: 'Xác nhận Hủy',
      message: 'Bạn có chắc chắn muốn hủy đăng nhập?',
      type: 'warning',
      confirmText: 'Hủy đăng nhập',
      cancelText: 'Tiếp tục',
      onConfirm: () => {
        dispatch({ type: 'RESET_FORM' });
        showToast('Đã hủy đăng nhập', 'info');
      }
    });
  };

  if (success) {
    return (
      <Card className="p-4">
        <div className="text-center">
          <h3 className="text-success">Đăng nhập thành công! 🎉</h3>
          <p>Chào mừng {username}!</p>
          <Button variant="primary" onClick={handleReset}>
            Đăng nhập lại
          </Button>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-4">
      <h2>Form Đăng Nhập</h2>
      
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Tên đăng nhập:</Form.Label>
          <Form.Control
            type="text"
            value={username}
            onChange={(e) => handleInputChange('username', e.target.value)}
            placeholder="Nhập tên đăng nhập"
            disabled={isLoading}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Mật khẩu:</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => handleInputChange('password', e.target.value)}
            placeholder="Nhập mật khẩu"
            disabled={isLoading}
          />
        </Form.Group>

        <div className="d-flex gap-2">
          <Button 
            type="submit" 
            variant="primary" 
            disabled={isLoading}
            className="flex-grow-1"
          >
            {isLoading ? 'Đang đăng nhập...' : 'Đăng nhập'}
          </Button>
          <Button 
            type="button" 
            variant="danger" 
            onClick={handleCancel}
            disabled={isLoading}
          >
            Hủy
          </Button>
          <Button 
            type="button" 
            variant="secondary" 
            onClick={handleReset}
            disabled={isLoading}
          >
            Reset
          </Button>
        </div>
      </Form>

      <div className="mt-3">
        <small className="text-muted">
          <strong>Thông tin đăng nhập mẫu:</strong><br />
          Tên đăng nhập: admin<br />
          Mật khẩu: 123456
        </small>
      </div>
    </Card>
  );
}

export default LoginForm;