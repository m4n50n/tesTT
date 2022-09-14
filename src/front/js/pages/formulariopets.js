import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const FormularioPets = () => {
  const { store, actions } = useContext(Context);
  const [pet, setPet] = useState("");

  useEffect(() => {}, []);

  const FormularioPets = () => {};
  const PetPhoto = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setPet({ ...pet, photo: e.target.files[0] });
    }
  };

  return (
    <div>
      <div className="principal-container text-center">
        <div className="myform">
          <h4>Registrate!</h4>
          <div className="input-group mb-3" />
          <label className="input-group-text" for="inputGroupFile01">
            Upload
          </label>
          <input
            type="file"
            onChange={PetPhoto}
            className="form-control"
            id="inputGroupFile01"
          />
        </div>
        <div className="form-group">
          <label></label>
          <input
            type="text"
            onChange={(e) => setPet({ ...pet, firstname: e.target.value })}
            className="form-control"
            placeholder="Nombre"
          />
        </div>
        <div className="form-group">
          <label></label>{" "}
          <input
            type="text"
            onChange={(e) => setPet({ ...pet, years: e.target.value })}
            className="form-control"
            placeholder="Years"
          />
        </div>
        <div className="form-group">
          <label></label>
          <input
            type="text"
            onChange={(e) => setPet({ ...pet, race: e.target.value })}
            className="form-control"
            placeholder="Race"
          />
        </div>
        <div className="form-group">
          <label></label>
          <input
            type="text"
            onChange={(e) => setPet({ ...pet, sexo: e.target.value })}
            className="form-control"
            placeholder="sexo"
          />
        </div>
        <div className="form-group">
          <label></label>
          <input
            type="text"
            onChange={(e) => setPet({ ...pet, convivencia: e.target.value })}
            className="form-control"
            placeholder="Convivencia"
          />
        </div>
        <div>
          <button
            onClick={() => actions.pet(pet)}
            type="submit"
            className="btn  sub btn-secondary"
          >
            Guardar
          </button>
        </div>
        ¿Ya estás registrado? <Link to={"/"}>Guardar</Link>{" "}
      </div>
    </div>
  );
};
