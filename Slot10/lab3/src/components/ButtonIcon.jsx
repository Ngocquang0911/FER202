import React from 'react';

export default function ButtonIcon({ 
  type = 'button',
  variant = 'primary', // primary, secondary, success, danger, warning, info
  size = 'md', // sm, md, lg
  icon,
  iconPosition = 'left', // left, right
  children,
  onClick,
  disabled = false,
  className = '',
  style = {}
}) {
  const buttonClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary', 
    success: 'btn-success',
    danger: 'btn-danger',
    warning: 'btn-warning',
    info: 'btn-info',
    outline: 'btn-outline-primary'
  };

  const sizeClasses = {
    sm: 'btn-sm',
    md: '',
    lg: 'btn-lg'
  };

  const baseClasses = `btn ${buttonClasses[variant]} ${sizeClasses[size]}`;
  const finalClassName = className ? `${baseClasses} ${className}` : baseClasses;

  return (
    <button
      type={type}
      className={finalClassName}
      onClick={onClick}
      disabled={disabled}
      style={style}
    >
      {icon && iconPosition === 'left' && (
        <i className={`${icon} ${children ? 'me-2' : ''}`}></i>
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <i className={`${icon} ${children ? 'ms-2' : ''}`}></i>
      )}
    </button>
  );
}
