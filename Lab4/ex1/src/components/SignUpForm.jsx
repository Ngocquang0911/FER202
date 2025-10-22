import React, { useReducer } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { useToast } from './ToastComponent';
import { useModal } from './ModalComponent';

// Initial state
const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
  agreeToTerms: false,
  isLoading: false,
  errors: {},
  success: false
};

// Reducer
function signupReducer(state, action) {
  switch (action.type) {
    case 'SET_FIELD':
      return {
        ...state,
        [action.field]: action.value,
        errors: { ...state.errors, [action.field]: '' }
      };
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    case 'SET_ERRORS':
      return { ...state, errors: action.payload, isLoading: false };
    case 'SIGNUP_SUCCESS':
      return { ...state, isLoading: false, success: true, errors: {} };
    case 'RESET_FORM':
      return initialState;
    default:
      return state;
  }
}

function SignUpForm() {
  const [state, dispatch] = useReducer(signupReducer, initialState);
  const { 
    firstName, lastName, email, password, confirmPassword, agreeToTerms, 
    isLoading, errors, success 
  } = state;
  const { showToast } = useToast();
  const { showModal } = useModal();

  const handleInputChange = (field, value) => {
    dispatch({ type: 'SET_FIELD', field, value });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!firstName.trim()) newErrors.firstName = 'Vui lòng nhập tên';
    if (!lastName.trim()) newErrors.lastName = 'Vui lòng nhập họ';
    if (!email.trim()) {
      newErrors.email = 'Vui lòng nhập email';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email không hợp lệ';
    }
    if (!password) {
      newErrors.password = 'Vui lòng nhập mật khẩu';
    } else if (password.length < 6) {
      newErrors.password = 'Mật khẩu phải có ít nhất 6 ký tự';
    }
    if (!confirmPassword) {
      newErrors.confirmPassword = 'Vui lòng xác nhận mật khẩu';
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Mật khẩu xác nhận không khớp';
    }
    if (!agreeToTerms) {
      newErrors.agreeToTerms = 'Vui lòng đồng ý với điều khoản';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validationErrors = validateForm();
    
    if (Object.keys(validationErrors).length > 0) {
      dispatch({ type: 'SET_ERRORS', payload: validationErrors });
      showToast('Vui lòng kiểm tra lại thông tin đã nhập', 'error');
      return;
    }

    dispatch({ type: 'SET_LOADING', payload: true });

    // Simulate API call
    setTimeout(() => {
      dispatch({ type: 'SIGNUP_SUCCESS' });
      showToast(`Chào mừng ${firstName} ${lastName}! Đăng ký thành công!`, 'success');
    }, 2000);
  };

  const handleReset = () => {
    showModal({
      title: 'Xác nhận Reset',
      message: 'Bạn có chắc chắn muốn reset form đăng ký? Tất cả thông tin đã nhập sẽ bị mất.',
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
      message: 'Bạn có chắc chắn muốn hủy đăng ký? Tất cả thông tin đã nhập sẽ bị mất.',
      type: 'warning',
      confirmText: 'Hủy đăng ký',
      cancelText: 'Tiếp tục',
      onConfirm: () => {
        dispatch({ type: 'RESET_FORM' });
        showToast('Đã hủy đăng ký', 'info');
      }
    });
  };

  if (success) {
    return (
      <Card className="p-4">
        <div className="text-center">
          <h3 className="text-success">Đăng ký thành công! 🎉</h3>
          <p>Chào mừng {firstName} {lastName}!</p>
          <p>Email: {email}</p>
          <Button variant="primary" onClick={handleReset}>
            Đăng ký tài khoản mới
          </Button>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-4">
      <h2>Form Đăng Ký</h2>
      
      <Form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6">
            <Form.Group className="mb-3">
              <Form.Label>Tên:</Form.Label>
              <Form.Control
                type="text"
                value={firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                placeholder="Nhập tên"
                disabled={isLoading}
                isInvalid={!!errors.firstName}
              />
              <Form.Control.Feedback type="invalid">
                {errors.firstName}
              </Form.Control.Feedback>
            </Form.Group>
          </div>
          <div className="col-md-6">
            <Form.Group className="mb-3">
              <Form.Label>Họ:</Form.Label>
              <Form.Control
                type="text"
                value={lastName}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
                placeholder="Nhập họ"
                disabled={isLoading}
                isInvalid={!!errors.lastName}
              />
              <Form.Control.Feedback type="invalid">
                {errors.lastName}
              </Form.Control.Feedback>
            </Form.Group>
          </div>
        </div>

        <Form.Group className="mb-3">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            placeholder="Nhập email"
            disabled={isLoading}
            isInvalid={!!errors.email}
          />
          <Form.Control.Feedback type="invalid">
            {errors.email}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Mật khẩu:</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => handleInputChange('password', e.target.value)}
            placeholder="Nhập mật khẩu"
            disabled={isLoading}
            isInvalid={!!errors.password}
          />
          <Form.Control.Feedback type="invalid">
            {errors.password}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Xác nhận mật khẩu:</Form.Label>
          <Form.Control
            type="password"
            value={confirmPassword}
            onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
            placeholder="Nhập lại mật khẩu"
            disabled={isLoading}
            isInvalid={!!errors.confirmPassword}
          />
          <Form.Control.Feedback type="invalid">
            {errors.confirmPassword}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            checked={agreeToTerms}
            onChange={(e) => handleInputChange('agreeToTerms', e.target.checked)}
            label="Tôi đồng ý với điều khoản sử dụng"
            disabled={isLoading}
            isInvalid={!!errors.agreeToTerms}
          />
          {errors.agreeToTerms && (
            <div className="text-danger small mt-1">{errors.agreeToTerms}</div>
          )}
        </Form.Group>

        <div className="d-flex gap-2">
          <Button 
            type="submit" 
            variant="primary" 
            disabled={isLoading}
            className="flex-grow-1"
          >
            {isLoading ? 'Đang đăng ký...' : 'Đăng ký'}
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
    </Card>
  );
}

export default SignUpForm;