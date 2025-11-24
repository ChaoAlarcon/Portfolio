import React from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../../data/projectsData';

const Projects = () => {
  const containerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '30px',
    padding: '60px 20px',
    backgroundColor: '#0f0f0f', // Fondo muy oscuro
  };

  return (
    <section id="proyectos">
      <h2 style={{ textAlign: 'center', color: 'white', marginBottom: '40px' }}>🛠️ Nuestros Proyectos</h2>
      <div style={containerStyle}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;