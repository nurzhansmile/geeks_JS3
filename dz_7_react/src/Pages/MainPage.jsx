import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import PokemonCard from "../ui/PokemonCard/PokemonCard";
import styles from "../Styles/MainPage.module.css";

const MainPage = () => {
  const [data, setData] = useState([]);
  const [carrentData, setCarrentData] = useState([]);
  const [carrentPage, setCarrentPage] = useState(1);
  const itemPerPage = 10;

  const indexOfLast = itemPerPage * carrentPage;
  const indexOfFirst = indexOfLast - itemPerPage;

  useEffect(() => {
    if (data && data.length > 0) {
      setCarrentData(data.slice(indexOfFirst, indexOfLast));
    }
  }, [carrentPage, data]);

  const getPokemonsListFetch = async () => {
    try {
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon/");
      console.log(response);
      if (response.status === 200) {
        setData(response.data.results);
      }
    } catch (e) {
      console.log("Error", e.message);
    }
  };

  useEffect(() => {
    getPokemonsListFetch();
  }, []);

  if (data && data.length > 0 && carrentData.length > 0) {
    return (
      <div className={styles.main}>
        <div className={styles.contentDiv}>
          <div className={styles.wrapDiv}>
            {carrentData.map((item, index) => (
              <PokemonCard key={index} name={item.name} url={item.url} />
            ))}
          </div>

          <div className={styles.pagDiv}>
            <button
              onClick={() => {
                if (carrentPage > 1) {
                  setCarrentPage(carrentPage - 1);
                }
              }}
            >
              {"<"}
            </button>
            <p>{carrentPage}</p>
            <button
              onClick={() => {
                if (carrentPage < 2) {
                  setCarrentPage(carrentPage + 1);
                }
              }}
            >
              {">"}
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default MainPage;
