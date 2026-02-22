import { useReveal } from '../hooks/useReveal'
import { CERTIFICATIONS, ACHIEVEMENTS } from '../data'

function CertCard({ icon, name, org, date, desc }) {
    const ref = useReveal()
    return (
        <div className="cert-card reveal glass-card" ref={ref}>
            <div className="cert-icon">{icon}</div>
            <div className="cert-body">
                <h4 className="cert-name">{name}</h4>
                <div className="cert-org">{org}</div>
                <div className="cert-date">{date}</div>
                <p className="cert-desc">{desc}</p>
            </div>
        </div>
    )
}

function AchievementItem({ icon, title, desc }) {
    const ref = useReveal()
    return (
        <div className="achievement-item reveal" ref={ref}>
            <div className="ach-icon">{icon}</div>
            <div className="ach-content">
                <div className="ach-title">{title}</div>
                <div className="ach-desc" dangerouslySetInnerHTML={{ __html: desc }} />
            </div>
        </div>
    )
}

export default function Certifications() {
    return (
        <section id="certifications" className="section">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">05 / Certifications</span>
                    <h2 className="section-title">Certifications &amp; Achievements</h2>
                </div>
                <div className="cert-achievement-grid">
                    <div className="cert-col">
                        <h3 className="col-title">📜 Certifications</h3>
                        {CERTIFICATIONS.map((c, i) => <CertCard key={i} {...c} />)}
                    </div>
                    <div className="achiev-col">
                        <h3 className="col-title">🏆 Highlights</h3>
                        <div className="achievements-list">
                            {ACHIEVEMENTS.map((a, i) => <AchievementItem key={i} {...a} />)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
