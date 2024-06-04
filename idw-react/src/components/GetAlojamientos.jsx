import React, { useState, useEffect } from "react";
import axios from "axios";
import hospedaje from "../assets/img/hotel1.jpg";

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

  return (
    <div className="container-items">
      
      {alojamientos.map((lugar, index) => (
        <div key={index} className="hotel-card" >
          <img src= {hospedaje} alt="imagen-hospedaje" className="hotel-image"/> 
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
