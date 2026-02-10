import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  const footerLinks = [
    { label: "Qui sommes-nous ?", href: "https://lagrandeclasse.fr/", newTab: true },
    { label: "Mentions légales", href: "#" },
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
                    <a
                      href={link.href}
                      target={link.newTab ? "_blank" : "_self"}
                      rel={link.newTab ? "noopener noreferrer" : undefined}
                      className="footer__link"
                    >
                      {link.label}
                    </a>
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

          {/* Copyright */}
          <div className="footer__copyright">
            {new Date().getFullYear()} LGC jeunesse. Tous droits réservés.
          </div>
        </div>
      </div>
    </footer>
  );
}
