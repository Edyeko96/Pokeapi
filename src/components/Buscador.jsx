import React, { Component } from 'react'

export default class Buscador extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            img: "#",

        }

    }

    fetchApi = async () => {
        let resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.name}`);
        let data = await resp.json();

        console.log(data.sprites.other.dream_world.front_default);
        this.setState({
            img: data.sprites.other.dream_world.front_default,
            peso: data.weight
        })
    }

    handlerName = event => {
        this.setState({
            name: event.target.value
        })
    }

    handlerSubmit = event => {
        let aux = this.state.name
        console.log(aux);
        event.preventDefault();
        this.fetchApi();
    }



    render() {
        return (
            <div>
                <div className="card ">
                    <div className="card-header text-black">
                        Quien es este pokemon
                    </div>
                    <div className="card-body">
                        <form onSubmit={this.handlerSubmit}>
                            <input type="text"
                                placeholder='Busca tu pokemon'
                                value={this.state.name}
                                onChange={this.handlerName} />
                            <br />
                            <button type="submit" className='btn btn-primary mt-2'>Buscar</button>
                        </form>
                    </div>     
                </div>
                <img src={this.state.img} alt="" />
                <p>{this.state.name}</p>
            </div>
        )
    }
}
