//Simple LoginForm component without React Bootstrap
import { useState } from 'react';

function SimpleLoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);

  //Xử lý thay đổi input
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    if (e.target.value.trim() === '') {
      setErrors((prev) => ({ ...prev, username: 'Username is required' }));
    } else {
      setErrors((prev) => {
        const { username, ...rest } = prev;
        return rest;
      });
    }
  }

  //Xử lý thay đổi password
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (e.target.value.trim() === '') {
      setErrors((prev) => ({ ...prev, password: 'Password is required' }));
    } else {
      setErrors((prev) => {
        const { password, ...rest } = prev;
        return rest;
      });
    }
  }

  //Xử lý submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};       
    if (username.trim() === '') {
      newErrors.username = 'Username is required';
    }
    if (password.trim() === '') {
      newErrors.password = 'Password is required';
    }
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setShowModal(true);
    }
  }

  //Đóng modal
  const handleCloseModal = () => {
    setShowModal(false);
    setUsername('');
    setPassword('');
    setErrors({});
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h3 className="text-center">Login</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>  
                <div className="mb-3">
                  <label className="form-label">Username</label>
                  <input 
                    type="text"
                    className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                    value={username}
                    onChange={handleUsernameChange} 
                    placeholder="Enter username"
                  />
                  {errors.username && (
                    <div className="invalid-feedback">
                      {errors.username}
                    </div>
                  )}
                </div>

                <div className="mb-3">  
                  <label className="form-label">Password</label>
                  <input 
                    type="password"
                    className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                    value={password}
                    onChange={handlePasswordChange}   
                    placeholder="Enter password"
                  />
                  {errors.password && (
                    <div className="invalid-feedback">
                      {errors.password}
                    </div>
                  )}
                </div>   
                <button type="submit" className="btn btn-primary w-100">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      {/* Modal hiển thị khi đăng nhập thành công */}
      {showModal && (
        <div className="modal show d-block" style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Login Successful</h5>
                <button type="button" className="btn-close" onClick={handleCloseModal}></button>
              </div>
              <div className="modal-body">
                <p>Welcome, {username}!</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SimpleLoginForm;
