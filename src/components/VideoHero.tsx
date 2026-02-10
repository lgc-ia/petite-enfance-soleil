"use client";
import { useEffect, useRef } from "react";

export function VideoHero() {
  const hasSnappedRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight;

      // Si on a scrollé plus de 20% du hero et qu'on n'a pas encore snap
      if (scrollY > heroHeight * 0.2 && scrollY < heroHeight && !hasSnappedRef.current) {
        hasSnappedRef.current = true;
        window.scrollTo({
          top: heroHeight,
          behavior: "smooth",
        });
      }

      // Reset le snap si on revient en haut
      if (scrollY < heroHeight * 0.1) {
        hasSnappedRef.current = false;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="video-hero">
      <video
        className="video-hero__video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/asset/video_LGC.mp4" type="video/mp4" />
        Votre navigateur ne supporte pas la lecture de vidéos.
      </video>

      {/* Overlay pour assombrir la vidéo si nécessaire */}
      <div className="video-hero__overlay" />

      {/* Indicateur de scroll animé */}
      <button
        className="scroll-indicator"
        onClick={scrollToContent}
        aria-label="Défiler vers le contenu"
      >
        <span className="scroll-indicator__text">Scroll</span>
        <svg
          className="scroll-indicator__icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
    </section>
  );
}
