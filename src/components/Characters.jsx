import React, { useState, useEffect } from 'react'

const Characters = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character/')
        .then(res => res.json())
        .then(data => setCharacters(data.results))
    }, [])
    console.log(characters)

    return (
        <div className="characters">
            {characters.map(character => (
                <div>
                    <h2>{character.name}</h2>
                    <img src={character.image} alt=""/>
                </div>
            ))}
        </div>
    )
}

export default Characters

