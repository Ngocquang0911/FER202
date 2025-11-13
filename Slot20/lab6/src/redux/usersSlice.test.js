const usersReducer = require('./usersSlice').default;
const { toggleAdminStatus, fetchUsers } = require('./usersSlice');
const { selectSuccessfulPayments } = require('./selectors');
const axios = require('axios');
jest.mock('axios');

// Minimal custom mock store and thunk middleware for async thunk test
function createMockStore(initialState) {
  let state = initialState;
  const actions = [];
  return {
    getState: () => state,
    dispatch: async (action) => {
      if (typeof action === 'function') {
        // Simple thunk middleware
        return await action((a) => actions.push(a), () => state);
      } else {
        actions.push(action);
      }
    },
    getActions: () => actions
  };
}

describe('usersSlice reducer', () => {
  it('should toggle admin status', () => {
    const initialState = {
      users: [{ id: 1, isAdmin: false }],
      loading: false,
      error: null
    };
    const nextState = usersReducer(initialState, toggleAdminStatus(1));
    expect(nextState.users[0].isAdmin).toBe(true);
  });
});

describe('selectSuccessfulPayments', () => {
  it('should select only successful payments', () => {
    const state = {
      payments: {
        payments: [
          { id: 1, status: 'SUCCESS' },
          { id: 2, status: 'FAILED' }
        ]
      }
    };
    expect(selectSuccessfulPayments(state)).toEqual([{ id: 1, status: 'SUCCESS' }]);
  });
});

describe('fetchUsers thunk', () => {
  it('dispatches fulfilled when API succeeds', async () => {
    axios.get.mockResolvedValue({ data: [{ id: 1, name: 'A' }] });
    const store = createMockStore({ users: { users: [], loading: false, error: null } });
    await store.dispatch(fetchUsers());
    const actions = store.getActions();
    expect(actions[0].type).toContain('pending');
    expect(actions[1].type).toContain('fulfilled');
    expect(actions[1].payload).toEqual([{ id: 1, name: 'A' }]);
  });
});
