import React, { useState } from 'react';

function SimpleRegistrationForm() {
  // State cho form data (object)
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(false);

  // Validation functions
  const validateUsername = (username) => {
    if (username.trim().length < 3) {
      return 'Username phải có ít nhất 3 ký tự';
    }
    if (!/^[a-zA-Z0-9._]+$/.test(username)) {
      return 'Username chỉ được chứa chữ, số, _ hoặc .';
    }
    if (username !== username.trim()) {
      return 'Username không được có khoảng trắng đầu/cuối';
    }
    return '';
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return 'Email không đúng định dạng';
    }
    return '';
  };

  const validatePassword = (password) => {
    if (password.length < 8) {
      return 'Password phải có ít nhất 8 ký tự';
    }
    if (!/(?=.*[a-z])/.test(password)) {
      return 'Password phải có ít nhất 1 chữ thường';
    }
    if (!/(?=.*[A-Z])/.test(password)) {
      return 'Password phải có ít nhất 1 chữ hoa';
    }
    if (!/(?=.*\d)/.test(password)) {
      return 'Password phải có ít nhất 1 chữ số';
    }
    if (!/(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])/.test(password)) {
      return 'Password phải có ít nhất 1 ký tự đặc biệt';
    }
    return '';
  };

  const validateConfirmPassword = (password, confirmPassword) => {
    if (password !== confirmPassword) {
      return 'Confirm password không khớp';
    }
    return '';
  };

  // Xử lý thay đổi input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear error khi user đang nhập
    if (errors[name]) {
      setErrors(prev => {
        const { [name]: removed, ...rest } = prev;
        return rest;
      });
    }
  };

  // Kiểm tra form có hợp lệ không
  const isFormValid = () => {
    const usernameError = validateUsername(formData.username);
    const emailError = validateEmail(formData.email);
    const passwordError = validatePassword(formData.password);
    const confirmPasswordError = validateConfirmPassword(formData.password, formData.confirmPassword);

    return !usernameError && !emailError && !passwordError && !confirmPasswordError;
  };

  // Xử lý submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = {};
    
    // Validate từng trường
    const usernameError = validateUsername(formData.username);
    if (usernameError) newErrors.username = usernameError;

    const emailError = validateEmail(formData.email);
    if (emailError) newErrors.email = emailError;

    const passwordError = validatePassword(formData.password);
    if (passwordError) newErrors.password = passwordError;

    const confirmPasswordError = validateConfirmPassword(formData.password, formData.confirmPassword);
    if (confirmPasswordError) newErrors.confirmPassword = confirmPasswordError;

    setErrors(newErrors);

    // Nếu không có lỗi, hiển thị toast và modal
    if (Object.keys(newErrors).length === 0) {
      setShowToast(true);
      setShowModal(true);
    }
  };

  // Xử lý cancel - reset form
  const handleCancel = () => {
    setFormData({
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
    setErrors({});
  };

  // Đóng modal
  const handleCloseModal = () => {
    setShowModal(false);
    handleCancel(); // Reset form khi đóng modal
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h3 className="text-center">Form Đăng Ký Tài Khoản</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Username</label>
                  <input
                    type="text"
                    name="username"
                    className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Nhập username (≥3 ký tự, chỉ chữ, số, _, .)"
                  />
                  {errors.username && (
                    <div className="invalid-feedback">
                      {errors.username}
                    </div>
                  )}
                </div>

                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Nhập email"
                  />
                  {errors.email && (
                    <div className="invalid-feedback">
                      {errors.email}
                    </div>
                  )}
                </div>

                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    name="password"
                    className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Nhập password (≥8 ký tự, có chữ hoa, thường, số, ký tự đặc biệt)"
                  />
                  {errors.password && (
                    <div className="invalid-feedback">
                      {errors.password}
                    </div>
                  )}
                </div>

                <div className="mb-3">
                  <label className="form-label">Confirm Password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Nhập lại password"
                  />
                  {errors.confirmPassword && (
                    <div className="invalid-feedback">
                      {errors.confirmPassword}
                    </div>
                  )}
                </div>

                <div className="d-flex gap-2">
                  <button 
                    type="submit" 
                    className="btn btn-primary flex-fill"
                    disabled={!isFormValid()}
                  >
                    Submit
                  </button>
                  <button 
                    type="button" 
                    className="btn btn-secondary flex-fill"
                    onClick={handleCancel}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Toast thông báo thành công */}
      {showToast && (
        <div className="toast-container position-fixed top-0 end-0 p-3">
          <div className="toast show" role="alert">
            <div className="toast-header">
              <strong className="me-auto">Thành công!</strong>
              <button 
                type="button" 
                className="btn-close" 
                onClick={() => setShowToast(false)}
              ></button>
            </div>
            <div className="toast-body">
              Submitted successfully!
            </div>
          </div>
        </div>
      )}

      {/* Modal hiển thị thông tin đã submit */}
      {showModal && (
        <div className="modal show d-block" style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Đăng ký thành công!</h5>
                <button type="button" className="btn-close" onClick={handleCloseModal}></button>
              </div>
              <div className="modal-body">
                <div className="card">
                  <div className="card-header">
                    <h5>Thông tin tài khoản</h5>
                  </div>
                  <div className="card-body">
                    <p><strong>Username:</strong> {formData.username}</p>
                    <p><strong>Email:</strong> {formData.email}</p>
                    <p><strong>Password:</strong> {formData.password}</p>
                    <p className="text-success mt-3">
                      <strong>Chúc mừng! Tài khoản của bạn đã được tạo thành công!</strong>
                    </p>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-success" onClick={handleCloseModal}>
                  Đóng
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SimpleRegistrationForm;
