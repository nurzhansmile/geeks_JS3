import { Link } from "react-router-dom";
import styles from "./PokemonCard.module.css";

const PokemonCard = ({ name, url }) => {
  return (
    <div className={styles.main}>
      <p>{name}</p>
      <Link className={styles.link} to={`/info?paramName=${url}`}>
        Show
      </Link>
    </div>
  );
};

export default PokemonCard;
