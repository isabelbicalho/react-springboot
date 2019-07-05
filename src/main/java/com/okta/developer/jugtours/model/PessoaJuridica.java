package com.okta.developer.jugtours.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import lombok.NonNull;

import javax.persistence.*;

import java.util.Set;

@Data
@AllArgsConstructor
@RequiredArgsConstructor
@Entity
@Table(name = "pessoa_juridica")
public class PessoaJuridica {

    @Id
    @GeneratedValue
    private Long        id;
    @NonNull
    private String      companyName;
    @NonNull
    private Long        cnpj;
    @NonNull
    private String      postalCode;
    @NonNull
    private String      email;
    @NonNull
    private String      stage;

    @ElementCollection
    private Set<String> telefones;
}
