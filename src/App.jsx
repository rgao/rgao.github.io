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
        status: "Interactive Tool",
        description: "Interactive geospatial tool tracking congressional districts altered by mid-decade redistricting. Ingested district geometries with precinct data and election results to create interactive maps, and analyzed the impact of redistricting through data modeling with interactive chart visualizations.",
        image: "/images/gerrymander.png",
        demo: "https://rgao.github.io/redistricting_tracker/",
        repo: "https://github.com/rgao/redistricting_tracker",
        tags: ["Python", "GeoPandas", "Folium", "JavaScript", "HTML/CSS"]
    },
    {
        title: "Associated Press News Scraper",
        status: "Full Stack",
        description: "Full-stack interactive interface application containerized with Docker. Programmatically extracts articles from the Associated Press, cleans and stores records into MongoDB. Made with Express and React, and without the assistance of AI. Reproducible with Docker containerization.",
        image: "/images/associatedpress.png",
        repo: "https://github.com/rgao/AP_scraper",
        tags: ["Docker", "MongoDB", "Express", "React.js", "Node.js", "JavaScript"]
    },
    {
        title: "Los Angeles 311-call Civic Data Analysis",
        status: "Open Source",
        description: "Open-source civic project transforming Los Angeles municipal 311 logs into structured metrics for a full app. Contributed to developing the ETL pipeline and front-end, and assisted with relational database normalization.",
        image: "/images/ladata.png",
        demo: "https://github.com/rgao/311-data",
        repo: "https://github.com/rgao/311-data",
        tags: ["Python", "Pandas", "PostgreSQL", "Docker", "Sanic"]
    },
    {
        title: "SETI: Radio Frequency Interference (RFI) Signal Processing",
        status: "Research",
        description: "Digital signal processing analyzing ground-source local radio frequency interference (RFI), as well as the 21-cm line from space dust using the Green Bank Telescope. Implemented Python scripts for signal reduction and generating spectral plots. Work saved as instructional Jupyter notebooks for future interns.",
        image: "/images/green_bank.jpg",
        demo: "https://github.com/rgao/berkeley/blob/master/BreakthroughListen/BL_poster.pptx",
        repo: "https://github.com/rgao/berkeley",
        tags: ["Python", "NumPy", "HackRF", "GNU Radio", "Jupyter", "Signal Processing"]
    },
    {
        title: "Undergraduate Astronomy Lab: Interferometry",
        status: "Research",
        description: "Signal sampling, Fourier transformations, and data reduction for astronomical interferometry using radio telescope arrays. Focused on mathematical modeling, aperture synthesis, and noise analysis.",
        image: "/images/berkeley-logo.png",
        demo: "https://github.com/rgao/berkeley/blob/master/ugastro/interferometer/lab_3.pdf",
        repo: "https://github.com/rgao/berkeley/tree/master/ugastro",
        tags: ["Python", "Mathematical Modeling", "Signal Processing", "Data Reduction"]
    }
];

