const themes = [
  {
    title: "Accueil et sécurité",
    scope: "Obligations de base",
    description:
      "Repères fictifs sur l'organisation des espaces, les consignes de surveillance et la traçabilité des incidents du quotidien.",
  },
  {
    title: "Hygiène et protocoles",
    scope: "Procédures internes",
    description:
      "Exemples de règles sur le lavage des mains, l'entretien du matériel, les changes et la gestion des produits sensibles.",
  },
  {
    title: "Documents à conserver",
    scope: "Suivi administratif",
    description:
      "Liste fictive des autorisations parentales, fiches sanitaires, registres de présence et comptes rendus d'échanges.",
  },
  {
    title: "Communication avec les familles",
    scope: "Cadre relationnel",
    description:
      "Bonnes pratiques pour informer les parents, formaliser les transmissions et clarifier les responsabilités de chacun.",
  },
];

const reminders = [
  "Intervenants diplômés",
  "Continuité de service",
  "Supports internes à remettre aux équipes",
  "Suivi qualité",
];

export default function ReglementationPage() {
  return (
    <div className="formation-page">
      <section className="section section--white formation-hero">
        <div className="container">
          <div className="formation-hero__content">
            <div className="formation-hero__text">
              <p className="formation-kicker">Cadre réglementaire</p>
              <h1>Réglementation petite enfance</h1>
              <p className="formation-lead">
                Une page fictive pour présenter les grands repères réglementaires
                d'une structure d'accueil: sécurité, hygiène, documents de
                suivi et communication avec les familles.
              </p>
              <div className="formation-highlights">
                {reminders.map((item) => (
                  <div key={item} className="formation-highlight">
                    {item}
                  </div>
                ))}
              </div>
              <a className="button button--primary" href="mailto:contact@lagrandeclasse.fr?subject=Demande%20de%20fiche%20pratique">
                Télécharger la fiche pratique
              </a>
            </div>
            <div className="formation-hero__media">
              <img
                src="https://images.unsplash.com/photo-1567746455504-cb3213f8f5b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVzY2hvb2wlMjBjbGFzc3Jvb218ZW58MXx8fHwxNzYxNDA1MzgxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Espace d'accueil en petite enfance"
                className="formation-hero__image"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--muted">
        <div className="container">
          <h2 className="section-title section-title--lg">Thèmes à connaître</h2>
          <div className="cards formation-cards">
            {themes.map((theme) => (
              <article key={theme.title} className="card formation-card">
                <div className="card__body">
                  <p className="formation-card__duration">{theme.scope}</p>
                  <h3 className="card__title">{theme.title}</h3>
                  <p className="card__excerpt">{theme.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <div className="formation-banner">
              <img
                src="/asset/pere_castor.png"
                alt=""
                className="formation-banner__image"
              />
            <div className="formation-banner__text">
              <h2>Pourquoi cette rubrique ?</h2>
              <p>
                Centraliser des contenus fictifs faciles à lire pour aider les
                professionnels à visualiser les obligations, les procédures et les
                points de vigilance d&apos;une structure petite enfance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
