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
        description: "Geospatial data tool evaluating Congressional districts altered by mid-decade redistricting. Ingests boundary geometries and election returns to benchmark partisan margin shifts and net swing against baseline results.",
        image: "/images/gerrymander.png",
        demo: "https://rgao.github.io/redistricting_tracker/",
        repo: "https://github.com/rgao/redistricting_tracker",
        tags: ["Python", "GeoPandas", "Folium", "JavaScript", "HTML/CSS"]
    },
    {
        title: "LA 311 Civic Analytics Pipeline",
        status: "Open Source",
        description: "Civic data platform converting Los Angeles municipal 311 service requests into actionable operational metrics. Contributed to ETL scripts, data sanitization routines, and API endpoints.",
        image: "/images/ladata.png",
        demo: "https://github.com/rgao/311-data",
        repo: "https://github.com/rgao/311-data",
        tags: ["Python", "Pandas", "PostgreSQL", "Sanic", "ReactJS", "Docker", "SQLAlchemy"]
    },
    {
        title: "SETI: Radio Frequency Interference (RFI)",
        status: "Research",
        description: "Digital signal processing analyzing local radio frequency interference (RFI) using HackRF software-defined radio and baseline observation datasets. Implemented Python/NumPy routines for signal reduction, spectral Fourier transformations, and documented analytical pipelines in reproducible Jupyter notebooks.",
        image: "/images/green_bank.jpg",
        demo: "https://github.com/rgao/berkeley/blob/master/BreakthroughListen/BL_poster.pptx",
        repo: "https://github.com/rgao/berkeley",
        tags: ["Python / NumPy", "HackRF", "GNU Radio", "Jupyter", "Signal Processing"]
    },
    {
        title: "AP Automated Scraper & Database",
        status: "Full Stack",
        description: "Full-stack web utility that scrapes wire articles from the Associated Press, caches records into MongoDB, and renders an interactive reader interface. Containerized with Docker.",
        image: "/images/associatedpress.png",
        demo: "https://ap-scraper.onrender.com/",
        repo: "https://github.com/rgao/AP_scraper",
        tags: ["Docker", "MongoDB", "Express", "React.js", "Node.js", "JavaScript"]
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
    "SQL (PostgreSQL, SQLite)",
    "Data Annotation & Taxonomy Curation",
    "Model Output Auditing & RLHF Evaluation",
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
                                I'm a <strong>data analyst</strong> based in New York City with an academic background in <strong>Astrophysics from UC Berkeley</strong>.
                            </p>
                            <p>
                                My primary focus is on empirical data cleaning, spatial modeling, and reproducible computational workflows. Most recently, I engineered an interactive geospatial tool tracking congressional redistricting margin shifts using Python and GeoPandas. Currently, I evaluate model outputs, taxonomy adherence, and curated datasets as a data specialist with Workada.
                            </p>
                            <p>
                                I prioritize empirical accuracy, clean documentation, and transparent analytical methodology. Explore my recent projects below or reach out directly to connect.
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
                            Quantitative data specialist with a degree in Astrophysics from UC Berkeley and post-graduate credentials in Data Science and Full-Stack Development. Experienced in dataset annotation, model evaluation, Python ETL scripts, and radio astronomy signal processing. Focuses on data integrity, rigorous verification, and clean technical documentation.
                        </p>
                    </div>

                    <div className="cv-section">
                        <h3 className="cv-section-title">Technical Skills & Competencies</h3>
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
                                <span className="exp-role">Data Annotator & Evaluation Contractor</span>
                                <span className="exp-org">Workada (Remote)</span>
                                <span className="exp-date">08/2026 – Present</span>
                            </div>
                            <ul className="exp-bullets">
                                <li>Evaluate and compare paired model outputs across diverse technical and domain-specific prompts.</li>
                                <li>Author structured qualitative justifications detailing comparative model strengths, flaws, and trade-offs.</li>
                                <li>Audit model responses against source materials to identify factual errors, logical flaws, and edge-case failures.</li>
                                <li>Apply multi-tier quality rubrics to maintain consistent evaluation benchmarks across subject areas.</li>
                            </ul>
                        </div>

                        <div className="experience-item">
                            <div className="exp-header">
                                <span className="exp-role">Quantitative Instructor (Mathematics & Physics)</span>
                                <span className="exp-org">Elite Education, Hong Kong</span>
                                <span className="exp-date">09/2024 – 10/2025</span>
                            </div>
                            <ul className="exp-bullets">
                                <li>Delivered individualized analytical instruction across multivariable calculus, trigonometry, mechanics, and statistics.</li>
                                <li>Deconstructed complex mathematical theorems and problem-solving proofs into structured, reproducible steps.</li>
                                <li>Maintained detailed diagnostic progress records, tracking quantitative benchmarks and learning outcomes.</li>
                                <li>Collaborated with counseling coordinators to adjust analytical milestones and lesson structures.</li>
                            </ul>
                        </div>

                        <div className="experience-item">
                            <div className="exp-header">
                                <span className="exp-role">Volunteer Data Analyst</span>
                                <span className="exp-org">Hack for LA, Los Angeles</span>
                                <span className="exp-date">10/2019 – 02/2020</span>
                            </div>
                            <ul className="exp-bullets">
                                <li>Engineered Python/Pandas ETL pipelines to ingest, clean, and analyze high-volume municipal 311 incident logs.</li>
                                <li>Contributed to backend data endpoints using Sanic and assisted with frontend React components.</li>
                                <li>Packaged project environments using Docker to maintain reproducible local testing setups.</li>
                            </ul>
                        </div>

                        <div className="experience-item">
                            <div className="exp-header">
                                <span className="exp-role">Research Intern (Signal Processing)</span>
                                <span className="exp-org">Breakthrough Listen / UC Berkeley</span>
                                <span className="exp-date">05/2016 – 08/2016</span>
                            </div>
                            <ul className="exp-bullets">
                                <li>Processed observation records to identify radio frequency interference (RFI) against baseline datasets.</li>
                                <li>Built Python and NumPy scripts to isolate signals, execute Fourier transforms, and generate spectral plots.</li>
                                <li>Documented analytical workflows in Jupyter notebooks as reproducible reference guides for future research cohorts.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="cv-section">
                        <h3 className="cv-section-title">Education</h3>

                        <div className="experience-item">
                            <div className="exp-header">
                                <span className="exp-role">Astrophysics, Bachelor of Arts</span>
                                <span className="exp-org">University of California, Berkeley</span>
                                <span className="exp-date">08/2011 – 05/2016</span>
                            </div>
                            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                                Coursework: Multivariable Calculus, Linear Algebra, Quantum Mechanics, Radio Astronomy Laboratory, Stellar Physics, Cosmology
                            </p>
                        </div>

                        <div className="experience-item">
                            <div className="exp-header">
                                <span className="exp-role">Data Science, MicroMasters Credential</span>
                                <span className="exp-org">MITx Online</span>
                                <span className="exp-date">08/2018 – 10/2019</span>
                            </div>
                            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                                Coursework: Probability & Statistics, Data Analysis for Social Scientists (R), Machine Learning with Python
                            </p>
                        </div>

                        <div className="experience-item">
                            <div className="exp-header">
                                <span className="exp-role">Full-Stack Web Development, Certificate</span>
                                <span className="exp-org">UCLA Extension</span>
                                <span className="exp-date">08/2018 – 10/2019</span>
                            </div>
                            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                                Coursework: Node.js, React.js, MongoDB, Express, SQL Database Architecture
                            </p>
                        </div>
                    </div>

                    <div className="cv-section">
                        <h3 className="cv-section-title">Personal</h3>
                        <ul className="exp-bullets">
                            <li>U.S. Citizen; full work authorization</li>
                            <li>Languages: English (native), Mandarin (working proficiency)</li>
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
