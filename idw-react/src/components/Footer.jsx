import '../styles/estilos.css';
import React from 'react';


const Footer =() =>{
    return (
      <footer>
          <div className={styles.contenedor-pie}>
            <div className={styles.content-pie}>
                <h4>Teléfono</h4>
                <p>+54 343 154224 4587</p>
            </div>
            <div className={styles.content-pie}>
                <h4>Email</h4>
                <p>Hospedog@gmail.com</p>
            </div>
            <div className={styles.content-pie}>
                <h4>Ubicación</h4>
                <p> Entre Ríos - Argentina</p>
            </div>
          </div>
        <h2 className={styles.titulo-final}>&copy; Design | Ellenberger, Gisela & Ramirez, Carolina - 2024</h2>      
      </footer>   
     )
  }
  