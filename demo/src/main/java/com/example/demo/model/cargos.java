package com.example.demo.model;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import java.util.List;

@Entity
public class cargos {
    @Id 
    @GeneratedValue
    private Long id_Cargo;
    private String nombre;
    @OneToMany(mappedBy = "cargo")
    private List<Empleado> empleados;

    public Long getIdCargo() {
        return id_Cargo;
    }
    

    public String getNombre() {
        return nombre;
    }

    public void setId(Long id_Cargo) {
        this.id_Cargo = id_Cargo;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

}
