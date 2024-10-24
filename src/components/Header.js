import React from 'react';
import { FaBell, FaSun, FaMoon } from 'react-icons/fa';

const Header = ({ toggleTheme, theme }) => (
  <header>
    <div className="logo">DumelaHealth</div>
    <div className="header-icons">
      <FaBell className="notification-icon" />
      {theme === 'light' ? (
        <FaMoon onClick={toggleTheme} className="theme-icon" />
      ) : (
        <FaSun onClick={toggleTheme} className="theme-icon" />
      )}
    </div>
  </header>
);

export default Header;