package com.TDB_GRP4.jpo.base;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "COMMENTAIRE")
// Table COMMENTAIRE : avis rédigé par un participant au sujet d'un événement.
public class Commentaires {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String contenu;
    private int note;
    private LocalDateTime date;

    @ManyToOne
    @JoinColumn(name = "participant_id", nullable = false)
    private Participants participant;

    @ManyToOne
    @JoinColumn(name = "evenement_id", nullable = false)
    private Evenements evenement;

    public Commentaires(String contenu, int note, LocalDateTime date, Participants participant, Evenements evenement) {
        this.contenu = contenu;
        this.note = note;
        this.date = date;
        this.participant = participant;
        this.evenement = evenement;
    }

    public Commentaires() {
    }

    public Long getId() {
        return id;
    }

    public String getContenu() {
        return contenu;
    }

    public void setContenu(String contenu) {
        this.contenu = contenu;
    }

    public int getNote() {
        return note;
    }

    public void setNote(int note) {
        this.note = note;
    }

    public LocalDateTime getDate() {
        return date;
    }

    public void setDate(LocalDateTime date) {
        this.date = date;
    }

    public Participants getParticipant() {
        return participant;
    }

    public void setParticipant(Participants participant) {
        this.participant = participant;
    }

    public Evenements getEvenement() {
        return evenement;
    }

    public void setEvenement(Evenements evenement) {
        this.evenement = evenement;
    }
}