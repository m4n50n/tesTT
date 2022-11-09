import React, { useContext, useEffect } from "react";
import { divnk } from "react-router-dom";
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
            className="card-img-top fotocard"
            alt="..."
          />
          <div className="list-group list-group-flush">
            <div className="item-pet">
              <b>Nombre:</b> {props.pet.name}
            </div>
            <div className="item-pet">
              <b>Edad:</b> {props.pet.years}
            </div>
            <div className="item-pet">
              {" "}
              <b>Raza:</b> {props.pet.race}
            </div>
            <div className="item-pet">
              <b> Convive con:</b>
              {props.pet.convivencia}
            </div>
            <div className="item-pet">
              <b>Sexo:</b>
              {props.pet.sexo}
            </div>
            <div className="item-pet-l">
              {" "}
              <b>Dirección:</b> {props.pet.adresses}
            </div>
            <div className="">
              {" "}
              <button type="button" className="btn btn-warning boton-contacta">
                <div to={"/contacto"}>¡Contacta!</div>{" "}
              </button>
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
