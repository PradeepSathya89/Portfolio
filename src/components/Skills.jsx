import './Skills.css'

const skillGroups = [
  { title: '⚛️  Frontend Core', tags: ['React.js', 'Vite', 'JavaScript ES6+', 'HTML5', 'CSS3', 'Bootstrap'] },
  { title: '🔧  React Ecosystem', tags: ['React Hooks', 'React Router', 'useState', 'useEffect', 'Component Architecture', 'State Management'] },
  { title: '🛠️  Tools & Platforms', tags: ['Git', 'GitHub', 'Vercel', 'VS Code', 'npm'] },
  { title: '💡  Concepts', tags: ['Responsive Design', 'REST APIs', 'Reusable Components', 'Cross-Browser Compat.', 'UI/UX Fundamentals', 'Git Workflow'] },
]

export default function Skills() {
  return (
    <section id="skills">
      <div className="section-tag">What I Know</div>
      <h2 className="section-title">My <span>Tech Stack</span></h2>
      <div className="skills-grid">
        {skillGroups.map((group, i) => (
          <div className="skill-card" key={i}>
            <div className="skill-card-title">{group.title}</div>
            <div className="skill-tags">
              {group.tags.map((tag, j) => (
                <span className="skill-tag" key={j}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
