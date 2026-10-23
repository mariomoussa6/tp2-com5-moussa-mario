import React from 'react'
import { useState } from 'react';
import '../App.css';

export default function About() {
    const [mostrarMas, setMostrarMas] = useState(false);
  return (
    <div className="seccion-about">
        <h2> Sobre mi </h2>
        <p className="texto-principal">Hola, soy Mario Moussa, estudiante de programacion. Me enfoco en el desarrollo web, integrando interfaces dinamicas con React y construyendo bases solidas con tecnologias como C#, .NET y MySQL.</p>
        {mostrarMas && (
        <p className="texto-oculto">Este es mi Trabajo Practico N°1. Lo desarrolle en React para aplicar en la practica la creacion de componentes, el uso de props, listas dinamicas y manejo de estados con useState. </p>
      )}
        <button className="boton-ver-mas" onClick={() => setMostrarMas(!mostrarMas)}>
          ver mas
          
         </button>
    </div>
  )
}
