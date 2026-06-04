import profileImg from '../assets/profile.jpeg';
import './About.css';

const highlights = [
  { title: 'Strong Work Ethic', desc: "I take full ownership of tasks and ensure they're done right, every single time." },
  { title: 'Deadline-Driven', desc: 'Consistent track record of completing every task before the deadline.' },
  { title: 'Always Learning', desc: 'Eager to explore new technologies and apply them to real-world problems.' },
  { title: 'Problem Solver', desc: 'I enjoy breaking down complex challenges into simple, elegant solutions.' },
];

export default function About() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="about">
      <div className="section-wrap">
        <p className="section-label fade-up">Who I am</p>
        <h2 className="section-title fade-up d1">About Me</h2>

        <div className="about-grid">
          <div className="about-image-col fade-up d2">
            <div className="profile-frame">
              <img src={profileImg} alt="Pankaj Pancholi" className="profile-img" />
              <div className="profile-glow" />
            </div>
            <div className="profile-badge">
              <span className="badge-dot" />
              <span>Open to Work</span>
            </div>
          </div>

          <div className="about-text-col fade-up d3">
            <p className="about-para">
              I'm a <strong>MERN Stack Developer</strong> from Bharuch, Gujarat, India - passionate about building
              real-world web applications that are scalable, clean, and performant.
            </p>
            <p className="about-para">
              My core strength lies in <strong>backend architecture</strong>: RESTful API design, JWT
              authentication systems, RBAC authorization, and cloud-based media management with Cloudinary.
              On the frontend, I craft responsive, modern UIs using React.js and Tailwind CSS.
            </p>
            <p className="about-para">
              I believe in writing clean, maintainable code and finishing what I start -
              always before the deadline. Currently pursuing my <strong>BCA from Dr. Babasaheb Ambedkar Open
              University</strong> (graduating 2026), and actively seeking opportunities to grow as a full-stack developer.
            </p>

            <div className="highlights-grid">
              {highlights.map((h) => (
                <div className="highlight-card" key={h.title}>
                  <div className="hi-dot" />
                  <div>
                    <strong>{h.title}</strong>
                    <p>{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="about-btns">
              <button className="btn btn-primary" onClick={() => scrollTo('projects')}>See My Projects →</button>
              <button className="btn btn-ghost" onClick={() => scrollTo('contact')}>Contact Me</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
