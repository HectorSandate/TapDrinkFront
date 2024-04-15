import React from "react";
import BarNavi from "../components/HomeNav";
import "../css/HomePage.css";
import RecetaForm from "../components/RecipeForm";
import { LampContainer } from "../components/cartaPrueba/ui/lamp.tsx";
import { motion } from "framer-motion";
import "../css/HomePage.css";

function RegisterRecipe() {
  return (
    <>
      <div className="home-page-container black-background">
        <div className="overlay">
          <div className="overlay-content">
            <div className="search-page">
              <RecetaForm />
            </div>
            <div className="bar-navigator-container">
              <BarNavi />
            </div>
          </div>
          <LampContainer>
            <motion.h1
              initial={{ opacity: 0.5, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
            ></motion.h1>
          </LampContainer>
        </div>
      </div>
    </>
  );
}

export default RegisterRecipe;
