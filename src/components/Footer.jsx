import { SOCIAL_LINKS } from '../data'

export default function Footer() {
    const handleTop = e => {
        e.preventDefault()
        const hero = document.getElementById('hero')
        if (hero) window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-inner">
                    <div className="footer-logo">
                        <span className="logo-bracket">&lt;</span>AS<span className="logo-bracket">/&gt;</span>
                    </div>
                    <p className="footer-copy">© 2026 Ayush Saraf &nbsp;·&nbsp; Built using React</p>
                    <div className="footer-links">
                        <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener" title="LinkedIn">LinkedIn</a>
                        <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener" title="GitHub">GitHub</a>
                        <a href={SOCIAL_LINKS.codolio} target="_blank" rel="noopener" title="Codolio">Codolio</a>
                    </div>
                </div>
                <p className="footer-back-top">
                    <a href="#hero" className="back-top-btn" onClick={handleTop}>↑ Back to top</a>
                </p>
            </div>
        </footer>
    )
}
