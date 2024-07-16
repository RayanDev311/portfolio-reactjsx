import React from 'react';
import './Nav.css';
import Logo from './navbar-logo1.svg';
import icon from './Icon.svg';

const Nav = () => {
  return (
    <nav className='navbar'>
      <div className='navbar-logo'>
        <img src={Logo} alt="Logo" className="logo-icon" />
        <h5>Fadhil</h5>
      </div>
      <ul className="navbar-links">
        <li><a href="#">About me</a></li>
        <li><a href="#">Skills</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Contact me</a></li>
      </ul>
      <button className="button"><span>Resume</span><img src={icon} className="navbar-icon" /></button>
    </nav>
  );
}

export default Nav;
