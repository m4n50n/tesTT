import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";

export const Perfilusuario = () => {
  const form = useRef();
  const { store, actions } = useContext(Context);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [avaiability, setAvaiability] = useState("");
  const [animals, setAnimals] = useState("");

  return (
    <form className="col-sm-10 mx-auto">
      <div className="form-group">
        <label></label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-control"
          placeholder="Nombre"
        />
      </div>
      <div className="form-group">
        <label></label>{" "}
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
          placeholder="Email"
        />
      </div>
      <div className="form-group">
        <label></label>{" "}
        <input
          type="text"
          value={avaiability}
          onChange={(e) => setAvaiability(e.target.value)}
          className="form-control"
          placeholder="Disponibilidad de acogida"
        />
      </div>
      <div className="form-group">
        <label></label>{" "}
        <input
          type="text"
          value={animals}
          onChange={(e) => setAnimals(e.target.value)}
          className="form-control"
          placeholder="¿Convives con más animales?"
        />
      </div>
      <div className="form-group">
        <label></label>{" "}
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="form-control"
          placeholder="Ciudad"
        />
      </div>
      <div className="form-group">
        <label></label>{" "}
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="form-control"
          placeholder="Teléfono"
        />
      </div>
    </form>
  );
};
