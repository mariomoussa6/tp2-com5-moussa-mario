import React, { useState } from 'react';

export default function ProjectCard({ titulo, descripcion, tecnologias, imagen }) {
  const [mostrar, setMostrar] = useState(false);

  return (
    <div className="tarjeta-proyecto">
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
      
      {imagen && (
        <img 
          src={imagen} 
          alt={titulo} 
          className="imagen-proyecto" 
        />
      )}

      <button onClick={() => setMostrar(!mostrar)}>
        {mostrar ? 'Ocultar detalles' : 'Ver más'}
      </button>

      {mostrar && (
        <div style={{ marginTop: '10px' }}>
          <p><strong>Tecnologías utilizadas:</strong> {tecnologias}</p>
        </div>
      )}
    </div>
  );
}