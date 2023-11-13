import React from 'react'
import dataIconos from '../assets/img'

const Icono = ({categoria}) => {
 if(categoria === "Reaction"){
    return( <img src={dataIconos.imgReaction} alt=''/>)
 }else if(categoria === "Memory"){
    return( <img src={dataIconos.imgMemory} alt=''/>)
 }if(categoria === "Verbal"){
    return( <img src={dataIconos.imgVerbal} alt=''/>)
 }else{
    return( <img src={dataIconos.imgVisual} alt=''/>)
 }
}

export default Icono