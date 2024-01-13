import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditEmpleado() {
  let navigate = useNavigate();
  const {id} = useParams();

  const [empleado, setEmpleado] = useState({
    cedula: "",
    foto: "",
    nombre: "",
    fechaIngreso: "",
    cargo: "",
  });

  const onInputChange = (e) => {
    setEmpleado({ ...empleado, [e.target.id]: e.target.value });
  };

  const { cedula, nombre, fechaIngreso, cargo } = empleado;

  const [cargos, setCargos] = useState([]);

  useEffect(() => {
      const fetchCargos = async () => {
        try {
          const response = await axios.get("http://localhost:8080/cargos");
          setCargos(response.data);
        } catch (error) {
          console.error("Error al cargar los cargos: ", error);
        }
    };
    fetchCargos();
  }, []);

  useEffect(() => {
    loadEmpleados();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/empleados/${id}`, empleado);
    navigate("/");
  };

  const loadEmpleados = async () => {
    const result = await axios.get(`http://localhost:8080/empleados/${id}`);
    setEmpleado({
      ...result.data,
      cargo: result.data.cargo ? result.data.cargo.trim() : "",
    });
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md offset-md-2 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Editar Empleado</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label for="cedula" className="form-label">
                Cedula
              </label>
              <input
                type="text"
                className="form-control"
                id="cedula"
                placeholder="Ej. 1111111111"
                value={cedula}
                onChange={(e) => onInputChange(e)}
                required
              />

              <label for="nombre" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                className="form-control"
                id="nombre"
                placeholder="Ej. Juan Perez"
                value={nombre}
                onChange={(e) => onInputChange(e)}
                required
              />

              <label for="fechaIngreso" className="form-label">
                Fecha Ingreso
              </label>
              <input
                type="date"
                className="form-control"
                id="fechaIngreso"
                placeholder="Ej. 2021-01-01"
                value={fechaIngreso}
                onChange={(e) => onInputChange(e)}
                required
              />

              <label htmlFor="cargo" className="form-label">
                Cargo
              </label>
              <select
                className="form-select"
                name="cargo"
                id="cargo"
                value={empleado.cargo}
                onChange={onInputChange}
                required
              >
                <option value="">Selecciona un cargo</option>
                {cargos.map((cargo) => (
                  <option key={cargo.idCargo} value={cargo.nombre}>
                    {cargo.nombre}
                  </option>
                ))}
              </select>
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Guardar
            </button>
            <Link className="btn btn-outline-danger mx-2" to={"/"}>
              Cancelar
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
