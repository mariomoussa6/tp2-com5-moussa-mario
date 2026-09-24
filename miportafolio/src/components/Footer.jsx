import React from 'react'

export default function Footer(props) {
  return (
    <footer className="seccion-footer">
      <p>{props.texto}</p>
      <p>Contacto: {props.email}</p>
   
    </footer>
  )
}