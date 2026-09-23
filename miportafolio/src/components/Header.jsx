import React from 'react'

export default function Header(props) {
  return (
    <header>

        <h1>{props.nombre}</h1>
        <p>{props.profesion}</p>
    </header>
  )
}
