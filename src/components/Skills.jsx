import { FaReact, FaJs, FaNodeJs, FaHtml5, FaCss3Alt, FaGithub } from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';
import { skillGroups } from '../data/content.js';
import Reveal from './Reveal.jsx';
import { useAutoScroll } from '../hooks/useReveal.js';
import './Skills.css';

// Each icon uses its own brand colour
const techIcons = [
  { icon: FaReact, label: 'React', color: '#61dafb' },
  { icon: FaJs, label: 'JavaScript', color: '#f7df1e' },
  { icon: FaNodeJs, label: 'Node.js', color: '#68a063' },
  { icon: FaHtml5, label: 'HTML5', color: '#e34f26' },
  { icon: FaCss3Alt, label: 'CSS3', color: '#2d8ee0' },
  { icon: VscVscode, label: 'VS Code', color: '#23a9f2' },
  { icon: FaGithub, label: 'GitHub', color: '#f2f5fa' },
];

export default function Skills() {
  const trackRef = useAutoScroll({ speed: 0.35 });

  return (
    <section id="skills" className="section skills">
      <div className="shell">
        <Reveal className="section-head">
          <h2>Skills</h2>
          <p>Grouped by how I use them, with an honest note on where I stand with each.</p>
        </Reveal>

        <Reveal as="ul" className="skills__tech" delay={60}>
          {techIcons.map(({ icon: Icon, label, color }) => (
            <li key={label} style={{ '--brand': color }}>
              <span className="skills__tech-icon"><Icon aria-hidden="true" /></span>
              <span>{label}</span>
            </li>
          ))}
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
