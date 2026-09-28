import { skillGroups } from '../data/content.js';
import Reveal from './Reveal.jsx';
import { useAutoScroll } from '../hooks/useReveal.js';
import './Skills.css';

export default function Skills() {
  const trackRef = useAutoScroll({ speed: 0.35 });

  return (
    <section id="skills" className="section skills">
      <div className="shell">
        <Reveal className="section-head">
          <h2>Skills</h2>
          <p>Grouped by how I use them, with an honest note on where I stand with each.</p>
        </Reveal>

        <div className="skills__grid" ref={trackRef}>
          {[...skillGroups, ...skillGroups].map((group, gi) => {
            const clone = gi >= skillGroups.length;
            return (
            <Reveal
              key={`${group.title}-${clone ? 'copy' : 'main'}`}
              className="skills__card"
              delay={(gi % skillGroups.length) * 110}
              {...(clone ? { 'aria-hidden': 'true', inert: '' } : {})}
            >
              <h3>{group.title}</h3>
              <p className="skills__note">{group.note}</p>

              <ul>
                {group.items.map((item, i) => (
                  <li key={item.name} style={{ '--i': i }}>
                    <span>{item.name}</span>
                    <span className={`skills__level level--${item.level.split(' ')[0].toLowerCase()}`}>
                      {item.level}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
