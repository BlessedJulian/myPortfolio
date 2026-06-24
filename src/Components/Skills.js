import React from 'react';
import { FaReact,  FaGithub, FaSatelliteDish, FaTools, FaBug, FaDatabase} from 'react-icons/fa';
import { MdComputer } from 'react-icons/md';
import { GiCctvCamera } from 'react-icons/gi';
import { FaFileWord} from 'react-icons/fa';

const skills = [
  { name: 'IT Support & Troubleshooting', icon: <MdComputer /> },
  { name: 'Web Development (HTML, CSS, JS, React, Express.js)', icon: <FaReact /> },
  { name: 'Software Testing (QA, Debugging)', icon: <FaBug /> },
  { name: 'Database Management (MongoDB, backups, optimization)', icon: <FaDatabase /> },
  { name: 'GitHub', icon: <FaGithub /> },
  { name: 'Microsoft Office Suite (Excel, Word, PowerPoint, Outlook)', icon: <FaFileWord /> }, 
  { name: 'CCTV Installation & Surveillance', icon: <GiCctvCamera /> },
  { name: 'Starlink Installation', icon: <FaSatelliteDish /> },
  { name: 'Telecom ODU Installation (Airtel, MTN)', icon: <FaTools /> }
];

function Skills() {
  return (
    <section className="skills" id="skills">
      <h2>Skills</h2>
      <div className="skills-list">
        {skills.map(skill => (
          <span key={skill.name} className="skill">
            {skill.icon} {skill.name}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Skills;
