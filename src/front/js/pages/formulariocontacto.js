
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Contacto= () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then(() => {
      }).done(function() {
        alert('Correo enviado');
    }).fail(function(error) {
        alert('Correo no enviado.. ' + JSON.stringify(error));
    });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
    
      <div>
      <label>Email</label>
      <input type="email" name="user_email" />
      </div>
      
      <div>
      <label>Message</label>
      <textarea name="message" />
      </div>

      <button onClick={ Contacto} type="submit"className="btn  sub btn-secondary">Enviar</button>

    </form>
  );
};