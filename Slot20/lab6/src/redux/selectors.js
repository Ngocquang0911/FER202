// Selector for successful payments
const selectSuccessfulPayments = state =>
  state.payments.payments.filter(p => p.status === 'SUCCESS');

module.exports = {
  selectSuccessfulPayments
};
