"use client";

export function VideoHero() {

  const scrollToContent = () => {
    const lenis = (window as any).lenis;
    if (lenis) {
      lenis.scrollTo(window.innerHeight, {
        duration: 1.2,
        easing: (t: number) => {
          return t < 0.5
            ? 4 * t * t * t
            : 1 - Math.pow(-2 * t + 2, 3) / 2;
        },
      });
    }
  };

  return (
    <section className="video-hero snap-section">
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
