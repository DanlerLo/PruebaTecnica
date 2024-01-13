// Este es el archivo principal de la aplicación frontend
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NavBar from './layout/NavBar';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Switch, Routes } from "react-router-dom";
import AddEmpleado from './empleados/AddEmpleado';
import ViewEmpleado from "./empleados/ViewEmpleado";
import EditEmpleado from "./empleados/EditEmpleado";
import Homecargos from "./cargos/homeCargos";
import AddCargo from './cargos/AddCargo';
import EditCargo from "./cargos/EditCargo";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/addEmpleado" element={<AddEmpleado />} />
          <Route exact path="/addCargo" element={<AddCargo />} />
          <Route exact path="/viewempleado/:id" element={<ViewEmpleado />} />
          <Route exact path="/editempleado/:id" element={<EditEmpleado />} />
          <Route exact path="/editcargo/:id" element={<EditCargo />} />
          <Route exact path="/homeCargos" element={<Homecargos />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
