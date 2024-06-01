import React,{useState} from "react";
import axios from "axios";


export default function AddTipoAlojamiento() {
  const [tipoAlojamiento, setTipoAlojamiento] = useState({
    Descripcion: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTipoAlojamiento({
      ...tipoAlojamiento,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3001/tiposAlojamiento/createTipoAlojamiento", tipoAlojamiento)
      .then((response) => {
        console.log("Tipo de Alojamiento agregado:", response.data);
      })
      .catch((error) => {
        console.error("Error al agregar el nuevo tipo de alojamiento:", error);
        console.log(tipoAlojamiento);
      });
  };

  return <div>
    <form onSubmit={handleSubmit}>
      <div>
        <label>Descripción:</label>
        <textarea
          name="Descripcion"
          value={tipoAlojamiento.Descripcion}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Agregar Tipo de Alojamiento</button>
    </form>
  </div>;
}
