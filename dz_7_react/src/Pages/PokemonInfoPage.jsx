import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

import styles from "../Styles/PokemonInfoPage.module.css";

const PokemonInfoPage = () => {
  const [data, setData] = useState(null);
  const [statsValue, setStatsValue] = useState(null);
  const [abilitesValue, setAbilitiesValue] = useState(null);
  const [movesValue, setMovesValue] = useState(null);
  const [typesValue, setTypesValue] = useState(null)

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const queryValue = queryParams.get("paramName");

  const getPokemonInfo = async () => {
    try {
      const res = await axios.get(queryValue);
      if (res.status === 200) {
        setData(res.data);
      }
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (queryValue) {
      getPokemonInfo();
    }
  }, [queryValue]);

  useEffect(() => {
    if (data) {
      const statValue = data.stats.map((item) => {
        return "" + item.stat.name + ", ";
      });
      setStatsValue(statValue);

      const abilities = data.abilities.map((item) => {
        return "" + item.ability.name + ", ";
      });

      setAbilitiesValue(abilities);

      const moves = data.moves.map((item) => {
        return "" + item.move.name + ", ";
      });
      setMovesValue(moves)

      const types = data.types.map((item)=>{
        return "" + item.type.name + ", ";
      })
      setTypesValue(types)
    }
  }, [data]);

  if (data) {
    return (
      <div>
        <div className={styles.imgDiv}>
          <img
            className={styles.img}
            src={data.sprites.other.dream_world.front_default}
            alt=""
          />
        </div>
        <div className={styles.infoDiv}>
          <p>
            <b>Name: </b>
            {data.forms[0].name}
          </p>
          <p>
            <b>Type: </b>
            {typesValue}
          </p>
          <p>
            <b>Stats: </b>
            {statsValue}
          </p>
          <p>
            <b>Abilities: </b>
            {abilitesValue}
          </p>
          <p>
            <b>Some moves: </b>
            {movesValue}
          </p>
        </div>
      </div>
    );
  }
};

export default PokemonInfoPage;
