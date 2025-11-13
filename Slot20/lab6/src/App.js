import React from 'react';
import { CreatePaymentForm, AllPayments, SuccessfulPayments, RefundPaymentForm } from './components/PaymentsDemo';

function App() {
  return (
    <div className="App" style={{ background: '#f5f6fa', minHeight: '100vh', padding: 32 }}>
      <div style={{ maxWidth: 600, margin: '0 auto' }}>
        <CreatePaymentForm />
        <AllPayments />
        <SuccessfulPayments />
        <RefundPaymentForm />
      </div>
    </div>
  );
}

export default App;
