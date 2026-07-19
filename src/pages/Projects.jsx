import './Projects.css';
import sunelitePreview from '../assets/SunElite Pharma.png';
import tkPreview from '../assets/TK.png';
import weatherPreview from '../assets/Weather App.png';
import nextgenPreview from '../assets/nextgen.png';
import aiResumePreview from "../assets/ai-resume-builder.png";

const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const ExternalIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15,3 21,3 21,9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const projects = [

  {
    status: 'done',
    statusLabel: 'Completed - Full Stack',
    featured: true,

    name: 'NextGen E-Commerce',

    desc: 'A full-stack MERN clothing e-commerce platform featuring JWT authentication, role-based admin dashboard, product & inventory management, cart, wishlist, orders, coupons, analytics, and Cloudinary integration with a responsive user experience.',

    stack: [
      'React.js',
      'Redux Toolkit',
      'Tailwind CSS',
      'Responsive UI',
      'Node.js',
      'Express.js',
      'MongoDB',
      'JWT',
      'Cloudinary',
      'REST API'
    ],

    github: 'https://github.com/pancholipankaj3008/NextGen-E-Commerce',

    live: 'https://nextgen-ecommerce-one.vercel.app',

    image: nextgenPreview,

    imageAlt: 'NextGen E-Commerce website preview',
  },

  {
  status: "done",
  statusLabel: "Completed - AI Powered",
  featured: true,

  name: "AI Resume Builder",

  desc: "A full-stack AI-powered Resume Builder built with the MERN stack and Google Gemini AI. Users can create professional ATS-friendly resumes using AI assistance, choose from multiple modern templates, manage resumes securely with JWT authentication, and export high-quality PDFs with preserved hyperlinks using Puppeteer.",

  stack: [
    "React.js",
    "Redux Toolkit",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JWT",
    "Google Gemini AI",
    "Puppeteer",
    "REST API"
  ],

  github: "https://github.com/pancholipankaj3008/AI-Powered-Resume-Builder.git",


  live: "https://ai-powered-resume-builder-three.vercel.app",

  image: aiResumePreview,

  imageAlt: "AI Resume Builder Preview",
},

  {
    status: 'done',
    statusLabel: 'Completed',
    featured: false,

    name: 'TK Photography Platform',

    desc: 'A full-stack MERN wedding photography booking platform for a real client with online service booking, photographer assignment, booking management, payment tracking, PDF invoices, and automated email notifications.',

    stack: [
      'React.js',
      'Tailwind CSS',
      'Responsive UI',
      'React Hooks',
      'Node.js',
      'Express.js',
      'MongoDB',
      'JWT'
    ],

    github: 'https://github.com/pancholipankaj3008/Weddings-Booking-Management-System.git',

    live: 'https://www.tkmomentscapture.com',

    image: tkPreview,

    imageAlt: 'TK Moments Capture website preview',
  },

  {
    status: 'done',
    statusLabel: 'Completed - Freelance',
    featured: false,

    name: 'Sunelite Pharma',

    desc: 'A responsive pharmaceutical product showcase website developed for a real client using React.js, Firebase, and Cloudinary, featuring product management, inquiry forms, secure admin access, and email integration.',

    stack: [
      'React.js',
      'Tailwind CSS',
      'Responsive UI',
      'React Hooks',
      'Firebase',
      'Authentication',
      'Cloudinary'
    ],

    github: 'https://github.com/pancholipankaj3008/Medicine-Export.git',

    live: 'https://sunelitepharma.com',

    image: sunelitePreview,

    imageAlt: 'Sunelite Pharma website preview',
  },

  {
    status: 'done',
    statusLabel: 'Completed',
    featured: false,

    name: 'Weather Application',

    desc: 'A responsive weather application built with React.js and Weather API integration that displays real-time weather information including temperature, humidity, wind speed, and weather conditions.',

    stack: [
      'React.js',
      'Weather API',
      'React Hooks',
      'Responsive Design'
    ],

    github: 'https://github.com/pancholipankaj3008/Weather-App-.git',

    live: 'https://weather-app-sigma-five-80.vercel.app/',

    image: weatherPreview,

    imageAlt: 'Weather Application live preview',
  }

];

export default function Projects() {
  return (
    <section id="projects">
      <div className="section-wrap">
        <p className="section-label fade-up">Things I've built</p>
        <h2 className="section-title fade-up d1">Projects</h2>

        <div className="projects-list">
          {projects.map((p, i) => (
            <div className={`project-card fade-up d${i + 2} ${p.featured ? 'featured' : ''}`} key={p.name}>
              <div className={`project-preview ${p.image ? '' : 'project-preview-placeholder'}`}>
                {p.image ? (
                  <img src={p.image} alt={p.imageAlt} loading="lazy" />
                ) : (
                  <div className="preview-mockup" aria-label={p.imageAlt}>
                    <span className="mockup-bar" />
                    <span className="mockup-hero" />
                    <span className="mockup-line line-wide" />
                    <span className="mockup-line" />
                    <span className="mockup-pill" />
                  </div>
                )}
              </div>

              <div className="project-body">
                <div className={`project-status ${p.status === 'wip' ? 'status-wip' : 'status-done'}`}>
                  <span className="status-indicator" />
                  {p.statusLabel}
                </div>
                <h3 className="project-name">{p.name}</h3>
                <p className="project-desc">{p.desc}</p>
                <div className="project-stack">
                  {p.stack.map((s) => (
                    <span className="stack-tag" key={s}>{s}</span>
                  ))}
                </div>
              </div>

              <div className="project-actions">

  {p.frontendGithub && (
    <a
      href={p.frontendGithub}
      target="_blank"
      rel="noopener noreferrer"
      className="project-btn github-btn"
    >
      <GithubIcon />
      Frontend
      <ExternalIcon />
    </a>
  )}

  {p.backendGithub && (
    <a
      href={p.backendGithub}
      target="_blank"
      rel="noopener noreferrer"
      className="project-btn github-btn"
    >
      <GithubIcon />
      Backend
      <ExternalIcon />
    </a>
  )}

  {!p.frontendGithub && !p.backendGithub && p.github && (
    <a
      href={p.github}
      target="_blank"
      rel="noopener noreferrer"
      className="project-btn github-btn"
    >
      <GithubIcon />
      GitHub
      <ExternalIcon />
    </a>
  )}

  {p.live && (
    <a
      href={p.live}
      target="_blank"
      rel="noopener noreferrer"
      className="project-btn live-btn"
    >
      Live Preview
      <ExternalIcon />
    </a>
  )}

</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

}
