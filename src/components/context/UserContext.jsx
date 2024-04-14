import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      try {
        setUserData(JSON.parse(storedUserData));
      } catch (error) {
        console.error("Error parsing user data from localStorage:", error);
        // Intentar recuperar los datos del usuario del backend
        fetchUserData();
      }
    } else {
      fetchUserData();
    }
  }, []);

  const setUser = (data) => {
    if (data) {
      setUserData(data);
      localStorage.setItem("userData", JSON.stringify(data));
    } else {
      console.error("No se pueden establecer los datos de usuario. El valor es 'undefined'.");
    }
  };

  const fetchUserData = async () => {
    try {
      const response = await axios.get("https://taplibkback.onrender.com/api/user");
      if (response.data.user) {
        setUserData(response.data.user);
      } else {
        console.error("El backend devolvió un valor 'undefined' para los datos del usuario.");
      }
    } catch (error) {
      console.error("Error al obtener los datos del usuario:", error);
    }
  };

  return (
    <UserContext.Provider value={{ userData, setUser }}>
      {children}
    </UserContext.Provider>
  );
};