import React from 'react';

export default function StepTabs({ steps, currentStep, onStepClick }) {
  return (
    <ul className="nav nav-tabs mb-4" id="myTab" role="tablist">
      {steps.map((step, index) => (
        <li className="nav-item" role="presentation" key={step.id}>
          <button
            className={`nav-link ${currentStep === index + 1 ? 'active' : ''}`}
            onClick={() => onStepClick(index + 1)}
            style={{
              borderBottom: currentStep === index + 1 ? '3px solid #007bff' : 'none',
              color: currentStep === index + 1 ? '#007bff' : '#6c757d',
              fontWeight: currentStep === index + 1 ? 'bold' : 'normal'
            }}
          >
            {step.label}
          </button>
        </li>
      ))}
    </ul>
  );
}