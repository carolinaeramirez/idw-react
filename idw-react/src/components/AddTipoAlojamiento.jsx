import React,{useState} from "react";
import axios from "axios";
import "../styles/estilos.css";


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
    <form onSubmit={handleSubmit} className="login-container">
      <div>
        <label>Agrega un tipo de Hospedaje:  </label>
        <textarea
          name="Descripcion"
          value={tipoAlojamiento.Descripcion}
          onChange={handleChange}
        />
        <br></br>
        <button type="submit" className="btn" >Agregar</button>
      </div>

    </form>
  </div>;
}
