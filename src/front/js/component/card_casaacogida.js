import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import propTypes from "prop-types";
import { navigate, useNavigate } from "react-router-dom";
import "../../styles/protectoralogin.css";

export function card_casaacogida(props) {
  const { actions, store } = useContext(Context);
  const navigate = useNavigate();
  useEffect(() => {
    actions.organizacion_list();
  }, []);

  return (
    <div className="row">
      <div className="card card-acogida"></div>
      <div
        style={{
          width: "350px",
          backgroundColor: "transparent",
          border: "0px",
        }}
      />
      <div className="card-body col-6">
        <div className="list-group list-group-flush">
          <h5 className="list-group-item titulocard">
            Protectora {props.organizacion.name}
          </h5>
          <div>
            <b>Email:</b> {props.organizacion.email}
          </div>
          <div>
            <b> Ciudad:</b>
            {props.organizacion.city}
          </div>
          <div>
            <b>Disponibilidad:</b>
            {props.organizacion.avaiavility}
          </div>
          <div>
            {" "}
            <b>Convivo con:</b> {props.organizacion.animals}
          </div>
          <div>
            {" "}
            <button type="button" className="btn boton-contacto">
              <div to={"/contacto"}>¡Contacta!</div>{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

card_casaacogida.propTypes = {
  pet: propTypes.any,
};
