import  axios  from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import PokeCard from '../components/Pokedex/PokeCard'
import SelectTypes from '../components/Pokedex/SelectTypes'
import "./styles/pokedex.css"


const Pokedex = () => {
    const {nameTrainer} =useSelector(state=>state)
    const [pokemons, setpokemons] = useState()
    const [selectValue, setselectValue] = useState('allpokemons')
    
    useEffect(() => {
        if(selectValue==='allpokemons'){
        const url = "https://pokeapi.co/api/v2/pokemon?limit=30&offset=0";
        axios
            .get(url)
            .then((res) => setpokemons(res.data))
            .catch((err) => console.log(err));
        }
        else{
            axios.get(selectValue)
            .then(res=>{
                const results=res.data.pokemon.map(e=> e.pokemon)
                setpokemons({results})
            })
            .catch(err=> console.log(err))
        }
    }, [selectValue])
    const navigate=useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault()
        const inputValue=e.target.pokemon.value.trim().toLowerCase()
        navigate(`/pokedex/${inputValue}`);
        e.target.pokemon.value=''
    }

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
                    <form onSubmit={handleSubmit}>
                        <input id="pokemon" type="text" />
                        <button>Search</button>
                    </form>
                    <SelectTypes setselectValue={setselectValue}/>
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