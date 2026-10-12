import React, { useState, useEffect } from 'react';
import {
    User,
    Layers,
    FileText,
    Mail,
    ExternalLink,
    Github,
    Linkedin,
    Download,
    Phone,
    ChevronDown,
    ArrowUp
} from 'lucide-react';

const projects = [
    {
        title: "Redistricting Tracker",
        status: "Active / In Progress",
        description: "Geospatial data visualization tracking Congressional districts affected by mid-decade redistricting. Evaluates partisan margin shifts and partisan lean from 2024 counterparts based on presidential election results.",
        image: "/images/gerrymander.png",
        demo: "https://rgao.github.io/redistricting_tracker/",
        repo: "https://github.com/rgao/redistricting_tracker",
        tags: ["Python", "GeoPandas", "Folium", "JavaScript", "HTML/CSS"]
    },
    {
        title: "LA 311 Civic Analytics Pipeline",
        status: "Open Source",
        description: "Civic data initiative transforming Los Angeles non-emergency 311 incident reports into actionable metrics for Neighborhood Councils. Contributed to ETL pipelines, data cleaning, and responsive dashboards.",
        image: "/images/ladata.png",
        demo: "https://github.com/rgao/311-data",
        repo: "https://github.com/rgao/311-data",
        tags: ["Python", "Pandas", "PostgreSQL", "Sanic", "ReactJS", "Docker", "SQLAlchemy"]
    },
    {
        title: "SETI: Radio Frequency Interference (RFI)",
        status: "Research",
        description: "Digital signal processing detecting local radio interference against observation data from the Green Bank Telescope. Built ETL pipelines and documented signal analysis procedures in reproducible Jupyter notebooks.",
        image: "/images/green_bank.jpg",
        demo: "https://github.com/rgao/berkeley/blob/master/BreakthroughListen/BL_poster.pptx",
        repo: "https://github.com/rgao/berkeley",
        tags: ["Python / NumPy", "HackRF", "GNU Radio", "Jupyter", "Signal Processing"]
    },
    {
        title: "AP Automated Scraper & Database",
        status: "Full Stack",
        description: "Responsive full-stack application that scrapes articles from the Associated Press, caches records to a MongoDB cluster, and provides an interactive user commenting interface. Containerized using Docker.",
        image: "/images/associatedpress.png",
        demo: "https://ap-scraper.onrender.com/",
        repo: "https://github.com/rgao/AP_scraper",
        tags: ["Docker", "MongoDB", "Express", "React.js", "Node.js", "JavaScript"]
    },
    {
        title: "Undergraduate Astronomy Lab: Interferometry",
        status: "Research",
        description: "Signal sampling, Fourier transformation, and data reduction for astronomical interferometry using radio telescope arrays. Combines numerical computing, mathematical modeling, and physics.",
        image: "/images/berkeley-logo.png",
        demo: "https://github.com/rgao/berkeley/blob/master/ugastro/interferometer/lab_3.pdf",
        repo: "https://github.com/rgao/berkeley/tree/master/ugastro",
        tags: ["Python", "Mathematical Modeling", "Signal Processing", "Data Reduction"]
    }
];

const skills = [
    "Python (Pandas, NumPy, GeoPandas)", "R", "SQL / PostgreSQL", "MongoDB",
    "ETL Pipelines", "JavaScript (ES6+)", "React.js", "Node.js", "Docker",
    "Data Visualization (Folium, Leaflet)", "Statistical Modeling", "Scientific Computing",
    "Git & GitHub", "Technical Writing & Documentation"
];

