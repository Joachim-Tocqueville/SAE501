"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Icon } from "@/components/ui/icon";

export type SkillProject = {
  title: string;
  /** Petit badge, par exemple « SAÉ 401 » */
  tag?: string;
  text: string;
  /** Aperçu (dans public/images) ; sans image, une vignette aux couleurs de la charte s'affiche */
  image?: string;
  links?: { label: string; href: string; external?: boolean }[];
};

export type Skill = {
  number: string;
  title: string;
  description: string;
  image: string;
  projects: SkillProject[];
};

/**
 * Cartes « Trois domaines » : un clic ouvre une fenêtre qui présente 1 ou 2 projets
 * concrets, avec des liens pour les visiter.
 */
export function SkillCards({ skills }: { skills: Skill[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const skill = openIndex === null ? null : skills[openIndex];

  // Ouvre / ferme la fenêtre native (gère le fond assombri, la touche Échap et le focus)
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (skill && !dialog.open) dialog.showModal();
    if (!skill && dialog.open) dialog.close();
  }, [skill]);

  return (
    <>
      <div className="skill-grid">
        {skills.map((item, i) => (
          <button className="card skill-card" type="button" key={item.number} onClick={() => setOpenIndex(i)}>
            <span className="skill-card__media">
              <img src={item.image} alt="" loading="lazy" />
            </span>
            <span className="skill-card__body">
              <span className="skill-card__number">{item.number}</span>
              <span className="skill-card__title">{item.title}</span>
              <span className="skill-card__text">{item.description}</span>
              <span className="skill-card__cta">
                Découvrir {item.projects.length > 1 ? `${item.projects.length} projets` : "le projet"}
                <Icon name="arrow" size={14} />
              </span>
            </span>
          </button>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        className="project-dialog"
        aria-labelledby="project-dialog-title"
        onClose={() => setOpenIndex(null)}
        // Un clic sur le fond assombri (en dehors du contenu) ferme la fenêtre
        onClick={(event) => event.target === event.currentTarget && setOpenIndex(null)}
      >
        {skill && (
          <div className="project-dialog__content">
            <header className="project-dialog__header">
              <div>
                <span className="eyebrow">Projets · {skill.title}</span>
                <h2 id="project-dialog-title">Ce que les étudiants ont réalisé</h2>
              </div>
              <button
                className="project-dialog__close"
                type="button"
                onClick={() => setOpenIndex(null)}
                aria-label="Fermer"
              >
                <Icon name="plus" size={20} />
              </button>
            </header>

            <div className="project-list">
              {skill.projects.map((project) => (
                <article className="project" key={project.title}>
                  <div className="project__media">
                    {project.image ? (
                      <img src={project.image} alt={`Aperçu : ${project.title}`} />
                    ) : (
                      <span className="project__placeholder" aria-hidden="true">
                        <Icon name={skill.title === "3D" ? "cube" : skill.title === "Concevoir" ? "map" : "globe"} size={36} />
                      </span>
                    )}
                  </div>
                  <div className="project__body">
                    {project.tag && <span className="project__tag">{project.tag}</span>}
                    <h3>{project.title}</h3>
                    <p>{project.text}</p>
                    {project.links && project.links.length > 0 && (
                      <div className="project__links">
                        {project.links.map((link, l) =>
                          link.external ? (
                            <a
                              key={link.href}
                              className={`button ${l === 0 ? "button--primary" : "button--outline"}`}
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {link.label}
                              <Icon name="arrow" size={14} />
                            </a>
                          ) : (
                            <Link
                              key={link.href}
                              className={`button ${l === 0 ? "button--primary" : "button--outline"}`}
                              href={link.href}
                              onClick={() => setOpenIndex(null)}
                            >
                              {link.label}
                              <Icon name="arrow" size={14} />
                            </Link>
                          ),
                        )}
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
