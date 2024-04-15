import React, { useState, useEffect } from 'react';

const UserUpdate = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const userId = localStorage.getItem('userId'); // Obtén el userId del localStorage

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch(`https://taplibkback.onrender.com/api/get/user/${userId}`);
                if (!response.ok) {
                    throw new Error('Error al obtener los datos del usuario');
                }
                const userData = await response.json();
                setUser(userData.user);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        };

        fetchUserData();
    }, [userId]);

    if (loading) {
        return <div>Cargando...</div>;
    }

    if (!user) {
        return <div>No se pudo encontrar el usuario</div>;
    }

    return (
        <div>
            <h2>Perfil de Usuario</h2>
            <p>Nombre: {user.name}</p>
            <p>Email: {user.email}</p>
            {/* Agrega más detalles del usuario aquí si es necesario */}
        </div>
    );
};

export default UserUpdate;
