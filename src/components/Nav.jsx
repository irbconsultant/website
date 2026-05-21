import { useState, useEffect } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setMenuOpen(false)

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`} role="navigation" aria-label="Main navigation">
      <div className="nav-inner">
        <a href="#hero" className="nav-brand" onClick={close} aria-label="IRB Consultant — home">
          <img src="/logo.png" alt="iR.B Consultant logo" className="nav-logo" />
          <span className="nav-name">IRB Consultant</span>
        </a>

        <ul className={`nav-links${menuOpen ? ' open' : ''}`} role="list">
          <li><a href="#services" onClick={close}>Services</a></li>
          <li><a href="#about" onClick={close}>About Us</a></li>
          <li><a href="#contact" onClick={close}>Contact</a></li>
          <li>
            <a href="#contact" className="btn btn-primary nav-cta" onClick={close}>
              Contact Us
            </a>
          </li>
        </ul>

        <button
          className={`nav-hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen((m) => !m)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>
    </nav>
  )
}
