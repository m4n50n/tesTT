import { Link } from "react-router-dom";
import React, { useContext, useEffect } from "react";
export function CasaAcogida(props) {
  return (
    <div>
      <div class="card" style={{ width: "18rem" }} />
      <img src="" class="card-img-top" alt="..." />
      <div class="card-body">
        <ul class="list-group list-group-flush">
          <li class="list-group-item"></li>
          <li class="list-group-item"></li>
          <li class="list-group-item"></li>
          <li class="list-group-item"></li>
          <li class="list-group-item"></li>
        </ul>
        <button>
          <Link to={"contacto/"}>Inicia Sesión!</Link>{" "}
        </button>
      </div>
    </div>
  );
}
export default CasaAcogida;
