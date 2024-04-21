import React from "react";
import BarNavi from "../components/HomeNav";

import '../css/userPage.css';
import UserPage from "../components/usuarioInformacion";
import { motion } from "framer-motion";
import { LampContainer } from "../components/cartaPrueba/ui/lamp.tsx";


function RegisterRecipe() {

  return (
    <>
      <div className="user-page-container black-background">
        <div className="overlay-container">
          <LampContainer className="h-screen w-screen">
              <motion.h1
                initial={{ opacity: 0.5, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.3,
                  duration: 0.8,
                  ease: "easeInOut",
                }}
                className="mt-12 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
              ></motion.h1>
            </LampContainer>

            <div className="overlay-content">
              <div className="card-user">
                <UserPage />
              </div>
              <div className="bar-navigator-container ">
                <BarNavi />
              </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default RegisterRecipe;