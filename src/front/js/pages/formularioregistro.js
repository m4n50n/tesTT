import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Register = () => {
  const { store, actions } = useContext(Context);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [instagram, setInstagram] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const [rol, setRol] = useState("");
  const [avaiability, setAvaiability] = useState("");
  const [animals, setAnimals] = useState("");

  useEffect(() => {
    actions.roles();
  }, []);

  const register = () => {
    actions.register(email, password, name, phone, city, rol);
  };

  return (
    <div className="principal-container text-center">
      <div className="myform">
        <h4>Registrate!</h4>
        <div className="form-group">
          <label>Rol</label>
          <select name="rol" onChange={(e) => setRol(e.target.value)}>
            <option disabled value={""}>
              Seleccione una opción
            </option>
            {store.roles.map((value, index) => {
              return (
                <option key={index} value={value.id}>
                  {value.name}
                </option>
              );
            })}
          </select>
        </div>
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
          <label></label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="form-control"
            placeholder="Phone"
          />
        </div>
        {rol == 1 ? (
          <div className="form-group">
            <label></label>
            <input
              type="text"
              value={instagram}
              onChange={(e) => setInstagram(e.target.value)}
              className="form-control"
              placeholder="Instagram"
            />
          </div>
        ) : null}
        <div className="form-group">
          <label></label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            placeholder="Contraseña"
          />
        </div>
        <div className="form-group">
          <label></label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="form-control"
            placeholder="City"
          />
        </div>
        {rol == 2 ? (
          <div className="form-group">
            <label>avaiability</label>
            <input
              type="text"
              value={avaiability}
              onChange={(e) => setAvaiability(e.target.value)}
              className="form-control"
              placeholder="Avaiability"
            />
          </div>
        ) : (
          ""
        )}
        ,
        {rol == 2 ? (
          <div className="form-group">
            <label>animals</label>
            <input
              type="text"
              value={animals}
              onChange={(e) => setAnimals(e.target.value)}
              className="form-control"
              placeholder="Animals"
            />
          </div>
        ) : (
          ""
        )}
        ,
        {store.isLoading ? (
          <Loader type="" color="#F3C766" height={80} width={80} />
        ) : (
          <div>
            <button
              onClick={() =>actions.register(email, password, name, phone, city, rol)} 
              type="submit"
              className="btn  sub btn-secondary"
            >
              Ingresar
            </button>
          </div>
        )}
        ¿Ya estás registrado? <Link to={"/"}>Inicia Sesión!</Link>{" "}
      </div>
    </div>
  );
};
