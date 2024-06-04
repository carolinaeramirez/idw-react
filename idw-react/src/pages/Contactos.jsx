import React from 'react';
import "../styles/estilos.css";
import iconos from "https://kit.fontawesome.com/b408879b64.js";

export default function Contactos() {
  return (
    <div>
      <div className="container">
        <div className="box-info">
            <h1>CONTÁCTATE CON NOSOTROS</h1>
            <div className="data">
                <p><i className="fa-solid fa-phone"></i> +54 343 154224 4587</p>
                <p><i className="fa-solid fa-envelope"></i> Hospedog@gmail.com</p>
                <p><i className="fa-solid fa-location-dot"></i> 25 de Mayo 540 - Paraná - Entre Ríos - CP 3100 - Argentina</p>
            </div>
            <div className="links">
                <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                <a href="#"><i className="fa-brands fa-instagram"></i></a>
                <a href="#"><i className="fa-brands fa-twitter"></i></a>
                <a href="#"><i className="fa-brands fa-linkedin"></i></a>
            </div>
        </div>
        
        <form>
            <div className="input-box">
                <input type="text" placeholder="Nombre y apellido" required />
                <i className="fa-solid fa-user"></i>
            </div>
            <div className="input-box">
                <input type="email" required placeholder="Correo electrónico" />
                <i className="fa-solid fa-envelope"></i>
            </div>
            <div className="input-box">
                <input type="text" placeholder="Asunto"/> 
                <i className="fa-solid fa-pen-to-square"></i>
            </div>
            <div className="input-box">
                <textarea placeholder="Escribe tu mensaje..."></textarea>
            </div>
            <div>
                <button type="submit" className="search-button" id="button-enviar">Enviar mensaje</button> 
            </div>
        </form>
    </div>
    </div>
  )
}
