import { useReveal } from '../hooks/useReveal'
import { EXPERIENCE } from '../data'

function TimelineItem({ badge, badgeLabel, date, role, company, points, tags, isLast }) {
    const ref = useReveal()
    return (
        <div className="timeline-item reveal" ref={ref}>
            <div className="timeline-marker">
                <div className="timeline-dot" />
                {!isLast && <div className="timeline-line" />}
            </div>
            <div className="timeline-content glass-card">
                <div className="timeline-meta">
                    <span className={`timeline-badge ${badge}`}>{badgeLabel}</span>
                    <span className="timeline-date">{date}</span>
                </div>
                <h3 className="timeline-role">{role}</h3>
                <div className="timeline-company">{company}</div>
                <ul className="timeline-points">
                    {points.map((pt, i) => <li key={i}>{pt}</li>)}
                </ul>
                <div className="timeline-tags">
                    {tags.map(t => <span key={t}>{t}</span>)}
                </div>
            </div>
        </div>
    )
}

export default function Experience() {
    return (
        <section id="experience" className="section">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">03 / Experience</span>
                    <h2 className="section-title">Experience</h2>
                </div>
                <div className="timeline">
                    {EXPERIENCE.map((exp, i) => <TimelineItem key={i} {...exp} />)}
                </div>
            </div>
        </section>
    )
}
