package com.TDB_GRP4.jpo.modele;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Personne {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String username;
    private String password;
    private String email;

    public Personne(String username, String password, String email) {
        this.username = username;
        this.password = password;
        this.email = email;
    }

    public Boolean sAuthentifier(String username, String password) {
        return this.username.equals(username) && this.password.equals(password);
    }

    public void changerMotDePasse(String nouveauMotDePasse) {
        this.password = nouveauMotDePasse;
    }

}