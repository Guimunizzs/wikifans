import styles from "./CharactersDetails.module.css";
import { useParams } from "react-router-dom";
import charactersData from "../../data/Articles.json";

const CharactersDetails = () => {
  const { id } = useParams();
  const character = charactersData.find((char) => char.id === parseInt(id));

  if (!character) {
    return <p>Character not found</p>;
  }

  return (
    <div className={styles.details_container}>
      <h1>{character.name}</h1>
      <img src={character.imagem} alt={character.name} />
      <div className={styles.card_info}>
        <p>
          <strong>House:</strong> {character.house}
        </p>
        <p>
          <strong>Patronus:</strong> {character.patronus}
        </p>
        <p>{character.description}</p>

        <p className={styles.resume}>{character.resume}</p>
      </div>
    </div>
  );
};

export default CharactersDetails;
