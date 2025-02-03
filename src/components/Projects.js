import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        <div className="project">
          <h3>RECIPE FINDER</h3>
          <p>A recipe finder is a tool or application that helps users discover recipes based on available ingredients, dietary preferences, or cuisine types. It typically features search filters, nutritional information, and step-by-step instructions to make cooking more accessible and personalized. Recipe finders can be web-based, mobile apps, or even integrated with smart kitchen devices for added convenience.</p>
        </div>
        <div className="project">
          <h3>LANGUAGE LEARNING TOOL</h3>
          <p>A language learning tool is a platform or application designed to help users learn new languages through interactive lessons, exercises, and quizzes. It often includes features like vocabulary building, pronunciation practice, and cultural insights, making learning engaging and effective. These tools can be web-based or mobile apps, incorporating AI and gamification to personalize the learning experience.</p>
        </div>
        <div className="project">
          <h3>AI TRAFFIC MANAGEMENT</h3>
          <p>The AI-based Traffic Management SIH problem involves designing a system that monitors real-time traffic conditions and dynamically adjusts traffic light timings to optimize flow. The solution leverages technologies like AI, IoT, and data analytics to reduce congestion, improve road safety, and lower environmental impact. It requires integrating live traffic data, predictive modeling, and adaptive control mechanisms for efficient traffic management.</p>
        </div>
        
      </div>
    </section>
  );
}

export default Projects;
