import React from 'react';

export default function SkillCard({ nombre }) {
  return (
    <div className="tarjeta-skill">
      <p>{nombre}</p>
    </div>
  );
}