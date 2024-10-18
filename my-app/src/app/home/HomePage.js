"use client";
import { useState } from "react";
import SearchBar from "./components/SearchBar";

const HomePage = () => {
    const [result, setResult] = useState(null);
    const apiOptions = [
        { label: "PokeAPI", value: "pokemon" },
        { label: "Map API", value: "maps" },
        { label: "Movie API", value: "movies" },
    ];

    const handleSearch = (query, api) => {
        let url = "";
        switch (api) {
            case "pokemon":
                url = `https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`;
                break;
            case "maps":
                // Ejemplo para Mapbox, sustituyendo 'YOUR_ACCESS_TOKEN'
                url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?access_token=YOUR_ACCESS_TOKEN`;
                break;
            case "movies":
                // Ejemplo para OMDB, sustituyendo 'YOUR_API_KEY'
                url = `https://www.omdbapi.com/?t=${query}&apikey=YOUR_API_KEY`;
                break;
            default:
                return;
        }

        fetch(url)
            .then((response) => response.json())
            .then((data) => setResult(data))
            .catch((error) => console.error("Error fetching data:", error));
    };

    return (
        <div>
            <h1>API Showcase</h1>
            <SearchBar onSearch={handleSearch} placeholder="Search..." apiOptions={apiOptions} />
            {result && (
                <div>
                    <h2>Search Results:</h2>
                    <pre>{JSON.stringify(result, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default HomePage;
