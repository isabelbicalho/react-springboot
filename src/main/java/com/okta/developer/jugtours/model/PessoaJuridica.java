package com.okta.developer.jugtours.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import lombok.NonNull;

import javax.persistence.*;

@Data
@AllArgsConstructor
@RequiredArgsConstructor
@Entity
@Table(name = "pessoa_juridica")
public class PessoaJuridica {

    @Id
    @GeneratedValue
    private Long        id;
    @OneToOne
    @JoinColumn(name = "clienteId")
    private Cliente     cliente;
    @NonNull
    private String      companyName;
    @NonNull
    private Long        cnpj;
}
