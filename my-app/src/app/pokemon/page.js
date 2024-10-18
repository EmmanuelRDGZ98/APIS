"use client";
import { useState, useEffect } from "react";

function Pokemon() {
    const [pokemonName, setPokemonName] = useState("");
    const [pokemonData, setPokemonData] = useState(null);
    const [error, setError] = useState(null); 

    
    const handleSearch = () => {
        if (!pokemonName) return;

        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Pokemon no encontrado");
                }
                return response.json();
            })
            .then(data => {
                setPokemonData(data);
                setError(null); 
            })
            .catch(err => {
                setPokemonData(null);
                setError("Intenta de nuevo");
            });
    };

    return (
        <div>
            <h1>Buscador de pokemones</h1>
            <input
                type="text"
                value={pokemonName}
                onChange={(e) => setPokemonName(e.target.value)}
                placeholder="Pon tu pokemon favorito"
            />
            <button onClick={handleSearch}>Buscar</button>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {pokemonData ? (
                <div>
                    <h2>{pokemonData.name}</h2>
                    <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
                    <p>Altura: {pokemonData.height}</p>
                    <p>Peso: {pokemonData.weight}</p>
                </div>
            ) : (
                <p>Buscar para una pokemon</p>
            )}
        </div>
    );
}

export default Pokemon;
