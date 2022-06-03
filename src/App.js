import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Error from "./pages/Error";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import CrearS from "./pages/servicios/CrearS";
import Presupuestos from "./pages/presupuesto/Presupuestos";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>

        {/* RUTAS GENERALES */}
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* RUTAS DE SERVICIOS */}
        <Route path="/servicios/crear" element={<CrearS />} />

        {/* RUTAS DE PRESUPUESTOS */}
        <Route path="/presupuestos/crear" element={<Presupuestos />} />

        {/* RUTAS DE ERRORES */}
        <Route path="/error" element={<Error />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
