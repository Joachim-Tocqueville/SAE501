package com.TDB_GRP4.jpo.base;

import jakarta.persistence.*;

@Entity
@Table(name = "RESSOURCE")
// Table RESSOURCE : ressource proposée pour un événement.
public class Ressources {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String titre;
    private String type;
    private String url;

    @ManyToOne
    @JoinColumn(name = "evenement_id")
    private Evenements evenement;

    public Ressources(String titre, String type, String url, Evenements evenement) {
        this.titre = titre;
        this.type = type;
        this.url = url;
        this.evenement = evenement;
    }

    public Ressources() {
    }

    public Long getId() {
        return id;
    }

    public String getTitre() {
        return titre;
    }

    public void setTitre(String titre) {
        this.titre = titre;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public Evenements getEvenement() {
        return evenement;
    }

    public void setEvenement(Evenements evenement) {
        this.evenement = evenement;
    }
}