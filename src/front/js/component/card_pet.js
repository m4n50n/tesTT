import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import propTypes from "prop-types";
import "../../styles/card_pet.css";

export function Cardperros(props) {
  const { actions, store } = useContext(Context);
  useEffect(() => {
    actions.pet_list();
  }, []);
  return (
    <div className="container-fluid">
      <div
        className="card"
        style={{
          width: "18rem",
          backgroundColor: "transparent",
          border: "0px",
        }}
      />
      <div className="card-body">
        <img src={props.pet.photo} className="card-img-top" alt="..." />
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Nombre:</b> {props.pet.name}
          </li>
          <li className="list-group-item">
            <b>Edad:</b> {props.pet.years}
          </li>
          <li className="list-group-item">
            {" "}
            <b>Raza:</b> {props.pet.race}
          </li>
          <li className="list-group-item">
            <b> Convive con:</b>
            {props.pet.convivencia}
          </li>
          <li className="list-group-item">
            <b>Sexo:</b>
            {props.pet.sexo}
          </li>
        </ul>
        <button type="button" className="btn btn-warning botoncontacto">
          <Link to={"/contacto"}>¡Contacta con la protectora!</Link>{" "}
        </button>
      </div>
    </div>
  );
}
Cardperros.propTypes = {
  pet: propTypes.any,
};
