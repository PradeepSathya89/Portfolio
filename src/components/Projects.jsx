import './Projects.css'

const projects = [
  {
    icon: '🛒',
    badge: 'FEATURED',
    name: 'E-Commerce Website',
    desc: 'A full-featured responsive e-commerce application with complete shopping flow from product browsing to checkout.',
    features: [
      'Product listing with search & category filter',
      'Shopping cart & wishlist with React Hooks',
      'User login & signup with form validation',
      'Checkout & payment UI',
      'Product reviews, ratings & coupon codes',
      'Order tracking page',
    ],
    tech: ['React.js', 'Vite', 'JavaScript', 'React Router', 'React Hooks', 'CSS3'],
    live: 'https://ecommerce1-kq9f.vercel.app/',
    github: 'https://github.com/PradeepSathya89/Ecommerce1',
  },

  {
    icon: '🔧',
    badge: 'SERVICE BOOKING',
    name: 'Service Booking Website',
    desc: 'A modern and responsive service booking platform that allows users to browse services, schedule appointments, and manage bookings through an intuitive interface.',
    features: [
      'Browse and explore available services',
      'Book appointments with a user-friendly interface',
      'Responsive design for mobile, tablet, and desktop',
      'React Router based navigation',
      'Interactive and modern UI design',
      'Fast performance with Vite',
    ],
    tech: ['React.js', 'Vite', 'JavaScript', 'React Router', 'HTML5', 'CSS3'],
    live: 'https://service-booking-website-psi.vercel.app/',
    github: 'https://github.com/PradeepSathya89/Service-Booking-Website',
  },

  {
    icon: '🛍️',
    badge: 'REACT + VITE',
    name: 'Grocery Website',
    desc: 'A responsive online grocery shopping interface with cart management, search, and category-wise product display.',
    features: [
      'Add to cart with real-time state management',
      'Product search & filter functionality',
      'React Router for multi-page navigation',
      'Category-wise product display',
      'Fully responsive for all devices',
    ],
    tech: ['React.js', 'Vite', 'JavaScript', 'HTML5', 'CSS3'],
    live: 'https://ecommerce-three-brown-88.vercel.app/',
    github: 'https://github.com/PradeepSathya89/ecommerce',
  },

  {
    icon: '🏢',
    badge: 'MULTI-PAGE',
    name: 'Basic Website',
    desc: 'A responsive multi-section business website with Home, About, Services, Team, Gallery and Contact sections.',
    features: [
      'Home, About, Services & Team sections',
      'Gallery with image grid layout',
      'Contact form with field validation',
      'Fully responsive across all devices',
      'Clean, modern UI with Bootstrap',
    ],
    tech: ['React.js', 'Vite', 'JavaScript', 'Bootstrap', 'CSS3'],
    live: 'https://basic-website-adld.vercel.app/',
    github: 'https://github.com/PradeepSathya89/Basic-website',
  },
]

export default function Projects() {
  return (
    <section id="projects">
      <div className="section-tag">What I've Built</div>
      <h2 className="section-title">
        Featured <span>Projects</span>
      </h2>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <div className="project-card" key={i}>
            <div className="project-header">
              <div className="project-icon">{p.icon}</div>
              <span className="project-badge">{p.badge}</span>
            </div>

            <div className="project-body">
              <h3 className="project-name">{p.name}</h3>
              <p className="project-desc">{p.desc}</p>

              <ul className="project-features">
                {p.features.map((f, j) => (
                  <li key={j}>{f}</li>
                ))}
              </ul>

              <div className="project-tech">
                {p.tech.map((t, j) => (
                  <span className="tech-tag" key={j}>
                    {t}
                  </span>
                ))}
              </div>

              <div className="project-links">
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link link-live"
                >
                  🌐 Live Demo
                </a>

                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link link-github"
                >
                  ⌥ GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}