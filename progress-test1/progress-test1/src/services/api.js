// api.js chứa các hàm gọi API tới JSON Server
import axios from 'axios';

// Cấu hình Base URL cho JSON Server (chạy cổng 3001)
const API = axios.create({
  baseURL: 'http://localhost:3001',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getUsers = async () => {
  try {
    const response = await API.get('/users');
    return response.data;
  } catch (error) {
    // Bubble up more detailed error info to aid debugging
    const status = error?.response?.status;
    const statusText = error?.response?.statusText;
    const message = error?.message;
    const detail = status ? `${status} ${statusText || ''}`.trim() : message || 'Unknown error';
    throw new Error(`Failed to fetch users: ${detail}`);
  }
};

// Payments APIs
export const getPayments = async (params = {}) => {
  try {
    const response = await API.get('/payments', { params });
    return response.data;
  } catch (error) {
    const status = error?.response?.status;
    const statusText = error?.response?.statusText;
    const message = error?.message;
    const detail = status ? `${status} ${statusText || ''}`.trim() : message || 'Unknown error';
    throw new Error(`Failed to fetch payments: ${detail}`);
  }
};

export const getPaymentById = async (id) => {
  try {
    const response = await API.get(`/payments/${id}`);
    return response.data;
  } catch (error) {
    const status = error?.response?.status;
    const statusText = error?.response?.statusText;
    const message = error?.message;
    const detail = status ? `${status} ${statusText || ''}`.trim() : message || 'Unknown error';
    throw new Error(`Failed to fetch payment: ${detail}`);
  }
};

export const createPayment = async (data) => {
  try {
    const response = await API.post('/payments', data);
    return response.data;
  } catch (error) {
    const status = error?.response?.status;
    const statusText = error?.response?.statusText;
    const message = error?.message;
    const detail = status ? `${status} ${statusText || ''}`.trim() : message || 'Unknown error';
    throw new Error(`Failed to create payment: ${detail}`);
  }
};

export const updatePayment = async (id, data) => {
  try {
    // Dùng PATCH để tránh ghi đè các field không gửi lên (ví dụ: userId)
    const response = await API.patch(`/payments/${id}`, data);
    return response.data;
  } catch (error) {
    const status = error?.response?.status;
    const statusText = error?.response?.statusText;
    const message = error?.message;
    const detail = status ? `${status} ${statusText || ''}`.trim() : message || 'Unknown error';
    throw new Error(`Failed to update payment: ${detail}`);
  }
};

export const deletePayment = async (id) => {
  try {
    await API.delete(`/payments/${id}`);
    return true;
  } catch (error) {
    const status = error?.response?.status;
    const statusText = error?.response?.statusText;
    const message = error?.message;
    const detail = status ? `${status} ${statusText || ''}`.trim() : message || 'Unknown error';
    throw new Error(`Failed to delete payment: ${detail}`);
  }
};

// Export default nếu cần dùng chung
export default API;
