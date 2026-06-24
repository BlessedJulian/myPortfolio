import React from 'react';
import jk from '../assets/jk.png';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
function Header() {
  return (
    <header className="header fade-in">
      <div className="profile-container">
        {/* Left side: Picture */}
        <div className="profile-img-wrapper">
          <img 
            src={jk} 
            alt="Ogbaji Julian picture." 
            className="profile-img fade-in-delay" 
          />
        </div>

        {/* Right side: Info */}
        <div className="info fade-in-delay-2">
          <h1 className="name">
            Ogbaji Julian Ogbaji
          </h1>
          <h2 className="title">💻 ICT Technician & Programmer</h2>
          <div className="contacts">
            <p><FaEnvelope /> ogbajijulian@gmail.com</p>
            <p><FaPhone /> 08094557154</p>
            <p><FaMapMarkerAlt /> Abuja, Nigeria</p>
          </div>
        </div>
      </div>
    </header>
  );
}


export default Header;
