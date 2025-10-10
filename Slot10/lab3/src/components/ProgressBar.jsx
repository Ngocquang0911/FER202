import React from 'react';

export default function ProgressBar({ currentStep, totalSteps }) {
  const percentage = Math.round((currentStep / totalSteps) * 100);
  
  return (
    <div className="progress mb-4" style={{ height: '8px' }}>
      <div 
        className="progress-bar bg-primary" 
        role="progressbar" 
        style={{ width: `${percentage}%` }}
        aria-valuenow={percentage} 
        aria-valuemin="0" 
        aria-valuemax="100"
      >
      </div>
    </div>
  );
}