import React from 'react'
import { useState } from 'react';

export default function About() {
    const [mostrarMas, setMostrarMas] = useState(false);
  return (
    <div>
        <h2> sobre mi </h2>
        <p>hola, soy mario moussa y soy estudiante de programacion</p>
        {mostrarMas && (
        <p>este es el trabajo practico n1 </p>
      )}
        <button onClick={() => setMostrarMas(!mostrarMas)}>
          ver mas
          
         </button>
    </div>
  )
}
