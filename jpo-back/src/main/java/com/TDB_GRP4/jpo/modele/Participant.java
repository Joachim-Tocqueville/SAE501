package com.TDB_GRP4.jpo.modele;

import jakarta.persistence.Entity;

@Entity
public class Participant extends Personne {
    private String nom;
    private String prenom;
    private String raison;
    private Boolean present;
    private Boolean verifier;

    public Participant(String username, String password, String email, String nom, String prenom, String raison, Boolean present, Boolean verifier) {
        super (username, password, email);
        this.nom = nom;
        this.prenom = prenom;
        this.raison = raison;
        this.present = present;
        this.verifier = verifier;
    }

    /* public Inscription sInscrire(Evenement evenement) {
        return new Inscription(null, null, this, java.time.LocalDateTime.now());
    } */

    public void seDesinscrire(Evenement evenement) {
        System.out.println("Participant désinscrit avec succès");
    }

    public Retour envoyerRetour(String categorie, String texte) {
        return new Retour(null, texte, java.time.LocalDateTime.now());
    }

    public void repondre(OptionReponse option) {
        System.out.println("Réponse envoyée avec succès");
    }
}