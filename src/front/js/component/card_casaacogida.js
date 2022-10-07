import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import propTypes from "prop-types";
import "../../styles/index.css";


export function CasaAcogida(prop) {
  console.log (prop)
  const { actions, store } = useContext(Context);
  return (
  <div>
    
    <div className="card" style={{ width: "18rem" }} />
       <div className="card-body">
          <div className="cardacogida">
         <img src="https://i.pinimg.com/originals/cf/76/fd/cf76fd938cb31c1ccb693745f69f87fb.jpg"  className="card-img-top" alt="..." /> 
        </div>
      <ul className="list-group list-group-flush">
          <li class="list-group-item active" aria-current="true">{prop.organizacion.name}</li>
          <li className="list-group-item">{prop.organizacion.email}</li>
          <li class="list-group-item">{prop.organizacion.city}</li>
          <li class="list-group-item">{prop.organizacion.avaiability}</li>
          <li class="list-group-item">{prop.organizacion.animals}</li>
      </ul>
  

         <button type="button">
          <Link to={"/contacto"}>¡Contacta con nosotros!</Link>{" "}
        </button>
       
       
    </div>
  </div>
  );
}

CasaAcogida.propTypes = {
  organizacion: propTypes.any,
};
