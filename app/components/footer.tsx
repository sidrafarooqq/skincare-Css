
'use client'
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="section">
          <h2>Roseify</h2>
          <div className="social-links">
            <a href="#" aria-label="Facebook" className="facebook"> {/* Add respective icons here */}
              {/* Icon for Facebook */}
            </a>
            <a href="#" aria-label="Twitter" className="twitter"> {/* Add respective icons here */}
              {/* Icon for Twitter */}
            </a>
            <a href="#" aria-label="Pinterest" className="pinterest"> {/* Add respective icons here */}
              {/* Icon for Pinterest */}
            </a>
            <a href="#" aria-label="Instagram" className="instagram"> {/* Add respective icons here */}
              {/* Icon for Instagram */}
            </a>
          </div>
        </div>

        <div className="section">
          <h3>Explore</h3>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
          </ul>
        </div>

        <div className="section">
          <h3>About Us</h3>
          <ul>
            <li>18-0000000</li>
            <li>@xyz@gmail.com</li>
            <li>ABC street #3</li>
            <li>Karachi, Pakistan</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 Rose House. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;