import axios  from 'axios'
import React, { useEffect, useState } from 'react'

const SelectTypes = ({setselectValue}) => {
    const [types, setTypes] = useState()
    useEffect(() => {
        const url = "https://pokeapi.co/api/v2/type";
        axios.get(url)
        .then(res=>setTypes(res.data))
        .catch(err=> console.log(err))
    }, [])
    // console.log(types);

    const handleChange =e=>{
        setselectValue(e.target.value)
    }

    return (
        <div>
            <select className="pokedex__options" onChange={handleChange}>
                <option value="allpokemons">All pokemons</option>
                {types?.results.map((type) => (
                    <option key={type.url} value={type.url}>
                        {type.name}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default SelectTypes