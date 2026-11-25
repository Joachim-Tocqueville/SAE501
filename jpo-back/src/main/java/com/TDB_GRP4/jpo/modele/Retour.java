package com.TDB_GRP4.jpo.modele;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Retour {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String contenu;
    private java.time.LocalDateTime date;

    public Retour(Long id, String contenu, java.time.LocalDateTime date) {
        this.id = id;
        this.contenu = contenu;
        this.date = date;
    }

    public void modifier(String contenu) {
        System.out.println("Retour modifié avec succès");
    }

    public void supprimer() {
        System.out.println("Retour supprimé avec succès");
    }
}