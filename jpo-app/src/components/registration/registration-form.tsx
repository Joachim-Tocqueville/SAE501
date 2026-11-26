"use client";

import { useState, type FormEvent } from "react";

// Centres d'intérêt proposés aux futurs étudiants (pas aux parents / accompagnateurs)
const interests = [
  { value: "3d", label: "J’aime la 3D et le jeu vidéo" },
  { value: "code", label: "J’aime le code et le développement web" },
  { value: "graphisme", label: "Le graphisme et le design" },
  { value: "audiovisuel", label: "La vidéo et l’audiovisuel" },
  { value: "communication", label: "La communication et les réseaux sociaux" },
  { value: "decouverte", label: "Je découvre, je ne sais pas encore" },
  { value: "autre", label: "Autre" },
];

export function RegistrationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [profile, setProfile] = useState("");
  const [interest, setInterest] = useState("");

  // La question sur les centres d'intérêt n'apparaît qu'une fois un profil choisi,
  // et pas pour les parents / accompagnateurs
  const showInterest = profile !== "" && profile !== "parent";

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <div className="form-card__heading">
        <span className="eyebrow">Journée portes ouvertes</span>
        <h2>Préparez votre venue</h2>
        <p>Quelques informations à remplir pour organiser au mieux votre visite.</p>
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
          <select name="profile" value={profile} onChange={(event) => setProfile(event.target.value)} required>
            <option value="" disabled>
              Sélectionnez votre profil
            </option>
            <option value="lyceen">Lycéen(ne)</option>
            <option value="etudiant">Étudiant(e)</option>
            <option value="parent">Parent ou accompagnateur</option>
            <option value="autre">Autre</option>
          </select>
        </label>
        {showInterest && (
          <div className="form-field form-field--full form-field--reveal">
            <label className="form-field">
              <span>Qu’est-ce qui vous intéresse dans la formation ?</span>
              <select
                name="interest"
                value={interest}
                onChange={(event) => setInterest(event.target.value)}
                required
              >
                <option value="" disabled>
                  Choisissez ce qui vous attire
                </option>
                {interests.map((item) => (
                  <option value={item.value} key={item.value}>
                    {item.label}
                  </option>
                ))}
              </select>
            </label>
            {interest === "autre" && (
              <label className="form-field form-field--reveal">
                <span>Précisez</span>
                <input
                  name="interestOther"
                  placeholder="Par exemple : la photo, le motion design…"
                  maxLength={150}
                  required
                />
              </label>
            )}
          </div>
        )}
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
