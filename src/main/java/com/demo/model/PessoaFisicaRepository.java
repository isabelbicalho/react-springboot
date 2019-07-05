package com.demo.model;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PessoaFisicaRepository extends JpaRepository<PessoaFisica, Long> {
    // Cliente findById(Long id);
}
