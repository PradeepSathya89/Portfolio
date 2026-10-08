import { useState } from 'react';
import { FiArrowDown, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { profile } from '../data/content.js';
import { useTypewriter } from '../hooks/useReveal.js';
import './Hero.css';

export default function Hero() {
  const role = useTypewriter(profile.roles);
  const [showAlt, setShowAlt] = useState(false);

  const toggleAlt = () => setShowAlt((v) => !v);
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleAlt();
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero__grid-bg" aria-hidden="true" />

      <div className="shell hero__inner">
        <div className="hero__text">
          {profile.available && (
            <p className="hero__status">
              <span className="hero__dot" aria-hidden="true" />
              {profile.availabilityNote}
            </p>
          )}

          <h1 className="hero__name">
            Hi, I&apos;m <span className="hero__name-grad">{profile.name}</span>
          </h1>

          <p className="hero__role" aria-label={profile.roles[0]}>
            <span aria-hidden="true">{role}</span>
            <span className="hero__caret" aria-hidden="true" />
          </p>

          <p className="hero__tagline">{profile.tagline}</p>

          <div className="hero__actions">
            <a className="btn" href="#projects">View my work</a>
            <a className="btn btn--ghost" href={profile.resume} download>↓ Download resume</a>
            <a className="btn btn--ghost" href="#contact">Get in touch</a>
          </div>

          <ul className="hero__social">
            <li>
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub profile">
                <FiGithub aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
                <FiLinkedin aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href={profile.gmail} target="_blank" rel="noreferrer" aria-label="Send me an email on Gmail">
                <FiMail aria-hidden="true" />
              </a>
            </li>
          </ul>

          <div className="hero__stats">
            {profile.stats.map((s) => (
              <div className="hero__stat" key={s.label}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`hero__card hero__card--swap${showAlt ? ' is-alt' : ''}`}
          tabIndex={0}
          role="button"
          aria-label="Show another photo of me"
          onMouseEnter={() => setShowAlt(true)}
          onMouseLeave={() => setShowAlt(false)}
          onClick={toggleAlt}
          onKeyDown={handleKeyDown}
        >
          <div className="hero__photo-wrap">
            <img
              className="hero__photo hero__photo--a"
              src={profile.photo}
              alt={`Portrait of ${profile.name}`}
              width="480"
              height="480"
              loading="eager"
            />
            <img
              className="hero__photo hero__photo--b"
              src={profile.photoAlt}
              alt={`A second portrait of ${profile.name}`}
              width="480"
              height="480"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <a className="hero__scroll" href="#about">
        <FiArrowDown aria-hidden="true" />
        <span className="sr-only">Scroll to about section</span>
      </a>
    </section>
  );
}
