package com.TDB_GRP4.jpo.base;

import jakarta.persistence.*;

@Entity
@Table(name = "RETOUR")
// Table RETOUR : retour d'un participant, classé par catégorie et année d'édition.
public class Retours {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String categorie;
    private String contenu;
    private int anneeEdition;

    @ManyToOne
    @JoinColumn(name = "participant_id")
    private Participants participant;

    public Retours(String categorie, String contenu, int anneeEdition, Participants participant) {
        this.categorie = categorie;
        this.contenu = contenu;
        this.anneeEdition = anneeEdition;
        this.participant = participant;
    }

    public Retours() {
    }

    public Long getId() {
        return id;
    }

    public String getCategorie() {
        return categorie;
    }

    public void setCategorie(String categorie) {
        this.categorie = categorie;
    }

    public String getContenu() {
        return contenu;
    }

    public void setContenu(String contenu) {
        this.contenu = contenu;
    }

    public int getAnneeEdition() {
        return anneeEdition;
    }

    public void setAnneeEdition(int anneeEdition) {
        this.anneeEdition = anneeEdition;
    }

    public Participants getParticipant() {
        return participant;
    }

    public void setParticipant(Participants participant) {
        this.participant = participant;
    }
}