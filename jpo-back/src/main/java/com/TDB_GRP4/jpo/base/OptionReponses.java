package com.TDB_GRP4.jpo.base;

import jakarta.persistence.*;

@Entity
@Table(name = "OPTION_REPONSE")
// Table OPTION_REPONSE : choix possible pour répondre à une question.
public class OptionReponses {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String libelle;
    private boolean estCorrecte;

    @ManyToOne
    @JoinColumn(name = "question_id", nullable = false)
    private Questions question;

    public OptionReponses(String libelle, boolean estCorrecte, Questions question) {
        this.libelle = libelle;
        this.estCorrecte = estCorrecte;
        this.question = question;
    }

    public OptionReponses() {
    }

    public Long getId() {
        return id;
    }

    public String getLibelle() {
        return libelle;
    }

    public void setLibelle(String libelle) {
        this.libelle = libelle;
    }

    public boolean isEstCorrecte() {
        return estCorrecte;
    }

    public void setEstCorrecte(boolean estCorrecte) {
        this.estCorrecte = estCorrecte;
    }

    public Questions getQuestion() {
        return question;
    }

    public void setQuestion(Questions question) {
        this.question = question;
    }
}