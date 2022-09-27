import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const FormularioPets = () => {
  const { store, actions } = useContext(Context);
  const [pet, setPet] = useState("");

  useEffect(() => {}, []);

  const PetPhoto = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setPet({ ...pet, photo: e.target.files[0] });
    }
  };

  return (
    <div>
      <div className="principal-container text-center">
        <div className="myform">
          <h4>¡Registra a la mascota que necesite ayuda!</h4>
          <div className="input-group mb-3 " />
          <label className="input-group-text" for="inputGroupFile01">
            Subir
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
            placeholder="Años"
          />
        </div>
        <div className="form-group">
          <label></label>
          <input
            type="text"
            onChange={(e) => setPet({ ...pet, race: e.target.value })}
            className="form-control"
            placeholder="Animal/raza"
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
            placeholder="¿Convivencia con otros animales?"
          />
        </div>
        <div>
          <button
            onClick={() => {
              actions.pets(pet);
            }}
            type="submit"
            className="btn  sub btn-secondary"
          >
            Guardar
          </button>
        </div>
        <Link to={"/protectoralogin"}>Inicio</Link>{" "}
      </div>
    </div>
  );
};
