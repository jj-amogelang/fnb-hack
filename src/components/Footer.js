import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => (
  <footer>
    <div className="social-icons">
      <FaFacebook />
      <FaTwitter />
      <FaInstagram />
    </div>
    <p>&copy; 2024 HealthHub. All rights reserved.</p>
  </footer>
);

export default Footer;