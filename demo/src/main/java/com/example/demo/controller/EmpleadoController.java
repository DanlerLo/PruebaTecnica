package com.example.demo.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import com.example.demo.service.CloudinaryService;
import com.example.demo.exception.EmpleadoNotFoundException;
import com.example.demo.model.Empleado;
import com.example.demo.repository.EmpleadoRepository;

import java.io.IOException;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class EmpleadoController {
    @Autowired 
    private EmpleadoRepository empleadoRepository;

    @Autowired
    private CloudinaryService cloudinaryService;


    @PostMapping("/empleados")
    public Empleado newEmpleado(@RequestParam("file") MultipartFile file,
                            @RequestParam("cedula") Long cedula,
                            @RequestParam("nombre") String nombre,
                            @RequestParam("fechaIngreso") String fechaIngreso,
                            @RequestParam("cargo") String cargo) throws IOException {
        Empleado empleado = new Empleado();
        empleado.setCedula(cedula);
        empleado.setNombre(nombre);
        empleado.setFechaIngreso(fechaIngreso);
        empleado.setCargo(cargo);

        if (file != null && !file.isEmpty()) {
            String urlFoto = cloudinaryService.uploadFile(file);
            empleado.setFoto(urlFoto);
        }

        return empleadoRepository.save(empleado);
    }

    @GetMapping("/empleados")
    List<Empleado> getAllEmpleados() {
        return empleadoRepository.findAll();
    }

    @GetMapping("/empleados/{id}")
    Empleado getEmpleadoById(@PathVariable Long id) {
        return empleadoRepository.findById(id).orElseThrow(() -> new EmpleadoNotFoundException(id));
    }

     @PutMapping("/empleados/{id}")
    Empleado updateEmpleado(@RequestBody Empleado newEmpleado, @PathVariable Long id) {
        return empleadoRepository.findById(id).map(empleado -> {
            empleado.setFoto(newEmpleado.getFoto());
            empleado.setCedula(newEmpleado.getCedula());
            empleado.setNombre(newEmpleado.getNombre());
            empleado.setFechaIngreso(newEmpleado.getFechaIngreso());
            empleado.setCargo(newEmpleado.getCargo());
            return empleadoRepository.save(empleado);
        }).orElseGet(() -> {
            newEmpleado.setId(id);
            return empleadoRepository.save(newEmpleado);
        });
    }

    @DeleteMapping("/empleados/{id}")
    String deleteEmpleado(@PathVariable Long id) {
        if(!empleadoRepository.existsById(id)) {
            throw new EmpleadoNotFoundException(id);
        }
        empleadoRepository.deleteById(id);
        return "Empleado "+ id+" eliminado.";
    }
}