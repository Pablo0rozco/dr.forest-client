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
import EditarPresupuesto from "./pages/presupuesto/EditarPresupuesto";
import ListarPresupuesto from "./pages/presupuesto/ListarPresupuesto";
import IsPrivate from "./components/isPrivate";
import Profile from "./pages/profile/Profile";
import ProfileEdit from "./pages/profile/ProfileEdit";
import ListarPresupuestosProfesional from "./pages/presupuesto/ListarPresupuestosProfesional";

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
        <Route
          path="/servicios/crear"
          element={
            <IsPrivate>
              <CrearS />
            </IsPrivate>
          }
        />
        <Route
          path="/servicios/:id/editar"
          element={
            <IsPrivate>
              <EditarS />
            </IsPrivate>
          }
        />
        <Route path="/servicios/:id/detalles" element={<DetallesS />} />

        {/* RUTAS DE PRESUPUESTOS */}
        <Route path="/presupuestos" element={<ListarPresupuesto />} />
        <Route
          path="/presupuestos/crear/:id"
          element={
            <IsPrivate>
              <Presupuestos />
            </IsPrivate>
          }
        />
        <Route
          path="/presupuestos/:id/detalles"
          element={<DetallesPresupuesto />}
        />
        <Route
          path="/presupuestos/editar/:id"
          element={
            <IsPrivate>
              <EditarPresupuesto />
            </IsPrivate>
          }
        />
        <Route path="/presupuestos/crear/:id" element={<Presupuestos />} />
        <Route
          path="/presupuestos/:id/detalles"
          element={<DetallesPresupuesto />}
        />
        <Route
          path="/presupuestos/editar/:id"
          element={<EditarPresupuesto />}
        />
        <Route
          path="/presupuestos/empresa"
          element={<ListarPresupuestosProfesional />}
        />

        {/* RUTAS DE PERFIL */}
        <Route
          path="/perfil"
          element={
            <IsPrivate>
              <Profile />
            </IsPrivate>
          }
        />
        <Route
          path="/perfil/editar"
          element={
            <IsPrivate>
              <ProfileEdit />
            </IsPrivate>
          }
        />

        {/* RUTAS DE ERRORES */}
        <Route path="/error" element={<Error />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
