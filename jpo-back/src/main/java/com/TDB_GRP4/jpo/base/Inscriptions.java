package com.TDB_GRP4.jpo.base;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "INSCRIPTION")
// Association S'INSCRIRE : relie un participant à un événement avec son statut, sa présence et sa date.
public class Inscriptions {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "participant_id", nullable = false)
    private Participants participant;

    @ManyToOne
    @JoinColumn(name = "evenement_id", nullable = false)
    private Evenements evenement;

    private String statut;
    private boolean present;
    private LocalDateTime date;

    public Inscriptions(Participants participant, Evenements evenement, String statut, boolean present, LocalDateTime date) {
        this.participant = participant;
        this.evenement = evenement;
        this.statut = statut;
        this.present = present;
        this.date = date;
    }

    public Inscriptions() {
    }

    public Long getId() {
        return id;
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

    public String getStatut() {
        return statut;
    }

    public void setStatut(String statut) {
        this.statut = statut;
    }

    public boolean isPresent() {
        return present;
    }

    public void setPresent(boolean present) {
        this.present = present;
    }

    public LocalDateTime getDate() {
        return date;
    }

    public void setDate(LocalDateTime date) {
        this.date = date;
    }
}