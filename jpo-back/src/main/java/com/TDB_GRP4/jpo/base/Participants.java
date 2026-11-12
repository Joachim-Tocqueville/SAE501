package com.TDB_GRP4.jpo.base;

import jakarta.persistence.*;

@Entity
@Table(name = "PARTICIPANT")
// Table PARTICIPANT : coordonnées des personnes participant aux événements.
public class Participants {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String nom;
    private String prenom;
    private String email;
    private String telephone;

    // 1. Relation 0,1 à 1,1 avec USER (POSSÉDER)
    @OneToOne(optional = false)
    @JoinColumn(name = "user_id", referencedColumnName = "id", nullable = false)
    private Users user;

    // Constructeur avec paramètres
    public Participants(String nom, String prenom, String email, String telephone) {
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.telephone = telephone;
    }

    public Participants(String nom, String prenom, String email, String telephone, Users user) {
        this(nom, prenom, email, telephone);
        this.user = user;
    }

    public Participants(){
    }

    public Long getId() {
        return id;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getPrenom() {
        return prenom;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTelephone() {
        return telephone;
    }

    public void setTelephone(String telephone) {
        this.telephone = telephone;
    }

    public Users getUser() {
        return user;
    }

    public void setUser(Users user) {
        this.user = user;
    }
}
