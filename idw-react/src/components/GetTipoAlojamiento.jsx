import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function GetTipoAlojamiento() {
    const [tipoAlojamiento, setTipoAlojamiento] = useState([]);
    const [error, setError] = useState("");

    const traerTipoAlojamiento = async () => {
        try {
            const response = await axios.get("http://localhost:3001/tiposAlojamiento/getTiposAlojamiento");
            console.log(response, "Respuesta");           
            setTipoAlojamiento(response.data);
        } catch (error) {
            setError("No se pudo cargar la información solicitada");
        }
    };

    useEffect(() => {
        traerTipoAlojamiento();
    }, []);

    console.log("array tipoAlojamiento:", tipoAlojamiento);  

    return (
        <div>
            {error && <p>{error}</p>}
            <table className="table">
                <thead className="tableTitle">
                    <tr className="tr">
                        <th>Tipo de Alojamientos cargados</th>
                    </tr>
                </thead>
                <tbody>
                    {tipoAlojamiento.map((tipo, index) => (
                        <tr key={index}>
                            <td>{tipo.descripcion}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}