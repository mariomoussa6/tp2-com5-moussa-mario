import React from 'react';
import SkillCard from '../components/SkillCard';

export default function Skills() {
  const tecnologias = ["C#", ".NET", "Git y GitHub", "MySQL", "React"];

  return (
    <div className="seccion-skills">
      <h2>Mis Habilidades</h2>
      <div className="contenedor-skills">
        {tecnologias.map((tec) => (
          <SkillCard key={tec} nombre={tec} />
        ))}
      </div>
    </div>
  );
}