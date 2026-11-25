"use client";

import { useState, type FormEvent } from "react";

export function RegistrationForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <div className="form-card__heading">
        <span className="eyebrow">Journée portes ouvertes</span>
        <h2>Préparez votre venue</h2>
        <p>Quelques informations pour organiser votre visite.</p>
      </div>
      <div className="form-grid">
        <label className="form-field">
          <span>Prénom</span>
          <input name="firstName" autoComplete="given-name" required />
        </label>
        <label className="form-field">
          <span>Nom</span>
          <input name="lastName" autoComplete="family-name" required />
        </label>
        <label className="form-field">
          <span>Adresse e-mail</span>
          <input name="email" type="email" autoComplete="email" required />
        </label>
        <label className="form-field">
          <span>Vous êtes</span>
          <select name="profile" defaultValue="" required>
            <option value="" disabled>
              Sélectionnez votre profil
            </option>
            <option>Lycéen(ne)</option>
            <option>Étudiant(e)</option>
            <option>Parent ou accompagnateur</option>
            <option>Autre</option>
          </select>
        </label>
        <label className="form-field">
          <span>Nombre de personnes</span>
          <select name="attendees" defaultValue="1">
            <option value="1">1 personne</option>
            <option value="2">2 personnes</option>
            <option value="3">3 personnes</option>
            <option value="4">4 personnes ou plus</option>
          </select>
        </label>
        <label className="form-field">
          <span>Créneau souhaité</span>
          <select name="time" defaultValue="matin">
            <option value="matin">Matin · à partir de 10 h</option>
            <option value="apres-midi">Après-midi · à partir de 14 h</option>
          </select>
        </label>
      </div>
      <label className="checkbox-field">
        <input type="checkbox" name="updates" />
        <span>Recevoir les informations pratiques par e-mail</span>
      </label>
      <button className="button button--primary" type="submit">
        Confirmer ma préinscription
      </button>
      {submitted && (
        <p className="form-message" role="status">
          Formulaire vérifié pour la maquette. Aucune inscription n’a été transmise.
        </p>
      )}
    </form>
  );
}
