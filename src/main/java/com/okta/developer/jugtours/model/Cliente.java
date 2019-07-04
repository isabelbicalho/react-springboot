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
@Table(name = "cliente")
public class Cliente {

    @Id
    @GeneratedValue
    private Long        id;
    @NonNull
    private String      postalCode;
    @NonNull
    private String      email;
    @NonNull
    @Enumerated
    private Stage       stage;

    @ElementCollection
    private Set<String> telefones;
}
