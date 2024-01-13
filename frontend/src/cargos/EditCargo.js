import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditCargo() {
  let navigate = useNavigate();
  const { id } = useParams();

  const [Cargo, setCargo] = useState({
    nombre: "",
  });

  const onInputChange = (e) => {
    setCargo({ ...Cargo, [e.target.id]: e.target.value });
  };

  const { nombre } = Cargo;

    useEffect(() => {
        loadCargos();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    , []);

const onSubmit = async (e) => {
  e.preventDefault();
  try {
    await axios.put(`http://localhost:8080/cargos/${id}`, Cargo);
    navigate("/homeCargos");
  } catch (error) {
    console.error("Error al actualizar el cargo:", error.response.data);
  }
};

    const loadCargos = async () => {
      const result = await axios.get(`http://localhost:8080/cargos/${id}`);
      setCargo(result.data);
    };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md offset-md-2 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Editar Cargo</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label for="nombre" className="form-label">
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
