import React from 'react';
import './Nav.css';
import Logo from './navbar-logo1.svg';
import Logo1 from './navbar-logo.svg';
import icon from './Icon.svg';

const Nav = () => {
  return (
    <nav className='navbar'>
      <div className='navbar-logo'>
        <img src={Logo} alt="Logo" className="logo-icon" />
        <img src={Logo1} alt="Logo" className="logo-icon-mob" />
        <h5>Fadhil</h5>
      </div>
      <ul className="navbar-links">
        <li><a href="About.jsx">About me</a></li>
        <li><a href="Section1.jsx">Skills</a></li>
        <li><a href="Section3.jsx">Projects</a></li>
        <li><a href="Contact.jsx">Contact me</a></li>
      </ul>
      <button className="button"><span>Resume</span><img src={icon} className="navbar-icon" /></button>
    </nav>
  );
}

export default Nav;
