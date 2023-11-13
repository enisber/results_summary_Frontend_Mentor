/*pasar numresultado a otro componente?*/ 

import React from 'react'
import './Resultado.css'

const Resultado = () => {
  return (
    <section className='resultado'>
        <h3>Your Result</h3>
        <div className='numResultado'>
            <p>76</p>
            <p>of 100</p>
        </div>
        <p>Great</p>
        <p>You scored higher than 65% of the people who have taken these tests.</p>
    </section>
  )
}

export default Resultado