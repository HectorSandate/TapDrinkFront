// src/context/AuthContext.js
import React, { createContext, useState, useEffect, useContext } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        // Intentar cargar el usuario desde localStorage al iniciarse el contexto
        const savedUser = localStorage.getItem('user');
        return savedUser ? JSON.parse(savedUser) : null;
    });

    const login = (userData) => {
        // Configura el usuario en el estado de React
        setUser(userData);
        localStorage.setItem('user', JSON.stringify({
            userId: userData.userId,
            name: userData.name,
            nivel: userData.nivel
          }));
        // Guardar el usuario en localStorage
        localStorage.setItem('user', JSON.stringify(userData));
    };

    const logout = () => {
        // Limpiar el usuario del estado de React
        setUser(null);
        // Eliminar el usuario de localStorage
        localStorage.removeItem('user');
        localStorage.removeItem('email');
    };

    // Asegurarse de mantener el estado del usuario actualizado con localStorage
    useEffect(() => {
        const savedUser = localStorage.getItem('user');
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
    }, []);

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
