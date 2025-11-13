const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');
const axios = require('axios');

// Async thunk: fetch users
const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get('/api/users');
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    loading: false,
    error: null
  },
  reducers: {
    toggleAdminStatus: (state, action) => {
      const user = state.users.find(u => u.id === action.payload);
      if (user) user.isAdmin = !user.isAdmin;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchUsers.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

const { toggleAdminStatus } = usersSlice.actions;
module.exports = {
  default: usersSlice.reducer,
  toggleAdminStatus,
  fetchUsers
};
