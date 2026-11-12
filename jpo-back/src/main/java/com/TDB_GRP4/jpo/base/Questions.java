package com.TDB_GRP4.jpo.base;

import jakarta.persistence.*;

@Entity
@Table(name = "QUESTION")
// Table QUESTION : énoncé ordonné appartenant à une interaction.
public class Questions {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String enonce;
    private int ordre;

    @ManyToOne
    @JoinColumn(name = "interaction_id", nullable = false)
    private Interactions interaction;

    public Questions(String enonce, int ordre, Interactions interaction) {
        this.enonce = enonce;
        this.ordre = ordre;
        this.interaction = interaction;
    }

    public Questions() {
    }

    public Long getId() {
        return id;
    }

    public String getEnonce() {
        return enonce;
    }

    public void setEnonce(String enonce) {
        this.enonce = enonce;
    }

    public int getOrdre() {
        return ordre;
    }

    public void setOrdre(int ordre) {
        this.ordre = ordre;
    }

    public Interactions getInteraction() {
        return interaction;
    }

    public void setInteraction(Interactions interaction) {
        this.interaction = interaction;
    }
}