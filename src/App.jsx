import React, { useState } from 'react';
import {
    User,
    Layers,
    FileText,
    Mail,
    ExternalLink,
    Github,
    Linkedin,
    Download,
    X,
    Phone
} from 'lucide-react';

const projects = [
    {
        title: "Redistricting Tracker (Work in Progress)",
        description: "Visualization for Congressional districts affected by the 2025-2026 mid-decade redistricting. The maps show the partisan margin shift, and the partisan lean, of the new districts from their 2024 counterparts based on the 2024 presidential election results.",
        image: "/images/gerrymander.png",
        demo: "https://rgao.github.io/redistricting_tracker/",
        repo: "https://github.com/rgao/redistricting_tracker",
        tags: ["Python", "GeoPandas", "Folium", "JavaScript", "HTML/CSS"]
    },
    {
        title: "311-Call",
        description: "This civic project uses data from Los Angeles' 311 calls on non-emergency issues. The goal of the team is to bridge the data into a usable product for neighborhood councils around LA to make decisions. I worked on data cleaning and visualization using Python/pandas & postgreSQL, and on web design with react and javascript.",
        image: "/images/ladata.png",
        demo: "https://github.com/rgao/311-data",
        repo: "https://github.com/rgao/311-data",
        tags: ["Python (pandas, numpy)", "Jupyter notebook", "Sanic", "ReactJS", "Docker", "postgreSQL", "SQLAlchemy"]
    },
    {
        title: "SETI Internship: Detecting and Processing Radio Frequency Interference",
        description: "I worked with hardware to track and process local cell signals and radio transmissions, and used the Green Bank Telescope for atmospheric noise. The ETL operations are followed by data cleanup, analysis, and visualization. My work is saved in Jupyter notebooks with instructional documentation as reference material for future interns and students.",
        image: "/images/green_bank.jpg",
        demo: "https://github.com/rgao/berkeley/blob/master/BreakthroughListen/BL_poster.pptx",
        repo: "https://github.com/rgao/berkeley",
        tags: ["Python / numpy", "HackRF", "Jupyter notebook", "GNU Radio"]
    },
    {
        title: "MERN App: Associated Press Article Scraper",
        description: "A foundational full-stack app, it scrapes information from the Associated Press. Visitors can save the scraped articles into a mongo database and can leave comments under an article. The design is responsive and works nicely on mobile. The app is containerized using Docker and is deployed on Render.com.",
        image: "/images/associatedpress.png",
        demo: "https://ap-scraper.onrender.com/",
        repo: "https://github.com/rgao/AP_scraper",
        tags: ["Docker", "MongoDB", "Express", "JavaScript", "React.js", "Node.js", "HTML/CSS"]
    },
    {
        title: "Undergraduate Work: Radio Astronomy Lab",
        description: "My undergraduate lab work primarily involved signal processing. We worked with hardware to collect and then sample data, transforming them into useful information. The lab report below, on interferometry, combines scientific programming, data collection & analysis, math, physics, and data visualization into a coherent piece.",
        image: "/images/berkeley-logo.png",
        demo: "https://github.com/rgao/berkeley/blob/master/ugastro/interferometer/lab_3.pdf",
        repo: "https://github.com/rgao/berkeley/tree/master/ugastro",
        tags: ["Python", "Math", "Telescopes", "Hardware"]
    }
];

const skills = [
    "Python, numpy, pandas, R",
    "HTML, CSS, javascript, node.js, React.js",
    "SQL, mongodb, ETL operations",
    "Azure, AWS, PowerBI, Tableau",
    "Containerization with Docker",
    "Scientific computing, statistical analysis",
    "Data collection, visualization & analysis",
    "Advanced math/calculus",
    "Academic and scientific writing",
    "Excel, Word, PowerPoint, LaTeX",
    "Great with written/instructional communication",
    "Organized and habitually documentative",
    "Detail-oriented, resourceful & analytical"
];

