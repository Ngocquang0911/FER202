import React from 'react';

export default function FormInput({ 
  label, 
  type = 'text', 
  name, 
  value, 
  onChange, 
  placeholder, 
  required = false,
  error,
  icon,
  showPasswordToggle = false,
  onTogglePassword,
  showPassword = false,
  options = [] // for select
}) {
  const hasError = !!error;
  
  return (
    <div className="mb-3">
      <label className="form-label" style={{ color: '#6c757d', fontWeight: '500' }}>
        {icon && <i className={`${icon} me-2`} style={{ color: '#6c757d' }}></i>}
        {label} {required && <span style={{ color: '#6c757d' }}>*</span>}
      </label>
      
      <div className="position-relative">
        {type === 'select' ? (
          <select
            className={`form-select ${hasError ? 'is-invalid border-danger' : ''}`}
            name={name}
            value={value}
            onChange={onChange}
          >
            <option value="">{placeholder}</option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        ) : (
          <>
            <input
              type={showPasswordToggle ? (showPassword ? 'text' : 'password') : type}
              className={`form-control ${hasError ? 'is-invalid border-danger' : ''}`}
              name={name}
              value={value}
              onChange={onChange}
              placeholder={placeholder}
              required={required}
            />
            
            {showPasswordToggle && (
              <button
                type="button"
                className="btn btn-link position-absolute end-0 top-50 translate-middle-y me-2"
                onClick={onTogglePassword}
                style={{ 
                  border: 'none', 
                  background: 'none', 
                  zIndex: 10,
                  padding: '4px 8px',
                  color: '#007bff'
                }}
              >
                <i 
                  className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`}
                  style={{ 
                    fontSize: '16px',
                    color: '#007bff'
                  }}
                ></i>
              </button>
            )}
            
            {hasError && !showPasswordToggle && (
              <div className="position-absolute end-0 top-50 translate-middle-y me-2" style={{ zIndex: 10 }}>
                <i className="bi bi-exclamation-circle-fill text-danger"></i>
              </div>
            )}
          </>
        )}
        
        {hasError && showPasswordToggle && (
          <div className="position-absolute end-0 top-50 translate-middle-y me-5" style={{ zIndex: 10 }}>
            <i className="bi bi-exclamation-circle-fill text-danger"></i>
          </div>
        )}
      </div>
      
      {hasError && (
        <div className="invalid-feedback d-block text-danger">
          {error}
        </div>
      )}
    </div>
  );
}