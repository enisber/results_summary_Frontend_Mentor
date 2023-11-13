import React from 'react'
import BtnContinue from './BtnContinue'
import './Resumen.css'
import Categoria from './Categoria'
import data from '../data.json'

const Resumen = () => {
  return (
    <div className='resumen'>
        <h3>Summary</h3>
        <div className='categoriasContainer'>
          {data.map(cat =>
            <Categoria 
              key = {cat.id}
              clase = {cat.category}
              titulo = {cat.category}
              puntaje={cat.score}
            />
            )}
        </div>
        <BtnContinue />
    </div>
  )
}

export default Resumen

/*
<div class="resumen">
        <h3>Summary</h3>
        <div class="reaction">
          <img src="/assets/images/icon-reaction.svg" alt="">
          <p>Reaction</p>
          <p>80 / 100</p>
        </div>
        <div class="memory">
          <img src="/assets/images/icon-memory.svg" alt="">
          <p>Memory</p>
          <p>92 / 100</p>
        </div>
        <div class="verbal">
          <img src="/assets/images/icon-verbal.svg" alt="">
          <p>Verbal</p>
          <p>61 / 100</p>
        </div>
        <div class="visual">
          <img src="/assets/images/icon-visual.svg" alt="">
          <p>Visual</p>
          <p>72 / 100</p>
        </div> 

        <button class="btn">
          Continue
        </button>
    </div>*/