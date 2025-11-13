
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
// HomePage will be created later
const HomePage = React.lazy(() => import('./pages/HomePage'));

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/login" element={<LoginPage setUser={setUser} />} />
          <Route path="/home" element={user ? <HomePage user={user} /> : <Navigate to="/login" />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </React.Suspense>
    </Router>
  );
}

export default App;
