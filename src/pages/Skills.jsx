import './Skills.css';

const categories = [
  {
    icon: 'FE',
    iconClass: 'icon-green',
    title: 'Frontend',
    desc: 'Modern responsive interfaces with smooth user experiences.',
    level: 88,
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Redux Toolkit' ,'Tailwind CSS', 'Responsive UI'],
  },
  {
    icon: 'BE',
    iconClass: 'icon-blue',
    title: 'Backend',
    desc: 'Secure APIs, authentication, and scalable server architecture.',
    level: 90,
    skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth'],
  },
  {
    icon: 'DB',
    iconClass: 'icon-purple',
    title: 'Database',
    desc: 'Clean schemas, relations, and optimized data handling.',
    level: 82,
    skills: ['MongoDB', 'Mongoose', 'Data Modeling'],
  },
  {
    icon: 'CL',
    iconClass: 'icon-teal',
    title: 'Cloud & Media',
    desc: 'Cloud uploads, media storage, and file workflows.',
    level: 78,
    skills: ['Cloudinary', 'Media Uploads', 'Vercel' , 'Render' , 'File Handling'],
  },
  {
    icon: 'TL',
    iconClass: 'icon-orange',
    title: 'Tools',
    desc: 'Productive development workflow and collaboration.',
    level: 86,
    skills: ['Git', 'GitHub', 'VS Code', 'Postman'],
  },
  {
    icon: 'AR',
    iconClass: 'icon-red',
    title: 'Architecture',
    desc: 'Maintainable code patterns for real-world applications.',
    level: 84,
    skills: ['RBAC', 'MVC', 'CRUD', 'Authentication'],
  },
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="section-wrap">
        <p className="section-label fade-up">What I work with</p>
        <h2 className="section-title fade-up d1">Tech Stack & Skills</h2>

        <div className="skills-grid">
          {categories.map((cat, i) => (
            <div className={`skill-card fade-up d${(i % 4) + 2}`} key={cat.title}>
              <div className="skill-card-header">
                <div className={`skill-icon ${cat.iconClass}`}>{cat.icon}</div>
                <div>
                  <h3 className="skill-card-title">{cat.title}</h3>
                  <p className="skill-desc">{cat.desc}</p>
                </div>
              </div>

              <div className="skill-meter" aria-label={`${cat.title} confidence ${cat.level}%`}>
                <span style={{ width: `${cat.level}%` }} />
              </div>

              <div className="skill-tags">
                {cat.skills.map((s) => (
                  <span className="skill-tag" key={s}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
