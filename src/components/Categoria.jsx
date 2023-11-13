import React from 'react';
import './Categoria.css';
import Icono from './Icono';

const Categoria = ({clase, titulo, puntaje}) => {
  return (
    <div className={clase}>
        <Icono categoria={clase}/>
        <p>{titulo}</p>
        <p>{puntaje} / 100</p>
    </div>
  )
}


export default Categoria