export default function App() {
    const [activeModal, setActiveModal] = useState(null);
    const closeModal = () => setActiveModal(null);

    return (
        <div className="layout">
            {/* Hero Section positioned below Saturn's rings */}
            <main className="hero-container">
                <h1 className="brand-title">R Y A N</h1>

                {/* Nav Ribbon */}
                <div className="nav-ribbon-wrapper">
                    <div className="menu-border" />
                    <nav className="nav-buttons">
                        <span className="nav-divider">|</span>
                        <button className="nav-item-btn" onClick={() => setActiveModal('about')}>About</button>
                        <span className="nav-divider">|</span>
                        <button className="nav-item-btn" onClick={() => setActiveModal('portfolio')}>Portfolio</button>
                        <span className="nav-divider">|</span>
                        <button className="nav-item-btn" onClick={() => setActiveModal('cv')}>CV & Resume</button>
                        <span className="nav-divider">|</span>
                        <button className="nav-item-btn" onClick={() => setActiveModal('contact')}>Contact</button>
                        <span className="nav-divider">|</span>
                    </nav>
                    <div className="menu-border" />
                </div>
            </main>

            {/* Footer */}
            <footer>
                &copy; {new Date().getFullYear()} Ryan X. Gao. All rights reserved.
            </footer>

            {/* ABOUT MODAL */}
            {activeModal === 'about' && (
                <div className="modal-backdrop" onClick={closeModal}>
                    <div className="modal-card size-about" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-header">
                            <h2 className="modal-title"><User size={20} /> About</h2>
                            <button className="close-btn" onClick={closeModal}><X size={20} /></button>
                        </div>
                        <div className="modal-body">
                            <div className="about-grid">
                                <div className="about-photo-wrapper">
                                    <img src="/images/azal_selfie.jpg" alt="Ryan Gao" className="about-photo" />
                                </div>
                                <div className="about-content">
                                    <p>
                                        Welcome! I'm an American living in New York City looking for opportunities in data analysis.
                                    </p>
                                    <p>
                                        My journey in tech and science began during my studies at UC Berkeley, where I applied scientific programming on big data through my astrophysics coursework and research. I used Python to perform data engineering, analysis, cleanup, and visualization of radio astronomy data.
                                    </p>
                                    <p>
                                        I have since expanded my skillset with certificates in data science and full-stack web development. Please take a look around and reach out if you would like to connect!
                                    </p>
                                    <div className="about-contact-callout">
                                        <span>Send me an email at <a href="mailto:ryanxingao@gmail.com">ryanxingao@gmail.com</a></span>
                                        <span>or text me at (929) 809-7708.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* PORTFOLIO MODAL */}
            {activeModal === 'portfolio' && (
                <div className="modal-backdrop" onClick={closeModal}>
                    <div className="modal-card size-lg" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-header">
                            <h2 className="modal-title"><Layers size={20} /> Projects</h2>
                            <button className="close-btn" onClick={closeModal}><X size={20} /></button>
                        </div>
                        <div className="modal-body">
                            <div className="projects-grid">
                                {projects.map((proj, idx) => (
                                    <div key={idx} className="project-card">
                                        <a href={proj.demo} target="_blank" rel="noreferrer" className="project-thumbnail-link">
                                            <img src={proj.image} alt={proj.title} className="project-thumbnail" />
                                        </a>
                                        <div className="project-details">
                                            <h3 className="project-title">{proj.title}</h3>
                                            <p className="project-description">{proj.description}</p>
                                            <div className="tech-badges">
                                                {proj.tags.map((t, i) => (
                                                    <span key={i} className="badge">{t}</span>
                                                ))}
                                            </div>
                                            <div className="project-links">
                                                <a href={proj.demo} target="_blank" rel="noreferrer">
                                                    <ExternalLink size={15} /> Live Project
                                                </a>
                                                <a href={proj.repo} target="_blank" rel="noreferrer">
                                                    <Github size={15} /> Github link
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* CV & RESUME MODAL */}
            {activeModal === 'cv' && (
                <div className="modal-backdrop" onClick={closeModal}>
                    <div className="modal-card size-lg" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-header">
                            <h2 className="modal-title"><FileText size={20} /> Curriculum Vitae</h2>
                            <button className="close-btn" onClick={closeModal}><X size={20} /></button>
                        </div>
                        <div className="modal-body">
                            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1.25rem' }}>
                                <a
                                    href="/Resume_Data.pdf"
                                    download="gaoresume"
                                    className="download-pill"
                                    style={{ textDecoration: 'none' }}
                                >
                                    <Download size={14} /> Download Resume (PDF)
                                </a>
                            </div>

                            {/* Summary */}
                            <div className="cv-section">
                                <h3 className="cv-section-title">Summary</h3>
                                <p style={{ color: 'var(--text-main)', fontSize: '0.92rem', lineHeight: '1.6' }}>
                                    Data analyst and educator with a strong foundation in tech, science, and math seeking opportunities in junior roles. With a degree in astrophysics and certificates in data science and full-stack web development, along with experience in education, I bring a unique blend of analytical and technical skills to the table. I look forward to applying evidence-based approaches and scientific literacy to solutions in this age of volatile information.
                                </p>
                            </div>

                            {/* Technical Skills */}
                            <div className="cv-section">
                                <h3 className="cv-section-title">Skills & Technology</h3>
                                <div className="skills-pills-container">
                                    {skills.map((skill, index) => (
                                        <span key={index} className="skill-pill">{skill}</span>
                                    ))}
                                </div>
                            </div>

                            {/* Experience */}
                            <div className="cv-section">
                                <h3 className="cv-section-title">Experience</h3>

                                <div className="experience-item">
                                    <div className="exp-header">
                                        <span className="exp-role">Mathematics Tutor</span>
                                        <span className="exp-org">Elite Education, Hong Kong</span>
                                        <span className="exp-date">09/2024 – 10/2025</span>
                                    </div>
                                    <ul className="exp-bullets">
                                        <li>Taught students of various ages in one-on-one sessions with tailored lesson plans</li>
                                        <li>Subjects taught include: algebra, geometry, trigonometry, calculus, physics, and English writing</li>
                                        <li>Provided feedback and documented lessons after every session</li>
                                        <li>Evaluated student progress through assessments and written long-term progress reports</li>
                                        <li>Frequently collaborated with counseling team to formulate lesson goals</li>
                                    </ul>
                                </div>

                                <div className="experience-item">
                                    <div className="exp-header">
                                        <span className="exp-role">Volunteer, Data Analyst</span>
                                        <span className="exp-org">Hack for LA, Los Angeles</span>
                                        <span className="exp-date">10/2019 – 02/2020</span>
                                    </div>
                                    <ul className="exp-bullets">
                                        <li>Used python with pandas for ETL operations + data analysis, cleanup, and visualization on data from 311 calls</li>
                                        <li>Contributed to various points of the pipeline, including the back-end with Sanic</li>
                                        <li>Worked on front-end web development with React, learned containerization with Docker</li>
                                    </ul>
                                </div>

                                <div className="experience-item">
                                    <div className="exp-header">
                                        <span className="exp-role">Research Intern</span>
                                        <span className="exp-org">Breakthrough Listen, Berkeley</span>
                                        <span className="exp-date">05/2016 – 08/2016</span>
                                    </div>
                                    <ul className="exp-bullets">
                                        <li>Focused on signal processing detecting radio frequency interference (RFI)</li>
                                        <li>Used hardware to identify nearby radio signals, and a telescope to collect data from space</li>
                                        <li>Applied math, physics, and coding to programmatically process data and visualize the results</li>
                                        <li>Work was documented in jupyter notebooks as reference material for future interns/students</li>
                                    </ul>
                                </div>

                                <div className="experience-item">
                                    <div className="exp-header">
                                        <span className="exp-role">Freelance Math Tutor</span>
                                        <span className="exp-org">Online and in-person</span>
                                        <span className="exp-date">Current</span>
                                    </div>
                                    <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                                        Worked/working part-time as a tutor throughout the years, focused on standardized test preparation
                                    </p>
                                </div>
                            </div>

                            {/* Education */}
                            <div className="cv-section">
                                <h3 className="cv-section-title">Education</h3>

                                <div className="experience-item">
                                    <div className="exp-header">
                                        <span className="exp-role">Astrophysics, Bachelor's Degree</span>
                                        <span className="exp-org">University of California, Berkeley</span>
                                        <span className="exp-date">08/2011 – 05/2016</span>
                                    </div>
                                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                                        Multivariable Calculus, Linear Algebra, Quantum Mechanics, Radio Astronomy Lab, Stellar Physics, Cosmology
                                    </p>
                                </div>

                                <div className="experience-item">
                                    <div className="exp-header">
                                        <span className="exp-role">Data Science, Micromaster Certificate</span>
                                        <span className="exp-org">MITx Online</span>
                                        <span className="exp-date">08/2018 – 10/2019</span>
                                    </div>
                                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                                        Probability, Statistics, Data Analysis for Social Science, Machine Learning with Python
                                    </p>
                                </div>

                                <div className="experience-item">
                                    <div className="exp-header">
                                        <span className="exp-role">Full-Stack Web Development, Certificate</span>
                                        <span className="exp-org">UCLA Extension</span>
                                        <span className="exp-date">08/2018 – 10/2019</span>
                                    </div>
                                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                                        node.js, React.js, mongoDB, express, SQL
                                    </p>
                                </div>
                            </div>

                            {/* Personal */}
                            <div className="cv-section">
                                <h3 className="cv-section-title">Personal</h3>
                                <ul className="exp-bullets">
                                    <li>U.S. Citizen; full work authorization</li>
                                    <li>Flexible work schedule</li>
                                    <li>Languages: English (native), Mandarin (limited working proficiency)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* CONTACT MODAL */}
            {activeModal === 'contact' && (
                <div className="modal-backdrop" onClick={closeModal}>
                    <div className="modal-card size-md" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-header">
                            <h2 className="modal-title"><Mail size={20} /> Contact</h2>
                            <button className="close-btn" onClick={closeModal}><X size={20} /></button>
                        </div>
                        <div className="modal-body">
                            <div className="contact-links-grid">
                                <a href="mailto:ryanxingao@gmail.com" className="contact-card">
                                    <Mail size={18} color="goldenrod" />
                                    <div>
                                        <div className="contact-label">Email</div>
                                        <div>ryanxingao@gmail.com</div>
                                    </div>
                                </a>

                                {/* Static, unclickable info box for phone */}
                                <div className="contact-card contact-card-static">
                                    <Phone size={18} color="teal" />
                                    <div>
                                        <div className="contact-label">Cell / Text</div>
                                        <div>(929) 809-7708</div>
                                    </div>
                                </div>

                                <a href="https://github.com/rgao" target="_blank" rel="noreferrer" className="contact-card">
                                    <Github size={18} />
                                    <div>
                                        <div className="contact-label">GitHub</div>
                                        <div>github.com/rgao</div>
                                    </div>
                                </a>
                                <a href="https://www.linkedin.com/in/ryan-gao-46a4312b/" target="_blank" rel="noreferrer" className="contact-card">
                                    <Linkedin size={18} color="#0077b5" />
                                    <div>
                                        <div className="contact-label">LinkedIn</div>
                                        <div>Connect Profile</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
