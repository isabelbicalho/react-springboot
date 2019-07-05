package com.demo.model;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PessoaJuridicaRepository extends JpaRepository<PessoaJuridica, Long> {
    // Cliente findById(Long id);
}
