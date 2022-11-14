import React, { useContext, useEffect } from "react";
import { divnk, Link } from "react-router-dom";
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
        className="card card-pets"
        style={{
          width: "350px",
          // height: "18rem",
          // border: "0px",
        }}
      >
        <div className="card-body carta-perro">
          <img
            src={props.pet.photo}
            className="card-img-top mt-2 fotocard"
            alt="..."
          />
          <div className="list-group list-group-flush mt-4">
            <div className="item-pet">
              <label>Nombre:</label> {props.pet.name}
            </div>
            <div className="item-pet">
              <label>Edad:</label> {props.pet.years}
            </div>
            <div className="item-pet">
              {" "}
              <label>Raza:</label> {props.pet.race}
            </div>
            <div className="item-pet">
              <label> Convive con:</label>
              {props.pet.convivencia}
            </div>
            <div className="item-pet">
              <label>Sexo:</label>
              {props.pet.sexo}
            </div>
            <div className="item-pet-l">
              <label>Dirección:</label> {props.pet.adresses}
            </div>
            <div className="mx-auto">
              <Link
                className="btn btn-warning boton-contacta text-white mt-3"
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
Cardperros.propTypes = {
  pet: propTypes.any,
};
