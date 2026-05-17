import React, { useState } from 'react';
import './Contact.css';
import axios from 'axios';

const socials = [
  {
    label: 'Email',
    value: 'pancholipankaj3008@gmail.com',
    href: 'mailto:pancholipankaj3008@gmail.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'pankaj-dev3008',
    href: 'https://linkedin.com/in/pankaj-dev3008/',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
    ),
  },
  {
    label: 'GitHub',
    value: 'pancholipankaj3008',
    href: 'https://github.com/pancholipankaj3008/',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
    ),
  },
  {
    label: 'Location',
    value: 'Bharuch, Gujarat 🇮🇳',
    href: 'https://www.google.com/maps/place/Bharuch,+Gujarat/@21.7271332,72.96243,13z/data=!3m1!4b1!4m6!3m5!1s0x3be020a2b22ac421:0xa4116c424622fd2a!8m2!3d21.7051358!4d72.9958748!16zL20vMDMwOTI4?authuser=0&entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D',
    icon: (
      <svg 
  width="18" 
  height="18" 
  viewBox="0 0 24 24" 
  fill="none" 
  stroke="currentColor" 
  strokeWidth="2"
>
  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z"/>
  <circle cx="12" cy="10" r="3"/>
</svg>
    ),
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!form.name || !form.email || !form.message) return;

  try {
    setStatus("sending");

    const { data } = await axios.post(
  "https://your-backend.vercel.app/api/contact",
  form
);

    if (data.success) {
      setStatus("sent");

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } else {
      setStatus("idle");

      alert("Failed to send message");
    }
  } catch (error) {
    console.log("AXIOS ERROR:", error);

    setStatus("idle");

    if (error.response) {
      console.log(error.response.data);

      alert(error.response.data.message || "Server Error");
    } else {
      alert("Network Error");
    }
  }
};

  return (
    <section id="contact">
      <div className="section-wrap">
        <p className="section-label fade-up">Let's connect</p>
        <h2 className="section-title fade-up d1">Get In Touch</h2>

        <div className="contact-grid">
          <div className="contact-info fade-up d2">
            <p className="contact-intro">
              Looking for a dedicated MERN Stack Developer? I'm open to full-time
              opportunities and freelance projects. Let's build something great together.
            </p>

            <div className="social-chips">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target={s.href.startsWith('mailto') || s.href.startsWith('tel') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="social-chip"
                >
                  <span className="chip-icon">{s.icon}</span>
                  <div>
                    <span className="chip-label">{s.label}</span>
                    <span className="chip-value">{s.value}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="contact-form-wrap fade-up d3">
            {status === 'sent' ? (
              <div className="form-success">
                <div className="success-icon">✓</div>
                <h3>Message Sent!</h3>
                <p>Thanks for reaching out. I'll get back to you soon.</p>
                <button className="btn btn-ghost" onClick={() => setStatus('idle')}>Send Another</button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Your Name *</label>
                    <input
                      id="name" name="name" type="text"
                      placeholder="Your Name"
                      value={form.name} onChange={handleChange} required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      id="email" name="email" type="email"
                      placeholder="you@example.com"
                      value={form.email} onChange={handleChange} required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    id="subject" name="subject" type="text"
                    placeholder="Job Opportunity / Freelance Project / Just saying hi"
                    value={form.subject} onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message" name="message" rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    value={form.message} onChange={handleChange} required
                  />
                </div>

                <button
                  type="submit"
                  className={`btn btn-primary submit-btn ${status === 'sending' ? 'loading' : ''}`}
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? (
                    <><span className="spinner" /> Sending...</>
                  ) : (
                    'Send Message →'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
