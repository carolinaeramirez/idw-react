import React, { useState, useEffect } from "react";
import axios from "axios";

import cabaña from "../assets/img/cabaña.jpg";

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
      console.log("informacion", datosArray);
    } catch (error) {
      setError("Error, no se recuperaron response");
    }
  };

  useEffect(() => {
    traerAlojamientos();
  }, []);
  console.log("array alojamientos:", alojamientos);
  return (
    // <div className="container-items">
    
    //     {alojamientos.map((lugar, index) => (
    //       <div key={index}>
    //         <img
    //           src={"https://www.shutterstock.com/es/search/casas-de-campo"}
    //           alt={`Imagen de ${lugar.Titulo}`}
    //           className="hotel-image"
    //         />

    //         <h2>{lugar.Titulo}</h2>
    //         <p>{lugar.Descripcion}</p>
    //         <h5>Precio por día: {lugar.PrecioPorDia}</h5>
    //         <p>Dormitorios: {lugar.CantidadDormitorios}</p>
    //         <p>Baños: {lugar.CantidadBanios}</p>
    //         <p>Estado: {lugar.Estado}</p>
    //       </div>
    //     ))}
    //   </div>
    <div className="container-items">
    {alojamientos.map((lugar, index) => (
      <div key={index} className="hotel-card">
        <img
          src={"https://picsum.photos/100"}
          alt={`Imagen de ${lugar.Titulo}`}
          className="hotel-image"
        />
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
