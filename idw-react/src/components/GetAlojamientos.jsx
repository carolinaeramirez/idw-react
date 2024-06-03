import React, { useState, useEffect } from "react";
import axios from "axios";

import imagenes from "../assets/img/imagenes.json";

const GetAlojamientos = () => {
  const [alojamientos, setAlojamientos] = useState([]);
  const [error, setError] = useState("");

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

  useEffect(() => {
    traerAlojamientos();
  }, []);
  console.log(imagenes)
  return (
    <div className="container-items">
      <div className="Imagenes">
        {error && <p>{error}</p>}
        <ul>
          {imagenes.map((item) => (
            <li key={item.id}><img src={item.src} alt={item.alt} /></li>
          ))}
        </ul>
      </div>
      {alojamientos.map((lugar, index) => (
        <div key={index} className="hotel-card">
          <h2 className="hotel-title">{lugar.Titulo}</h2>
          <p className="hotel-description">{lugar.Descripcion}</p>
          <h5 className="hotel-price">Precio por día: {lugar.PrecioPorDia}</h5>
          <p className="hotel-rooms">
            Dormitorios: {lugar.CantidadDormitorios}
          </p>
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
