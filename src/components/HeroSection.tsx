"use client";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface HeroSectionProps {
  imageUrl: string;
}

export function HeroSection({ imageUrl }: HeroSectionProps) {
  return (
    <section className="section section--white section--hero reveal" data-reveal>
      <div className="container">
        <div className="layout-split">
          {/* Image */}
          <div className="hero__media">
            <ImageWithFallback
              src={imageUrl}
              alt="Halloween, c'est pas pour les petits"
              className="hero__image"
            />
          </div>

          {/* Content */}
          <div className="stack stack--md">
            <h2 className="hero__title">
              Raconte-moi une histoire
            </h2>
            <div className="hero__content">
              <p className="hero__text">
                Si la fête d'Halloween place beaucoup aux enfants, elle peut aussi
                être source d'angoisse pour les plus jeunes. Voici quelques conseils
                pour adapter cette célébration aux tout-petits et preserver leur bien-être.
              </p>
            </div>
            <button type="button" className="button button--primary">
              Lire la suite
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
