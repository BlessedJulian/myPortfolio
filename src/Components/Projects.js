import React from 'react';
import { FaGlobe, FaBoxes } from 'react-icons/fa'; // eye-catching icons

function Projects() {
  return (
    <section className="projects">
      <h2 className="section-title">🚀 My Projects</h2>
      <div className="projects-grid">
        <div className="project-card">
          <FaGlobe className="project-icon" />
          <h3>Portfolio Website</h3>
          <p>
            ✨ A sleek personal portfolio built with <strong>React</strong> and
            deployed seamlessly on <strong>Netlify</strong>.
          </p>
          <a href="#" className="btn">View Project</a>
        </div>
        <div className="project-card">
          <FaBoxes className="project-icon" />
          <h3>Inventory System</h3>
          <p>
            📦 Robust backend powered by <strong>NodeJS</strong> + <strong>MongoDB</strong> 
            for efficient stock management.
          </p>
          <a href="#" className="btn">Explore Demo</a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
