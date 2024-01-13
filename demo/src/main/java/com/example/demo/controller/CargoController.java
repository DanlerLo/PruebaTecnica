package com.example.demo.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.exception.CargoNotFoundException;
import com.example.demo.model.cargos;

import com.example.demo.repository.CargoRepository;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class CargoController {
    @Autowired 
    private CargoRepository cargoRepository;

    @PostMapping("/cargos")
    cargos newCargo(@RequestBody cargos newCargo) {
        return cargoRepository.save(newCargo);
    }

    @GetMapping("/cargos")
    public List<cargos> getAllCargos() {
        return cargoRepository.findAll();
    }

    @GetMapping("/cargos/{id_Cargo}")
    cargos getCargoById(@PathVariable Long id_Cargo) {
        return cargoRepository.findById(id_Cargo).orElseThrow(() -> new CargoNotFoundException(id_Cargo));
    }

    @PutMapping("/cargos/{id_Cargo}")
    cargos updateCargo(@RequestBody cargos newCargo, @PathVariable Long id_Cargo) {
        return cargoRepository.findById(id_Cargo).map(Cargo -> {
            Cargo.setNombre(newCargo.getNombre());
            return cargoRepository.save(Cargo);
        }).orElseGet(() -> {
            newCargo.setId(id_Cargo);
            return cargoRepository.save(newCargo);
        });
    }

    @DeleteMapping("/cargos/{id_Cargo}")
    String deleteCargo(@PathVariable Long id_Cargo) {
        if(!cargoRepository.existsById(id_Cargo)) {
            throw new CargoNotFoundException(id_Cargo);
        }
        cargoRepository.deleteById(id_Cargo);
        return "Cargo "+ id_Cargo+" eliminado.";
    }
}
