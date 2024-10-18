"use client";
import { useState } from "react";

function Dogs() {
    const [dogBreed, setDogBreed] = useState(""); // Almacena la raza del perro ingresada por el usuario
    const [dogImage, setDogImage] = useState(null); // Almacena la URL de la imagen del perro
    const [error, setError] = useState(null); // Almacena un mensaje de error si no se encuentra la imagen

    const handleSearch = () => {
        if (!dogBreed) return; // No buscar si la raza está vacía

        // Formatea la raza para la API
        const formattedBreed = dogBreed.toLowerCase().replace(" ", "-");

        // Realiza la búsqueda de imágenes en la API Dogs
        fetch(`https://dog.ceo/api/breed/${formattedBreed}/images/random`)
            .then((response) => response.json())
            .then((data) => {
                if (data.status === "error") {
                    setError("Intenta de nuevo");
                    setDogImage(null);
                } else {
                    setDogImage(data.message); // Obtiene la URL de la imagen
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
