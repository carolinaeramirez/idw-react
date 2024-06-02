import React from 'react';
import '../styles/estilos.css';
import {Link} from 'react-router-dom';
import logo from "../assets/img/logo.png";

export default function Nav() {
  return (
    <div>
          <header className="header">   
      <div className="logo">
        <img src= {logo} alt="logo hospedog" /> 
  <div className="logo-text">
    <h2>Hospedajes Pet Friendly</h2>
  </div>
      </div>
        <nav className="nav-bar">
         
            <ul>
              <li>
                <Link to='/'>Inicio</Link>
              </li>
              <li>
                <Link to='nosotros'>Nosotros</Link>
              </li>
                <li>
                  <Link to="propietarios">Propietarios</Link>
                  </li>
                <li>
                  <Link to="contactos"> Contactos </Link>
                  </li>
            </ul>           
        </nav> 
            </header>
      
    </div>
  )
}
