package com.TDB_GRP4.jpo.base;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.sql.Timestamp;

@Entity
@Table(name = "EVENEMENT")
// Table EVENEMENT : informations sur un événement organisé.
public class Evenements {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String titre;
    private String description;
    private Timestamp date_debut;
    private Timestamp date_fin;
    private String lieu;
    private int capacite_max;

    // Constructeur avec paramètres
    public Evenements(String titre, String description, Timestamp date_debut, Timestamp date_fin, String lieu, int capacite_max) {
        this.titre = titre;
        this.description = description;
        this.date_debut = date_debut;
        this.date_fin = date_fin;
        this.lieu = lieu;
        this.capacite_max = capacite_max;
    }

    public Evenements() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitre() {
        return titre;
    }

    public void setTitre(String titre) {
        this.titre = titre;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Timestamp getDate_debut() {
        return date_debut;
    }

    public void setDate_debut(Timestamp date_debut) {
        this.date_debut = date_debut;
    }

    public Timestamp getDate_fin() {
        return date_fin;
    }

    public void setDate_fin(Timestamp date_fin) {
        this.date_fin = date_fin;
    }

    public String getLieu() {
        return lieu;
    }

    public void setLieu(String lieu) {
        this.lieu = lieu;
    }

    public int getCapacite_max() {
        return capacite_max;
    }

    public void setCapacite_max(int capacite_max) {
        this.capacite_max = capacite_max;
    }

}