import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Footer } from "../component/footer";
import Fotopet from "../../img/Fotopet.png";
import Mapa from "../component/maps";

import "../../styles/index.css";

export const Home = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="d-flex justify-content-center">
              <img
                className="fotopett"
                style={{ width: "500px" }}
                src={Fotopet}
                alt="foto"
              />
            </div>
          </div>
          <div className="col-6 align-middle">
            <p className="textofondo">
              “Si sabes que regresas a casa, el viaje nunca es demasiado
              difícil.”
            </p>
          </div>
        </div>
      </div>

      <h1> Mappa</h1>
      <Maps location={location} zoom={18} />

      {/* <div>
        <Footer />;
      </div> */}
    </>
  );
};
