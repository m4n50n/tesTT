import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import propTypes from "prop-types";
import "../../styles/index.css";

export function CasaAcogidaCard(props) {
  const { actions, store } = useContext(Context);
  useEffect(() => {
    actions.organizacion_list();
  }, []);

  return (
    <div className="col-3">
      <div className="card" style={{ width: "18rem" }} />
      <div className="card-body">
        {/* <div>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setPhot(e.target.photo)}
          />
        </div> */}
        <ul className="list-group list-group-flush">
          <li
            className="list-group-item active text-break "
            aria-current="true"
          >
            {props.pet.name}
          </li>
          <li className="list-group-item text-break ">{props.pet.email}</li>
          <li className="list-group-item text-break ">{props.pet.city}</li>
          <li className="list-group-item text-break ">
            {props.pet.avaiability}
          </li>
          <li className="list-group-item text-break ">{props.pet.animals}</li>
        </ul>

        <button type="button">
          <Link to={"/contacto"}>¡Contacta con nosotros!</Link>{" "}
        </button>
      </div>
    </div>
  );
}

CasaAcogidaCard.propTypes = {
  pet: propTypes.any,
};
