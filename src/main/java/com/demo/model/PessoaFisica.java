package com.demo.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import lombok.NonNull;

import javax.persistence.*;

import java.util.Set;

@Data
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
    private String      cpf;
    private String      postalCode;
    @NonNull
    private String      email;
    @NonNull
    private String      stage;

    @ElementCollection(fetch = FetchType.EAGER)
    private Set<String> phones;
}
