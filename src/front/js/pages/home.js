import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Footer } from "../component/footer";
import Fotopet from "../../img/Fotopet.png";
import Portadapet from "../../img/Portadapet.png";
import Portada2 from "../../img/Portada2.png";
import Mapahome from "./mapahome";

import "../../styles/index.css";

export const Home = () => {
  return (
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item-active">
          <img
            src={Portadapet}
            className="d-block w-100 col-xs-12 col-xl-12 imagenpet"
            alt="logo"
          />
        </div>
        <div className="carousel-item">
          <img src={Fotopet} className="d-block w-100" alt="logo" />
        </div>
        <div className="carousel-item">
          <img src={Portada2} className="d-block w-100" alt="logo" />
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
      <div className="mapa-home">
        <Mapahome />
      </div>
    </div>
  );
};
