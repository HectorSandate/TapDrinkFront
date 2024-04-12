import React from "react";
//import { Button } from "react-bootstrap";

function LicorCardDetail({ licor }) {
    if (!licor || !licor.image) {
      return <div>No hay información disponible</div>;
    }
  
    return (
      <div className="card">
        <img src={licor.image.secure_url} className="card-img-top" alt="Licor" />
        <div className="card-body">
          <h5 className="card-title">Nombre: {licor.nombreLicor}</h5>
          <p className="card-text">Mililitros: {licor.mililitros}</p>
        </div>
      </div>
    );
  }

export default LicorCardDetail;
