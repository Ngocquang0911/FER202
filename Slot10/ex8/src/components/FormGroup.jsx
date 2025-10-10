import React from 'react';

export default function FormGroup({ label, children, helpText }) {
  return (
    <div className="form-group mb-3">
      <label className="form-label fw-bold">{label}</label>
      {children}
      {helpText && (
        <div className="form-text text-muted">
          {helpText}
        </div>
      )}
    </div>
  );
}
