package com.TDB_GRP4.jpo.modele;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Quiz {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String titre;

    public Quiz(Long id, String titre) {
        this.id = id;
        this.titre = titre;
    }

    public void ajouterQuestion(Question question) {
        System.out.println("Question ajoutée avec succès");
    }

    public Integer nombreQuestions() {
        return 0;
    }

    public Integer calculerScore(Participant participant) {
        return 0;
    }
}