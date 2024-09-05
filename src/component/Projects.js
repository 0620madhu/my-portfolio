import React from 'react';

const projects = [
  {
    title: 'SustainInsight',
    description: 'A comprehensive sustainability analytics platform designed to help businesses monitor, analyse, and optimize their environmental and social impact.',
    technologies: 'React.js, Next.js, Redux, CSS3/SASS, Node.js, Express.js, PostgreSQL, AWS EC2, Docker, CI/CD',
    link: 'https://sustaininsight.com'
  },
  {
    title: 'Fame Pilot',
    description: 'A reputation management platform designed to help businesses monitor, analyse, and enhance their online presence across various digital channels.',
    technologies: 'React.js, Redux, CSS3, SASS, RESTful APIs',
    link: 'https://famepilot.com'
  },
  {
    title: 'Easy Siksha',
    description: 'An online education platform aimed at providing accessible and interactive learning resources to students across various academic levels.',
    technologies: 'Angular, HTML5, CSS3, RESTful APIs',
    link: 'https://easyshiksha.com'
  }
];

const Projects = () => (
  <section id="projects">
    <h2>Projects</h2>
    <div className="projects">
      {projects.map((project, index) => (
        <div key={index} className="project">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <p><strong>Technologies Used:</strong> {project.technologies}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
