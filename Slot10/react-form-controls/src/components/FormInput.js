import React from 'react';

// Reusable Form Input Component
const FormInput = ({
  label,
  type = 'text',
  name,
  value,
  onChange,
  placeholder,
  error,
  required = false,
  min,
  max,
  ...props
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>
        {label} {required && '*'}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={error ? 'error' : ''}
        min={min}
        max={max}
        {...props}
      />
      {error && <span className="error-message">{error}</span>}
    </div>
  );
};

// Reusable Select Component
export const FormSelect = ({
  label,
  name,
  value,
  onChange,
  options,
  error,
  required = false,
  placeholder = 'Select an option'
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>
        {label} {required && '*'}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className={error ? 'error' : ''}
      >
        <option value="">{placeholder}</option>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <span className="error-message">{error}</span>}
    </div>
  );
};

// Reusable Radio Group Component
export const FormRadioGroup = ({
  label,
  name,
  value,
  onChange,
  options,
  error,
  required = false
}) => {
  return (
    <div className="form-group">
      <label>{label} {required && '*'}</label>
      <div className="radio-group">
        {options.map(option => (
          <label key={option.value} className="radio-label">
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={onChange}
            />
            {option.label}
          </label>
        ))}
      </div>
      {error && <span className="error-message">{error}</span>}
    </div>
  );
};

// Reusable Checkbox Group Component
export const FormCheckboxGroup = ({
  label,
  name,
  values,
  onChange,
  options,
  error,
  required = false
}) => {
  return (
    <div className="form-group">
      <label>{label} {required && '*'}</label>
      <div className="checkbox-group">
        {options.map(option => (
          <label key={option.value} className="checkbox-label">
            <input
              type="checkbox"
              name={name}
              value={option.value}
              checked={values.includes(option.value)}
              onChange={onChange}
            />
            {option.label}
          </label>
        ))}
      </div>
      {error && <span className="error-message">{error}</span>}
    </div>
  );
};

export default FormInput;
