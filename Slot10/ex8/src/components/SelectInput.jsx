import React from 'react';

export default function SelectInput({ 
  label, 
  name, 
  value, 
  onChange, 
  options = [], 
  placeholder = "Chọn...",
  helpText 
}) {
  return (
    <div className="form-group mb-3">
      <label className="form-label fw-bold">{label}</label>
      <select
        className="form-select"
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
      {helpText && (
        <div className="form-text text-muted">
          {helpText}
        </div>
      )}
    </div>
  );
}
