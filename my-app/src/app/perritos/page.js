"use client";
import { useState } from "react";

function Dogs() {
    const [dogBreed, setDogBreed] = useState(""); 
    const [dogImage, setDogImage] = useState(null); 
    const [error, setError] = useState(null); 

    const handleSearch = () => {
        if (!dogBreed) return; 

        
        const formattedBreed = dogBreed.toLowerCase().replace(" ", "-");

        
        fetch(`https://dog.ceo/api/breed/${formattedBreed}/images/random`)
            .then((response) => response.json())
            .then((data) => {
                if (data.status === "error") {
                    setError("Intenta de nuevo");
                    setDogImage(null);
                } else {
                    setDogImage(data.message);
                    setError(null);
                }
            })
            .catch(() => {
                setError("Error buscando perrito");
                setDogImage(null);
            });
    };

    return (
        <div>
            <h1>Imagen</h1>
            <input
                type="text"
                value={dogBreed}
                onChange={(e) => setDogBreed(e.target.value)}
                placeholder="Pon a tu perrito favorito"
            />
            <button onClick={handleSearch}>Buscar</button>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {dogImage ? (
                <div>
                    <img src={dogImage} alt={`${dogBreed}`} width="600" height="400" />
                </div>
            ) : (
                <p>Buscador para buscar imagen de un perrito</p>
            )}
        </div>
    );
}

export default Dogs;
