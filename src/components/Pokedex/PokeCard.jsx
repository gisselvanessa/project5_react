import axios from 'axios';
import React, { useEffect, useState } from 'react'


const PokeCard = ({pokemon}) => {

    // console.log(pokemon);
    
    const [poke, setpoke] = useState()
    
    useEffect(() => {
        axios.get(pokemon.url)
            .then(res=>setpoke(res.data))
            .catch(err=>console.log(err))
    }, [])
    console.log(poke);
    return (
        <div className={`card__container ${poke?.types[0].type.name}-bg`}>
            <article className={`card ${poke?.types[0].type.name}`}>
                <header className="card__header">
                    <img
                        className="card__img"
                        src={
                            poke?.sprites.other["official-artwork"]
                                .front_default
                        }
                        alt=""
                    />
                </header>
                <div className="card__body">
                    <h2
                        className={`card__name ${poke?.types[0].type.name}-text`}
                    >
                        {poke?.name}
                    </h2>
                    <ul className="card__types">
                        {poke?.types.map((type) => (
                            <li className="card__type" key={type.type.name}>
                                {type.type.name}
                            </li>
                        ))}
                    </ul>
                    <p className="card__info">Type</p>
                    <hr className="card__hr" />
                    <ul
                        className={`card__skills ${poke?.types[0].type.name}-text`}
                    >
                        {poke?.stats.map((stat) => (
                            <li className="card__skill" key={stat.stat.url}>
                                <span className="card__label">
                                    {stat.stat.name}{" "}
                                </span>
                                <span className="card__label__info">
                                    {stat.base_stat}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </article>
        </div>
    );
}

export default PokeCard