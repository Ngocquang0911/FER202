import React from 'react';
import Navbar from "./components/Navbar";
import AppRoute from "./AppRoute";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <Navbar />
      <AppRoute />
    </div>
  );
}

export default App;
