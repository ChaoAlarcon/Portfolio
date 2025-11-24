// src/components/Team/Team.js

import React from 'react';
import { teamMembers } from '../../data/teamData';
// Nota: Necesitarás un componente TeamMember Card para renderizar cada item.

const Team = () => {
  // Estilos simplificados aquí, usa CSS o Tailwind para el diseño de 3 columnas
  const teamContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
    padding: '40px 20px',
  };

  const cardStyle = {
    border: '1px solid #333',
    borderRadius: '8px',
    padding: '20px',
    textAlign: 'center',
    backgroundColor: '#1e1e1e', // Fondo oscuro
  };

  const linkStyle = { margin: '0 5px', color: '#00bcd4' }; // Cian para enlaces

  return (
    <section id="nosotros">
      <h2 style={{ textAlign: 'center', color: 'white' }}>⭐ El Equipo</h2>
      <div style={teamContainerStyle}>
        {teamMembers.map((member) => (
          <div key={member.id} style={cardStyle}>
            {/* Aquí iría la foto del miembro  */}
            <h3>{member.nombre} {member.apellidos}</h3>
            <p style={{ color: '#aaa' }}>{member.rol}</p>
            <div>
              {/* Mapeo de atributos de la entidad Nosotros */}
              <a href={`mailto:${member.e_mail}`} style={linkStyle}>✉️ E-mail</a>
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer" style={linkStyle}>🔗 LinkedIn</a>
              <a href={member.cv} download style={linkStyle}>📄 CV (Descargar)</a>
              {/* numTelefono: lo hacemos un botón discreto o sólo visible si el usuario lo necesita */}
              <a href={`tel:${member.numTelefono}`} style={linkStyle}>📞 Llamar</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;