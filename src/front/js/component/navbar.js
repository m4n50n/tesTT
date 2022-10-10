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
      <div className="row menu pt-2 pb-2 align-items-center">
        <div className="col-2">
          <div className="d-flex justify-content-center">
            <img style={{ width: "80px" }} src={Kodulogo} alt="logo" />
          </div>
        </div>
        {!store.isAuthenticate ? (
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
              <div className="align-items-center">
                <Link to="/register">
                  <button
                    type="button"
                    className="buttonacess botonclose btn botonclose"
                  >
                    REGISTRATE{" "}
                  </button>
                </Link>
              </div>
              <div className="align-items-center">
                <Link to="/login">
                  <button
                    type="button"
                    className="buttonacess botonclose btn botonclose"
                  >
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
