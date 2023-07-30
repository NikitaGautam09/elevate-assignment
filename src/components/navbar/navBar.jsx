
import React from 'react';
import './navBar.css';

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: 'black', color: 'white' }}>
      <ul style={{ display: 'flex', listStyleType: 'none', margin: 0, padding: '10px', justifyContent: "center" }}>
        <li>Bestsellers</li>
        <li>Gift Ideas</li>
        <li>New Releases</li>
        <li>Today's Deals</li>
        <li>Customer Services</li>
      </ul>
    </nav>
  );
};

export default Navbar;