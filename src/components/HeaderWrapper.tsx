"use client";
import { useEffect, useState } from "react";
import { Header } from "./Header";

export function HeaderWrapper() {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    let cleanupFn: (() => void) | null = null;

    const initScrollListener = () => {
      const lenis = (window as any).lenis;

      if (!lenis) {
        setTimeout(initScrollListener, 50);
        return;
      }

      const handleScroll = () => {
        // Calculer la position du titre "Activités"
        const titleElement = document.getElementById("activites-title");
        if (!titleElement) return;

        const titlePosition = titleElement.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Afficher le header quand le titre arrive dans le viewport
        setShowHeader(titlePosition <= windowHeight * 0.8);
      };

      // Vérifier immédiatement
      handleScroll();

      lenis.on("scroll", handleScroll);

      cleanupFn = () => {
        lenis.off("scroll", handleScroll);
      };
    };

    initScrollListener();

    return () => {
      if (cleanupFn) cleanupFn();
    };
  }, []);

  return <Header isVisible={showHeader} />;
}
