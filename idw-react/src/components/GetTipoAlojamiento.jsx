import React, { useState } from 'react'

export default function GetTipoAlojamiento() {
    const {tipoAlojamiento, setTipoAlojamiento}=useState([]);
    const {error, setError}=useState("");

    const traerTipoAlojamiento =async ()=>{
        try {
            const response= await axios.get()
        } catch (error) {
            
        }
    }
  return (
    <div>
      
    </div>
  )
}
