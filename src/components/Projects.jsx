import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import { PROJECTS } from '../data'

const GHIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
)

function ProjectCard({ icon, title, desc, tech, ghLink, accuracy, category, visible }) {
    const ref = useReveal()
    if (!visible) return null
    return (
        <div className="project-card glass-card reveal" ref={ref} data-category={category}>
            <div className="project-card-top">
                <div className="project-icon">{icon}</div>
                <div className="project-links">
                    <a href={ghLink} target="_blank" rel="noopener" className="project-link-btn" title="View on GitHub">
                        <GHIcon />
                    </a>
                </div>
            </div>
            <h3 className="project-title">{title}</h3>
            <p className="project-desc" dangerouslySetInnerHTML={{ __html: desc }} />
            <div className="project-tech">
                {tech.map(t => <span key={t}>{t}</span>)}
            </div>
            {accuracy && (
                <div className="project-accuracy">
                    <span className="acc-label">Accuracy</span>
                    <span className="acc-value">{accuracy}</span>
                </div>
            )}
        </div>
    )
}

const FILTERS = [
    { label: 'All', value: 'all' },
    { label: 'AI / ML', value: 'ml' },
    { label: 'Web Dev', value: 'web' },
]

export default function Projects() {
    const [activeFilter, setActiveFilter] = useState('all')

    return (
        <section id="projects" className="section section-alt">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">04 / Projects</span>
                    <h2 className="section-title">Projects</h2>
                    <p className="section-subtitle">A selection of things I've built. Each project reflects real problems I've tried to solve.</p>
                </div>

                <div className="project-filters">
                    {FILTERS.map(f => (
                        <button
                            key={f.value}
                            className={`filter-btn${activeFilter === f.value ? ' active' : ''}`}
                            onClick={() => setActiveFilter(f.value)}
                        >
                            {f.label}
                        </button>
                    ))}
                </div>

                <div className="projects-grid">
                    {PROJECTS.map((project, i) => (
                        <ProjectCard
                            key={i}
                            {...project}
                            visible={activeFilter === 'all' || project.category === activeFilter}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
