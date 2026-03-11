import Image from "next/image";

const aids = [
  {
    title: "Complément de libre choix du mode de garde",
    scope: "Aide mensuelle",
    description:
      "Accompagnement pour réduire le coût de la garde à domicile selon l'âge de l'enfant et les revenus du foyer.",
  },
  {
    title: "Crédit d'impôt services à la personne",
    scope: "Avantage fiscal",
    description:
      "Explication simulée des dépenses pouvant être déclarées pour la garde d'enfants à domicile et du fonctionnement du remboursement associé.",
  },
  {
    title: "Aides employeur ou comité social",
    scope: "Soutien complémentaire",
    description:
      "Participation financière proposée par certaines entreprises pour alléger les frais de garde des familles.",
  },
  {
    title: "Accompagnement administratif",
    scope: "Démarches simplifiées",
    description:
      "Repères pour constituer un dossier, réunir les justificatifs utiles et suivre les échéances sans se disperser.",
  },
];

const highlights = [
  "Estimer votre budget grâce à nos simulations",
  "Identifier les aides de la CAF auxquelles vous avez droit",
  "Comparer garde simple et garde partagée",
  "Comprendre comment déclarer une garde occasionnelle",
];

export default function AideFinancePage() {
  return (
    <div className="formation-page">
      <section className="section section--white formation-hero">
        <div className="container">
          <div className="formation-hero__content">
            <div className="formation-hero__text">
              <p className="formation-kicker">Aides financières</p>
              <h1>Les aides financières pour la garde d’enfants à domicile </h1>
              <p className="formation-lead">
               Choisir la garde d’enfants à domicile est souvent plus accessible 
               qu’on ne le pense. Grâce aux aides disponibles, 
               le coût peut être fortement réduit selon vos revenus,
               l’âge de vos enfants et le nombre d’heures de garde.

              </p>
              <div className="formation-highlights">
                {highlights.map((item) => (
                  <div key={item} className="formation-highlight">
                    {item}
                  </div>
                ))}
              </div>
              <a
                className="button button--primary"
                href="mailto:contact@lagrandeclasse.fr?subject=Demande%20d%27informations%20sur%20les%20aides%20financieres"
              >
                Demander une estimation
              </a>
            </div>
            <div className="formation-hero__media">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBidWRnZXR8ZW58MXx8fHwxNzYyNTkzMDAwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Parent préparant un budget familial"
                className="formation-hero__image"
                width={1080}
                height={720}
                priority
                sizes="(max-width: 768px) 100vw, 22rem"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--muted">
        <div className="container">
          <h2 className="section-title section-title--lg">Repères pour les familles</h2>
          <div className="cards formation-cards">
            {aids.map((aid) => (
              <article key={aid.title} className="card formation-card">
                <div className="card__body">
                  <p className="formation-card__duration">{aid.scope}</p>
                  <h3 className="card__title">{aid.title}</h3>
                  <p className="card__excerpt">{aid.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <div className="formation-banner">
            <Image
              src="/asset/icone-lgc.png"
              alt=""
              className="formation-banner__image"
              width={176}
              height={176}
              sizes="9rem"
            />
            <div className="formation-banner__text">
              <h2>Pourquoi cette rubrique ?</h2>
              <p>
                Aider les parents à mieux comprendre, de manière fictive et
                simplifiée, les dispositifs qui peuvent réduire le coût réel de la
                garde à domicile et sécuriser leur organisation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
