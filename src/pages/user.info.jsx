import React from "react";
import BarNavi from "../components/HomeNav";

import '../css/userPage.css';
import UserPage from "../components/usuarioInformacion";


function RegisterRecipe() {

  return (
    <>
      <div className="bar-navigator-container ">
        <BarNavi />
      </div>
      <div className="user-page-container black-background">
          <div className="card-user">
              <UserPage />
          </div>
      </div>
    </>
  );
}

export default RegisterRecipe;