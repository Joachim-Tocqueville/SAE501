type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
  action?: { label: string; href: string };
};

export function PageIntro({ eyebrow, title, description, action }: PageIntroProps) {
  return (
    <section className="page-intro">
      <div className="container page-intro__content">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{description}</p>
        {action && (
          <a className="button button--mint" href={action.href}>
            {action.label}
          </a>
        )}
      </div>
    </section>
  );
}
