import React, { createContext, useContext, useReducer } from 'react';
import { Modal, Button } from 'react-bootstrap';

// Modal Context
const ModalContext = createContext();

// Initial state
const initialState = {
  show: false,
  title: '',
  message: '',
  type: 'info',
  confirmText: 'Xác nhận',
  cancelText: 'Hủy',
  onConfirm: null,
  onCancel: null
};

// Reducer
function modalReducer(state, action) {
  switch (action.type) {
    case 'SHOW_MODAL':
      return {
        ...state,
        show: true,
        title: action.payload.title || '',
        message: action.payload.message || '',
        type: action.payload.type || 'info',
        confirmText: action.payload.confirmText || 'Xác nhận',
        cancelText: action.payload.cancelText || 'Hủy',
        onConfirm: action.payload.onConfirm || null,
        onCancel: action.payload.onCancel || null
      };
    case 'HIDE_MODAL':
      return {
        ...state,
        show: false,
        onConfirm: null,
        onCancel: null
      };
    default:
      return state;
  }
}

// Provider Component
export function ModalProvider({ children }) {
  const [state, dispatch] = useReducer(modalReducer, initialState);

  const showModal = (config) => {
    dispatch({ type: 'SHOW_MODAL', payload: config });
  };

  const hideModal = () => {
    dispatch({ type: 'HIDE_MODAL' });
  };

  const handleConfirm = () => {
    if (state.onConfirm) {
      state.onConfirm();
    }
    hideModal();
  };

  const handleCancel = () => {
    if (state.onCancel) {
      state.onCancel();
    }
    hideModal();
  };

  return (
    <ModalContext.Provider value={{ showModal, hideModal }}>
      {children}
      <Modal show={state.show} onHide={hideModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            {getModalIcon(state.type)} {state.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {state.message}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>
            {state.cancelText}
          </Button>
          <Button variant={getModalVariant(state.type)} onClick={handleConfirm}>
            {state.confirmText}
          </Button>
        </Modal.Footer>
      </Modal>
    </ModalContext.Provider>
  );
}

// Hook
export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within ModalProvider');
  }
  return context;
};

// Helper functions
function getModalVariant(type) {
  const variants = {
    success: 'success',
    error: 'danger',
    warning: 'warning',
    info: 'primary'
  };
  return variants[type] || 'primary';
}

function getModalIcon(type) {
  const icons = {
    success: '✅',
    error: '❌',
    warning: '⚠️',
    info: 'ℹ️'
  };
  return icons[type] || 'ℹ️';
}

export default ModalProvider;