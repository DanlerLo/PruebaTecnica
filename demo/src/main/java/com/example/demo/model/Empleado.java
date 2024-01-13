package com.example.demo.model;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Empleado {
    
    @Id 
    @GeneratedValue
    private Long id; 
    private String foto;
    private Long cedula; 
    private String nombre;
    private String fecha_ingreso;
    private String cargo;
    

    public Long getId() {
        return id;
    }
    
    public String getFoto() {
        return foto;
    }

    public Long getCedula() {
        return cedula;
    }

    public String getNombre() {
        return nombre;
    }

    public String getFechaIngreso() {
        return fecha_ingreso;
    }

    public String getCargo() {
        return cargo;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setFoto(String foto) {
        this.foto = foto;
    }

    public void setCedula(Long cedula) {
        this.cedula = cedula;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public void setFechaIngreso(String fecha_ingreso) {
        this.fecha_ingreso = fecha_ingreso;
    }

    public void setCargo(String cargo) {
        this.cargo = cargo;
    }

}
