import React from 'react';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  const misProyectos = [
    {
      id: 1,
      titulo: "Pagina para concesionario de autos",
      descripcion: "Catalogo de vehiculos disponibles, ubicacion y datos de contacto.",
      tecnologias: "React, CSS, HTML",
      imagen: "/Autos.png"
    },
    {
      id: 2,
      titulo: "Pagina de restaurante",
      descripcion: "Catálogo dinamico de platos con filtros, sistema de reservas con validacion de disponibilidad y diseño responsive.",
      tecnologias: "React, JavaScript",
      imagen: "Restaurante.png"
    },
    {
      id: 3,
      titulo: "Sitio Web de Nutrición",
      descripcion: "Plataforma informativa para presentación de productos y servicios de bienestar.",
      tecnologias: "React, Vite",
      imagen: "/Autos.png"
    }
  ];

  return (
    <div className="seccion-projects">
      <h2>Mis Proyectos</h2>
      <div className="contenedor-proyectos-fila">
        {misProyectos.map((proyecto) => (
          <ProjectCard
            key={proyecto.id}
            titulo={proyecto.titulo}
            descripcion={proyecto.descripcion}
            tecnologias={proyecto.tecnologias}
            imagen={proyecto.imagen}
          />
        ))}
      </div>
    </div>
  );
}