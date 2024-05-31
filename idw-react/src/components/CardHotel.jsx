import React from "react";

function CardHotel(alojamientos) {
  const {
    Titulo,
    Descripcion,
    PrecioPorDia,
    CantidadDormitorios,
    CantidadBanios,
    Estado,
  } = alojamientos;
  console.log(alojamientos, "data de los alojamientos");
  return (
    
    <div className="card">
      {alojamientos.map((lugar, index) => (
        <div key={index}>
          <h2>{lugar.titulo}</h2>
          <p>{lugar.Descripcion}</p>
          <h5>{lugar.PrecioPorDia}</h5>
        </div>
      ))}
    </div>
  );
}

export default CardHotel;
