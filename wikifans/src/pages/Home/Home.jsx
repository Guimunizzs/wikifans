import React, { useState } from "react";
import charactersData from "../../data/Articles.json";
import { NavLink } from "react-router-dom";

// Importa o CSS
import styles from "./Home.module.css";

function Home() {
  const [characters, setCharacters] = useState(charactersData);

  return (
    <div className={styles.cards_container}>
      {characters.map((character) => (
        <NavLink
          to={`/characters/${character.id}`}
          key={character.id}
          className={styles.card_link}
        >
          <div className={styles.card}>
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
        </NavLink>
      ))}
    </div>
  );
}

export default Home;
