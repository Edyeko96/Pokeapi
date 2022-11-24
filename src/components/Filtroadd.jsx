import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
export default function Filtroadd(props) {
    //Obtencion de los tipos
    const [Tipo, setTipo] = useState({
        name: ""
    })
    const getTipos = (url) => {
        axios.get(url)
            .then((resp) => {
                //console.log(resp.data);
                setTipo(resp.data)
            })
    }
    useEffect(() => {
        getTipos(props.url)
    }, [])

    //filtrado
    const filtrar = (elTipo) => {
        console.log("eltipo", elTipo)
    }

    //Obtener datos de pokemon
    const [Poke, setPoke] = useState({
        name:"",
        sprites: {other:{dream_world:{front_default:""}}},
        weight : "",
        types : [{type:{}}]
    })

    const obtPoke = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20')
            .then((res) => {
                //console.log(res.data.results);
                setPoke(res.data.results)
            })
    }
    useEffect(() => obtPoke(), [])



    return (
        <div className='botondetipo'>
            <button onClick={() => filtrar("borrar")}>
                {Tipo.name}
            </button>
        </div>
    )
}





