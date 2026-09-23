import React from 'react'

export default function Skills() {
    const tecnologias = ["C#", ".NET", "Blazor", "MySQL", "React"];
    
  return (
    
    <div> 
        <h2>mis habilidades</h2>
        
        
        <ul> 
            
            {tecnologias.map((tec)=> (
                <li key={tec}>{tec}</li>
            ))}
            
        </ul> 
        
    </div>
  )
}