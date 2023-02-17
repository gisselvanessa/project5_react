import  axios  from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import PokeCard from '../components/Pokedex/PokeCard'


const Pokedex = () => {
    const {nameTrainer} =useSelector(state=>state)
    const [pokemons, setpokemons] = useState()
    useEffect(() => {
        const url = "https://pokeapi.co/api/v2/pokemon?limit=30&offset=0";
        axios
            .get(url)
            .then((res) => setpokemons(res.data))
            .catch((err) => console.log(err));
    }, [])
    // console.log(pokemons);
    return (
        <div className="pokedex__container">
            <span className="red__bg"></span>
                <span className="black__bg"></span>
            <div>
                
                <div className="pokedex__header">
                    <header>
                        <img
                            className="pokedex__img"
                            src="public\images\image 11.png"
                            alt=""
                        />
                    </header>
                    <h1 className="pokedex__description">
                        <span className="pokedex__welcome">
                            Hi {nameTrainer},
                        </span>{" "}
                        here find your favorite pokemon
                    </h1>
                </div>

                <div className="cards">
                    {pokemons?.results.map((pokemon) => (
                        <PokeCard key={pokemon.url} pokemon={pokemon} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Pokedex