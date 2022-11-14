import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import propTypes from "prop-types";
import { navigate, useNavigate, Link } from "react-router-dom";
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
        <div className="card-body col-6">
          <div className="list-group list-group-flush">
            <h5 className="titulocard mb-4">
              <label>Protectora:</label> {props.organizacion.name}
            </h5>
            <div className="item-protectora">
              <label>Email:</label> {props.organizacion.email}
            </div>
            <div className="item-protectora">
              <label> Ciudad:</label>
              {props.organizacion.city}
            </div>
            <div className="item-protectora">
              <label>Teléfono:</label>
              {props.organizacion.phone}
            </div>
            <div className="item-protectora">
              <label>Instagram:</label> {props.organizacion.instagram}
            </div>
            <div className="mx-auto">
              <Link
                className="btn btn-warning boton-protectora text-white mt-4"
                to={"/contacto"}
              >
                ¡Contacta!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
Card_protectora.propTypes = {
  organizacion: propTypes.any,
};
