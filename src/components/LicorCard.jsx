import React from "react";
//import { Button } from "react-bootstrap";

function LicorCardDetail({ licor }) {

  return (
    <div className="card">
      {licor.image && licor.image.secure_url &&
        <img src={licor.image.secure_url} className="card-img-top" alt="Licor" />
      }
      <div className="card-body">
        <h5 className="card-title">Nombre:{licor.nombreLicor}</h5>
        <p className="card-text">Mililitros: {licor.mililitros}</p>
        {/* <Button>Descargar qr{licores.qr}</Button> */}
      </div>
    </div>
  );
}

export default LicorCardDetail;
