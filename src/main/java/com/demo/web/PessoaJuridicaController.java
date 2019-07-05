package com.demo.web;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

import com.demo.model.PessoaJuridica;
import com.demo.model.PessoaJuridicaRepository;
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
@Api(value = "Cliente Pessoa Juridica", description = "Cliente Pessoa Juridica")
@RequestMapping("/api")
class PessoaJuridicaController {

    private final Logger log = LoggerFactory.getLogger(PessoaJuridicaController.class);
    private PessoaJuridicaRepository pessoaJuridicaRepository;

    public PessoaJuridicaController(PessoaJuridicaRepository pessoaJuridicaRepository) {
        this.pessoaJuridicaRepository = pessoaJuridicaRepository;
    }

    @ApiOperation(value = "Lista clientes de pessoa juridica")
    @GetMapping("/clientes/pessoajuridica")
    Collection<PessoaJuridica> pessoaJuridicas() {
        return pessoaJuridicaRepository.findAll();
    }

    @ApiOperation(value = "Busca detalhes de pessoa juridica")
    @GetMapping("/cliente/pessoajuridica/{id}")
    ResponseEntity<?> getPessoaJuridica(@PathVariable Long id) {
        Optional<PessoaJuridica> pessoaJuridica = pessoaJuridicaRepository.findById(id);
        return pessoaJuridica.map(response -> ResponseEntity.ok().body(response))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @ApiOperation(value = "Adiciona pessoa juridica")
    @PostMapping("/clientes/pessoajuridica")
    ResponseEntity<PessoaJuridica> createPessoaJuridica(@Valid @RequestBody PessoaJuridica pessoaJuridica) throws URISyntaxException {
        log.info("Request to create pessoaJuridica: {}", pessoaJuridica);
        PessoaJuridica result = pessoaJuridicaRepository.save(pessoaJuridica);
        return ResponseEntity.created(new URI("/api/pessoaJuridica/" + result.getId()))
                .body(result);
    }

    @ApiOperation(value = "Altera dados de pessoa juridica")
    @PutMapping("/cliente/pessoajuridica/{id}")
    ResponseEntity<PessoaJuridica> updatePessoaJuridica(@Valid @RequestBody PessoaJuridica pessoaJuridica) {
        log.info("Request to update pessoaJuridica: {}", pessoaJuridica);
        PessoaJuridica result = pessoaJuridicaRepository.save(pessoaJuridica);
        return ResponseEntity.ok().body(result);
    }

    @ApiOperation(value = "Remove pessoa juridica dado seu id")
    @DeleteMapping("/cliente/pessoajuridica/{id}")
    public ResponseEntity<?> deletePessoaJuridica(@PathVariable Long id) {
        log.info("Request to delete pessoaJuridica: {}", id);
        pessoaJuridicaRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
