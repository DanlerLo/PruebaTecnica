package com.example.demo.model;
import org.springframework.web.multipart.MultipartFile;

public class EmpleadoDTO {
    private MultipartFile file;
    private Empleado empleado;

    public MultipartFile getFile() {
        return file;
    }

    public void setFile(MultipartFile file) {
        this.file = file;
    }

    public Empleado getEmpleado() {
        return empleado;
    }

    public void setEmpleado(Empleado empleado) {
        this.empleado = empleado;
    }
}