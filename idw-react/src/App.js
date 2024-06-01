
import { BrowserRouter,  Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import AddAlojamientoForm from "./components/AddAlojamiento";
import AddTipoAlojamiento from "./components/AddTipoAlojamiento";
import GetAlojamiento from "./components/GetTipoAlojamiento";
import Home from "./pages/Home";


function App() {
  return (
      
    <BrowserRouter>
    <div>
      <Nav/>
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
