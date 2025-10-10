import React from 'react';

export default function RadioGroup({ 
  label, 
  name, 
  value, 
  onChange, 
  options = [],
  helpText 
}) {
  return (
    <div className="form-group mb-3">
      <label className="form-label fw-bold">{label}</label>
      <div className="d-flex gap-3">
        {options.map((option) => (
          <div key={option.value} className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name={name}
              id={`${name}_${option.value}`}
              value={option.value}
              checked={value === option.value}
              onChange={onChange}
            />
            <label className="form-check-label" htmlFor={`${name}_${option.value}`}>
              {option.label}
            </label>
          </div>
        ))}
      </div>
      {helpText && (
        <div className="form-text text-muted">
          {helpText}
        </div>
      )}
    </div>
  );
}
