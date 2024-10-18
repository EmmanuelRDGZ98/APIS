"use client";
import { useState } from "react";

function RandomUser() {
    const [userData, setUserData] = useState(null); // Almacena los datos del usuario
    const [error, setError] = useState(null); // Almacena un mensaje de error si no se encuentra el usuario

    const fetchRandomUser = () => {
        // Realiza la solicitud a la API de Random User
        fetch(`https://randomuser.me/api/`)
            .then((response) => response.json())
            .then((data) => {
                if (!data.results || data.results.length === 0) {
                    setError("No user data found. Please try again.");
                    setUserData(null);
                } else {
                    // Obtiene el primer usuario de la respuesta
                    setUserData(data.results[0]);
                    setError(null);
                }
            })
            .catch(() => {
                setError("An error occurred while fetching the user data.");
                setUserData(null);
            });
    };

    return (
        <div>
            <h1>Creacion de un usario random</h1>
            <button onClick={fetchRandomUser}>Boton para obtener un usario</button>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {userData ? (
                <div>
                    <h2>{userData.name.first} {userData.name.last}</h2>
                    <img src={userData.picture.large} alt={`${userData.name.first} ${userData.name.last}`} width="100" />
                    <p>Correo: {userData.email}</p>
                    <p>Ubicacion: {userData.location.city}, {userData.location.country}</p>
                    <p>Edad: {userData.dob.age}</p>
                </div>
            ) : (
                <p>Click the button to get information about a random user.</p>
            )}
        </div>
    );
}

export default RandomUser;
