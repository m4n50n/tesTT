import React, { Component } from "react";
import "../../styles/index.css";
export const Footer = () => (
  <footer>
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-md-6 text-left">
          <h6 className="d-flex justify-content-center kodutexto">KODU</h6>
          <h6 className="text-muted d-flex justify-content-center resumen">
            Herramienta online, que actúa como punto de encuentro<br></br> entre
            las diferentes protectoras y las casas de acogida<br></br> que
            quieren compartir sus hogares con su nuevo amigo.
          </h6>
        </div>

        <div className="col-xs-12 col-md-6 text-right">
          <h6 className="d-flex justify-content-center kodutexto">
            ENCUENTRANOS EN LAS REDES
          </h6>
          <div className="redes-footer d-flex justify-content-center h5">
            <a href="https://www.instagram.com/" className="m-3">
              <i className="fab fa-instagram m-auto"></i>
            </a>
            <a href="https://twitter.com/" className="m-3">
              <i className="fab fa-twitter m-auto"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 text-right">
          <p className="text-muted small"> </p>
        </div>
      </div>
    </div>
  </footer>
);
