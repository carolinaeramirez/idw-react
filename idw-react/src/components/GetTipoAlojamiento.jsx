import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddTipoAlojamiento from './AddTipoAlojamiento';
import '../styles/tipoAlojamiento.css'
import { useParams } from 'react-router-dom';

export default function GetTipoAlojamiento() {
    const [tipoAlojamiento, setTipoAlojamiento] = useState([]);
    const [error, setError] = useState("");
    const [idTipoAlojamiento, setIdTipoAlojamiento]=useState([])
    const params =useParams()

    const traerTipoAlojamiento = async () => {
        try {
            const response = await axios.get("http://localhost:3001/tiposAlojamiento/getTiposAlojamiento");
            console.log(response, "Respuesta");           
            setTipoAlojamiento(response.data);
            console.log("todos los tipos de alojamiento",response.data)
        } catch (error) {
            setError("No se pudo cargar la información solicitada");
        }
    };



    const traerTipoAlojamientoId = async (idTipoAlojamiento) => {
       
        try {
            const response = await axios.get(`http://localhost:3001/tiposAlojamiento/getTipoAlojamiento/${idTipoAlojamiento}`);
            console.log("Respuesta", idTipoAlojamiento);
            return response.data; 
          
        } catch (error) {
            console.error("No se pudo cargar la información solicitada", error);
        }
    };

    useEffect(() => {
        traerTipoAlojamiento();
       
       
    }, []);

    const eliminar = async (idTipoAlojamiento) => {
        try {
            await axios.delete(`http://localhost:3001/tiposAlojamiento/deleteTipoAlojamiento/${idTipoAlojamiento}`);
            setTipoAlojamiento(prevTipoAlojamiento => prevTipoAlojamiento.filter(tipo => tipo.idTipoAlojamiento !== idTipoAlojamiento));
            console.log(`Tipo de alojamiento con ID ${idTipoAlojamiento} eliminado exitosamente`);
        } catch (error) {
            console.error("No se pudo eliminar la información solicitada", error);
            setError("No se pudo eliminar la información solicitada");
        }
    };
  const editar= (idTipoAlojamiento)=>{
    // const [tipoAlojamiento, setTipoAlojamiento]=useState({
    //     id:"",
    //     Descripcion:""
    // }

    // )
    console.log("editar por id")
  }


    return (
        <div>
            {error && <p>{error}</p>}
            <table className="table">
                <thead className="tableTitle">
                    <tr className="tr">
                        <th>Tipo de Alojamientos cargados</th> 
                         <th>ACCIONES</th>
                    </tr>
                    <tr className="tr">
                      
                    </tr>
                </thead>
                <tbody>
                    {tipoAlojamiento.map((tipo, index) => (
                        <tr key={index}>
                            <td>{tipo.Descripcion}</td>
                            {/* <td>{tipo.idTipoAlojamiento}</td> */}
                            <td>
                        <button onClick={editar}>editar</button>
                        <button onClick={() => eliminar(tipo.idTipoAlojamiento)}>eliminar</button>
                    </td>
                        </tr>
                        
                    ))}
                    
                </tbody>
            </table>
            <AddTipoAlojamiento />
        </div>
    );
}