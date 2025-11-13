import axios from 'axios';

const API_URL = 'http://localhost:3001';

export const getExpenses = (userId) =>
  axios.get(`${API_URL}/expenses`, { params: { userId } });

export const addExpense = (expense) =>
  axios.post(`${API_URL}/expenses`, expense);


export const updateExpense = (id, expense) =>
  axios.patch(`${API_URL}/expenses/${Number(id)}`, expense);

export function deleteExpense(id) {
  return axios.delete(`${API_URL}/expenses/${Number(id)}`);
}

export const getCategories = (userId) =>
  axios.get(`${API_URL}/expenses`, { params: { userId } })
    .then(res => Array.from(new Set(res.data.map(e => e.category))).filter(Boolean));
