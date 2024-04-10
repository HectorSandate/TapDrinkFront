import React, { useEffect, useState } from "react";
import axios from "axios";

function InactiveUsers() {
  const [users, setUsers] = useState([]);


  //USUARIOS----------------------------------------------------------------------------------------------------------
  useEffect(() => {
    // Cargar usuarios inactivos
    const fetchUsers = async () => {
      const res = await axios.get(
        "https://taplibkback.onrender.com/api/inactive/user"
      );
      setUsers(res.data.users);
    };

    fetchUsers();
  }, []);

  // Función para activar usuario
  const activateUser = async (id) => {
    await axios.put(`https://taplibkback.onrender.com/api/activate/${id}`);
    // Actualizar el estado para reflejar el cambio
    setUsers(users.filter((user) => user._id !== id));
  };

  return (
    <div className="grid grid-cols-3 gap-4">
        <h2>Usuarios</h2>
      {users.map((user) => (
        <div className="bg-gray-100 p-4" key={user._id}>
          <h3 className="font-bold">{user.name}</h3>
          <p>{user.email}</p>
          <button
            className="bg-blue-500 text-white p-2 mt-2"
            onClick={() => activateUser(user._id)}
          >
            Activar
          </button>
        </div>
      ))}
    </div>
  );
}

export default InactiveUsers;
