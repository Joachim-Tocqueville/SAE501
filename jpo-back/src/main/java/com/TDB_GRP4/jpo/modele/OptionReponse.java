package com.TDB_GRP4.jpo.modele;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class OptionReponse {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String libelle;
    private Boolean estCorrecte;

    public OptionReponse(Long id, String libelle, Boolean estCorrecte) {
        this.id = id;
        this.libelle = libelle;
        this.estCorrecte = estCorrecte;
    }

    public Boolean estBonneReponse() {
        return this.estCorrecte;
    }
}