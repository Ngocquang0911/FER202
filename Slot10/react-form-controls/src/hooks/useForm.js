import { useState } from 'react';

// Custom hook for form handling
export const useForm = (initialValues, validationRules) => {
  const [formData, setFormData] = useState(initialValues);
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      if (Array.isArray(formData[name])) {
        // Handle multiple checkboxes
        setFormData(prev => ({
          ...prev,
          [name]: checked 
            ? [...prev[name], value]
            : prev[name].filter(item => item !== value)
        }));
      } else {
        // Handle single checkboxes
        setFormData(prev => ({
          ...prev,
          [name]: checked
        }));
      }
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    Object.keys(validationRules).forEach(field => {
      const rules = validationRules[field];
      const value = formData[field];

      // Required validation
      if (rules.required && (!value || (Array.isArray(value) && value.length === 0))) {
        newErrors[field] = rules.required;
      }

      // Email validation
      if (rules.email && value && !/\S+@\S+\.\S+/.test(value)) {
        newErrors[field] = rules.email;
      }

      // Min length validation
      if (rules.minLength && value && value.length < rules.minLength) {
        newErrors[field] = rules.minLength;
      }

      // Custom validation function
      if (rules.validate && typeof rules.validate === 'function') {
        const customError = rules.validate(value, formData);
        if (customError) {
          newErrors[field] = customError;
        }
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Reset form
  const resetForm = () => {
    setFormData(initialValues);
    setErrors({});
  };

  // Set field value programmatically
  const setFieldValue = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Set field error programmatically
  const setFieldError = (name, error) => {
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  return {
    formData,
    errors,
    handleInputChange,
    validateForm,
    resetForm,
    setFieldValue,
    setFieldError
  };
};

// Example usage:
/*
const validationRules = {
  firstName: {
    required: 'First name is required'
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
  }
};

const { formData, errors, handleInputChange, validateForm, resetForm } = useForm(
  initialValues,
  validationRules
);
*/
