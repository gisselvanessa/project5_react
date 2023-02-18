import axios  from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

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
    <div>
        <img src={poke?.sprites.other['official-artwork'].front_default} alt="" />
        <h1>{poke?.name}</h1>
    </div>
    )
    }
}

export default PokeInfo