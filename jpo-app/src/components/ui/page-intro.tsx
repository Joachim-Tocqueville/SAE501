import type { ReactNode } from "react";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
  action?: { label: string; href: string };
  /** Contenu en plus sous le texte (par exemple des chiffres clés) */
  children?: ReactNode;
  /** Illustration affichée à droite du bandeau (optionnelle) */
  illustration?: ReactNode;
};

export function PageIntro({ eyebrow, title, description, action, children, illustration }: PageIntroProps) {
  return (
    <section className={`page-intro${illustration ? " page-intro--illustrated" : ""}`}>
      <div className="container page-intro__content">
        <div className="page-intro__text">
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p>{description}</p>
          {action && (
            <a className="button button--mint" href={action.href}>
              {action.label}
            </a>
          )}
        </div>
        {illustration && (
          <div className="page-intro__illustration" aria-hidden="true">
            {illustration}
          </div>
        )}
        {children && <div className="page-intro__extra">{children}</div>}
      </div>
    </section>
  );
}
