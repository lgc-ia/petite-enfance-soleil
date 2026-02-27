"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Header } from "./Header";

export function HeaderWrapper() {
  const pathname = usePathname();
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Afficher le header après avoir scrollé au-delà de 80% de la hauteur de l'écran
      const scrollThreshold = window.innerHeight * 0.8;
      setShowHeader(window.scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <Header isVisible={showHeader} />;
}
