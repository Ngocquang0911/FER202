// Constants for Toast types
export const TOAST_TYPES = {
  SUCCESS: 'success',
  ERROR: 'error',
  WARNING: 'warning',
  INFO: 'info'
};

// Constants for Modal types
export const MODAL_TYPES = {
  INFO: 'info',
  SUCCESS: 'success',
  ERROR: 'error',
  WARNING: 'warning'
};

// Toast configuration
export const TOAST_CONFIG = {
  SUCCESS: { icon: '✅', title: 'Thành công', variant: 'success' },
  ERROR: { icon: '❌', title: 'Lỗi', variant: 'danger' },
  WARNING: { icon: '⚠️', title: 'Cảnh báo', variant: 'warning' },
  INFO: { icon: 'ℹ️', title: 'Thông tin', variant: 'info' }
};

// Modal configuration
export const MODAL_CONFIG = {
  INFO: { icon: 'ℹ️', variant: 'primary' },
  SUCCESS: { icon: '✅', variant: 'success' },
  ERROR: { icon: '❌', variant: 'danger' },
  WARNING: { icon: '⚠️', variant: 'warning' }
};

// Form validation messages
export const VALIDATION_MESSAGES = {
  REQUIRED: 'Vui lòng nhập thông tin này',
  EMAIL_INVALID: 'Email không hợp lệ',
  PASSWORD_MIN_LENGTH: 'Mật khẩu phải có ít nhất 6 ký tự',
  PASSWORD_MISMATCH: 'Mật khẩu xác nhận không khớp',
  TERMS_REQUIRED: 'Vui lòng đồng ý với điều khoản'
};

// Demo credentials
export const DEMO_CREDENTIALS = {
  USERNAME: 'admin',
  PASSWORD: '123456'
};
