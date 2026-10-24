import React, { useState } from 'react';
import '../App.css';

export default function About() {
  const [mostrarMas, setMostrarMas] = useState(false);

  return (
    <div className="seccion-about">
      <h2>Sobre mí</h2>
      <p className="texto-principal">
        Hola, soy Mario Moussa, estudiante de programación. Me enfoco en el desarrollo web, integrando interfaces dinámicas con React y construyendo bases sólidas con tecnologías como C#, .NET y MySQL.
      </p>
      
      {mostrarMas && (
        <p className="texto-oculto">
          Este es mi Trabajo Práctico N°2. Lo desarrollé en React para aplicar la creación de componentes, el uso de props, el renderizado de listas dinámicas con map() y el manejo de estados con useState.
        </p>
      )}

      <button className="boton-ver-mas" onClick={() => setMostrarMas(!mostrarMas)}>
        {mostrarMas ? 'Ver menos' : 'Ver más'}
      </button>
    </div>
  );
}