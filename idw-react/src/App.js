
import { BrowserRouter,  Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import AddAlojamientoForm from "./components/AddAlojamiento";
import GetAlojamientos from "./components/GetAlojamientos";
import Footer from "./components/Footer";
import Home from "./components/Home";
import AddTipoAlojamiento from "./components/AddTipoAlojamiento";
import GetAlojamiento from "./components/GetTipoAlojamiento";
import Home from "./pages/Home";


function App() {
  return (
      
    <BrowserRouter>
    <div>
      <Nav/>
      <Footer/>
    </div>

    <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/agregaralojamiento" element={<AddAlojamientoForm/>}/>
          <Route path="/agregartipoalojamiento" element={<AddTipoAlojamiento/>}/>
          <Route path="/vertipoalojamiento" element={<GetAlojamiento/>}/>          
    </Routes>
    </BrowserRouter>
  );
}

export default App;
