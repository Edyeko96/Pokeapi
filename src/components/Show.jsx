import React from 'react'
import './Show.css';
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'

export default function Show(props) {
    const [onePokemon, setonePokemon] = useState({
        name:"",
        sprites: {other:{dream_world:{front_default:""}}},
        weight : "",
        types : [{type:{}}]
        


    })
        

    const getPokemons = (url) => {
        axios.get(url)
            .then((response) =>{
                console.log(response.data)
                setonePokemon(response.data)
            } );

    }
    useEffect(() => {
        getPokemons(props.url)


    }, [])


  return  (
    <div className='columna'><div className="card1 card mt-4">
            <div className="card-header text-black">
                {onePokemon.name}
            </div>
            <div className="card-body">
                <img src={onePokemon.sprites.other.dream_world.front_default} />
                <p className="card-text text-black">Peso: {onePokemon.weight} lbs</p>
                <p className="card-text text-black">Tipos: {onePokemon.types[0].type.name} </p>
            </div>
        </div></div>
  )
    
  
}
