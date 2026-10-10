import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { projects, profile } from '../data/content.js';
import Reveal from './Reveal.jsx';
import { useAutoScroll } from '../hooks/useReveal.js';
import './Projects.css';

export default function Projects() {
  const trackRef = useAutoScroll({ speed: 0.45 });

  return (
    <section id="projects" className="section projects">
      <div className="shell">
        <Reveal className="section-head">
          <h2>Projects</h2>
          <p>What I built, what I used, and which parts of it I wrote myself.</p>
        </Reveal>

        <div className="projects__list" ref={trackRef}>
          {/* Rendered twice so the row can loop seamlessly; the copy is hidden from assistive tech */}
          {[...projects, ...projects].map((project, i) => {
            const clone = i >= projects.length;
            return (
            <Reveal
              key={`${project.title}-${clone ? 'copy' : 'main'}`}
              className="project"
              delay={(i % projects.length) * 120}
              {...(clone ? { 'aria-hidden': 'true' } : {})}
            >
              <article>
                {project.image && (
                  <div className="project__media">
                    <img src={project.image} alt={`Preview of ${project.title}`} loading="lazy" />
                  </div>
                )}
                <header>
                  <h3>{project.title}</h3>
                  <ul className="project__tech">
                    {project.tech.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </header>

                <p className="project__summary">{project.summary}</p>

                <p className="project__contribution">
                  <span>What I built</span>
                  {project.contribution}
                </p>

                <footer className="project__links">
                  {project.demo && (
                    <a className="btn" href={project.demo} target="_blank" rel="noreferrer" tabIndex={clone ? -1 : undefined}>
                      <FiExternalLink aria-hidden="true" />
                      Live demo
                      <span className="sr-only"> of {project.title}</span>
                    </a>
                  )}
                  {project.code && (
                    <a className="btn btn--ghost" href={project.code} target="_blank" rel="noreferrer" tabIndex={clone ? -1 : undefined}>
                      <FiGithub aria-hidden="true" />
                      Source code
                      <span className="sr-only"> for {project.title}</span>
                    </a>
                  )}
                </footer>
              </article>
            </Reveal>
            );
          })}
        </div>

        <Reveal className="projects__more" delay={120}>
          <p>Smaller experiments and practice builds live on my GitHub.</p>
          <a className="btn btn--ghost" href={profile.github} target="_blank" rel="noreferrer">
            <FiGithub aria-hidden="true" />
            See all repositories
          </a>
        </Reveal>
      </div>
    </section>
  );
}
