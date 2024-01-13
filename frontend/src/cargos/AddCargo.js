import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function AddCargo() {
  let navigate = useNavigate();

  const [Cargo, setCargo] = useState({
    nombre: "",
  });

  const onInputChange = (e) => {
    setCargo({ ...Cargo, [e.target.id]: e.target.value });
  };

  const { nombre } = Cargo;

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/cargos", Cargo);
    navigate("/homeCargos");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md offset-md-2 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Agregar Cargo</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label for="nombre" className="form-label">
                Nuevo Cargo
              </label>
              <input
                type="text"
                className="form-control"
                id="nombre"
                placeholder="Arquitecto"
                value={nombre}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Guardar
            </button>
            <Link className="btn btn-outline-danger mx-2" to={"/homeCargos"}>
              Cancelar
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
