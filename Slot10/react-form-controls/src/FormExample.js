import React from 'react';
import { useForm } from './hooks/useForm';
import FormInput, { FormSelect, FormRadioGroup, FormCheckboxGroup } from './components/FormInput';

// Example of using custom hook and reusable components
const FormExample = () => {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    age: '',
    gender: '',
    country: '',
    interests: [],
    newsletter: false,
    terms: false
  };

  const validationRules = {
    firstName: {
      required: 'First name is required'
    },
    lastName: {
      required: 'Last name is required'
    },
    email: {
      required: 'Email is required',
      email: 'Please enter a valid email'
    },
    password: {
      required: 'Password is required',
      minLength: 'Password must be at least 6 characters'
    },
    confirmPassword: {
      required: 'Please confirm your password',
      validate: (value, formData) => 
        value !== formData.password ? 'Passwords do not match' : null
    },
    age: {
      required: 'Age is required',
      validate: (value) => {
        if (isNaN(value) || value < 1 || value > 120) {
          return 'Please enter a valid age';
        }
        return null;
      }
    },
    gender: {
      required: 'Please select a gender'
    },
    country: {
      required: 'Please select a country'
    },
    interests: {
      required: 'Please select at least one interest'
    },
    terms: {
      required: 'You must accept the terms and conditions'
    }
  };

  const { formData, errors, handleInputChange, validateForm, resetForm } = useForm(
    initialValues,
    validationRules
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log('Form submitted successfully:', formData);
      alert('Form submitted successfully! Check the console for data.');
      resetForm();
    } else {
      console.log('Form has errors:', errors);
    }
  };

  const countryOptions = [
    { value: 'us', label: 'United States' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'canada', label: 'Canada' },
    { value: 'australia', label: 'Australia' },
    { value: 'germany', label: 'Germany' },
    { value: 'france', label: 'France' },
    { value: 'japan', label: 'Japan' },
    { value: 'india', label: 'India' }
  ];

  const genderOptions = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'other', label: 'Other' }
  ];

  const interestOptions = [
    { value: 'technology', label: 'Technology' },
    { value: 'sports', label: 'Sports' },
    { value: 'music', label: 'Music' },
    { value: 'travel', label: 'Travel' },
    { value: 'cooking', label: 'Cooking' }
  ];

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        <h2>Reusable Components Example</h2>
        
        <FormInput
          label="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          error={errors.firstName}
          required
          placeholder="Enter your first name"
        />

        <FormInput
          label="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
          error={errors.lastName}
          required
          placeholder="Enter your last name"
        />

        <FormInput
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          error={errors.email}
          required
          placeholder="Enter your email"
        />

        <FormInput
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          error={errors.password}
          required
          placeholder="Enter your password"
        />

        <FormInput
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleInputChange}
          error={errors.confirmPassword}
          required
          placeholder="Confirm your password"
        />

        <FormInput
          label="Age"
          type="number"
          name="age"
          value={formData.age}
          onChange={handleInputChange}
          error={errors.age}
          required
          placeholder="Enter your age"
          min="1"
          max="120"
        />

        <FormRadioGroup
          label="Gender"
          name="gender"
          value={formData.gender}
          onChange={handleInputChange}
          options={genderOptions}
          error={errors.gender}
          required
        />

        <FormSelect
          label="Country"
          name="country"
          value={formData.country}
          onChange={handleInputChange}
          options={countryOptions}
          error={errors.country}
          required
          placeholder="Select a country"
        />

        <FormCheckboxGroup
          label="Interests"
          name="interests"
          values={formData.interests}
          onChange={handleInputChange}
          options={interestOptions}
          error={errors.interests}
          required
        />

        <div className="form-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              name="newsletter"
              checked={formData.newsletter}
              onChange={handleInputChange}
            />
            Subscribe to our newsletter
          </label>
        </div>

        <div className="form-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              name="terms"
              checked={formData.terms}
              onChange={handleInputChange}
              className={errors.terms ? 'error' : ''}
            />
            I agree to the terms and conditions *
          </label>
          {errors.terms && <span className="error-message">{errors.terms}</span>}
        </div>

        <button type="submit" className="submit-btn">
          Register
        </button>
      </form>

      <div className="form-data-display">
        <h3>Current Form Data:</h3>
        <pre>{JSON.stringify(formData, null, 2)}</pre>
      </div>
    </div>
  );
};

export default FormExample;
