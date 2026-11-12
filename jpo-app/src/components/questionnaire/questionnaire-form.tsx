"use client";

import { useState, type FormEvent } from "react";

export function QuestionnaireForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <form className="form-card survey-card" onSubmit={handleSubmit}>
      <div className="form-card__heading">
        <span className="eyebrow">Votre retour compte</span>
        <h2>Comment s’est passée votre visite ?</h2>
        <p>Le questionnaire prend environ 2 minutes.</p>
      </div>
      <fieldset className="form-fieldset">
        <legend>Comment avez-vous connu cette journée portes ouvertes ?</legend>
        <div className="choice-row">
          {["Lycée", "Réseaux sociaux", "Proche", "Autre"].map((choice) => (
            <label className="choice-chip" key={choice}>
              <input type="radio" name="discovery" value={choice} required />
              <span>{choice}</span>
            </label>
          ))}
        </div>
      </fieldset>
      <fieldset className="form-fieldset">
        <legend>Quels espaces avez-vous visités ?</legend>
        <div className="choice-row">
          {["Salles de cours", "Studio audiovisuel", "Labo VR", "Espace projets"].map(
            (choice) => (
              <label className="choice-chip" key={choice}>
                <input type="checkbox" name="spaces" value={choice} />
                <span>{choice}</span>
              </label>
            ),
          )}
        </div>
      </fieldset>
      <label className="form-field">
        <span>Votre avis sur l’accueil</span>
        <select name="rating" defaultValue="" required>
          <option value="" disabled>
            Choisissez une réponse
          </option>
          <option>Très satisfaisant</option>
          <option>Satisfaisant</option>
          <option>À améliorer</option>
        </select>
      </label>
      <label className="form-field">
        <span>Un commentaire ou une suggestion ?</span>
        <textarea name="comment" rows={4} placeholder="Votre réponse (facultatif)" />
      </label>
      <button className="button button--mint" type="submit">
        Envoyer mon avis
      </button>
      {submitted && (
        <p className="form-message" role="status">
          Merci pour votre retour ! Cette maquette n’enregistre pas les réponses.
        </p>
      )}
    </form>
  );
}
