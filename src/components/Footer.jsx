import { profile } from '../data/content.js';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer__inner">
        <p>© {new Date().getFullYear()} {profile.fullName}</p>
        <p>Built with React and Vite. Deployed on Vercel.</p>
        <a href="#home">Back to top</a>
      </div>
    </footer>
  );
}
