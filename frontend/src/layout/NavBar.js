import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
        <div class="container-fluid">
          <a className="navbar-brand" href="/">
            Gestion Empleados
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/addEmpleado">
                  Agregar Empleado
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/homeCargos">
                  Cargos
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
