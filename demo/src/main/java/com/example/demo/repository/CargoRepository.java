package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.cargos;

public interface CargoRepository extends JpaRepository<cargos, Long> {
    
}
