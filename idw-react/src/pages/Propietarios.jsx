import React from 'react';
import AddAlojamientoForm from '../components/AddAlojamiento';
import "../styles/estilos.css";


export default function Propietarios() {
  return (
    <div>
        <div className='titulo-propie'>
          <h1>Sos propietario?</h1>
        <br></br>
        <h4>Te gustaria poner tu casa en alquiler temporal?</h4>
        <p>este es el lugar indicado, dejanos tus datos en el siguiente formularios y te contactamos</p>
        </div>
        <div className='main-formi'>
        <div className='formi'>        
      <AddAlojamientoForm/>
      </div>
    </div>
  </div>
  )
}
