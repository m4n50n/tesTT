import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import propTypes from "prop-types";
import "../../styles/index.css";

export function Cardperros(props) {
  const { actions, store } = useContext(Context);
  useEffect(() => {
    actions.pet_list();
  }, []);
  return (
    <div className="container-fluid testimonial-group">
      <div className="card" style={{ width: "18rem" }} />
      <div className="card-body">
      <img
          src=""
          className="card-img-top"
          alt="..."
        />
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{props.pet.name}</li>
          <li className="list-group-item">{props.pet.years}</li>
          <li className="list-group-item">{props.pet.race}</li>
          <li className="list-group-item">{props.pet.convivencia}</li>
          <li className="list-group-item">{props.pet.sexo}</li>
        </ul>
        <button type="button" className="btn btn-warning botoncontacto">
          <Link to={"/contacto"}>¡Contacta con nosotros!</Link>{" "}
        </button>
      </div>
    </div>
  );
}
Cardperros.propTypes = {
  pet: propTypes.any,
};
