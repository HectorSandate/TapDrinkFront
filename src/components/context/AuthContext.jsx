import React, { createContext, useState, useEffect, useContext } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        // Intentar cargar el usuario desde localStorage al iniciarse el contexto
        const savedUser = localStorage.getItem('user');
        return savedUser ? JSON.parse(savedUser) : null;
    });

    const login = (userData) => {
        setUser(userData);
        // Guardar el usuario en localStorage (elimina solo una línea que setea el objeto completo)
        localStorage.setItem('user', JSON.stringify(userData));
    };

    const logout = () => {
        setUser(null);  // Limpiar el usuario desde el estado de React
        localStorage.removeItem('user');  // Eliminar el usuario de localStorage
    };

    // useEffect para mantener el estado del usuario actualizado con localStorage
    useEffect(() => {
        const savedUser = localStorage.getItem('user');
        if (savedUser) {
            const parsedUser = JSON.parse(savedUser);
            // Aquí podría añadirse validación para verificar la integridad de `parsedUser`
            setUser(parsedUser); 
        }
    }, []);

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
