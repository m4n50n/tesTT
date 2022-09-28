
import React, { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';

import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Contacto = () => {
  const form = useRef();

  const [mensaje, setMensaje] = useState("")

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0lcpisi', 'template_0tne4pu', form.current, 'd1qvpD644gnPtSeP0')
      .then((result) => {
        console.log(result)
        if (result.text==='OK'){setMensaje("enviado con exito") }
        else {setMensaje("el mensaje no ha sido enviado")}
      }, (error) => {
        console.log(error.text);
      });
  };




  return (
    <>

      <form ref={form} onSubmit={sendEmail}>

        <div>
          <label>Email</label>
          <input type="email" name="user_email" />
        </div>

        <div>
          <label>Message</label>
          <textarea name="message" />
        </div>

        <input type="submit" value="Enviar" />

      </form>

      <p>{mensaje}</p>

    </>

  );
};