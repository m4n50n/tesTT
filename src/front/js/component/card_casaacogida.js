import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import propTypes from "prop-types";
import "../../styles/protectoralogin.css";

export function CasaAcogidaCard(props) {
  const { actions, store } = useContext(Context);
  useEffect(() => {
    actions.organizacion_list();
  }, []);

  return (
    <div className="">
      <div className="card" style={{ width: "18rem" }} />
      <div className="card-body card-border">
        {/* <div>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setPhot(e.target.photo)}
          />
        </div> */}
        <ul className="list-group list-group-flush ">
          <li
            className="ctitle list-group-item active text-break titlecard "
            aria-current="true">  {props.pet.name}
          </li>
          <li className="list-group-item text-break emailcard ">Email:{props.pet.email}</li>
          <li className="list-group-item text-break ciudadcard ">Ciudad:{props.pet.city}</li>
          <li className="list-group-item text-break dispcard">Disponibilidad:{props.pet.avaiability}
          </li>
          <li className="list-group-item text-break animalcard ">Animales:{props.pet.animals}
          </li>
        </ul>
        <Link to={"/contacto"}> 
          <button type="button" className="bcontactanos">
           Contacta con nosotros {" "}
           </button>
        </Link>
      </div>
    </div>
  );
}

CasaAcogidaCard.propTypes = {
  pet: propTypes.any,
};
