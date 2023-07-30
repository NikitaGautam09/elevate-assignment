import React, { useState } from 'react';
import './HamburgerMenu.css';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const HamburgerMenu = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useHistory()
  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="hamburger-menu">
      <div className="hamburger-icon" onClick={handleToggleMenu}>
        <div className={`bar ${isOpen ? 'open' : ''}`} />
        <div className={`bar ${isOpen ? 'open' : ''}`} />
        <div className={`bar ${isOpen ? 'open' : ''}`} />
      </div>
      {isOpen && (
        <ul className="menu-options">
          {options.map((option) => (
            <li key={option.value} onClick={() => {
             if(option.value==='about') {
              navigate.push('/about')
             } 

             if(option.value==='contact') {
              navigate.push('/contact')
             } 
             if(option.value==='home') {
              navigate.push('/')
             } 


            }
          
            }>
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HamburgerMenu;
