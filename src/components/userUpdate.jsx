// UserUpdate.jsx

import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useAuth } from "../components/context/AuthContext.jsx";

const UserUpdate = () => {
    const { user, login } = useAuth(); // Obtener el usuario y la función de actualización del contexto de autenticación
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        // Agregar más campos según sea necesario para actualizar el usuario
    });

    useEffect(() => {
        // Actualizar el estado del formulario con los datos del usuario
        setFormData({
            name: user.name,
            email: user.email,
            // Actualizar más campos según sea necesario
        });
    }, [user]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`https://taplibkback.onrender.com/api/user/${user.userId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Usuario actualizado con éxito');
                // Actualizar el contexto de autenticación con los nuevos datos del usuario
                const updatedUserData = { ...user, ...formData };
                login(updatedUserData);
            } else {
                alert('Error al actualizar el usuario');
            }
        } catch (error) {
            console.error('Error al actualizar el usuario:', error);
            alert('Error al actualizar el usuario');
        }
    };

    return (
        <div>
            <h2>Perfil de Usuario</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block title-style text-black">
                        Nombre
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-1 block w-full inputs-style text-black"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block title-style text-black">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1 block w-full inputs-style text-black"
                    />
                </div>
                {/* Agrega más campos según sea necesario */}
                <Button type="submit" variant="primary" className="post-button">
                    Guardar cambios
                </Button>
            </form>
        </div>
    );
};

export default UserUpdate;
