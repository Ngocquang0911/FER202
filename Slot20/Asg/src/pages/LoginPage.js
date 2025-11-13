import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
import axios from 'axios';

const LoginPage = ({ setUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [pwError, setPwError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setPwError('');
    if (!username || !password) {
      setError('Username and password are required');
      return;
    }
    if (password.length < 6) {
      setPwError('Password must be at least 6 characters');
      return;
    }
    try {
      const res = await axios.get('http://localhost:3001/users', {
        params: { username, password }
      });
      if (res.data.length > 0) {
        setUser(res.data[0]);
        navigate('/home');
      } else {
        setError('Invalid username or password');
      }
    } catch (err) {
      setError('Server error');
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setUsername('');
    setPassword('');
    setError('');
    setPwError('');
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="input-row">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            autoComplete="username"
          />
        </div>
        <div className="input-row">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            autoComplete="current-password"
            className={pwError ? 'input-error' : ''}
          />
          {pwError && (
            <div className="error-inline">
              <span style={{fontWeight:'bold',fontSize:'1.1em'}}>!</span> {pwError}
            </div>
          )}
          <div className="input-hint">(at least 6 characters)</div>
        </div>
        <div style={{display:'flex',justifyContent:'center',gap:'8px'}}>
          <button type="submit">Login</button>
          <button className="cancel-btn" onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
