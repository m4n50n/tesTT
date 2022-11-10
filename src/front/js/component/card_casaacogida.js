import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import propTypes from "prop-types";
import { navigate, useNavigate, Link } from "react-router-dom";
import "../../styles/protectoralogin.css";

export function Card_casaacogida(props) {
  const { actions, store } = useContext(Context);
  const navigate = useNavigate();
  useEffect(() => {
    actions.organizacion_list();
  }, []);

  return (
    <div className="row">
      <div
        style={{
          width: "350px",
          backgroundColor: "transparent",
          border: "0px",
        }}
      />
      <div className="card-body col-6 card-acogida">
        <div className="list-group list-group-flush">
          <h3 className="titulocard">{props.organizacion.name}</h3>
          <div className="item-casa">
            <label>Email:</label> {props.organizacion.email}
          </div>
          <div className="item-casa">
            <label> Ciudad:</label>
            {props.organizacion.city}
          </div>
          <div className="item-casa">
            <label>Disponibilidad:</label>
            {props.organizacion.avaiavility}
          </div>
          <div className="item-casa">
            <label>Convivo con:</label> {props.organizacion.animals}
          </div>
          <div className="mx-auto">
            <Link
              className="btn btn-warning boton-casa text-white"
              to={"/contacto"}
            >
              ¡Contacta!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

Card_casaacogida.propTypes = {
  pet: propTypes.any,
};
