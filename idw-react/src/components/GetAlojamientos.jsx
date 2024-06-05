import React, { useState, useEffect } from "react";
import axios from "axios";
import * as Images from '../assets/img/imagenes.jsx';


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
          {lugar.descripcion === "cabaña" || lugar.descripcion === "CABAÑA" ? (
            <img src={Images.IMG1} className="hotel-image" />
          ) : null}
          {lugar.descripcion === "hotel" || lugar.descripcion === "HOTEL" ? (
            <img src={Images.IMG5} className="hotel-image" />
          ) : null}
          {lugar.descripcion === "departamento" || lugar.descripcion === "DEPARTAMENTO" ? (
            <img src={Images.IMG3} className="hotel-image" />
          ) : null}
          {lugar.descripcion === "casa" || lugar.descripcion === "CASA" ? (
            <img src={Images.IMG4} className="hotel-image" />
          ) : null}
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
