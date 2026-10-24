import React from 'react';

export default function Contact() {
  return (
    <div className="seccion-header">
      <h2>Contacto</h2>
      <p className="texto-principal">
        Podés ponerte en contacto conmigo a través de los siguientes medios:
      </p>
      <div style={{ marginTop: '20px', lineHeight: '1.8' }}>
        <p><strong>Email:</strong> mario@ejemplo.com</p>
        <p><strong>Ubicación:</strong> Tucumán, Argentina</p>
        <p><strong>GitHub:</strong> github.com/mario</p>
      </div>
    </div>
  );
}