import React from "react";

import "../css/HomePage.css";
import InactiveRecetas from '../components/inactiveRecetas'
import InactiveUsers from '../components/inactiveUsers'
import InactiveLicores from '../components/InactiveLicores'


function RegisterRecipe() {

  return (
    <>
      <div className="bar-navigator-container ">
       <h1>Inactivos</h1>
       <InactiveRecetas/>
       <InactiveUsers/>
       <InactiveLicores/>
      </div>
    </>
  );
}

export default RegisterRecipe;