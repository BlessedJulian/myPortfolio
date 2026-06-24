import React from 'react';
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <p>© 2026 Ogbaji J. All rights reserved.</p>
      <div className="social-links">
        <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={24} />
        </a>
        <a href="https://github.com/BlessedJulian" target="_blank" rel="noopener noreferrer">
          <FaGithub size={24} />
        </a>
        <a href="https://linkedin.com/in/yourhandle" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={24} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
