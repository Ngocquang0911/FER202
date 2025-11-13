const { selectSuccessfulPayments } = require('./selectors');

describe('selectSuccessfulPayments', () => {
  it('should select only successful payments', () => {
    const state = {
      payments: {
        payments: [
          { id: 1, status: 'SUCCESS' },
          { id: 2, status: 'FAILED' },
          { id: 3, status: 'SUCCESS' }
        ]
      }
    };
    expect(selectSuccessfulPayments(state)).toEqual([
      { id: 1, status: 'SUCCESS' },
      { id: 3, status: 'SUCCESS' }
    ]);
  });
});
