// import React from 'react';
// import './Skills.css';

// const categories = [
//   {
//     icon: '🌐',
//     iconClass: 'icon-green',
//     title: 'Frontend',
//     skills: ['HTML5', 'CSS3', 'JavaScript ES6+', 'React.js', 'Tailwind CSS', 'Responsive Design'],
//   },
//   {
//     icon: '⚙️',
//     iconClass: 'icon-blue',
//     title: 'Backend',
//     skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication'],
//   },
//   {
//     icon: '🗄️',
//     iconClass: 'icon-purple',
//     title: 'Database',
//     skills: ['MongoDB', 'Mongoose'],
//   },
//   {
//     icon: '☁️',
//     iconClass: 'icon-teal',
//     title: 'Cloud & Media',
//     skills: ['Cloudinary', 'Media Management', 'File Uploads'],
//   },
//   {
//     icon: '🛠️',
//     iconClass: 'icon-orange',
//     title: 'Tools',
//     skills: ['Git', 'GitHub', 'VS Code', 'Postman'],
//   },
//   {
//     icon: '🧠',
//     iconClass: 'icon-red',
//     title: 'Concepts',
//     skills: ['RBAC Authorization', 'MVC Architecture', 'CRUD Operations', 'Authentication Flows'],
//   },
// ];

// export default function Skills() {
//   return (
//     <section id="skills">
//       <div className="section-wrap">
//         <p className="section-label fade-up">What I work with</p>
//         <h2 className="section-title fade-up d1">Tech Stack &amp; Skills</h2>

//         <div className="skills-grid">
//           {categories.map((cat, i) => (
//             <div className={`skill-card fade-up d${(i % 4) + 2}`} key={i}>
//               <div className="skill-card-header">
//                 <div className={`skill-icon ${cat.iconClass}`}>{cat.icon}</div>
//                 <span className="skill-card-title">{cat.title}</span>
//               </div>
//               <div className="skill-tags">
//                 {cat.skills.map((s, j) => (
//                   <span className="skill-tag" key={j}>{s}</span>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }













import React from 'react';
import './Skills.css';

const categories = [
  {
    icon: '🌐',
    iconClass: 'icon-green',
    title: 'Frontend',
    desc: 'Building modern responsive interfaces.',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Tailwind CSS', 'Responsive UI'],
  },
  {
    icon: '⚙️',
    iconClass: 'icon-blue',
    title: 'Backend',
    desc: 'Secure and scalable server architecture.',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth'],
  },
  {
    icon: '🗄️',
    iconClass: 'icon-purple',
    title: 'Database',
    desc: 'Structured and optimized data handling.',
    skills: ['MongoDB', 'Mongoose'],
  },
  {
    icon: '☁️',
    iconClass: 'icon-teal',
    title: 'Cloud & Media',
    desc: 'Cloud-based storage and uploads.',
    skills: ['Cloudinary', 'Media Uploads', 'File Handling'],
  },
  {
    icon: '🛠️',
    iconClass: 'icon-orange',
    title: 'Tools',
    desc: 'Development workflow & collaboration.',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman'],
  },
  {
    icon: '🧠',
    iconClass: 'icon-red',
    title: 'Concepts',
    desc: 'Clean architecture and secure systems.',
    skills: ['RBAC', 'MVC', 'CRUD', 'Authentication'],
  },
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="section-wrap">
        <p className="section-label fade-up">What I work with</p>
        <h2 className="section-title fade-up d1">
          Tech Stack & Skills
        </h2>

        <div className="skills-grid">
          {categories.map((cat, i) => (
            <div className={`skill-card fade-up d${(i % 4) + 2}`} key={i}>

              <div className="skill-top-line"></div>

              <div className="skill-card-header">
                <div className={`skill-icon ${cat.iconClass}`}>
                  {cat.icon}
                </div>

                <div>
                  <h3 className="skill-card-title">{cat.title}</h3>
                  <p className="skill-desc">{cat.desc}</p>
                </div>
              </div>

              <div className="skill-tags">
                {cat.skills.map((s, j) => (
                  <span className="skill-tag" key={j}>
                    {s}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}