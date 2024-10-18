"use client";
import { useState } from "react";

function RandomUser() {
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(null);

    const fetchRandomUser = () => {
    
        fetch(`https://randomuser.me/api/`)
            .then((response) => response.json())
            .then((data) => {
                if (!data.results || data.results.length === 0) {
                    setError("Intenta de nuevo");
                    setUserData(null);
                } else {
                    
                    setUserData(data.results[0]);
                    setError(null);
                }
            })
            .catch(() => {
                setError("Un errorcito");
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
