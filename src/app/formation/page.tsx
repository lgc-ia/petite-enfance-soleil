const modules = [
  {
    title: "Bases du métier de nounou",
    duration: "14 heures",
    description:
      "Comprendre le rôle professionnel, la relation avec les familles et les responsabilités quotidiennes.",
  },
  {
    title: "Sécurité et premiers gestes",
    duration: "21 heures",
    description:
      "Prévention des accidents domestiques, réactions d'urgence et gestes de premiers secours adaptés aux tout-petits.",
  },
  {
    title: "Éveil et activités pédagogiques",
    duration: "18 heures",
    description:
      "Créer des activités adaptées à l'âge de l'enfant pour développer l'autonomie, la motricité et le langage.",
  },
  {
    title: "Communication avec les parents",
    duration: "12 heures",
    description:
      "Construire une relation de confiance avec les familles et assurer un suivi quotidien clair et bienveillant.",
  },
];

const highlights = [
  "Programme 100% orienté terrain",
  "Études de cas réalistes",
  "Supports téléchargeables inclus",
  "Attestation de fin de formation",
];

export default function FormationPage() {
  return (
    <div className="formation-page">
      <section className="section section--white formation-hero">
        <div className="container">
          <div className="formation-hero__content">
            <div className="formation-hero__text">
              <p className="formation-kicker">Formation professionnelle</p>
              <h1>Formation des nounous</h1>
              <p className="formation-lead">
                Un parcours fictif pour renforcer les compétences clés des nounous:
                sécurité, éveil de l&apos;enfant, communication avec les parents et
                organisation du quotidien.
              </p>
              <ul className="formation-points">
                {highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <a className="button button--primary" href="#">
                Demander le programme complet
              </a>
            </div>
            <div className="formation-hero__media">
              <img
                src="https://images.unsplash.com/photo-1650504149601-f9fdd445c187?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXljYXJlJTIwY2hpbGRyZW4lMjBwbGF5aW5nfGVufDF8fHx8MTc2MTM0OTI4MHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Nounou avec des enfants"
                className="formation-hero__image"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--muted">
        <div className="container">
          <h2 className="section-title section-title--lg">Contenu de la formation</h2>
          <div className="cards formation-cards">
            {modules.map((module) => (
              <article key={module.title} className="card formation-card">
                <div className="card__body">
                  <p className="formation-card__duration">{module.duration}</p>
                  <h3 className="card__title">{module.title}</h3>
                  <p className="card__excerpt">{module.description}</p>
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
              src="/asset/ballons.png"
              alt="Ballons décoratifs"
              className="formation-banner__image"
            />
            <div className="formation-banner__text">
              <h2>Objectif pédagogique</h2>
              <p>
                Former des nounous capables d&apos;assurer un accueil sécurisé, affectif
                et stimulant pour les enfants de 0 à 6 ans, dans un cadre
                professionnel structuré.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
