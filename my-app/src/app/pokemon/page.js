"use client";
import { useState, useEffect } from "react";

function Pokemon() {
    const [pokemonName, setPokemonName] = useState(""); // Estado para el nombre del Pokémon buscado
    const [pokemonData, setPokemonData] = useState(null); // Estado para almacenar los datos del Pokémon
    const [error, setError] = useState(null); // Estado para manejar errores en la búsqueda

    // Función para buscar el Pokémon
    const handleSearch = () => {
        if (!pokemonName) return; // No buscar si el nombre está vacío

        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Pokemon no encontrado");
                }
                return response.json();
            })
            .then(data => {
                setPokemonData(data);
                setError(null); // Limpiar el estado de error si la búsqueda es exitosa
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
