import React, { useState, useEffect } from "react";
import axios from "axios";
import "../assets/img/imagenes.json";

import cabaña from "../assets/img/cabaña.jpg";

const GetAlojamientos = () => {
  const [alojamientos, setAlojamientos] = useState([]);
  const [error, setError] = useState("");
  const [imagenes, setImagenes] = useState([]);

  const traerAlojamientos = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3001/alojamiento/getAlojamientos"
      );
      const datosArray = Array.isArray(response.data) ? response.data : [];
      setAlojamientos(datosArray);
    } catch (error) {
      setError("Error, no se recuperaron response");
    }
  };

  const traerImagenes = async () => {
    try {
      const response = await fetch('../assets/img/imagenes.json');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const jsonData = await response.json();
      setImagenes(jsonData);
    } catch (error) {
      setError('Error fetching the data');
      console.error('Error fetching the data:', error);
    }
  };
 
    
  useEffect(() => {

    traerAlojamientos();
    traerImagenes();
  }, []);
  return (
    <div className="container-items">
<div className="Imagenes">
      {error && <p>{error}</p>}
      <ul>
        {imagenes.map(item => (
          <li key={item.id}>
            {item.id}
          </li>
        ))}
      </ul>
    </div>
    {alojamientos.map((lugar, index) => (
      <div key={index} className="hotel-card">
        <h2 className="hotel-title">{lugar.Titulo}</h2>
        <p className="hotel-description">{lugar.Descripcion}</p>
        <h5 className="hotel-price">Precio por día: {lugar.PrecioPorDia}</h5>
        <p className="hotel-rooms">Dormitorios: {lugar.CantidadDormitorios}</p>
        <p className="hotel-bathrooms">Baños: {lugar.CantidadBanios}</p>
        <p className="hotel-state">Estado: {lugar.Estado}</p>
        <div className="container-btn">
          <button className="btn">Reservar</button>
        </div>
        
      </div>
    ))}
  </div>
   
  );
};

export default GetAlojamientos;
