import { FiMail, FiGithub, FiLinkedin, FiMapPin, FiDownload } from 'react-icons/fi';
import { profile } from '../data/content.js';
import Reveal from './Reveal.jsx';
import './Contact.css';

const channels = [
  { icon: FiMail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: FiLinkedin, label: 'LinkedIn', value: 'Connect with me', href: profile.linkedin },
  { icon: FiGithub, label: 'GitHub', value: 'See my code', href: profile.github },
  { icon: FiMapPin, label: 'Location', value: profile.location, href: null },
];

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="shell">
        <Reveal className="contact__panel">
          <div className="contact__intro">
            <h2>Let&apos;s work together</h2>
            <p>
              I&apos;m looking for an entry-level frontend role and I reply to every message.
              The fastest way to reach me is email.
            </p>
            <div className="contact__actions">
              <a className="btn" href={`mailto:${profile.email}`}>
                <FiMail aria-hidden="true" />
                Email me
              </a>
              <a className="btn btn--ghost" href={profile.resume} download>
                <FiDownload aria-hidden="true" />
                Download resume
              </a>
            </div>
          </div>

          <ul className="contact__channels">
            {channels.map(({ icon: Icon, label, value, href }) => {
              const body = (
                <>
                  <span className="contact__icon"><Icon aria-hidden="true" /></span>
                  <span>
                    <strong>{label}</strong>
                    <span>{value}</span>
                  </span>
                </>
              );

              return (
                <li key={label}>
                  {href ? (
                    <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                      {body}
                    </a>
                  ) : (
                    <div>{body}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
