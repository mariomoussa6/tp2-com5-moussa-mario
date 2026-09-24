import React from 'react'

export default function Projects() {
  const misProyectos = [
    {
      id: 1,
      titulo: "Pagina para concesionario de autos",
      descripcion: "Catalogo de vehiculos disponibles, ubicacion y datos de contacto.",
      imagen: "/Autos.png"
    },
    {
      id: 2,
      titulo: "Pagina de restaurante",
      descripcion: "Catálogo dinamico de platos con filtros, sistema de reservas con validacion de disponibilidad y diseño responsive.",
      imagen: "Restaurante.png"
    }
  ];

  return (
    <div className="seccion-projects">
      <h2>Mis Proyectos</h2>
      <div className="contenedor-proyectos-fila">
        {misProyectos.map((proyecto) => (
          <div key={proyecto.id} className="tarjeta-proyecto">
            <h3>{proyecto.titulo}</h3>
            <p>{proyecto.descripcion}</p>
            <img 
              src={proyecto.imagen} 
              alt={proyecto.titulo} 
              className="imagen-proyecto" 
            />
          </div>
        ))}
      </div>
    </div>
  )
}