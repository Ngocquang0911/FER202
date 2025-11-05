import React from 'react';
import { ThemeProvider } from "./contexts/ThemeContext";
import { AuthProvider } from "./contexts/AuthContext";
import Navbar from "./components/Navbar";
import AppRoute from "./AppRoute";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <div style={{ minHeight: '100vh', transition: 'all 0.3s ease' }}>
          <Navbar />
          <AppRoute />
        </div>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
