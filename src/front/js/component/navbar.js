import React, { Component, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/index.css";
import Homeppet from "../../img/Homeppet.png";
import Texto from "../../img/texto.png";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  return (
    <div className="navbar-brand colornavbar">
      <div className="row menu align-items-center">
        <div className="col-2">
          <div className="m-l-20 d-flex">
            <img
              className="m-r-10 logofoto"
              style={{ width: "120px" }}
              src={Homeppet}
              alt="logo"
            />
            <img
              className="textologo"
              style={{ width: "120px" }}
              src={Texto}
              alt="texto"
            />
          </div>
        </div>
        {!store.isAuthenticate ? (
          <div className="col-10 ">
            <div className="d-flex justify-content-evenly">
              <div className="align-items-start">
                <Link to="/">
                  {" "}
                  <button type="button" className="btn buttonhome">
                    INICIO{" "}
                  </button>
                </Link>
              </div>
              <div className="align-items-center">
                <Link to="/register">
                  <button type="button" className="btn buttonhome">
                    REGISTRATE{" "}
                  </button>
                </Link>
              </div>
              <div className="align-items-center">
                <Link to="/login">
                  <button type="button" className="btn buttonhome">
                    LOGIN{" "}
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
          </div>
        ) : (
          <div className="col-10">
            <div className="d-flex justify-content-evenly">
              <div className="align-items-start">
                <Link to="/">
                  {" "}
                  <button
                    type="button"
                    className="buttonacess botonclose btn botonclose"
                  >
                    INICIO{" "}
                  </button>
                </Link>
              </div>

              <Link to="/editusuario">
                <button
                  type="button"
                  className="buttonacess botonclose btn botonclose"
                >
                  Perfil{" "}
                </button>
              </Link>

              <div className="align-items-start">
                {" "}
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
              </div>

              <div>
                <a className="link-dark text-decoration-none" href=""></a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
