import React, { useEffect } from 'react';

const experiences = [
  {
    role: "CCTV Surveillance Personnel",
    company: "Bakangizo Pharmacy & Store – Mabushi, Abuja",
    years: "2025 – 2026",
    details: [
      "Improved surveillance monitor efficiency by 30% through proactive observation and timely incident reporting.",
      "Maintained over 95% accuracy in security documentation and daily monitoring report.",
      "Assisted in strengthening workplace security compliance and operational safety standards.",
      "Monitored CCTV cameras and surveillance systems across company premises.",
      "Prepared daily monitoring and incident reports."
    ]
  },
  {
    role: "Computer Programmer and Customer Support",
    company: "EveryDay Transact Limited – Kubwa, Abuja",
    years: "2020 – 2024",
    details: [
      "Performed quality assurance testing on new systems prior to deployment.",
      "Maintained version control systems such as GitHub for source code management.",
      "Developed and maintained software applications using Express.js and React.",
      "Debugged existing codebase to identify and resolve technical issues."
    ]
  },
  {
    role: "Computer Instructor and Operator",
    company: "Wisdom Group of Schools – Igueben, Edo State",
    years: "2018 – 2019",
    details: [
      "Taught computer programming and usage skills to students.",
      "Prepared and managed examination documents."
    ]
  },
  {
    role: "Network Administrator",
    company: "Diamond Information Technology – Madalla, Niger State",
    years: "2014 – 2017",
    details: [
      "Developed documentation of existing IT infrastructure processes and procedures.",
      "Assisted in the setup of computers and equipment for new users.",
      "Provided training to employees on how to use new software applications."
    ]
  }
];

function Experience() {
  useEffect(() => {
    const items = document.querySelectorAll('.timeline-item');
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          }
        });
      },
      { threshold: 0.2 }
    );
    items.forEach(item => observer.observe(item));
  }, []);

  return (
    <section className="experience" id="experience">
      <h2>Experience</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>{exp.role}</h3>
              <p className="company">{exp.company}</p>
              <span className="years">{exp.years}</span>
              <ul>
                {exp.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
