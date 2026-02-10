"use client";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Dossier {
  id: number;
  title: string;
  imageUrl: string;
}

interface DossiersSectionProps {
  dossiers: Dossier[];
}

export function DossiersSection({ dossiers }: DossiersSectionProps) {
  return (
    <section className="section section--white reveal" data-reveal>
      <div className="container">
        <h2 className="section-title section-title--xl">
          Dossiers
        </h2>
        <div className="tiles">
          {dossiers.map((dossier) => (
            <div
              key={dossier.id}
              className="tile"
            >
              <div className="tile__media">
                <ImageWithFallback
                  src={dossier.imageUrl}
                  alt={dossier.title}
                  className="tile__image"
                />
              </div>
              <h3 className="tile__title">
                {dossier.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
