package com.TDB_GRP4.jpo.modele;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Question {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String enonce;
    private Integer ordre;

    public Question(Long id, String enonce, Integer ordre) {
        this.id = id;
        this.enonce = enonce;
        this.ordre = ordre;
    }

    public void ajouterOption(OptionReponse option) {
        System.out.println("Option ajoutée avec succès");
    }

    public List<OptionReponse> getBonnesReponses() {
        return null;
    }
}