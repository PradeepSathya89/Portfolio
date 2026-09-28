import { about, profile } from '../data/content.js';
import Reveal from './Reveal.jsx';
import './About.css';

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="shell">
        <Reveal className="section-head">
          <h2>About me</h2>
          <p>Where I am in my career, and what I am looking for next.</p>
        </Reveal>

        <div className="about__grid">
          <Reveal className="about__copy" delay={80}>
            {about.paragraphs.map((text, i) => (
              <p key={i}>{text}</p>
            ))}
          </Reveal>

          <Reveal className="about__facts" delay={180}>
            <dl>
              {about.facts.map((fact) => (
                <div key={fact.label}>
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>
            <a className="btn btn--ghost about__cta" href={profile.resume} download>
              Download my resume
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
