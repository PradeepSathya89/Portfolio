// ─────────────────────────────────────────────────────────────
// EDIT THIS FILE ONLY.
// Every piece of text on the site comes from here, so you never
// have to hunt through components to change a link or a project.
// Replace anything marked TODO before you deploy.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Pradeep Sathya',
  fullName: 'Kunabathula Pradeep Sathya',
  roles: ['Frontend Developer', 'React.js Developer', 'UI Engineer'],
  tagline:
    'I build responsive, accessible web interfaces with React.js — clean components, real data, and layouts that hold up on every screen size.',
  location: 'Hyderabad, India',
  available: true,
  availabilityNote: 'Open to entry-level frontend roles',

  email: 'pradeepsathya70@gmail.com',
  phone: '+91 89775 25274',
  github: 'https://github.com/PradeepSathya89',
  linkedin: 'https://www.linkedin.com/in/pradeep-sathya-kunabthula-075021274/',

  resume: '/Pradeep-Sathya-Resume.pdf',
  stats: [
    { value: '34+', label: 'Products built' },
    { value: '12', label: 'Services booking' },
    { value: '4', label: 'Live projects' },
    { value: 'React', label: 'Main stack' },
  ],
  photo: '/profile.jpg',
  photoAlt: '/profile-alt.jpg',
};

export const about = {
  paragraphs: [
    'I am a B.Tech graduate who moved into frontend development because I liked seeing an idea turn into something people can actually click. Most of what I know came from building projects end to end rather than following tutorials to the last step.',
    'I work mainly in React.js and Vite — breaking a page into components, managing state with hooks and the Context API, routing with React Router, and fetching from REST APIs. I have independently built a 34-product e-commerce platform and a 12-service booking application, so I am comfortable owning a feature from layout to logic.',
    'Right now I am looking for a full-time frontend role where I can ship real features, get code reviewed by people better than me, and grow into a developer a team can rely on.',
  ],
  facts: [
    { label: 'Education', value: 'B.Tech, Civil Engineering (2024)' },
    { label: 'Focus', value: 'React.js, responsive UI' },
    { label: 'Based in', value: 'Hyderabad, India' },
    { label: 'Status', value: 'Open to work' },
  ],
};

// Only list what you can explain in an interview.
// level: 'Comfortable' | 'Working knowledge' | 'Learning'
export const skillGroups = [
  {
    title: 'Frontend',
    note: 'What I write every day',
    items: [
      { name: 'HTML5', level: 'Comfortable' },
      { name: 'CSS3', level: 'Comfortable' },
      { name: 'JavaScript (ES6+)', level: 'Comfortable' },
      { name: 'React.js', level: 'Comfortable' },
      { name: 'React Router', level: 'Comfortable' },
      { name: 'Context API / Hooks', level: 'Comfortable' },
      { name: 'Bootstrap', level: 'Working knowledge' },
    ],
  },
  {
    title: 'Tools',
    note: 'How I build and ship',
    items: [
      { name: 'Git', level: 'Comfortable' },
      { name: 'GitHub', level: 'Comfortable' },
      { name: 'VS Code', level: 'Comfortable' },
      { name: 'Vite', level: 'Comfortable' },
      { name: 'Vercel', level: 'Comfortable' },
    ],
  },
  {
    title: 'Practices',
    note: 'Things I apply in projects',
    items: [
      { name: 'REST API integration', level: 'Comfortable' },
      { name: 'Responsive layouts', level: 'Comfortable' },
      { name: 'Component reuse', level: 'Comfortable' },
      { name: 'Cross-browser compatibility', level: 'Comfortable' },
    ],
  },
  {
    title: 'AI-Assisted Dev',
    note: 'Tools I use to move faster',
    items: [
      { name: 'GitHub Copilot', level: 'Comfortable' },
      { name: 'Claude', level: 'Comfortable' },
      { name: 'Cursor AI', level: 'Working knowledge' },
      { name: 'ChatGPT', level: 'Working knowledge' },
    ],
  },
];

// Four well-described projects beat six thin ones.
// "contribution" is the line recruiters actually read — keep it specific.
export const projects = [
  {
    title: 'Shop Easy — E-Commerce Website',
    summary:
      'A React.js storefront with 34+ products across 10 categories, an admin dashboard, and a full cart-to-checkout flow.',
    contribution:
      'Built the product grid, search, filters, wishlist, cart and checkout with Context API and React Hooks for state, React Router for navigation, and an admin dashboard for managing products and orders.',
    tech: ['React.js', 'Vite', 'JavaScript', 'CSS Modules', 'React Router', 'Context API'],
    demo: 'https://ecommerce1-kq9f.vercel.app/',
    code: '', // TODO: GitHub repo URL
    image: '/projects/shop-easy.svg', // TODO: swap for a real screenshot
    accent: 'a',
  },
  {
    title: 'QuickServe — Service Booking Platform',
    summary:
      'A responsive home and business service booking platform covering 12 services, from AC repair to pest control.',
    contribution:
      'Built a 3-step booking flow (details, scheduling, review & confirm) with a success page, a technician profiles page with ratings and verified badges, user login/register, a booking-history dashboard, and an FAQ accordion — themed with CSS Modules.',
    tech: ['React.js', 'Vite', 'JavaScript', 'CSS Modules', 'React Router', 'Context API', 'Bootstrap'],
    demo: 'https://service-booking-website-psi.vercel.app/',
    code: '',
    image: '/projects/quickserve.svg', // TODO: swap for a real screenshot
    accent: 'b',
  },
  {
    title: 'Peoples Mart — Grocery Storefront',
    // TODO: this description was inferred from the live site only — replace with what you actually built.
    summary:
      'An online grocery storefront concept with product browsing and category-based navigation, built as an additional e-commerce practice project.',
    contribution:
      'Practiced building a second storefront from scratch with React.js to reinforce component structure, layout and state patterns outside of the main Shop Easy build.',
    tech: ['React.js', 'JavaScript', 'CSS'],
    demo: 'https://ecommerce-three-brown-88.vercel.app/',
    code: '',
    image: '/projects/peoples-mart.svg', // TODO: swap for a real screenshot
    accent: 'c',
  },
  {
    title: 'Luxora — Laundry Service Website',
    // TODO: this description was inferred from the live site only — replace with what you actually built.
    summary:
      'A marketing and booking site for a laundry and dry-cleaning service, covering wash-and-fold, ironing, and pickup & delivery.',
    contribution:
      'Built the responsive page layout and service sections, focused on clear information hierarchy and mobile-friendly design.',
    tech: ['React.js', 'JavaScript', 'CSS'],
    demo: 'https://basic-website-adld.vercel.app/',
    code: '',
    image: '/projects/luxora.svg', // TODO: swap for a real screenshot
    accent: 'd',
  },
];

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];
