import axios  from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from './Header'
import './styles/pokeinfo.css'


const PokeInfo = () => {
    const{id}=useParams()
    const [poke, setpoke] = useState()
    const [hasError, sethasError] = useState(false)

    useEffect(() => {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        axios.get(url)
            .then(res=>{
                setpoke(res.data)
                sethasError(false)
            })
            .catch(err=>{
                sethasError(true)
                console.log(err)
            })
    }, [id])
    if(hasError){
        return <h1>❌ The Pokemon with name "{id}" was not found ❌</h1>
    }
    else{
    return (
        <div className="pokeinfo__container">
            <Header />
            <div className="pokeinfo__first">
                <img
                    className="pokeinfo__img"
                    src={poke?.sprites.other["official-artwork"].front_default}
                    alt=""
                />
                <span
                    className={`pokeinfo__bg ${poke?.types[0].type.name}-bg`}
                ></span>
                <h2 className={`pokeinfo__id ${poke?.types[0].type.name}-text`}>
                    #{poke?.id}
                </h2>
                <h1 className={`pokeinfo__name ${poke?.types[0].type.name}-text`}>
                    {poke?.name}
                </h1>
                <div className="pokeinfo__wh">
                    <ul className="pokeinfo__ul">
                        <li className="pokeinfo__il">
                            <h3> Weight:</h3> <span>{poke?.weight} </span>
                        </li>
                        {/* <span></span> */}
                        <li className="pokeinfo__il">
                            <h3>Height:</h3> <span>{poke?.height}</span>
                        </li>
                    </ul>
                </div>
                <div className="pokeinfo__info">
                    <div className="pokeinfo__info__des">
                        <h2 className="pokeinfor__des">Type</h2>
                        <ul className="pokeinfo__type ">
                            {poke?.types.map((type) => (
                                <li
                                    className={`pi__type ${type.type.name}-bg`}
                                    key={type.type.name}
                                >
                                    {type.type.name}
                                    {/* {type.type.name?'/':''} */}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="">
                        <h2 className="pokeinfor__des">Skills</h2>
                        <ul className="pokeinfo__skills ">
                            {poke?.abilities.map((ability) => (
                                <li
                                    className="pokeinfo__sk"
                                    key={ability.ability.name}
                                >
                                    {ability.ability.name}
                                    {/* {type.type.name?'/':''} */}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="pokeinfo__stats">
                    <h2 className="pokeinfo__title">Stats</h2>
                    <ul
                        className={`pokeinfo__stat ${poke?.types[0].type.name}-text`}
                    >
                        {poke?.stats.map((stat) => (
                            <li className="pokeinfo__skill" key={stat.stat.url}>
                                <div className="stats">
                                    <span className="pokeinfo__label">
                                        {stat.stat.name}{" "}
                                    </span>
                                    <span className="pokeinfo__label__info">
                                        {stat.base_stat}/150
                                    </span>
                                </div>
                                <span className="bar"></span>
                                <span
                                    className="bar-2"
                                    style={{
                                        width: `${stat.base_stat * 0.6666}%`,
                                    }}
                                ></span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="pokeinfo_2">
                <h2 className="pokeinfo__title">Movements</h2>
                <ul className="pokeinfo__moves ">
                    {poke?.moves.map((move) => (
                        <li className="pokeinfo__move" key={move.move.name}>
                            {move.move.name}
                            {/* {type.type.name?'/':''} */}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
    }
}

export default PokeInfo