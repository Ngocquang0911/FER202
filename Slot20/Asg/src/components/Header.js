import React from 'react';
import './Header.css';

const Header = ({ user, onLogout }) => {
  return (
    <header className="header-bar d-flex align-items-center justify-content-between px-4 py-2 bg-white border-bottom">
      <div className="d-flex align-items-center">
        {/* Logo removed for missing file. Add your logo here if available. */}
        <span className="app-title">PersonalBudget</span>
      </div>
      <div className="d-flex align-items-center gap-2">
        <span className="signed-in-text">Signed in as <b>{user.fullName}</b></span>
        <button className="logout-btn" onClick={onLogout}>Logout</button>
      </div>
    </header>
  );
};

export default Header;
