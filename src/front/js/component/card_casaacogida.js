import React, { useContext } from "react";
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
    <div>
      <div className="card" style={{ width: "18rem" }} />
      <div className="card-body">
        <div className="cardacogida">
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setPhot(e.target.photo)}
          />
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item active" aria-current="true">
            {prop.organizacion.name}
          </li>
          <li className="list-group-item">{prop.organizacion.email}</li>
          <li className="list-group-item">{prop.organizacion.city}</li>
          <li className="list-group-item">{prop.organizacion.avaiability}</li>
          <li className="list-group-item">{prop.organizacion.animals}</li>
        </ul>

        <button type="button">
          <Link to={"/contacto"}>¡Contacta con nosotros!</Link>{" "}
        </button>
      </div>
    </div>
  );
}

CasaAcogidaCard.propTypes = {
  organizacion: propTypes.any,
};
