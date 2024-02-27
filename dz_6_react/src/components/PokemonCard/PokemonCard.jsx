import axios from "axios";
import styles from "./PokemonCard.module.css";
import { useEffect } from "react";
import { useState } from "react";

const PokemonCard = ({ pokemon }) => {
  const [pokemonData, setPokemonData] = useState(null);

  const fetchInfo = async () => {
    try {
      const { data } = await axios.get(pokemon.url);
      //   sprites.other.dream_world.front_default
      setPokemonData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  if (pokemonData) {
    return (
      <div className={styles.main}>
        <div className={styles.imageDiv}>
          <img
            src={pokemonData.sprites.other.dream_world.front_default}
            alt=""
          />
        </div>
        <p>{pokemon.name}</p>
      </div>
    );
  }
};

export default PokemonCard;
