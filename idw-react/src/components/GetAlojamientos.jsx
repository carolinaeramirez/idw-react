import React, { useState, useEffect } from "react";
import axios from "axios";


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
          <img src="https://picsum.photos/seed/picsum/250" alt="Imagen"></img>
          {lugar.descripcion === "cabaña" || lugar.descripcion === "CABAÑA" ? (
          <img src="../assets/img/cabaña.jpg" alt="Imagen" />
          ) : null}
          {lugar.descripcion === "hotel" || lugar.descripcion === "HOTEL" ? (
            <img src="../assets/img/hotel2.jpg" alt="Imagen" />
          ) : null}
          {lugar.descripcion === "departamento" || lugar.descripcion === "DEPARTAMENTO" ? (
            <img src="../assets/img/dpto.jpg" alt="Imagen" />
          ) : null}
          {lugar.descripcion === "casa" || lugar.descripcion === "CASA" ? (
            <img src="../assets/img/casa.jpg" alt="Imagen" />
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
