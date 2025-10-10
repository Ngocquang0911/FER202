import React, { useState } from 'react';
import ProgressBar from '../components/ProgressBar';
import StepTabs from '../components/StepTabs';
import AboutStep from '../components/AboutStep';
import AccountStep from '../components/AccountStep';
import AddressStep from '../components/AddressStep';
import ButtonIcon from '../components/ButtonIcon';

export default function ProfileWizard() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // About Step - Tất cả trống để người dùng tự điền
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    age: '',
    avatar: '',
    
    // Account Step - Tất cả trống để người dùng tự điền
    username: '',
    password: '',
    confirmPassword: '',
    secretQuestion: '',
    secretAnswer: '',
    
    // Address Step - Tất cả trống để người dùng tự điền
    street: '',
    city: '',
    state: '',
    zipCode: '',
    country: ''
  });

  const [errors, setErrors] = useState({});

  const steps = [
    { id: 1, label: 'About' },
    { id: 2, label: 'Account' },
    { id: 3, label: 'Address' }
  ];

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'file' ? files[0]?.name || '' : value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateStep = (step) => {
    const newErrors = {};

    if (step === 1) {
      if (!formData.firstName.trim()) newErrors.firstName = 'First Name is required';
      if (!formData.lastName.trim()) newErrors.lastName = 'Last Name is required';
      if (!formData.email.trim()) newErrors.email = 'Email is required';
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
      if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
      if (!formData.age.trim()) newErrors.age = 'Age is required';
    }

    if (step === 2) {
      if (!formData.username.trim()) newErrors.username = 'Username is required';
      if (!formData.password.trim()) newErrors.password = 'Password is required';
      if (!formData.confirmPassword.trim()) newErrors.confirmPassword = 'Confirm Password is required';
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
      if (!formData.secretQuestion.trim()) newErrors.secretQuestion = 'Secret Question is required';
      if (!formData.secretAnswer.trim()) newErrors.secretAnswer = 'Answer is required';
    }

    if (step === 3) {
      if (!formData.street.trim()) newErrors.street = 'Street is required';
      if (!formData.city.trim()) newErrors.city = 'City is required';
      if (!formData.state.trim()) newErrors.state = 'State is required';
      if (!formData.zipCode.trim()) newErrors.zipCode = 'Zip code is required';
      if (!formData.country.trim()) newErrors.country = 'Country is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      if (currentStep < steps.length) {
        setCurrentStep(currentStep + 1);
      }
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleFinish = () => {
    if (validateStep(currentStep)) {
      alert('Profile created successfully!');
      console.log('Form Data:', formData);
    }
  };

  const handleStepClick = (stepNumber) => {
    if (stepNumber < currentStep || validateStep(stepNumber - 1)) {
      setCurrentStep(stepNumber);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <AboutStep formData={formData} onChange={handleInputChange} errors={errors} />;
      case 2:
        return <AccountStep formData={formData} onChange={handleInputChange} errors={errors} />;
      case 3:
        return <AddressStep formData={formData} onChange={handleInputChange} errors={errors} />;
      default:
        return null;
    }
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="card shadow-lg" style={{ width: '600px', maxWidth: '90vw' }}>
        {/* Header */}
        <div className="card-header d-flex justify-content-between align-items-center bg-white border-0">
          <h3 className="mb-0">
            <i className="bi bi-person-circle text-primary me-2"></i>
            Build Your Profile
          </h3>
          <button 
            type="button" 
            className="btn-close" 
            aria-label="Close"
          ></button>
        </div>

        <div className="card-body p-4">
          {/* Progress Bar */}
          <div className="mb-4">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <span className="text-muted">Progress</span>
              <span className="fw-bold text-primary">{Math.round((currentStep / steps.length) * 100)}%</span>
            </div>
            <ProgressBar currentStep={currentStep} totalSteps={steps.length} />
          </div>

          {/* Step Tabs */}
          <StepTabs 
            steps={steps} 
            currentStep={currentStep} 
            onStepClick={handleStepClick} 
          />

          {/* Step Content */}
          <div className="tab-content">
            {renderStep()}
          </div>

          {/* Navigation Buttons */}
          <div className="d-flex justify-content-between mt-4">
            <ButtonIcon
              type="button"
              variant={currentStep === 1 ? 'secondary' : 'outline'}
              icon="bi bi-arrow-left"
              iconPosition="left"
              onClick={handlePrevious}
              disabled={currentStep === 1}
            >
              Previous
            </ButtonIcon>
            
            {currentStep === steps.length ? (
              <ButtonIcon
                type="button"
                variant="success"
                icon="bi bi-check-circle"
                iconPosition="left"
                onClick={handleFinish}
              >
                Finish
              </ButtonIcon>
            ) : (
              <ButtonIcon
                type="button"
                variant="primary"
                icon="bi bi-arrow-right"
                iconPosition="right"
                onClick={handleNext}
              >
                Next
              </ButtonIcon>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}