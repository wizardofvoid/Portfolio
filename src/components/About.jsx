import { useReveal } from '../hooks/useReveal'
import { STATS, SOCIAL_LINKS } from '../data'

const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 11.54a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
)
const EmailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
    </svg>
)
const LocationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
    </svg>
)
const EduIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
)

export default function About() {
    const textRef = useReveal()
    const infoRef = useReveal()

    return (
        <section id="about" className="section">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">01 / About</span>
                    <h2 className="section-title">About Me</h2>
                </div>
                <div className="about-grid">
                    <div className="about-text reveal" ref={textRef}>
                        <p className="about-lead">
                            I'm <strong>Ayush Saraf</strong> — a CSE student at <strong>Vellore Institute of Technology</strong>, India,
                            with a CGPA of <span className="highlight">9.02</span>, passionate about turning data into decisions.
                        </p>
                        <p>
                            My core interests lie in <strong>Artificial Intelligence, Machine Learning, NLP, and Data Science</strong>.
                            I love building systems that are not only technically sound but also solve meaningful real-world problems —
                            from accessibility tools for the hearing-impaired to smart resume analyzers.
                        </p>
                        <p>
                            When I'm not training models or writing code, I'm managing events, mentoring peers, or exploring the latest in LLM research.
                            I thrive in collaborative environments and believe great software is built at the intersection of creativity and engineering.
                        </p>
                        <div className="about-stats">
                            {STATS.map(s => (
                                <div className="stat-card" key={s.label}>
                                    <div className="stat-value">{s.value}</div>
                                    <div className="stat-label">{s.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="about-info reveal" ref={infoRef}>
                        <div className="info-card glass-card">
                            <h3 className="info-card-title">Quick Info</h3>
                            <ul className="info-list">
                                <li><PhoneIcon /><span>+91 7004777571</span></li>
                                <li><EmailIcon /><a href="mailto:sarafa736@gmail.com">sarafa736@gmail.com</a></li>
                                <li><LocationIcon /><span>Vellore, India</span></li>
                                <li><EduIcon /><span>B.Tech CSE, VIT Vellore</span></li>
                            </ul>
                            <div className="info-links">
                                <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener" className="icon-pill">GitHub</a>
                                <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener" className="icon-pill">LinkedIn</a>
                                <a href={SOCIAL_LINKS.codolio} target="_blank" rel="noopener" className="icon-pill">Codolio</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
