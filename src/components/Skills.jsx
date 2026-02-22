import { useReveal } from '../hooks/useReveal'
import { SKILLS } from '../data'

function SkillCard({ icon, title, type, items }) {
    const ref = useReveal()
    return (
        <div className="skill-category reveal glass-card" ref={ref}>
            <div className="skill-cat-header">
                <div className="skill-icon">{icon}</div>
                <h3>{title}</h3>
            </div>
            <div className="skill-badges">
                {items.map(item => (
                    <span key={item} className={`skill-badge ${type}`}>{item}</span>
                ))}
            </div>
        </div>
    )
}

export default function Skills() {
    return (
        <section id="skills" className="section section-alt">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">02 / Skills</span>
                    <h2 className="section-title">Technical Skills</h2>
                    <p className="section-subtitle">Technologies and tools I work with to build intelligent, scalable systems.</p>
                </div>
                <div className="skills-grid">
                    {SKILLS.map(skill => <SkillCard key={skill.title} {...skill} />)}
                </div>
            </div>
        </section>
    )
}
