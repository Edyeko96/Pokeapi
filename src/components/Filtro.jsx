import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Filtroadd from './Filtroadd'
export default function Filtro() {
  const [Tipos, setTipos] = useState([])


  const gettype = () => {
    axios.get('https://pokeapi.co/api/v2/type/')
      .then((respuesta) => {
        //console.log(respuesta.data.results)
        setTipos(respuesta.data.results)
      })

  }

  useEffect(() => gettype(), [])


  return (
    <div>{
        Tipos.map((value, index)=>{
          return <Filtroadd key ={index} {...value}/>
        })}
    </div>
  )

  
}
