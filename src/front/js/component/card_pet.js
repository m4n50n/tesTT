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
    <div className="row">
      <div
        className="card "
        style={{
          width: "18rem",
          // height: "18rem",
          // border: "0px",
        }}
      >
        <div className="card-body carta-perro">
          <img
            src={props.pet.photo}
            className="card-img-top fotocard"
            alt="..."
          />
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
            <li className="list-group-item">
              {" "}
              <button
                type="button"
                className="btn btn-warning text-align:center mt-3"
              >
                <Link to={"/contacto"}>¡Contacta!</Link>{" "}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
Cardperros.propTypes = {
  pet: propTypes.any,
};