const skills = [
    "Python (Pandas, NumPy, GeoPandas)",
    "SQL, PostgreSQL",
    "Data Annotation & Model Evaluation",
    "Prompt Design & Edge-Case Testing",
    "ETL Pipelines & Data Cleaning",
    "Statistical & Numerical Modeling",
    "Geospatial Data (Folium, Leaflet)",
    "JavaScript (ES6+, React.js)",
    "Docker",
    "Git & GitHub Workflows",
    "Technical Writing & Documentation"
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
            {/* Sticky Header */}
            <header className={`sticky-nav ${scrolled ? 'visible' : ''}`}>
                <div className="sticky-nav-inner">
                    <span className="sticky-brand" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        R Y A N
                    </span>
                    <nav className="sticky-links">
                        <button onClick={() => scrollTo('about')}>About</button>
                        <button onClick={() => scrollTo('projects')}>Portfolio</button>
                        <button onClick={() => scrollTo('cv')}>Resume</button>
                        <button onClick={() => scrollTo('contact')}>Contact</button>
                    </nav>
                </div>
            </header>

            {/* Hero Section */}
            <section className="hero-container" id="hero">
                <h1 className="brand-title">R Y A N</h1>

                <div className="nav-ribbon-wrapper">
                    <div className="menu-border" />
                    <nav className="nav-buttons">
                        <span className="nav-divider">|</span>
                        <button className="nav-item-btn" onClick={() => scrollTo('about')}>About</button>
                        <span className="nav-divider">|</span>
                        <button className="nav-item-btn" onClick={() => scrollTo('projects')}>Portfolio</button>
                        <span className="nav-divider">|</span>
                        <button className="nav-item-btn" onClick={() => scrollTo('cv')}>Resume</button>
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

            {/* Main Content */}
            <main className="content-container">

                {/* About Section */}
                <section className="section-card" id="about">
                    <div className="section-header">
                        <h2 className="section-title"><User size={22} /> About</h2>
                    </div>
                    <div className="about-grid">
                        <div className="about-photo-wrapper">
                            <img src="/images/bodhi_selfie.jpg" alt="Ryan Gao" className="about-photo" />
                        </div>
                        <div className="about-content">
                            <p>
                                I'm a data specialist based in New York City with a degree in Astrophysics from UC Berkeley, as well as certificates in Data Science and Full-Stack Development.
                            </p>
                            <p>
                                I focus on data visualization, data modeling, geospatial analysis, and scientific processes, aspiring towards geospatial data science. Most recently, I engineered an interactive geospatial tool tracking congressional redistricting using Python and GeoPandas, visualizing margin shifts and modeling the impact of redistricting. My past and current experiences include radio astronomy signal processing, engineering ETL pipelines for civic data, and auditing model outputs for AI evaluation.
                            </p>
                            <p>
                                I prioritize empirical analysis, data integrity, and clean technical documentation. Please feel free to reach out if you'd like to discuss potential opportunities in data analytics.
                            </p>
                            <div className="about-contact-callout">
                                <span>Direct email: <a href="mailto:ryanxingao@gmail.com">ryanxingao@gmail.com</a></span>
                                <span>Phone / Text: (929) 809-7708</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Projects Section */}
                <section className="section-card" id="projects">
                    <div className="section-header">
                        <h2 className="section-title"><Layers size={22} /> Featured Projects</h2>
                    </div>
                    <div className="projects-grid">
                        {projects.map((proj, idx) => (
                            <div key={idx} className="project-card">
                                <a href={proj.demo || proj.repo} target="_blank" rel="noreferrer" className="project-thumbnail-link">
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
                                        {proj.demo && (
                                            <a href={proj.demo} target="_blank" rel="noreferrer">
                                                <ExternalLink size={15} /> Live Project
                                            </a>
                                        )}
                                        <a href={proj.repo} target="_blank" rel="noreferrer">
                                            <Github size={15} /> Source Code
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CV Section */}
                <section className="section-card" id="cv">
                    <div className="section-header space-between">
                        <h2 className="section-title"><FileText size={22} /> Resume</h2>
                        <a
                            href="/Resume.pdf"
                            download="Ryan-Gao-Resume.pdf"
                            className="download-pill"
                            style={{ textDecoration: 'none' }}
                        >
                            <Download size={14} /> Download Resume (PDF)
                        </a>
                    </div>

                    <div className="cv-section">
                        <h3 className="cv-section-title">Summary</h3>
                        <p className="cv-summary-text">
                            Data specialist with a degree in Astrophysics from UC Berkeley and certificates in Data Science and Full-Stack Development. Experienced in building automated ETL pipelines in Python, evaluating machine learning models, and modeling spatial data. Focuses on empirical analysis, quantitative reasoning, reproducible pipelines, and clear technical documentation.
                        </p>
                    </div>

                    <div className="cv-section">
                        <h3 className="cv-section-title">Skills and Tools</h3>
                        <div className="skills-pills-container">
                            {skills.map((skill, index) => (
                                <span key={index} className="skill-pill">{skill}</span>
                            ))}
                        </div>
                    </div>

                    <div className="cv-section">
                        <h3 className="cv-section-title">Experience</h3>

                        <div className="experience-item">
                            <div className="exp-header">
                                <span className="exp-role">Data Labeler</span>
                                <span className="exp-org">Workada (Remote)</span>
                                <span className="exp-date">08/2026 – Present</span>
                            </div>
                            <ul className="exp-bullets">
                                <li>Evaluate and compare paired model outputs against prompts across specific categories.</li>
                                <li>Write qualitative justifications detailing comparative model strengths, flaws, and trade-offs.</li>
                                <li>Audit model responses against source materials to identify factual errors, logical flaws, and edge-case failures.</li>
                            </ul>
                        </div>

                        <div className="experience-item">
                            <div className="exp-header">
                                <span className="exp-role">Math Instructor</span>
                                <span className="exp-org">Elite Education, Hong Kong</span>
                                <span className="exp-date">09/2024 – 10/2025</span>
                            </div>
                            <ul className="exp-bullets">
                                <li>Tutored students in algebra, trigonometry, geometry, and calculus to prepare them for standardized testing and upcoming school curriculum.</li>
                                <li>Wrote feedback after every session detailing the content and material used, and the quality of the student's work.</li>
                                <li>Made tailored syllabus, quantitatively tracked student progress, and provided benchmark assessments.</li>
                                <li>Worked with the counseling team to steer students towards their goals and adjust their trajectory.</li>
                            </ul>
                        </div>

                        <div className="experience-item">
                            <div className="exp-header">
                                <span className="exp-role">Volunteer Data Analyst</span>
                                <span className="exp-org">Hack for LA (Los Angeles, CA)</span>
                                <span className="exp-date">10/2019 – 02/2020</span>
                            </div>
                            <ul className="exp-bullets">
                                <li>Built Python and Pandas ETL pipelines to ingest, clean, and process high-volume municipal 311 service call datasets.</li>
                                <li>Contributed to backend service endpoints using Sanic and assisted with containerization using Docker.</li>
                            </ul>
                        </div>

                        <div className="experience-item">
                            <div className="exp-header">
                                <span className="exp-role">Research Intern</span>
                                <span className="exp-org">Breakthrough Listen / Berkeley SETI (Berkeley, CA)</span>
                                <span className="exp-date">05/2016 – 08/2016</span>
                            </div>
                            <ul className="exp-bullets">
                                <li>Analyzed radio frequency interference (RFI) patterns by evaluating ground-level radio signals against baseline observation survey data.</li>
                                <li>Wrote Python scripts to isolate candidate signals, perform Fast Fourier Transforms (FFT), and produce spectral plots.</li>
                                <li>Documented all radio processing work in Jupyter notebooks as reference for future interns and students.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="cv-section">
                        <h3 className="cv-section-title">Education</h3>

                        <div className="experience-item">
                            <div className="exp-header">
                                <span className="exp-role">Astrophysics, Bachelor of Arts</span>
                                <span className="exp-org">University of California, Berkeley</span>
                                <span className="exp-date">2011 – 2016</span>
                            </div>
                            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                                Key Coursework: Multivariable Calculus, Linear Algebra, Radio Astronomy Laboratory, Quantum Mechanics
                            </p>
                        </div>

                        <div className="experience-item">
                            <div className="exp-header">
                                <span className="exp-role">Data Science, MicroMasters Credential</span>
                                <span className="exp-org">MITx Online</span>
                                <span className="exp-date">2018 – 2019</span>
                            </div>
                            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                                Key Coursework: Probability & Statistics, Data Analysis for Social Scientists, Machine Learning with Python
                            </p>
                        </div>

                        <div className="experience-item">
                            <div className="exp-header">
                                <span className="exp-role">Full-Stack Web Development, Certificate</span>
                                <span className="exp-org">UCLA Extension</span>
                                <span className="exp-date">2018 – 2019</span>
                            </div>
                            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                                Key Coursework: Database Architecture, Relational SQL, Node.js, React.js
                            </p>
                        </div>
                    </div>

                    <div className="cv-section">
                        <h3 className="cv-section-title">Additional</h3>
                        <ul className="exp-bullets">
                            <li>U.S. Citizen</li>
                            <li>Languages: English (Native), Mandarin (Limited Proficiency)</li>
                        </ul>
                    </div>
                </section>

                {/* Contact Section */}
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

            {/* Footer */}
            <footer>
                <button className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <ArrowUp size={16} /> Back to Top
                </button>
                <p>&copy; {new Date().getFullYear()} Ryan X. Gao. All rights reserved.</p>
            </footer>
        </div>
    );
}
