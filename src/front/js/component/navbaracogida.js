import React, { Component, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/index.css";

export const Navbaracogida = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  return (
    <div className="row navbartituloacogida">
      <div className="row menu pt-2 pb-2">
        <button
          onClick={() => {
            actions.logout();
            navigate("/");
          }}
          type="button"
          className="buttonacess botonclose btn"
        >
          Cerrar sesión{" "}
        </button>
        <button
          onClick={() => {
            actions.logout();
            navigate("/perfilusuario");
          }}
          type="button"
          className="buttonacess botonclose btn"
        >
          Perfil{" "}
        </button>
      </div>
    </div>
  );
};
