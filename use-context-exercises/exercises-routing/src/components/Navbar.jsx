import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <NavLink to="/" className="navbar-brand">
          React Router Demo
        </NavLink>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  isActive ? 'nav-link active fw-bold' : 'nav-link'
                }
                end
              >
                Trang Chủ
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/san-pham"
                className={({ isActive }) => 
                  isActive ? 'nav-link active fw-bold' : 'nav-link'
                }
              >
                Sản Phẩm
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/lien-he"
                className={({ isActive }) => 
                  isActive ? 'nav-link active fw-bold' : 'nav-link'
                }
              >
                Liên Hệ
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;