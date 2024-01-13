import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function ViewEmpleado() {
  const [empleado, setEmpleados] = useState({
    foto: "",
    cedula: "",
    nombre: "",
    fechaIngreso: "",
    cargo: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadEmpleados();
  }, []); // Si no estás utilizando la variable en el array de dependencias, puedes omitir el comentario eslint

  const loadEmpleados = async () => {
    const result = await axios.get(`http://localhost:8080/empleados/${id}`);
    setEmpleados(result.data);
  };

return (
  <div className="container mt-5">
    <div className="row">
      <div className="col-md-8 offset-md-2">
        <div className="card">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "25rem",
            }}
          >
            <img
              src={empleado.foto}
              alt="Empleado"
              style={{
                maxWidth: "50%",
                maxHeight: "100%",
                objectFit: "contain",
              }}
            />
          </div>
          <div className="card-body">
            <h5 className="card-title text-center">{empleado.nombre}</h5>
            <p className="card-text">
              <strong>Cédula:</strong> {empleado.cedula}
              <br />
              <strong>Fecha de Ingreso:</strong>{" "}
              {new Date(empleado.fechaIngreso).toLocaleDateString()}
              <br />
              <strong>Cargo:</strong> {empleado.cargo}
            </p>
            <Link to={"/"} className="btn btn-primary">
              Volver
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

}
