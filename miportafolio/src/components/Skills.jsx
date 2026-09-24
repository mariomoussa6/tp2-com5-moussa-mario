import React from 'react'

export default function Skills() {
    const tecnologias = ["C#", ".NET", "Git y GitHub", "MySQL", "React"];
    
  return (
    
    <div className="seccion-skills"> 
        <h2>Mis Habilidades</h2>
        
        
        <ul> 
            
            {tecnologias.map((tec)=> (
                <li key={tec}>{tec}</li>
            ))}
            
        </ul> 
        
    </div>
  )
}