import React, { useContext } from "react";
import { UserContext } from "./context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);
  console.log(user);

  // Renderizar los datos del usuario si existen
  return (
    <div>
      <h2>Perfil del Usuario</h2>
      {user.email ? (
        <div>
          <p>Email: {user.email}</p>
          <p>Nombre: {user.name}</p>
          {/* Mostrar otros datos relevantes del usuario */}
        </div>
      ) : (
        <div>Cargando...</div>
      )}
    </div>
  );
};

export default Profile;
