import { useState } from 'react';

export default function ProjectCard({ titulo, descripcion, tecnologias, enlace }) {
 
  const [mostrarDetalles, setMostrarDetalles] = useState(false);

  return (
    <div style={{ border: '1px solid #ddd', padding: '15px', marginBottom: '15px', borderRadius: '8px' }}>
      <h3>{titulo}</h3>
      <p>{descripcion}</p>

     
      <button onClick={() => setMostrarDetalles(!mostrarDetalles)}>
        {mostrarDetalles ? 'Ocultar detalles' : 'Ver más detalles'}
      </button>

      
      {mostrarDetalles && (
        <div style={{ marginTop: '10px', paddingTop: '10px', borderTop: '1px dashed #ccc' }}>
          <p><strong>Tecnologías:</strong> {tecnologias}</p>
          <a href={enlace} target="_blank" rel="noreferrer">Ver repositorio</a>
        </div>
      )}
    </div>
  );
}