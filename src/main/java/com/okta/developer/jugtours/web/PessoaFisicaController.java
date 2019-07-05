package com.okta.developer.jugtours.web;

import com.okta.developer.jugtours.model.PessoaFisica;
import com.okta.developer.jugtours.model.PessoaFisicaRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.Collection;
import java.util.Optional;

@RestController
@RequestMapping("/api")
class PessoaFisicaController {

    private final Logger log = LoggerFactory.getLogger(PessoaFisicaController.class);
    private PessoaFisicaRepository pessoaFisicaRepository;

    public PessoaFisicaController(PessoaFisicaRepository pessoaFisicaRepository) {
        this.pessoaFisicaRepository = pessoaFisicaRepository;
    }

    @GetMapping("/clientes/pessoafisica")
    Collection<PessoaFisica> pessoaFisicas() {
        return pessoaFisicaRepository.findAll();
    }

    @GetMapping("/cliente/pessoafisica/{id}")
    ResponseEntity<?> getPessoaFisica(@PathVariable Long id) {
        Optional<PessoaFisica> pessoaFisica = pessoaFisicaRepository.findById(id);
        return pessoaFisica.map(response -> ResponseEntity.ok().body(response))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping("/clientes/pessoafisica")
    ResponseEntity<PessoaFisica> createPessoaFisica(@Valid @RequestBody PessoaFisica pessoaFisica) throws URISyntaxException {
        log.info("Request to create pessoaFisica: {}", pessoaFisica);
        PessoaFisica result = pessoaFisicaRepository.save(pessoaFisica);
        return ResponseEntity.created(new URI("/api/pessoaFisica/" + result.getId()))
                .body(result);
    }

    @PutMapping("/cliente/pessoafisica/{id}")
    ResponseEntity<PessoaFisica> updatePessoaFisica(@Valid @RequestBody PessoaFisica pessoaFisica) {
        log.info("Request to update pessoaFisica: {}", pessoaFisica);
        PessoaFisica result = pessoaFisicaRepository.save(pessoaFisica);
        return ResponseEntity.ok().body(result);
    }

    @DeleteMapping("/cliente/pessoaFisica/{id}")
    public ResponseEntity<?> deletePessoaFisica(@PathVariable Long id) {
        log.info("Request to delete pessoaFisica: {}", id);
        pessoaFisicaRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
