import React, { useState, useEffect } from "react";
import axios from "axios";
import CardHotel from "./CardHotel";

const GetAlojamientos = () => {
  const [alojamientos, setAlojamientos] = useState([]);
  const [error, setError] = useState("");

  const traerAlojamientos = async () => {
    try {
      const datos = await axios.get(
        "http://localhost:3001/alojamiento/getAlojamientos"
      );
      setAlojamientos(datos.data);
      console.log("informacion", datos.data);
    } catch (error) {
      setError("Error, no se recuperaron datos");
    }
  };

  useEffect(() => {
    traerAlojamientos();
  }, []);

  return (
    <div>
      <div className="card-container">
        <h1>Informacion del alojamiento</h1>

        <CardHotel alojamiento={alojamientos} />
      </div>
    </div>
  );
};

export default GetAlojamientos;
