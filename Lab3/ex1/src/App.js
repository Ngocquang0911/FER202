import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import HomePage from './pages/HomePage';
import MoviePage from './pages/MoviePage';
import AccountPage from './pages/AccountPage';
import FooterPage from './pages/FooterPage';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [quickSearchTerm, setQuickSearchTerm] = useState('');

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  const handleQuickSearch = (searchTerm) => {
    setQuickSearchTerm(searchTerm);
    // Navigate to home page if not already there
    if (currentPage !== 'home') {
      setCurrentPage('home');
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onQuickSearch={quickSearchTerm} />;
      case 'movies':
        return <MoviePage />;
      case 'about':
        return <div className="container py-5"><h1>About Page</h1><p>This is the about page.</p></div>;
      case 'contact':
        return <div className="container py-5"><h1>Contact Page</h1><p>This is the contact page.</p></div>;
      case 'account':
        return <AccountPage />;
      default:
        return <HomePage onQuickSearch={quickSearchTerm} />;
    }
  };

  return (
    <div>
      <NavBar onQuickSearch={handleQuickSearch} onNavigation={handleNavigation} />
      {renderPage()}
      <FooterPage />
    </div>
  );
}

export default App;
