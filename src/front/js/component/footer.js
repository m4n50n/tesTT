import React, { Component } from "react";
import "../../styles/index.css";
export const Footer = () => (
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-6 text-left">
          <h6 class="text-muted lead">KODU</h6>
          <h6 class="text-muted">
            Herramienta online, que actúa como punto de encuentro<br></br> entre
            las diferentes protectoras y las casas de acogida<br></br> que
            quieren compartir sus hogares con su nuevo amigo.
          </h6>
        </div>

        <div class="col-xs-12 col-md-6 text-right">
          <h6 class="text-muted lead">ENCUENTRANOS EN LAS REDES</h6>
          <div class="redes-footer">
            <a href="https://www.facebook.com/">
              <img src="imagenes/facebook-2.png" />
            </a>
            <a href="https://twitter.com/">
              <img src="imagenes/twitter-2.png" />
            </a>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 text-right">
          <p class="text-muted small"> </p>
        </div>
      </div>
    </div>
  </footer>
);
