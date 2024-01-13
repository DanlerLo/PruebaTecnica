import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export default function AddEmpleado() {
  let navigate = useNavigate();

  const [empleado, setEmpleado] = useState({
    cedula: "",
    nombre: "",
    fechaIngreso: "",
    cargo: "Selecciona un cargo",
  });

  const [file, setFile] = useState(null);
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

  const onInputChange = (e) => {
    setEmpleado({ ...empleado, [e.target.name]: e.target.value });
  };

  const onFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", file);

    Object.keys(empleado).forEach((key) => {
      formData.append(key, empleado[key]);
    });

    try {
      await axios.post("http://localhost:8080/empleados", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      navigate("/");
    } catch (error) {
      console.error("Error al enviar el formulario: ", error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md offset-md-2 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Agregar Empleado</h2>
          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label htmlFor="foto" className="form-label">
                Foto
              </label>
              <input
                type="file"
                className="form-control"
                id="foto"
                onChange={onFileChange}
              />

              <label htmlFor="cedula" className="form-label">
                Cedula
              </label>
              <input
                type="number"
                className="form-control"
                name="cedula"
                placeholder="Ej. 1111111111"
                value={empleado.cedula}
                onChange={onInputChange}
                required
              />

              <label htmlFor="nombre" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                className="form-control"
                name="nombre"
                placeholder="Ej. Juan Perez"
                value={empleado.nombre}
                onChange={onInputChange}
                required
              />

              <label htmlFor="fechaIngreso" className="form-label">
                Fecha Ingreso
              </label>
              <input
                type="date"
                className="form-control"
                name="fechaIngreso"
                placeholder="Ej. 2021-01-01"
                value={empleado.fechaIngreso}
                onChange={onInputChange}
                required
              />

              <label htmlFor="cargo" className="form-label">
                Cargo
              </label>
              <select
                className="form-select"
                name="cargo"
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
