// components/HamburgerIcon.jsx
import React from 'react';
import './HamburgerIcon.css'; // keep your styles

const HamburgerIcon = ({ isOpen, onClick }) => {
  return (
    <div
      className={`nav-icon ${isOpen ? 'closed' : ''}`}
      onClick={onClick}
    >
      <div></div>
    </div>
  );
};

export default HamburgerIcon;
