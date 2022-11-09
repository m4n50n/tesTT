import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import propTypes from "prop-types";
import { navigate, useNavigate } from "react-router-dom";
import "../../styles/card_protectora.css";

export function Card_protectora(props) {
  const { actions, store } = useContext(Context);
  const navigate = useNavigate();
  useEffect(() => {
    actions.organizacion_list();
  }, []);
  return (
    <div className="row">
      <div className="card card-protectora">
        <div
          style={{
            width: "350px",
            backgroundColor: "transparent",
            border: "0px",
          }}
        />
        <div className="card-body col-6 protectoracard">
          <div className="list-group list-group-flush">
            <h5 className="list-group-item titulocard">
              <b>Protectora:</b> {props.organizacion.name}
            </h5>
            <div>
              <b>Email:</b> {props.organizacion.email}
            </div>
            <div>
              <b> Ciudad:</b>
              {props.organizacion.city}
            </div>
            <div>
              <b>Teléfono:</b>
              {props.organizacion.phone}
            </div>
            <div>
              {" "}
              <b>Instagram:</b> {props.organizacion.instagram}
            </div>
            <div>
              {" "}
              <button type="button" className="btn boton-contacto">
                <div to={"/contacto"}>¡Contacta!</div>{" "}
              </button>
            </div>
          </div>
          {/* <button type="button" className="btn btn-warning botoncontacto">
          <Link to={"/contacto"}>¡Contacta con la protectora!</Link>{" "}
        </button> */}
        </div>
      </div>
    </div>
  );
}
Card_protectora.propTypes = {
  organizacion: propTypes.any,
};
