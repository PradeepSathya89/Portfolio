import { FiMail, FiPhone, FiGithub, FiLinkedin, FiMapPin, FiDownload } from 'react-icons/fi';
import { profile } from '../data/content.js';
import Reveal from './Reveal.jsx';
import './Contact.css';

const channels = [
  { icon: FiMail, label: 'Email', value: profile.email, href: profile.gmail },
  { icon: FiPhone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
  { icon: FiLinkedin, label: 'LinkedIn', value: 'Connect with me', href: profile.linkedin },
  { icon: FiGithub, label: 'GitHub', value: 'See my code', href: profile.github },
  { icon: FiMapPin, label: 'Location', value: profile.location, href: null },
];

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="contact__floaters">
        <a className="floater floater--mail" href={profile.gmail} target="_blank" rel="noreferrer" aria-label="Email me on Gmail">
          <FiMail aria-hidden="true" />
        </a>
        <a className="floater floater--phone" href={`tel:${profile.phone.replace(/\s/g, '')}`} aria-label="Call me">
          <FiPhone aria-hidden="true" />
        </a>
        <span className="floater floater--pin" role="img" aria-label={profile.location}>
          <FiMapPin aria-hidden="true" />
        </span>
        <a className="floater floater--github" href={profile.github} target="_blank" rel="noreferrer" aria-label="My GitHub">
          <FiGithub aria-hidden="true" />
        </a>
      </div>

      <div className="shell">
        <Reveal className="contact__panel">
          <div className="contact__intro">
            <h2>Let&apos;s work together</h2>
            <p>
              I&apos;m looking for an entry-level frontend role and I reply to every message.
              The fastest way to reach me is email.
            </p>
            <div className="contact__actions">
              <a className="btn" href={profile.gmail} target="_blank" rel="noreferrer">
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
