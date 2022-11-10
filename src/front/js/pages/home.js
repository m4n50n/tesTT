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
      <div id="slider" class="carousel slide mb-3" data-ride="carousel">
          <ol className="carousel-indicators">
            <li
              data-target="#myCarousel"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="item active">
              <img
                src={Barnerprotectora}
                className="d-block w-100 col-xs-12 col-xl-12 barnerprotectora"
                alt="barnerprotectora"
              />
            </div>
            <div className="carousel-item">
              <img src={Barneracogida} className="d-block w-100" alt="logo" />
            </div>
            <div className="carousel-item">
              <img
                src={Barnerprotectora}
                className="d-block w-100"
                alt="logo"
              />
            </div>
          </div>
        </div>

        <a
          className="left carousel-control"
          href="#myCarousel"
          data-slide="prev"
        >
          <span className="glyphicon glyphicon-chevron-left"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="right carousel-control"
          href="#myCarousel"
          data-slide="next"
        >
          <span className="glyphicon glyphicon-chevron-right"></span>
          <span className="sr-only">Next</span>
        </a>

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
