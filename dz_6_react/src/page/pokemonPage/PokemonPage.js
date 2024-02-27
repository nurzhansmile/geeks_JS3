import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PokemonCard from '../../components/PokemonCard/PokemonCard';


const PokemonPage = () => {
    const [pokemons, setPokemons] = useState([])
    console.log(pokemons);
    const getPokemons = async () => {
        const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon')
        setPokemons(data.results)
    }

    useEffect(() => {
        getPokemons()
    }, []);

    return (
        <div style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexWrap: "wrap",
            marginTop:"20px"
        }}>
            {
                pokemons.map(pokemon =>
                    <PokemonCard pokemon={pokemon} />
                )
            }
        </div>
    );
};

export default PokemonPage;