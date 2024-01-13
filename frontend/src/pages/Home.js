import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Home() {
  const [empleados, setEmpleados] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    loadEmpleados();
  }, []);

  const loadEmpleados = async () => {
    const result = await axios.get("http://localhost:8080/empleados");
    setEmpleados(result.data);
  };

  const deleteEmpleado = async (id) => {
    await axios.delete(`http://localhost:8080/empleados/${id}`);
    loadEmpleados();
  };

  return (
    <div className="container">
      <div className="row">
        {empleados.map((empleado, index) => (
          <div className="col-md-6 col-lg-4" key={index}>
            <div className="card mb-3" style={{ maxWidth: "540px" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={empleado.foto}
                    alt="Foto"
                    className="img-fluid rounded-start"
                    style={{ objectFit: "cover", height: "100%" }}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Empleado #{empleado.id}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      {empleado.nombre}
                    </h6>
                    <p className="card-text">Cédula: {empleado.cedula}</p>
                    <p className="card-text">
                      <small className="text-muted">
                        Fecha Ingreso: {empleado.fechaIngreso}
                      </small>
                    </p>
                    <p className="card-text">Cargo: {empleado.cargo}</p>
                    <Link
                      className="btn btn-outline-primary"
                      to={`/viewempleado/${empleado.id}`}
                    >
                      Ver
                    </Link>
                    <Link
                      className="btn btn-outline-warning mx-2"
                      to={`/editempleado/${empleado.id}`}
                    >
                      Editar
                    </Link>
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => {
                        if (
                          window.confirm(
                            "¿Estás seguro de que deseas eliminar este empleado?"
                          )
                        ) {
                          deleteEmpleado(empleado.id);
                        }
                      }}
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
