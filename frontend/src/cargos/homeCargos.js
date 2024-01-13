import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Homecargos.css"; 
import { Link } from "react-router-dom";

export default function Homecargos() {
  const [cargos, setCargos] = useState([]);

  useEffect(() => {
    loadCargos();
  }, []);

  const loadCargos = async () => {
    const result = await axios.get("http://localhost:8080/cargos");
    setCargos(result.data);
  };

  const deleteCargo = async (id) => {
    await axios.delete(`http://localhost:8080/empleados/${id}`);
    loadCargos();
  };

  return (
    <div className="container">
      <Link className="btn btn-outline-primary" to={"/addCargo"}>
        Agregar un Nuevo Cargo
      </Link>
      <div className="py-4">
        <div className="table-responsive">
          {" "}
          <table className="table border shadow">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>

                <th scope="col">Accion</th>
              </tr>
            </thead>
            <tbody>
              {cargos.map((cargo, index) => (
                <tr key={cargo.idCargo}>
                  {" "}
                  <th scope="row">{index + 1}</th>
                  <td>{cargo.nombre}</td>

                  <td>
                    <Link
                      className="btn btn-info mx-2"
                      to={`/editcargo/${cargo.idCargo}`}
                    >
                      Editar
                    </Link>

                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        if (
                          window.confirm(
                            "¿Estás seguro de que deseas eliminar este cargo?"
                          )
                        ) {
                          deleteCargo(cargo.id);
                        }
                      }}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