export default function App() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        let ticking = false;
        let lastScrolled = false;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const shouldScrolled = window.scrollY > 280;
                    if (shouldScrolled !== lastScrolled) {
                        lastScrolled = shouldScrolled;
                        setScrolled(shouldScrolled);
                    }
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="layout">
            {/* Sticky Floating Header (visible after scrolling past Hero) */}
            <header className={`sticky-nav ${scrolled ? 'visible' : ''}`}>
                <div className="sticky-nav-inner">
                    <span className="sticky-brand" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        R Y A N
                    </span>
                    <nav className="sticky-links">
                        <button onClick={() => scrollTo('about')}>About</button>
                        <button onClick={() => scrollTo('projects')}>Projects</button>
                        <button onClick={() => scrollTo('cv')}>CV</button>
                        <button onClick={() => scrollTo('contact')}>Contact</button>
                    </nav>
                </div>
            </header>

            {/* 1. HERO SECTION (Above the fold, preserving Saturn + Pale Blue Dot identity) */}
            <section className="hero-container" id="hero">
                <h1 className="brand-title">R Y A N</h1>

                {/* Nav Ribbon */}
                <div className="nav-ribbon-wrapper">
                    <div className="menu-border" />
                    <nav className="nav-buttons">
                        <span className="nav-divider">|</span>
                        <button className="nav-item-btn" onClick={() => scrollTo('about')}>About</button>
                        <span className="nav-divider">|</span>
                        <button className="nav-item-btn" onClick={() => scrollTo('projects')}>Projects</button>
                        <span className="nav-divider">|</span>
                        <button className="nav-item-btn" onClick={() => scrollTo('cv')}>CV & Resume</button>
                        <span className="nav-divider">|</span>
                        <button className="nav-item-btn" onClick={() => scrollTo('contact')}>Contact</button>
                        <span className="nav-divider">|</span>
                    </nav>
                    <div className="menu-border" />
                </div>

                <button className="scroll-hint" onClick={() => scrollTo('about')} aria-label="Scroll to content">
                    <ChevronDown size={24} />
                </button>
            </section>

            {/* MAIN CONTENT WRAPPER */}
            <main className="content-container">

                {/* 2. ABOUT SECTION */}
                <section className="section-card" id="about">
                    <div className="section-header">
                        <h2 className="section-title"><User size={22} /> About</h2>
                    </div>
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
                </section>

                {/* 3. PROJECTS SECTION */}
                <section className="section-card" id="projects">
                    <div className="section-header">
                        <h2 className="section-title"><Layers size={22} /> Featured Projects</h2>
                    </div>
                    <div className="projects-grid">
                        {projects.map((proj, idx) => (
                            <div key={idx} className="project-card">
                                <a href={proj.demo} target="_blank" rel="noreferrer" className="project-thumbnail-link">
                                    <img src={proj.image} alt={proj.title} className="project-thumbnail" />
                                </a>
                                <div className="project-details">
                                    <div className="project-header-row">
                                        <h3 className="project-title">{proj.title}</h3>
                                        <span className="project-status">{proj.status}</span>
                                    </div>
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
                                            <Github size={15} /> Source Code
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 4. CV & RESUME SECTION */}
                <section className="section-card" id="cv">
                    <div className="section-header space-between">
                        <h2 className="section-title"><FileText size={22} /> Curriculum Vitae</h2>
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
                        <p className="cv-summary-text">
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

                    {/* Experience Timeline */}
                    <div className="cv-section">
                        <h3 className="cv-section-title">Experience</h3>

                        <div className="experience-item">
                            <div className="exp-header">
                                <span className="exp-role">Mathematics Tutor</span>
                                <span className="exp-org">Elite Education, Hong Kong</span>
                                <span className="exp-date">09/2024 – 10/2025</span>
                            </div>
                            <ul className="exp-bullets">
                                <li>Taught students of various ages in one-on-one sessions with tailored lesson plans.</li>
                                <li>Subjects taught include: algebra, geometry, trigonometry, calculus, physics, and English writing.</li>
                                <li>Provided structured feedback and documented lessons after every session.</li>
                                <li>Evaluated student progress through assessments and written long-term progress reports.</li>
                                <li>Frequently collaborated with counseling team to formulate lesson goals.</li>
                            </ul>
                        </div>

                        <div className="experience-item">
                            <div className="exp-header">
                                <span className="exp-role">Volunteer, Data Analyst</span>
                                <span className="exp-org">Hack for LA, Los Angeles</span>
                                <span className="exp-date">10/2019 – 02/2020</span>
                            </div>
                            <ul className="exp-bullets">
                                <li>Used Python with Pandas for ETL operations, data analysis, cleanup, and visualization on data from 311 calls.</li>
                                <li>Contributed to various points of the pipeline, including backend endpoints with Sanic.</li>
                                <li>Worked on frontend web development with React and learned containerization with Docker.</li>
                            </ul>
                        </div>

                        <div className="experience-item">
                            <div className="exp-header">
                                <span className="exp-role">Research Intern</span>
                                <span className="exp-org">Breakthrough Listen, Berkeley</span>
                                <span className="exp-date">05/2016 – 08/2016</span>
                            </div>
                            <ul className="exp-bullets">
                                <li>Focused on signal processing detecting radio frequency interference (RFI).</li>
                                <li>Used hardware to identify nearby radio signals, and a telescope to collect data from space.</li>
                                <li>Applied math, physics, and coding to programmatically process data and visualize the results.</li>
                                <li>Documented work in Jupyter notebooks as reference material for future interns and students.</li>
                            </ul>
                        </div>

                        <div className="experience-item">
                            <div className="exp-header">
                                <span className="exp-role">Freelance Math Tutor</span>
                                <span className="exp-org">Online and in-person</span>
                                <span className="exp-date">Current</span>
                            </div>
                            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                                Worked part-time as a tutor throughout the years, focused on standardized test preparation.
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
                                Node.js, React.js, MongoDB, Express, SQL
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
                </section>

                {/* 5. CONTACT SECTION */}
                <section className="section-card" id="contact">
                    <div className="section-header">
                        <h2 className="section-title"><Mail size={22} /> Contact</h2>
                    </div>
                    <div className="contact-links-grid">
                        <a href="mailto:ryanxingao@gmail.com" className="contact-card">
                            <Mail size={18} color="goldenrod" />
                            <div>
                                <div className="contact-label">Email</div>
                                <div>ryanxingao@gmail.com</div>
                            </div>
                        </a>

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
                </section>

            </main>

            {/* FOOTER */}
            <footer>
                <button className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <ArrowUp size={16} /> Back to Top
                </button>
                <p>&copy; {new Date().getFullYear()} Ryan X. Gao. All rights reserved.</p>
            </footer>
        </div>
    );
}
