import { useEffect, useState } from 'react';
import { FiMenu, FiX, FiDownload } from 'react-icons/fi';
import { navLinks, profile } from '../data/content.js';
import { useActiveSection } from '../hooks/useReveal.js';
import './Navbar.css';

const ids = navLinks.map((l) => l.id);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [stuck, setStuck] = useState(false);
  const active = useActiveSection(ids);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile menu on Escape, and stop the page scrolling behind it.
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className={`nav ${stuck ? 'is-stuck' : ''}`}>
      <div className="nav__inner shell">
        <a className="nav__mark" href="#home" onClick={() => setOpen(false)}>
          Pradeep <span>— Frontend Developer</span>
        </a>

        <nav className={`nav__links ${open ? 'is-open' : ''}`} aria-label="Sections">
          <ul>
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={active === link.id ? 'is-active' : ''}
                  aria-current={active === link.id ? 'true' : undefined}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a className="btn btn--ghost nav__resume" href={profile.resume} download>
            <FiDownload aria-hidden="true" />
            Resume
          </a>
        </nav>

        <button
          className="nav__toggle"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>
    </header>
  );
}
