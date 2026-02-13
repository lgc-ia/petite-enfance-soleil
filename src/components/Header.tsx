interface HeaderProps {
  isVisible?: boolean;
}

export function Header({ isVisible = true }: HeaderProps) {
  const navItems = [
    "Petite Enfance",
    "Formation",
    "Réglementation",
    "Pratiques professionnels",
    "Pédagogie",
  ];

  return (
    <header className={`site-header${isVisible ? " site-header--visible" : " site-header--hidden"}`}>
      {/* Main header */}
      <div className="header-main">
        <div className="header-main__inner">
          {/* Logo */}
          <div className="header-logo">
            <img
              src="/asset/logo-trasparent.png"
              alt="Logo La Petite Enfance"
              className="header-logo__icon"
            />
          </div>

          {/* Right section */}
        </div>
      </div>

      {/* Navigation */}
      <nav className="header-nav">
        <div className="header-nav__inner">
          <ul className="header-nav__list">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="header-nav__link"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
