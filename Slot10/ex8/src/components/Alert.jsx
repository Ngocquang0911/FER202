import React from 'react';

export default function Alert({ type = 'info', message, onClose }) {
  const alertClasses = {
    success: 'alert-success',
    danger: 'alert-danger',
    warning: 'alert-warning',
    info: 'alert-info'
  };

  return (
    <div className={`alert ${alertClasses[type]} alert-dismissible fade show`} role="alert">
      <i className="bi bi-info-circle-fill me-2"></i>
      {message}
      {onClose && (
        <button 
          type="button" 
          className="btn-close" 
          onClick={onClose}
          aria-label="Close"
        ></button>
      )}
    </div>
  );
}
