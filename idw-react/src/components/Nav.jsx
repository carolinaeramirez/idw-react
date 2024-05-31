import React from 'react';
import '../styles/estilos.css';
import {Link} from 'react-router-dom';
export default function Nav() {
  return (
    <div>
          <header className="header">   
      <div className="logo">
        {/* <img src="../img/logo.png" alt="logo hospedog" >       */}
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
                <li><a href="index.html">Inicio</a></li>
                <li><a href="nosotros.html">Acerca de</a></li>
                <li><a href="propietarios.html">Propietarios</a></li>
                <li><a href="contactos.html"> Contactos </a></li>
            </ul>           
        </nav> 
            </header>
      
    </div>
  )
}
