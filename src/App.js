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
import EditarS from "./pages/servicios/EditarS";
import DetallesS from "./pages/servicios/DetallesS";
import DetallesPresupuesto from "./pages/presupuesto/DetallesPresupuesto";

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
        <Route path="/servicios/:id/editar" element={<EditarS />} />
        <Route path="/servicios/:id/detalles" element={<DetallesS />} />

        {/* RUTAS DE PRESUPUESTOS */}
        <Route path="/presupuestos/crear" element={<Presupuestos />} />
        <Route path="/presupuestos/:id/detalles" element={<DetallesPresupuesto />} />


        {/* RUTAS DE ERRORES */}
        <Route path="/error" element={<Error />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
