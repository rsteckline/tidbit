import React from 'react';
import {  useNavigate } from 'react-router-dom';
import './Header.css';

const Header = ({ onSearchChange }) => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <h1 className='tidbit' onClick={() => navigate('')}>Tidbit</h1>
      <div className="search-bar">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          placeholder="Search Articles"
          onChange={(e) => onSearchChange(e.target.value)}
          className="search-input"
        />
      </div>
    </header>
  );
};

export default Header;