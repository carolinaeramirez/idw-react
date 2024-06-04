import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import AddAlojamientoForm from "./components/AddAlojamiento";
// import GetAlojamientos from "./components/GetAlojamientos";
import Footer from "./components/Footer";
import AddTipoAlojamiento from "./components/AddTipoAlojamiento";
import GetAlojamiento from "./components/GetTipoAlojamiento";
import Sobre from "./pages/Nosotros";
import Home from "./pages/Home";
import Propietarios from './pages/Propietarios.jsx';
import Admin from './pages/Admin';
import Contactos from "./pages/Contactos.jsx";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Nav />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/propietarios" element={<Propietarios/>} />
        <Route
          path="/agregartipoalojamiento"
          element={<AddTipoAlojamiento />}
        />
        <Route path="/vertipoalojamiento" element={<GetAlojamiento />} />
        <Route path="/nosotros" element={<Sobre />} />
        <Route path="/login" element={<Admin />} />
        <Route path="/contactos" element={<Contactos/>} />        
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
