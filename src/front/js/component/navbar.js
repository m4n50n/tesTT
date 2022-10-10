import React, { Component, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/protectoralogin.css";
import { Maps } from "../component/maps";
import "../../styles/index.css";
import Kodulogo from "../../img/Kodulogo.png";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  return (
    <div className="container-fluid">
      <div className="row menu pt-2 pb-2">
        {/* <div className="col-2">
          <div className="d-flex justify-content-center">
            <img className="logo" src={Kodulogo} alt="logo" />
          </div>
        </div> */}
        {!store.isAuthenticate ? (
          <div className="d-flex justify-content-evenly">
            <div className="align-items-start">
              <Link to="/login">
                {" "}
                <button type="button" className="btn btn-light bg-light">
                  INICIO{" "}
                </button>
              </Link>
            </div>
            <div className="align-items-center">
              <Link to="/register">
                <button
                  type="button"
                  className="btn btn-light bg-light buttonregi"
                >
                  REGISTRATE{" "}
                </button>
              </Link>
            </div>
            <div>
              <a className="link-dark text-decoration-none" href=""></a>
            </div>
            <div className="align-items-end">
              {/* <Link to="/maps">
                {" "}
                <button
                  type="button"
                  className="btn btn-light bg-light buttonmaps"
                  class=""
                >
                  MAPS{" "}
                </button>
              </Link> */}
            </div>{" "}
          </div>
        ) : (
          <>
            <button
              onClick={() => {
                actions.logout();
                navigate("/");
              }}
              type="button"
              className="buttonacess botonclose btn botonclose"
            >
              Cerrar sesión{" "}
            </button>
            <Link to="/perfilusuario">
              <button
                type="button"
                className="buttonacess botonclose btn botonclose"
              >
                Perfil{" "}
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};
