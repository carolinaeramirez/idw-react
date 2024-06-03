import React from "react";
import "../styles/estilos.css";

import GetAlojamientos from "../components/GetAlojamientos";
export default function Home() {
  return (
    <div>
      <section class="search-bar">
        <div class="search-bar-text">
          <h3>Encontra tu alojamiento aqui!</h3>
        </div>
        <form class="search-form">
          <div>
            <label for="destino" class="input-label">
              Destino
            </label>
            <input
              type="text"
              name="destino"
              placeholder="A donde vas?"
              class="search-input"
            />
          </div>
          <div>
            <label for="fechas" class="input-label">
              Fecha de llegada / salida{" "}
            </label>
            <input
              type="date"
              name="fechas"
              placeholder="Fecha de igreso / salida"
              class="search-input"
            />
          </div>
          <div>
            <label for="tipo-alojamiento" class="input-label">
              Alojamiento
            </label>
            <select
              name="tipo-alojamiento"
              id="tipo-alojamiento"
              class="search-input"
            >
              <option value="hotel">Hotel</option>
              <option value="apartamento">Apartamento</option>
              <option value="hostal">Hostal</option>
              <option value="casa">Casa</option>
            </select>
          </div>
          <button type="submit" class="search-button">
            Buscar
          </button>
        </form>
      </section>
      <GetAlojamientos />

      <button>agregar alojamiento</button>
    </div>
  );
}
