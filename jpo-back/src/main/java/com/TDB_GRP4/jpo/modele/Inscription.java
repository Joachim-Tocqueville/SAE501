package com.TDB_GRP4.jpo.modele;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Inscription {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private Boolean present;
    private LocalDateTime date;

    public Inscription(Long id, Boolean present, LocalDateTime date) {
        this.id = id;
        this.present = present;
        this.date = date;
    }

    public void confirmer() {
        System.out.println("Inscription confirmée avec succès");
    }

    public void annuler() {
        System.out.println("Inscription annulée avec succès");
    }
}