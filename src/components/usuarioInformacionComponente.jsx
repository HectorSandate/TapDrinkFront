import React from 'react';

const UserPage = () => {
  const user = {
      name: 'Nombre de usuario',
      email: 'usuario@correo.com',
      password: 'contraseña segura',
      image: 'https://via.placeholder.com/150'
  };

  return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
          <div className="p-10 text-center bg-white rounded shadow-lg">
              <img className="w-24 h-24 mb-5 rounded-full mx-auto" src={user.image} alt="profile_picture" />
              <div className="text-2xl mb-2">{user.name}</div>
            
              <div className="text-lg text-gray-500 mb-6">
                <strong>Email:</strong> {user.email}
              </div>

              <div className="text-lg text-gray-500">
                <strong>Contraseña:</strong> {user.password}
              </div>
          </div>
      </div>
  );
}

export default UserPage;
