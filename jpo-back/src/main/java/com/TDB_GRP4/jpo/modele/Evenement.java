package com.TDB_GRP4.jpo.modele;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Evenement {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String titre;
    private String description;
    private LocalDateTime dateDebut;
    private LocalDateTime dateFin;
    private String lieu;
    private Integer capaciteMax;

    public Evenement(Long id, String titre, String description, LocalDateTime dateDebut, LocalDateTime dateFin, String lieu, Integer capaciteMax) {
        this.id = id;
        this.titre = titre;
        this.description = description;
        this.dateDebut = dateDebut;
        this.dateFin = dateFin;
        this.lieu = lieu;
        this.capaciteMax = capaciteMax;
    }

    public Integer nombreInscrits() {
        return 0;
    }

    public Integer placesRestantes() {
        return 0;
    }

    public Boolean estComplet() {
        return true;
    }

    public void ajouterRessource(Ressource ressource) {
        System.out.println("Ressource ajoutée avec succès");
    }
}