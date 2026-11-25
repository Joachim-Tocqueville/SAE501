package com.TDB_GRP4.jpo.modele;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class ReponseParticipant {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private LocalDateTime dateReponse;

    public ReponseParticipant(Long id, LocalDateTime dateReponse) {
        this.id = id;
        this.dateReponse = dateReponse;
    }
}