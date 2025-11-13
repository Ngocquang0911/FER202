const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');
const axios = require('axios');

// Async thunk: create payment
const createPayment = createAsyncThunk(
  'payments/createPayment',
  async (paymentData, { rejectWithValue }) => {
    try {
      const res = await axios.post('/api/payments', paymentData);
      return res.data;
    } catch (err) {
      if (err.response && err.response.status === 402) {
        return rejectWithValue('Tài khoản không đủ tiền');
      }
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

const paymentsSlice = createSlice({
  name: 'payments',
  initialState: {
    payments: [],
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(createPayment.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createPayment.fulfilled, (state, action) => {
        state.loading = false;
        state.payments.push(action.payload);
      })
      .addCase(createPayment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

module.exports = {
  default: paymentsSlice.reducer,
  createPayment
};
