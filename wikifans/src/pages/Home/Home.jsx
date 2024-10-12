import React, { useState } from "react";
import charactersData from "../../data/Articles.json";
import styles from "./Home.module.css"; // Importa o CSS

function Home() {
  const [characters, setCharacters] = useState(charactersData);

  return (
    <div className={styles.cards_container}>
      {characters.map((character) => (
        <div className={styles.card} key={character.id}>
          <img src={character.imagem} alt={character.name} />

          <h2>{character.name}</h2>
          <p>
            <strong>House:</strong> {character.house}
          </p>
          <p>
            <strong>Patronus:</strong> {character.patronus}
          </p>
          <p>{character.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
