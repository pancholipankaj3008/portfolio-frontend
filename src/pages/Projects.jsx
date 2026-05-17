import React from 'react';
import './Projects.css';

const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>
);

const ExternalIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15,3 21,3 21,9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

const projects = [
  {
    status: 'wip',
    statusLabel: 'In Progress',
    featured: true,
    name: 'NextGen E-Commerce',
    desc: 'A scalable clothing brand e-commerce platform built with the MERN stack. Backend fully completed with JWT authentication, RBAC authorization, product & inventory management, admin APIs, Cloudinary integration, and analytics APIs. Frontend with React.js is currently in progress.',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Cloudinary'],
    github: 'https://github.com/pancholipankaj3008/NextGen-E-Commerce',
  },
  {
    status: 'wip',
    statusLabel: 'In Progress · Freelance',
    featured: false,
    name: 'TK Photography Backend',
    desc: 'Collaborated with a team member to build the backend for a photography platform. Developed scalable REST APIs, authentication flows, database operations, and backend business logic with clean, maintainable architecture. Optimized server-side performance using Git & GitHub for collaborative development.',
    stack: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'REST APIs', 'GitHub'],
    github: 'https://github.com/patel-Jishan/tk-backend.git',
  },
  {
    status: 'done',
    statusLabel: 'Completed',
    featured: false,
    name: 'Weather Application',
    desc: 'A responsive Weather App built with React.js and Weather API integration. Displays real-time weather including temperature, humidity, wind speed, and conditions based on user search. Uses React Hooks (useState, useEffect) for state management with dynamic UI updates.',
    stack: ['React.js', 'Weather API', 'React Hooks', 'Responsive Design'],
    github: 'https://github.com/pankaj3008/WeatherApp',
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="section-wrap">
        <p className="section-label fade-up">Things I've built</p>
        <h2 className="section-title fade-up d1">Projects</h2>

        <div className="projects-list">
          {projects.map((p, i) => (
            <div className={`project-card fade-up d${i + 2} ${p.featured ? 'featured' : ''}`} key={i}>
              <div className="project-body">
                <div className={`project-status ${p.status === 'wip' ? 'status-wip' : 'status-done'}`}>
                  <span className="status-indicator" />
                  {p.statusLabel}
                </div>
                <h3 className="project-name">{p.name}</h3>
                <p className="project-desc">{p.desc}</p>
                <div className="project-stack">
                  {p.stack.map((s, j) => (
                    <span className="stack-tag" key={j}>{s}</span>
                  ))}
                </div>
              </div>

              <div className="project-actions">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-btn"
                >
                  <GithubIcon />
                  View on GitHub
                  <ExternalIcon />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
