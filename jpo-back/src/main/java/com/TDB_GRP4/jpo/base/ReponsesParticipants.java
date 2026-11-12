package com.TDB_GRP4.jpo.base;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "REPONDRE")
// Association REPONDRE : réponse d'un participant à une option, avec sa date de réponse.
public class ReponsesParticipants {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "participant_id", nullable = false)
    private Participants participant;

    @ManyToOne
    @JoinColumn(name = "option_reponse_id", nullable = false)
    private OptionReponses optionReponse;

    private LocalDateTime dateReponse;

    public ReponsesParticipants(Participants participant, OptionReponses optionReponse, LocalDateTime dateReponse) {
        this.participant = participant;
        this.optionReponse = optionReponse;
        this.dateReponse = dateReponse;
    }

    public ReponsesParticipants() {
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

    public OptionReponses getOptionReponse() {
        return optionReponse;
    }

    public void setOptionReponse(OptionReponses optionReponse) {
        this.optionReponse = optionReponse;
    }

    public LocalDateTime getDateReponse() {
        return dateReponse;
    }

    public void setDateReponse(LocalDateTime dateReponse) {
        this.dateReponse = dateReponse;
    }
}