import React, { Component, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/index.css";
// import Homeppet from "../../img/Homeppet.png";
// import Logorojo from "../../img/Logorojo.png";
import Logoperros from "../../img/Logoperros.png";
import Texto from "../../img/texto.png";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  return (
    <nav className="navbar navbar-expand-lg colornavbar">
      <div className="container-fluid ">
        <div className="navbar-brand">
          <Link to="/">
            <img
              className="m-r-10 logofoto"
              style={{ width: "100px" }}
              src={Logoperros}
              alt="logo"
            />
          </Link>
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler">
            <i class="fas fa-bars"></i>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <img
            className="textologo"
            style={{ width: "120px" }}
            src={Texto}
            alt="texto"
          />
          {!store.isAuthenticate ? (
            <div className="d-flex justify-content-evenly">
              <div className="align-items-start">
                <Link to="/">
                  {" "}
                  <button type="button" className="btn buttonhome">
                    INICIO{" "}
                  </button>
                </Link>
              </div>
              <div className="nav-item">
                <Link to="/register">
                  <button type="button" className="btn buttonhome">
                    REGISTRATE{" "}
                  </button>
                </Link>
              </div>
              <div className="nav-item">
                <Link to="/login">
                  <button type="button" className="btn buttonhome">
                    LOGIN{" "}
                  </button>
                </Link>
              </div>
              <div>
                <a className=" text-decoration-none" href=""></a>
              </div>
              <div className="nav-item">
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
            <div>
              <div className="d-flex justify-content-evenly">
                <div className="nav-item">
                  <Link to="/">
                    {" "}
                    <button type="button" className="btn buttonhome">
                      INICIO{" "}
                    </button>
                  </Link>
                </div>

                <Link to="/editusuario">
                  <button type="button" className="btn buttonhome">
                    PERFIL{" "}
                  </button>
                </Link>

                <div className="nav-item">
                  {" "}
                  <button
                    onClick={() => {
                      actions.logout();
                      navigate("/");
                    }}
                    type="button"
                    className="btn buttonhome"
                  >
                    CERRAR SESIÓN{" "}
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
    </nav>
  );
};
