package com.TDB_GRP4.jpo.base;

import jakarta.persistence.*;

@Entity
@Table(name = "INTERACTION")
// Table INTERACTION : activité ou animation proposée dans le cadre d'un événement.
public class Interactions {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String type;
    private String titre;
    private String statut;

    @ManyToOne
    @JoinColumn(name = "evenement_id", nullable = false)
    private Evenements evenement;

    public Interactions(String type, String titre, String statut, Evenements evenement) {
        this.type = type;
        this.titre = titre;
        this.statut = statut;
        this.evenement = evenement;
    }

    public Interactions() {
    }

    public Long getId() {
        return id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getTitre() {
        return titre;
    }

    public void setTitre(String titre) {
        this.titre = titre;
    }

    public String getStatut() {
        return statut;
    }

    public void setStatut(String statut) {
        this.statut = statut;
    }

    public Evenements getEvenement() {
        return evenement;
    }

    public void setEvenement(Evenements evenement) {
        this.evenement = evenement;
    }
}