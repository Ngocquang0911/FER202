import React from 'react';

export default function InputGroup({ prepend, children, append }) {
  return (
    <div className="input-group">
      {prepend && (
        <span className="input-group-text">
          {prepend}
        </span>
      )}
      {children}
      {append && (
        <span className="input-group-text">
          {append}
        </span>
      )}
    </div>
  );
}
