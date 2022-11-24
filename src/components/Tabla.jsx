import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Show from './Show'

export default function Tabla() {

    const [Pokemon, setPokemon] = useState([])


    const getPoke = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151')
            .then((respuesta) => {
                //console.log(respuesta.data.results)
                setPokemon(respuesta.data.results)
            })

    }

    useEffect(() => getPoke(), [])


    return (
        <div>
        {
        Pokemon.map((value, index)=>{
          return <Show key ={index} {...value}/>
        })
      }
        </div>
    )
}
