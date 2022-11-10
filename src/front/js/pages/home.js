import React, { useEffect, useState } from "react";

import Barnerprotectora from "../../img/Barnerprotectora.png";
import Barneracogida from "../../img/Barneracogida.png";
import Portada2 from "../../img/Portada2.png";
import Mapahome from "./mapahome";

import "../../styles/index.css";

export const Home = () => {
  return (
    <>
      <div>
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner col-lg-8 col-md-8 col-sm-12 col-xs-12">
            <div className="carousel-item active justify-content-center">
              <img
                src={Barneracogida}
                className="d-block imagenportada"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src={Barnerprotectora}
                className="d-block imagenportada"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src={Barneracogida}
                className="d-block imagenportada"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div>
          <center className="titulomapahome">
            Ayuda a los animales que estén cerca de ti
          </center>
        </div>
        <div className="mapa-home">
          <Mapahome />
        </div>
      </div>

      <div />
    </>
  );
};
