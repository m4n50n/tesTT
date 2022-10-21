import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../../styles/contacto.css";
import { useNavigate } from "react-router-dom";

export const Contacto = () => {
  const form = useRef();
  const [mensaje, setMensaje] = useState("");
  const navigate = useNavigate();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_0lcpisi",
        "template_0tne4pu",
        form.current,
        "d1qvpD644gnPtSeP0"
      )
      .then(
        (result) => {
          console.log(result);
          if (result.text === "OK") {
            setMensaje("Enviado con éxito");
            navigate("/");
          } else {
            setMensaje("El mensaje no ha sido enviado");
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <form className="formulariocontacto" ref={form} onSubmit={sendEmail}>
        <div className="container containercontacto mb-6">
          <div className="card cardcontacto">
            <div className="top-div contactodiv mensaje">
              <h5>
                Deja un mensaje a la protectora, ¡te responderán lo antes
                posible!
              </h5>
              <i className="fa fa-close"></i>
            </div>
            <div className="details">
              <div className="input-text">
                <input
                  className="inputcontacto"
                  type="text"
                  required="required"
                />
                <span>Email</span>
              </div>
              <div className="input-text">
                <input
                  className="inputcontacto"
                  type="text"
                  required="required"
                />
                <span>Mensaje</span>
              </div>
            </div>
            <div className="last">
              <input className="botonenviar" type="submit" value="Enviar" />
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
