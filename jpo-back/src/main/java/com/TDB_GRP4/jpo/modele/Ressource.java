package com.TDB_GRP4.jpo.modele;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Ressource {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String titre;
    private String type;
    private String url;

    public Ressource(Long id, String titre, String type, String url) {
        this.id = id;
        this.titre = titre;
        this.type = type;
        this.url = url;
    }

    public void modifierRessource(String titre, String type, String url) {
        System.out.println("Ressource modifié avec succès");
    }

    public void supprimerRessource() {
        System.out.println("Ressource supprimé avec succès");
    }

}