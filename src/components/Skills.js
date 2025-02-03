// src/components/Skills.js
import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <div id="skills" style={{ padding: '20px', backgroundColor: '#e0f7fa', textAlign: 'center' }}>
      <h2>Skills</h2>
      
      
      <div className="skills-section">
        <h3>Frontend</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React.js</li>
          {/* Add more frontend skills here */}
        </ul>
      </div>

      <div className="skills-section">
        <h3>Backend</h3>
        <ul>
          <li>Node.js</li>
          <li>PHP</li>
          <li>Express.js</li>
          {/* Add more backend skills here */}
        </ul>
      </div>

      <div className="skills-section">
        <h3>Programming Languages</h3>
        <ul>
          <li>C</li>
          <li>Java</li>
          <li>Python</li>
          {/* Add more programming languages here */}
        </ul>
      </div>

      <div className="skills-section">
        <h3>Databases</h3>
        <ul>
          <li>MongoDB</li>
          <li>MySQL</li>
          {/* Add more databases here */}
        </ul>
      </div>

      <div className="skills-section">
        <h3>Other Frameworks & Libraries</h3>
        <ul>
          <li>React.js</li>
          <li>Express.js</li>
          {/* Add more frameworks and libraries here */}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
