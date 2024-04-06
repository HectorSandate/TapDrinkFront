import React from 'react';
import '../css/card.css';
import pfp from '../assets/images/pinfuino.jpeg';
import { Button } from 'react-bootstrap';

const UserPage = () => {
  const user = {
    name: 'Juan',
    email: 'juan@correo.com',
  };

  const botonesStyle = {
    fontFamily: 'Roboto Mono, monospace', 
  };

  return (
    <div className="user-style text-center">
      <div className="user-header">
        <img src={pfp}  className="pfp-user rounded-circle" alt="pfp" />
      </div>
      <div className="user-body">
        <p className="user-name"><strong>User: </strong>{user.name}</p>
        <p className="user-email"><strong>Email: </strong> {user.email}</p>
        <Button variant="info" className="button-data" style={botonesStyle}>Actualizar Datos</Button>
        <Button variant="danger" className="button-log" style={botonesStyle}>Log out</Button>
      </div>
    </div>
  );
}

export default UserPage;
