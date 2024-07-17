import React from 'react';
import './Footer.css';
import Logo from './footer-logo1.svg';

const Footer = () => {
  return (
    <section className='footer'>
      <div className='footer-logo'>
        <img src={Logo} alt="Logo" className="logo-icon" />
        <h5>Fadhil</h5>
      </div>
      <div className='rights'>
        <p>&copy; Fadhil 2024 July</p>
        <p>Portfolio</p>
      </div>
    </section>
  );
}

export default Footer;
