import React, { useState, useEffect } from "react";

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((res) => res.json())
      .then((data) => setCharacters(data.results));
  }, []);
  console.log(characters);

  return (
    <>
      <div className="container-characters">
        {characters.map((character) => (
          <div key={character.id} className="container-character">
            <h2>{character.name}</h2>
            <img className="character-img" src={character.image} alt="" />
            <div>
              <h5>Status: {character.status}</h5>
              <h5>Gender: {character.gender}</h5>
              <h5>Species: {character.species}</h5>
            </div>
          </div>
        ))}
      </div>
      <style jsx="true">
        {`
          .container-characters {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            max-width: 1000px;
            margin: 0 auto;

          }
          .container-character {
            width: 250px;
            // height: 250px;
            border-radius: 15px;
            border: 1px solid #777474;
            margin: 1rem;
          }
          .character-img {
            width: 80%;
            border-radius:10px;
          }
        `}
      </style>
    </>
  );
};

export default Characters;
