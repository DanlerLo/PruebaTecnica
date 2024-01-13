package com.example.demo.exception;

public class EmpleadoNotFoundException extends RuntimeException{
    
    public EmpleadoNotFoundException(Long id) {
        super("No se pudo encontrar el empleado " + id + "." + "Por favor, compruebe que el id es correcto.");
    }
}
