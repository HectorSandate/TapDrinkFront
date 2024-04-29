import React from "react";
import BarNavi from "../components/HomeNav";
import LicorFormPopover from "../components/registroLicorzz";

function RegisterLicor() {

  return (
    <>
      <div className="bar-navigator-container ">
        <BarNavi />
      </div>
      <div className="licor-page-container">
        <div className="licor-container">
          <LicorFormPopover />
        </div>
      </div>
    </>
  );
}

export default RegisterLicor;