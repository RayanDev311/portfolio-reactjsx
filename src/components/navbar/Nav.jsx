import React from 'react';
import './Nav.css';
import Logo from './navbar-logo1.svg';
import Logo1 from './navbar-logo.svg';
import icon from './Icon.svg';
import { GiHamburgerMenu as Hamburger } from 'react-icons/gi';

const Nav = () => {
  return (
    <nav className='navbar'>
      <div className='navbar-logo'>
        <img src={Logo} alt="Logo" className="logo-icon" />
        <img src={Logo1} alt="Logo" className="logo-icon-mob" />
        <h5>Fadhil</h5>
      </div>
      <ul className="navbar-links">
        <li><a href="#about">About me</a></li>
        <li><a href="#section1">Skills</a></li>
        <li><a href="#section3">Projects</a></li>
        <li><a href="#contact">Contact me</a></li>
      </ul>
      <button className="button">
        <span>Resume</span>
        <img src={icon} className="navbar-icon" alt="icon" />
      </button>
      <Hamburger size={30} className="hamburger-icon" />
    </nav>
  );
}

export default Nav;
