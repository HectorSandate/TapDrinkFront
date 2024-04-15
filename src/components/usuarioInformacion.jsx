import React from 'react';
import '../css/card.css';
import pfp from '../assets/images/pinfuino.jpeg';
import { Button } from 'react-bootstrap';
import { useAuth } from './context/AuthContext';

const UserPage = () => {
  const { user, logout } = useAuth(); // Obtener el usuario y el método logout del contexto de autenticación

  const botonesStyle = {
    fontFamily: 'Roboto Mono, monospace',
  };

  return (
    <div className="user-style text-center">
      <div className="user-header">
        <img src={pfp} className="pfp-user rounded-circle" alt="pfp" />
      </div>
      <div className="user-body">
        {/* Mostrar el nombre de usuario y el correo electrónico si el usuario está autenticado */}
        {user && (
          <>
            <p className="user-name"><strong>User:</strong> {user.name}</p>
            <p className="user-email"><strong>Email:</strong> {user.email}</p>
          </>
        )}
        {/* Botón para actualizar datos */}
        <Button variant="info" className="button-data" style={botonesStyle}>
          Actualizar Datos
        </Button>
        {/* Botón para cerrar sesión */}
        <Button variant="danger" className="button-log" style={botonesStyle} href="/login" onClick={logout}>
          Log out
        </Button>
      </div>
    </div>
  );
};

export default UserPage;
