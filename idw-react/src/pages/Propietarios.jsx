import React from 'react'
import AddAlojamientoForm from '../components/AddAlojamiento'

export default function Propietarios() {
  return (
    <div>
        <h1>Sos propietario?</h1>
        <p>te gustaria poner tu casa en alquiler temporal?</p>
        <p>este es el lugar indicado, dejanos tus datos en el siguiente formularios y te contactamos</p>
        
      <AddAlojamientoForm/>
    </div>
  )
}
