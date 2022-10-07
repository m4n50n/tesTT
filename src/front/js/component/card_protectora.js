import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import propTypes from "prop-types";
import "../../styles/card_protectora.css";

export function Card_protectora(props) {
  const { actions, store } = useContext(Context);
  useEffect(() => {
    actions.organizacion_list();
  }, []);
  return (
    <div className="card cardsprotectora">
      <div
        className="card"
        style={{
          width: "18rem",
          backgroundColor: "transparent",
          border: "0px",
        }}
      />
      <div className="card-body protectoracard">
        <ul className="list-group list-group-flush">
          <h5 className="list-group-item titulocard">
            <b>Protectora:</b> {props.organizacion.name}
          </h5>
          <li className="list-group-item">
            <b>Email:</b> {props.organizacion.email}
          </li>
          <li className="list-group-item">
            {" "}
            <b>Instagram:</b> {props.organizacion.instagram}
          </li>
          <li className="list-group-item">
            <b> Ciudad:</b>
            {props.organizacion.city}
          </li>
          <li className="list-group-item">
            <b>Teléfono:</b>
            {props.organizacion.phone}
          </li>
        </ul>
        {/* <button type="button" className="btn btn-warning botoncontacto">
          <Link to={"/contacto"}>¡Contacta con la protectora!</Link>{" "}
        </button> */}
      </div>
    </div>
  );
}
Card_protectora.propTypes = {
  organizacion: propTypes.any,
};
