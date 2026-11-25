package com.TDB_GRP4.jpo.modele;

import jakarta.persistence.Entity;

@Entity
public class Admin extends Personne {

    public Admin(String username, String password, String email) {
        super (username, password, email);
    }
}