import React, { createContext, useContext, useEffect, useMemo, useReducer } from 'react';
import { getPayments, getPaymentById, createPayment, updatePayment, deletePayment } from '../services/api';
import { useAuth } from './AuthContext.jsx';

const PaymentContext = createContext();

const initialState = {
  payments: [],
  loading: false,
  error: null,
  filter: {
    query: '',
    semester: '',
    course: '',
  },
  sort: 'date_desc',
};

function paymentReducer(state, action) {
  switch (action.type) {
    case 'FETCH_START':
      return { ...state, loading: true, error: null };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, payments: action.payload };
    case 'FETCH_FAILURE':
      return { ...state, loading: false, error: action.payload };
    case 'ADD_SUCCESS':
      return { ...state, payments: [...state.payments, action.payload] };
    case 'UPDATE_SUCCESS':
      return {
        ...state,
        payments: state.payments.map((p) => (String(p.id) === String(action.payload.id) ? action.payload : p)),
      };
    case 'DELETE_SUCCESS':
      return { ...state, payments: state.payments.filter((p) => String(p.id) !== String(action.payload)) };
    case 'SET_FILTER':
      return { ...state, filter: { ...state.filter, ...action.payload } };
    case 'SET_SORT':
      return { ...state, sort: action.payload };
    default:
      return state;
  }
}

export const PaymentProvider = ({ children }) => {
  const { user } = useAuth();
  const [state, dispatch] = useReducer(paymentReducer, initialState);

  const fetchPayments = async () => {
    if (!user?.id) {
      dispatch({ type: 'FETCH_SUCCESS', payload: [] });
      return;
    }
    dispatch({ type: 'FETCH_START' });
    try {
      const data = await getPayments({ userId: user.id });
      dispatch({ type: 'FETCH_SUCCESS', payload: data });
    } catch (err) {
      dispatch({ type: 'FETCH_FAILURE', payload: err.message || 'Failed to fetch payments' });
    }
  };

  const addPayment = async (payload) => {
    try {
      const created = await createPayment({
        ...payload,
        // Bảo đảm mỗi payment gắn đúng user hiện tại
        userId: String(user?.id || payload.userId),
      });
      dispatch({ type: 'ADD_SUCCESS', payload: created });
      return { success: true, data: created };
    } catch (err) {
      return { success: false, error: err.message };
    }
  };

  const updatePaymentById = async (id, payload) => {
    try {
      // Bảo đảm không mất userId sau khi cập nhật
      const updated = await updatePayment(id, {
        ...payload,
        userId: String(user?.id || payload.userId),
      });
      dispatch({ type: 'UPDATE_SUCCESS', payload: updated });
      return { success: true, data: updated };
    } catch (err) {
      return { success: false, error: err.message };
    }
  };

  const deletePaymentById = async (id) => {
    try {
      await deletePayment(id);
      dispatch({ type: 'DELETE_SUCCESS', payload: id });
      return { success: true };
    } catch (err) {
      return { success: false, error: err.message };
    }
  };

  const setFilter = (payload) => dispatch({ type: 'SET_FILTER', payload });
  const setSort = (value) => dispatch({ type: 'SET_SORT', payload: value });

  useEffect(() => {
    fetchPayments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.id]);

  const displayedPayments = useMemo(() => {
    let list = [...state.payments];
    // Lọc cứng theo user hiện tại để tránh hiển thị chéo giữa các user
    if (user?.id) {
      list = list.filter((p) => String(p.userId) === String(user.id));
    }
    const { query, semester, course } = state.filter;

    if (query) {
      const q = query.toLowerCase();
      list = list.filter(
        (p) => p.semester?.toLowerCase().includes(q) || p.courseName?.toLowerCase().includes(q)
      );
    }

    if (semester) {
      list = list.filter((p) => p.semester === semester);
    }

    if (course) {
      list = list.filter((p) => p.courseName === course);
    }

    switch (state.sort) {
      case 'course_asc':
        list.sort((a, b) => a.courseName.localeCompare(b.courseName));
        break;
      case 'course_desc':
        list.sort((a, b) => b.courseName.localeCompare(a.courseName));
        break;
      case 'date_asc':
        list.sort((a, b) => new Date(a.date) - new Date(b.date));
        break;
      case 'date_desc':
        list.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      case 'amount_asc':
        list.sort((a, b) => (a.amount ?? 0) - (b.amount ?? 0));
        break;
      case 'amount_desc':
      default:
        list.sort((a, b) => (b.amount ?? 0) - (a.amount ?? 0));
        break;
    }

    return list;
  }, [state.payments, state.filter, state.sort, user?.id]);

  const totalAmount = useMemo(() => {
    return displayedPayments.reduce((sum, p) => sum + (Number(p.amount) || 0), 0);
  }, [displayedPayments]);

  const value = {
    payments: state.payments,
    displayedPayments,
    totalAmount,
    loading: state.loading,
    error: state.error,
    filter: state.filter,
    sort: state.sort,

    fetchPayments,
    addPayment,
    updatePayment: updatePaymentById,
    deletePayment: deletePaymentById,
    setFilter,
    setSort,
  };

  return <PaymentContext.Provider value={value}>{children}</PaymentContext.Provider>;
};

export const usePayment = () => useContext(PaymentContext);
