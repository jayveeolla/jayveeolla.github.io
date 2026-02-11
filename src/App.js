import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Workspace3D from './Workspace3D';
import './App.css';

function Portfolio() {
  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">JO</div>
          <ul className="nav-menu">
            <li><a href="#home" className="nav-link">Home</a></li>
            <li><a href="#about" className="nav-link">About</a></li>
            <li><a href="#skills" className="nav-link">Skills</a></li>
            <li><a href="#projects" className="nav-link">Projects</a></li>
            <li><a href="#experience" className="nav-link">Experience</a></li>
            <li><a href="#contact" className="nav-link">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="glitch" data-text="Jayvee A. Olla">Jayvee A. Olla</h1>
            <h2 className="subtitle">Full-Stack Developer</h2>
            <p className="hero-description">3 Years of End-to-End Web Development Experience</p>
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">Get In Touch</a>
              <a href={`${process.env.PUBLIC_URL}/Jayvee Olla CV.pdf`} download className="btn btn-secondary">📄 Download Resume</a>
              <Link to="/" className="btn btn-secondary">🎨 View 3D Workspace</Link>
            </div>
          </div>
          <div className="hero-3d">
            <div className="cube-container">
              <div className="cube">
                <div className="cube-face front">React</div>
                <div className="cube-face back">Node.js</div>
                <div className="cube-face right">Laravel</div>
                <div className="cube-face left">Vue.js</div>
                <div className="cube-face top">MySQL</div>
                <div className="cube-face bottom">MongoDB</div>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="mouse"></div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-card">
              <div className="card-inner">
                <h3>🎓 Education</h3>
                <p><strong>Mindoro State University</strong></p>
                <p>Bachelor of Science in Information Technology</p>
                <p className="year">2019-2022</p>
              </div>
            </div>
            <div className="about-card">
              <div className="card-inner">
                <h3>💼 Professional Summary</h3>
                <p>A results-driven full-stack developer with 3 years of hands-on experience in designing, developing, and maintaining modern web applications. Skilled in both frontend and backend development.</p>
              </div>
            </div>
            <div className="about-card">
              <div className="card-inner">
                <h3>📍 Location</h3>
                <p>Calapan City, Oriental Mindoro, Philippines</p>
                <p className="contact-info">
                  📞 (+63) 9946434675<br/>
                  ✉️ jayveeolla2000@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Frontend</h3>
              <div className="skill-items">
                {[
                  { name: 'React JS', level: 90 },
                  { name: 'Vue JS', level: 85 },
                  { name: 'Node JS', level: 80 }
                ].map((skill, index) => (
                  <div key={index} className="skill-item">
                    <span>{skill.name}</span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3>Backend</h3>
              <div className="skill-items">
                {[
                  { name: 'Laravel', level: 88 },
                  { name: 'Git', level: 85 },
                  { name: 'Bootstrap', level: 82 }
                ].map((skill, index) => (
                  <div key={index} className="skill-item">
                    <span>{skill.name}</span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3>Database</h3>
              <div className="skill-items">
                {[
                  { name: 'MySQL', level: 87 },
                  { name: 'MongoDB', level: 83 },
                  { name: 'PostgreSQL', level: 80 }
                ].map((skill, index) => (
                  <div key={index} className="skill-item">
                    <span>{skill.name}</span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image">
                <video autoPlay loop muted playsInline>
                  <source src="/face-recognition.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="project-content">
                <h3>Face Recognition Attendance System</h3>
                <p>AI-powered attendance tracking system using facial recognition technology. Features real-time detection, time-in/time-out logging, and comprehensive attendance reporting.</p>
                <div className="project-tech">
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">OpenCV</span>
                  <span className="tech-tag">Face Recognition</span>
                  <span className="tech-tag">Flask</span>
                  <span className="tech-tag">MySQL</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <video autoPlay loop muted playsInline>
                  <source src="/zealfit.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="project-content">
                <h3>ZealFit - Fitness Training Platform</h3>
                <p>Comprehensive fitness management platform connecting trainers with clients. Features client management, program creation, payment tracking, and progress monitoring.</p>
                <div className="project-tech">
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">Node.js</span>
                  <span className="tech-tag">MongoDB</span>
                  <span className="tech-tag">Express</span>
                  <span className="tech-tag">Payment Integration</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <video autoPlay loop muted playsInline>
                  <source src="/milktea.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="project-content">
                <h3>Milk Tea Shop - POS System</h3>
                <p>Complete point-of-sale system for milk tea business. Features order management, inventory tracking, sales reports, and customer loyalty program integration.</p>
                <div className="project-tech">
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">Node.js</span>
                  <span className="tech-tag">Express</span>
                  <span className="tech-tag">MySQL</span>
                  <span className="tech-tag">POS System</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <video autoPlay loop muted playsInline>
                  <source src="/e-cert.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="project-content">
                <h3>Electronic Certificate System</h3>
                <p>Digital certificate management system for TDK Philippines. Handles certificate generation, approval workflows, template management, and secure document verification.</p>
                <div className="project-tech">
                  <span className="tech-tag">Laravel</span>
                  <span className="tech-tag">Vue.js</span>
                  <span className="tech-tag">MySQL</span>
                  <span className="tech-tag">PDF Generation</span>
                  <span className="tech-tag">Authentication</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience">
        <div className="container">
          <h2 className="section-title">Professional Experience</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>Full-Stack Developer</h3>
                <h4>Freelance</h4>
                <p className="date">January 2025 - Present</p>
                <ul>
                  <li>Building and maintaining custom web applications using Node.js and React</li>
                  <li>Designed full-stack applications including e-commerce platforms and admin dashboards</li>
                  <li>Built reusable components and modular backend services</li>
                </ul>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>System Engineer</h3>
                <h4>TDK PH - Busan Laguna</h4>
                <p className="date">May 2023 - Present</p>
                <ul>
                  <li>Building, enhancing, and maintaining internal web systems</li>
                  <li>Developed web-based systems for inventory management and data processing</li>
                  <li>Collaborated with engineers to translate business requirements into applications</li>
                </ul>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>Full-stack Developer</h3>
                <h4>Innsate IT Solution - Oriental Mindoro PH</h4>
                <p className="date">March 2022 - April 2023</p>
                <ul>
                  <li>Delivered custom, high-performance systems for government and private clients</li>
                  <li>Built applications using Laravel, Vue.js, React, and Node.js</li>
                  <li>Designed robust database structures using MySQL and NoSQL</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info-cards">
              <div className="contact-card">
                <span style={{ fontSize: '32px' }}>✉️</span>
                <h3>Email</h3>
                <p>jayveeolla2000@gmail.com</p>
              </div>
              <div className="contact-card">
                <span style={{ fontSize: '32px' }}>📞</span>
                <h3>Phone</h3>
                <p>(+63) 9946434675</p>
              </div>
              <div className="contact-card">
                <span style={{ fontSize: '32px' }}>📍</span>
                <h3>Location</h3>
                <p>Calapan City, Oriental Mindoro<br/>Philippines 5200</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2026 Jayvee A. Olla. All rights reserved.</p>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Workspace3D />} />
      <Route path="/portfolio" element={<Portfolio />} />
    </Routes>
  );
}

export default App;
