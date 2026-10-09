import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Section from './components/Section.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar />
      <main id="main">
        <Hero />
        <Section variant="home" />
        <About />
        <Section variant="about" />
        <Skills />
        <Section variant="skills" />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
