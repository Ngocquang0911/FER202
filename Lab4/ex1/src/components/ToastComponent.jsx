import React, { createContext, useContext, useReducer } from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';

// Toast Context
const ToastContext = createContext();

// Initial state - hỗ trợ nhiều toast
const initialState = {
  toasts: []
};

// Reducer
function toastReducer(state, action) {
  switch (action.type) {
    case 'ADD_TOAST':
      return {
        ...state,
        toasts: [...state.toasts, {
          id: Date.now() + Math.random(),
          message: action.payload.message,
          type: action.payload.type || 'success',
          show: true
        }]
      };
    case 'REMOVE_TOAST':
      return {
        ...state,
        toasts: state.toasts.filter(toast => toast.id !== action.payload)
      };
    case 'CLEAR_ALL':
      return {
        ...state,
        toasts: []
      };
    default:
      return state;
  }
}

// Provider Component
export function ToastProvider({ children }) {
  const [state, dispatch] = useReducer(toastReducer, initialState);

  const showToast = (message, type = 'success') => {
    dispatch({ type: 'ADD_TOAST', payload: { message, type } });
  };

  const removeToast = (id) => {
    dispatch({ type: 'REMOVE_TOAST', payload: id });
  };

  const clearAll = () => {
    dispatch({ type: 'CLEAR_ALL' });
  };

  return (
    <ToastContext.Provider value={{ showToast, removeToast, clearAll }}>
      {children}
      <ToastContainer position="top-end" className="p-3">
        {state.toasts.map(toast => (
          <Toast
            key={toast.id}
            show={toast.show}
            onClose={() => removeToast(toast.id)}
            delay={3000}
            autohide
            bg={getToastVariant(toast.type)}
          >
            <Toast.Header>
              <strong className="me-auto">
                {getToastIcon(toast.type)} {getToastTitle(toast.type)}
              </strong>
            </Toast.Header>
            <Toast.Body className="text-white">
              {toast.message}
            </Toast.Body>
          </Toast>
        ))}
      </ToastContainer>
    </ToastContext.Provider>
  );
}

// Hook
export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within ToastProvider');
  }
  return context;
};

// Helper functions
function getToastVariant(type) {
  const variants = {
    success: 'success',
    error: 'danger',
    warning: 'warning',
    info: 'info'
  };
  return variants[type] || 'success';
}

function getToastIcon(type) {
  const icons = {
    success: '✅',
    error: '❌',
    warning: '⚠️',
    info: 'ℹ️'
  };
  return icons[type] || '✅';
}

function getToastTitle(type) {
  const titles = {
    success: 'Thành công',
    error: 'Lỗi',
    warning: 'Cảnh báo',
    info: 'Thông tin'
  };
  return titles[type] || 'Thông báo';
}

export default ToastProvider;