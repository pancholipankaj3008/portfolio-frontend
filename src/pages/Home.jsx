import './Home.css';

export default function Home() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="hero">
      <div className="hero-grid-bg" />
      <div className="hero-glow" />

      <div className="hero-content">
        <div className="hero-tag fade-up">
          <span className="tag-dot" />
          Available for opportunities
        </div>

        <h1 className="fade-up d1">
          Pankaj Pancholi<br />
          <span className="accent-text">MERN Stack</span><br />
          Developer
        </h1>

        <p className="hero-sub fade-up d2">
          Building scalable full-stack web applications with React.js, Node.js,
          Express.js &amp; MongoDB. Passionate about clean architecture, RESTful APIs,
          and modern web technologies.
        </p>

        <div className="hero-btns fade-up d3">
          <button className="btn btn-primary" onClick={() => scrollTo('projects')}>View Projects ↓</button>
          <button className="btn btn-ghost" onClick={() => scrollTo('contact')}>Get in Touch</button>
          <a
            href="https://github.com/pancholipankaj3008/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
          >
            GitHub ↗
          </a>
        </div>

        <div className="hero-stats fade-up d4">
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-num">MERN</span>
            <span className="stat-label">Stack Expert</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-num">2026</span>
            <span className="stat-label">BCA Graduate</span>
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <span className="scroll-line" />
        Scroll to explore
      </div>
    </section>
  );
}
