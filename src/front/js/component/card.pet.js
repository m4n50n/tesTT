import React from "react";

function Cardperros() {
  return (
    <div>
      <div class="card" style={{ width: "18rem" }} />
      <img
        src="https://i.picsum.photos/id/1012/3973/2639.jpg?hmac=s2eybz51lnKy2ZHkE2wsgc6S81fVD1W2NKYOSh8bzDc"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Nombre</li>
          <li class="list-group-item">Edad</li>
          <li class="list-group-item">Raza</li>
          <li class="list-group-item">Convivencia con otros animales</li>
          <li class="list-group-item">Sexo</li>
        </ul>
      </div>
    </div>
  );
}
export default Cardperros;
