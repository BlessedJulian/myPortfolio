import React from 'react';

function Education() {
  const educationData = [
    {
      degree: "B.Sc. Mathematics & Computer Science",
      school: "Federal University of Agriculture, Makurdi",
      year: "2013 – 2016",
    //   details: "Graduated with honors, specialized in software development and data analysis."
    },
    {
      degree: "Cycber Security",
      school: "Google",
      year: "2026 – Present",
    //   details: "Focused on science and mathematics, participated in coding competitions."
    }
  ];

  return (
    <section className="education">
      <h2>Education</h2>
      <div className="timeline">
        {educationData.map((edu, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>{edu.degree}</h3>
              <p>{edu.school}</p>
              <span className="year">{edu.year}</span>
              <p className="details">{edu.details}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
