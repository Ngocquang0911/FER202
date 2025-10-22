import { useReducer } from 'react';

// Generic form reducer
export function useFormReducer(initialState) {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const setField = (field, value) => {
    dispatch({ type: 'SET_FIELD', field, value });
  };

  const setLoading = (loading) => {
    dispatch({ type: 'SET_LOADING', payload: loading });
  };

  const setErrors = (errors) => {
    dispatch({ type: 'SET_ERRORS', payload: errors });
  };

  const setSuccess = (success) => {
    dispatch({ type: 'SET_SUCCESS', payload: success });
  };

  const resetForm = () => {
    dispatch({ type: 'RESET_FORM' });
  };

  return {
    state,
    setField,
    setLoading,
    setErrors,
    setSuccess,
    resetForm
  };
}

// Form reducer
function formReducer(state, action) {
  switch (action.type) {
    case 'SET_FIELD':
      return {
        ...state,
        [action.field]: action.value,
        errors: { ...state.errors, [action.field]: '' }
      };
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    case 'SET_ERRORS':
      return { ...state, errors: action.payload, isLoading: false };
    case 'SET_SUCCESS':
      return { ...state, success: action.payload, isLoading: false };
    case 'RESET_FORM':
      return { ...state, ...action.payload || {} };
    default:
      return state;
  }
}

// Custom hook for form validation
export function useFormValidation() {
  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const validatePassword = (password, minLength = 6) => {
    return password && password.length >= minLength;
  };

  const validateRequired = (value) => {
    return value && value.trim().length > 0;
  };

  const validatePasswordMatch = (password, confirmPassword) => {
    return password === confirmPassword;
  };

  return {
    validateEmail,
    validatePassword,
    validateRequired,
    validatePasswordMatch
  };
}
