"use client";

import { useEffect, useState } from "react";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  const [isLegalOpen, setIsLegalOpen] = useState(false);

  useEffect(() => {
    if (!isLegalOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsLegalOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isLegalOpen]);

  const footerLinks: Array<{
    label: string;
    href?: string;
    newTab?: boolean;
    modal?: "legal";
  }> = [
    { label: "Qui sommes-nous ?", href: "https://lagrandeclasse.fr/", newTab: true },
    { label: "Mentions legales", modal: "legal" },
    { label: "Plan du site", href: "#" },
    { label: "Contact", href: "#" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    /*{ icon: Twitter, href: "#", label: "X" },*/
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  const partners = [
  "Ministère de la Santé‚",
   "Éducation Nationale",
    "CAF",
    "PMI",
  ];

  const legalSections = [
    {
      title: "La Grande Classe",
      items: [
        { label: "Editeur du site", value: "LGC Jeunesse - SARL, 5000,00 EUR." },
        { label: "Siege social", value: "9 Rue de Saint-Denis, 93400 Saint-Ouen-sur-Seine." },
        { label: "SIRET", value: "508 304 185 00038." },
        { label: "Directeur de la publication", value: "Niang Ismael." },
        {
          label: "Contact",
          value: "01 40 10 27 22.",
          mailto: "contact@lagrandeclasse.fr",
        },
        { label: "Hebergement", value: "La grande classe - SARL." },
        { label: "Propriete intellectuelle", value: "contenus proteges, reproduction interdite sans autorisation." },
        {
          label: "Donnees personnelles",
          value: "usage limite aux services, droits RGPD (acces, rectification, opposition, suppression).",
        },
        { label: "Cookies", value: "utilisation possible pour ameliorer l'experience, desactivation via le navigateur." },
      ],
    },
    {
      title: "Petite Enfance",
      items: [
        { label: "Editeur du site", value: "LGC Jeunesse - SARL, 5000,00 EUR." },
        { label: "Siege social", value: "9 Rue de Saint-Denis, 93400 Saint-Ouen-sur-Seine." },
        { label: "SIRET", value: "508 304 185 00038." },
        { label: "Directeur de la publication", value: "Niang Ismael." },
        {
          label: "Contact",
          value: "01 40 10 27 22.",
          mailto: "contact@lagrandeclasse.fr",
        },
        { label: "Hebergement", value: "La grande classe - SARL." },
        { label: "Propriete intellectuelle", value: "contenus proteges, reproduction interdite sans autorisation." },
        {
          label: "Donnees personnelles",
          value: "usage limite aux services, droits RGPD (acces, rectification, opposition, suppression).",
        },
        { label: "Cookies", value: "utilisation possible pour ameliorer l'experience, desactivation via le navigateur." },
      ],
    },
  ];

  return (
    <footer className="site-footer">
      <div className="footer__outer">
        <div className="footer__inner">
          {/* Partners */}
          <div className="footer__partners">
            <h3 className="footer__partners-title">Nos partenaires</h3>
            <div className="footer__partner-list">
              {partners.map((partner) => (
                <div
                  key={partner}
                  className="footer__partner"
                >
                  {partner}
                </div>
              ))}
            </div>
          </div>

          <div className="footer__grid">
            {/* Links */}
            <div>
              <ul className="footer__links">
                {footerLinks.map((link) => (
                  <li key={link.label}>
                    {link.modal === "legal" ? (
                      <button
                        type="button"
                        className="footer__link footer__link--button"
                        onClick={() => setIsLegalOpen(true)}
                        aria-haspopup="dialog"
                      >
                        {link.label}
                      </button>
                    ) : (
                      <a
                        href={link.href ?? "#"}
                        target={link.newTab ? "_blank" : "_self"}
                        rel={link.newTab ? "noopener noreferrer" : undefined}
                        className="footer__link"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div className="footer__social">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="footer__social-link"
                  aria-label={social.label}
                >
                  <social.icon className="footer__social-icon" />
                </a>
              ))}
            </div>
          </div>


          {isLegalOpen ? (
            <div
              className="footer-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="legal-modal-title"
            >
              <button
                type="button"
                className="footer-modal__overlay"
                onClick={() => setIsLegalOpen(false)}
                aria-label="Fermer la fenetre"
              />
              <div className="footer-modal__content" role="document">
                <div className="footer-modal__header">
                  <h2 className="footer-modal__title" id="legal-modal-title">
                    <img
                      src="/asset/logo-trasparent.png"
                      alt="LGC Jeunesse"
                      className="footer-modal__logo"
                    />
                    Mentions legales
                  </h2>
                  <button
                    type="button"
                    className="footer-modal__close"
                    onClick={() => setIsLegalOpen(false)}
                  >
                    Fermer
                  </button>
                </div>
                <div className="footer-modal__body">
                  {legalSections.map((section) => (
                    <section key={section.title} className="footer-modal__section">
                      <h3 className="footer-modal__section-title">{section.title}</h3>
                      <ul className="footer-modal__list">
                        {section.items.map((item) => (
                          <li key={item.label}>
                            <strong>{item.label} :</strong>{" "}
                            {item.mailto ? (
                              <>
                                <a href={`mailto:${item.mailto}`}>{item.mailto}</a>
                                {item.value ? ` - ${item.value}` : null}
                              </>
                            ) : (
                              item.value
                            )}
                          </li>
                        ))}
                      </ul>
                    </section>
                  ))}
                </div>
              </div>
            </div>
          ) : null}

          {/* Copyright */}
          <div className="footer__copyright">
            {new Date().getFullYear()} LGC jeunesse. Tous droits reserves.
          </div>
        </div>
      </div>
    </footer>
  );
}
