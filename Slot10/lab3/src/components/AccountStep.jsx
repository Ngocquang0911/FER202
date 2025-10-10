import React, { useState } from 'react';
import FormInput from './FormInput';

export default function AccountStep({ formData, onChange, errors }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const secretQuestions = [
    { value: 'pet', label: "What is your first pet's name?" },
    { value: 'school', label: 'What was the name of your first school?' },
    { value: 'mother', label: "What is your mother's maiden name?" },
    { value: 'city', label: 'What city were you born in?' },
    { value: 'teacher', label: 'Who was your favorite teacher?' }
  ];

  const togglePassword = () => setShowPassword(!showPassword);
  const toggleConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

  return (
    <div>
      <h4 className="mb-4">
        <i className="bi bi-shield-lock-fill text-primary me-2"></i>
        Account Information
      </h4>
      
      <FormInput
        label="Username"
        name="username"
        value={formData.username}
        onChange={onChange}
        placeholder="Enter your username"
        required={true}
        error={errors.username}
      />
      
      <FormInput
        label="Password"
        type="password"
        name="password"
        value={formData.password}
        onChange={onChange}
        placeholder="Enter your password"
        required={true}
        error={errors.password}
        showPasswordToggle={true}
        onTogglePassword={togglePassword}
        showPassword={showPassword}
      />
      
      <FormInput
        label="Confirm Password"
        type="password"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={onChange}
        placeholder="Confirm your password"
        required={true}
        error={errors.confirmPassword}
        showPasswordToggle={true}
        onTogglePassword={toggleConfirmPassword}
        showPassword={showConfirmPassword}
      />
      
      <FormInput
        label="Secret Question"
        type="select"
        name="secretQuestion"
        value={formData.secretQuestion}
        onChange={onChange}
        placeholder="Select a secret question"
        required={true}
        error={errors.secretQuestion}
        icon="bi bi-question-circle"
        options={secretQuestions}
      />
      
      <FormInput
        label="Answer"
        name="secretAnswer"
        value={formData.secretAnswer}
        onChange={onChange}
        placeholder="Enter your answer"
        required={true}
        error={errors.secretAnswer}
        icon="bi bi-key"
      />
    </div>
  );
}