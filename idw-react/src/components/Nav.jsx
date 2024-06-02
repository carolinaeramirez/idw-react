import React from 'react';
import '../styles/estilos.css';
import {Link} from 'react-router-dom';
import {logo} from "../assets/img/logo.png";

export default function Nav() {
  return (
    <div>
          <header className={styles.header}>   
      <div className={styles.logo}>
        <img src={"../img/logo.png"} alt="logo hospedog" /> 
  <div className={styles.logo-text}>
    <h2>Hospedajes Pet Friendly</h2>
  </div>
      </div>
        <nav className={styles.nav-bar}>
         
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
