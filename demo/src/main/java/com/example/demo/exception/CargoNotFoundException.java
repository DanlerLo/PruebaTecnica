package com.example.demo.exception;

public class CargoNotFoundException extends RuntimeException {

    public CargoNotFoundException(Long id_cargo) {
        super("No se pudo encontrar el cargo " + id_cargo + "." + "Por favor, compruebe que el id es correcto.");
    }
}
