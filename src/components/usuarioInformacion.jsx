import React, { useContext } from 'react';
import '../css/card.css';
import pfp from '../assets/images/pinfuino.jpeg';
import { Button } from 'react-bootstrap';
import { UserContext } from './context/UserContext';

const UserPage = () => {
  const { userData } = useContext(UserContext);

  const botonesStyle = {
    fontFamily: 'Roboto Mono, monospace',
  };

  return (
    <div className="user-style text-center">
      <div className="user-header">
        <img src={pfp} className="pfp-user rounded-circle" alt="pfp" />
      </div>
      <div className="user-body">
        {userData ? (
          <>
            <p className="user-name"><strong>User:</strong> {userData.name}</p>
            <p className="user-email"><strong>Email:</strong> {userData.email}</p>
          </>
        ) : (
          <>
            <p className="user-name"><strong>User:</strong> Nombre de usuario</p>
            <p className="user-email"><strong>Email:</strong> Correo electrónico</p>
          </>
        )}
        <Button variant="info" className="button-data" style={botonesStyle}>
          Actualizar Datos
        </Button>
        <Button variant="danger" className="button-log" style={botonesStyle}>
          Log out
        </Button>
      </div>
    </div>
  );
};

export default UserPage;