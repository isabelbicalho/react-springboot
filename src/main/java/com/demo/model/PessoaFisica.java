package com.demo.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import lombok.NonNull;

import javax.persistence.*;

import java.util.Set;

@Data
//@allargsconstructor
//@requiredargsconstructor
@NoArgsConstructor
@Entity
@Table(name = "pessoa_fisica")
public class PessoaFisica {

    @Id
    @GeneratedValue
    private Long        id;
    @NonNull
    private String      name;
    @NonNull
    private Long        cpf;
    private String      postalCode;
    @NonNull
    private String      email;
    @NonNull
    private String      stage;

    @ElementCollection
    private Set<String> telefones;
}
