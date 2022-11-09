import React, { Component, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/index.css";
import Logonombre from "../../img/Logonombre.png";

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
              style={{ width: "175px" }}
              src={Logonombre}
              alt="logo"
            />
          </Link>
        </div>
        <button
          className="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-text">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mb-2 mb-lg-0">
            {!store.isAuthenticate ? (
              <>
                <li className="nav-item text-end">
                  <Link type="button" className="btn  buttonhome" to="/">
                    INICIO
                  </Link>
                </li>
                <li className="nav-item text-end">
                  <Link to="/register">
                    <button type="button" className="btn buttonhome">
                      REGISTRATE{" "}
                    </button>
                  </Link>
                </li>
                <li className="nav-item text-end">
                  <Link to="/login">
                    <button type="button" className="btn buttonhome">
                      LOGIN{" "}
                    </button>
                  </Link>
                </li>
                <div>
                  <a className=" text-decoration-none" href=""></a>
                </div>
                {/* <div className="nav-item">
                  {/* <Link to="/maps">
                {" "}
                <button
                  type="button"
                  className="btn btn-light bg-light buttonmaps"
                  className=""
                >
                  MAPS{" "}
                </button>
              </Link> 
                </div>*/}
              </>
            ) : (
              <>
                <li className="nav-item text-end">
                  {localStorage.getItem("rol") == 1 ? (
                    <Link to="/protectoralogin">
                      {" "}
                      <button type="button" className="btn buttonhome">
                        INICIO{" "}
                      </button>
                    </Link>
                  ) : null}
                  {localStorage.getItem("rol") == 2 ? (
                    <Link to="/casaacogida">
                      {" "}
                      <button type="button" className="btn buttonhome">
                        INICIO{" "}
                      </button>
                    </Link>
                  ) : null}
                </li>
                <li className="nav-item text-end">
                  {localStorage.getItem("rol") == 1 ? (
                    <Link to="/perfilprotectora">
                      <button type="button" className="btn buttonhome">
                        PERFIL{" "}
                      </button>
                    </Link>
                  ) : null}
                  {localStorage.getItem("rol") == 2 ? (
                    <Link to="/editusuario">
                      <button type="button" className="btn buttonhome">
                        PERFIL{" "}
                      </button>
                    </Link>
                  ) : null}
                </li>
                <li className="nav-item text-end">
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
                </li>

                <div>
                  <a
                    className="link text-decoration-none colorinput"
                    href=""
                  ></a>
                </div>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
