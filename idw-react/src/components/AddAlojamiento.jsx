import React, { useState, useEffect } from "react";
import axios from "axios";

const AddAlojamientoForm = () => {
  const [nuevoAlojamiento, setNuevoAlojamiento] = useState({
    Titulo: "",
    Descripcion: "",
    Latitud: "",
    Longitud: "",
    PrecioPorDia: "",
    CantidadDormitorios: "",
    CantidadBanios: "",
    Estado: "Disponible",
    TipoAlojamiento: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNuevoAlojamiento({
      ...nuevoAlojamiento,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(
        "http://localhost:3001/alojamiento/createAlojamiento",
        nuevoAlojamiento
      )
      .then((response) => {
        console.log("Alojamiento agregado:", response.data);
      })
      .catch((error) => {
        console.error("Error al agregar alojamiento:", error);
        console.log(nuevoAlojamiento);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Título:</label>
        <input
          type="text"
          name="Titulo"
          value={nuevoAlojamiento.Titulo}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Descripción:</label>
        <textarea
          name="Descripcion"
          value={nuevoAlojamiento.Descripcion}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Latitud:</label>
        <input
          type="number"
          step="0.00000001"
          name="Latitud"
          value={nuevoAlojamiento.Latitud}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Longitud:</label>
        <input
          type="number"
          step="0.00000001"
          name="Longitud"
          value={nuevoAlojamiento.Longitud}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Precio Por Día:</label>
        <input
          type="number"
          step="0.01"
          name="PrecioPorDia"
          value={nuevoAlojamiento.PrecioPorDia}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Cantidad de Dormitorios:</label>
        <input
          type="number"
          name="CantidadDormitorios"
          value={nuevoAlojamiento.CantidadDormitorios}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Cantidad de Baños:</label>
        <input
          type="number"
          name="CantidadBanios"
          value={nuevoAlojamiento.CantidadBanios}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Estado:</label>
        <select
          name="Estado"
          value={nuevoAlojamiento.Estado}
          onChange={handleChange}
          required
        >
          <option value="Disponible">Disponible</option>
          <option value="Reservado">Reservado</option>
        </select>
      </div>
      <div>
        <label>Tipo de Alojamiento:</label>
        <input
          type="number"
          name="TipoAlojamiento"
          value={nuevoAlojamiento.TipoAlojamiento}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Agregar Alojamiento</button>
    </form>
  );
};

export default AddAlojamientoForm;
