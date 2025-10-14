import React, { useState } from 'react';
import { Navbar, Nav, Form, Button, Dropdown, InputGroup } from 'react-bootstrap';
import './NavBar.css';

export default function NavBar({ onQuickSearch, onNavigation }) {
  const [quickSearch, setQuickSearch] = useState('');

  const handleQuickSearch = (e) => {
    e.preventDefault();
    if (onQuickSearch) {
      onQuickSearch(quickSearch);
    }
  };

  const handleNavClick = (e, page) => {
    e.preventDefault();
    if (onNavigation) {
      onNavigation(page);
    }
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="custom-navbar">
      <div className="container">
        <Navbar.Brand 
          href="#home" 
          className="fw-bold"
          onClick={(e) => handleNavClick(e, 'home')}
        >
          🎬 MovieHub
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" onClick={(e) => handleNavClick(e, 'home')}>Home</Nav.Link>
            <Nav.Link href="#about" onClick={(e) => handleNavClick(e, 'about')}>About</Nav.Link>
            <Nav.Link href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</Nav.Link>
          </Nav>
          
          <Nav className="ms-auto">
            <Form onSubmit={handleQuickSearch} className="d-flex me-3">
              <InputGroup>
                <Form.Control
                  type="text"
                  placeholder="Quick search..."
                  value={quickSearch}
                  onChange={(e) => setQuickSearch(e.target.value)}
                  className="quick-search-input"
                />
                <Button variant="outline-light" type="submit">
                  Search
                </Button>
              </InputGroup>
            </Form>
            
            <Dropdown className="me-2">
              <Dropdown.Toggle variant="outline-light" id="accounts-dropdown">
                Accounts
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#manage-profiles">Manage Your Profiles</Dropdown.Item>
                <Dropdown.Item href="#build-account" onClick={(e) => handleNavClick(e, 'account')}>Build your Account</Dropdown.Item>
                <Dropdown.Item href="#change-password">Change Password</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            
            <Button variant="outline-light" className="me-2">
              Login
            </Button>
            
            <Button variant="outline-warning">
              Favourites
            </Button>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}