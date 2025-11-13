const { createPayment } = require('./paymentsSlice');
const { selectSuccessfulPayments } = require('./selectors');

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

describe('paymentsSlice', () => {
  it('should add a payment on fulfilled', () => {
    const paymentsReducer = require('./paymentsSlice').default;
    const initialState = { payments: [], loading: false, error: null };
    const action = { type: 'payments/createPayment/fulfilled', payload: { id: 3, method: 'Bank', amount: 10000, status: 'SUCCESS' } };
    const nextState = paymentsReducer(initialState, action);
    expect(nextState.payments).toHaveLength(1);
    expect(nextState.payments[0]).toMatchObject({ id: 3, method: 'Bank', amount: 10000, status: 'SUCCESS' });
  });

  it('should select only successful payments', () => {
    const state = {
      payments: {
        payments: [
          { id: 3, method: 'Bank', amount: 10000, status: 'SUCCESS' },
          { id: 4, method: 'Card', amount: 5000, status: 'FAILED' }
        ]
      }
    };
    const result = selectSuccessfulPayments(state);
    expect(result).toEqual([
      { id: 3, method: 'Bank', amount: 10000, status: 'SUCCESS' }
    ]);
  });
});
