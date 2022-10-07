import React, { Component, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  return (
    <div className="container-fluid">
      {/* <div className="row">
        <div className="col-12">
          <div className="d-flex justify-content-center">
            <img
              className="logo"
              src="https://www.creativefabrica.com/wp-content/uploads/2021/04/29/Dog-line-outline-monoline-logo-Graphics-11485513-1-580x386.png"
              alt="logo"
            />
          </div>
        </div>
      </div> */}

      <div className="row menu pt-2 pb-2">
        {!store.isAuthenticate ? (
          <div>
            <div className="col-4 text-center">
              <Link to="/login">
                {" "}
                <a className="link-dark text-decoration-none" href="">
                  INICIO
                </a>
              </Link>
            </div>
            <div className="col-4 text-center">
              <a className="link-dark text-decoration-none" href=""></a>
            </div>
            <div className="col-4 text-center">
              <Link to="/register">
                <a className="link-dark text-decoration-none" href="">
                  REGISTRATE
                </a>
              </Link>
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
              className="buttonacess botonclose"
              class="btn botonclose"
            >
              Cerrar sesión{" "}
            </button>
            <Link to="/perfilusuario">
              <button
                type="button"
                className="buttonacess botonclose"
                class="btn botonclose"
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
