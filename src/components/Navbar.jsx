import { useState, useEffect, useRef } from 'react'
import { useTheme } from '../hooks/useTheme'
import { NAV_LINKS, SOCIAL_LINKS } from '../data'

const MoonIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
)

const SunIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
)

export default function Navbar() {
    const { theme, toggleTheme } = useTheme()
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('')
    const navRef = useRef(null)

    // Scroll styling
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 30)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    // Active nav link via IntersectionObserver
    useEffect(() => {
        const sections = document.querySelectorAll('section[id]')
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) setActiveSection(entry.target.id)
            })
        }, { threshold: 0.35 })
        sections.forEach(sec => observer.observe(sec))
        return () => observer.disconnect()
    }, [])

    const handleNavClick = (e, href) => {
        e.preventDefault()
        const target = document.querySelector(href)
        if (target) {
            const offset = navRef.current?.offsetHeight || 72
            const top = target.getBoundingClientRect().top + window.scrollY - offset
            window.scrollTo({ top, behavior: 'smooth' })
        }
        setMenuOpen(false)
    }

    return (
        <nav id="navbar" ref={navRef} className={scrolled ? 'scrolled' : ''}>
            <div className="nav-container">
                <a href="#hero" className="nav-logo" onClick={e => handleNavClick(e, '#hero')}>
                    <span className="logo-bracket">&lt;</span>AS<span className="logo-bracket">/&gt;</span>
                </a>

                <ul className={`nav-links${menuOpen ? ' open' : ''}`} id="nav-links">
                    {NAV_LINKS.map(link => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className={`nav-link${activeSection === link.href.slice(1) ? ' active' : ''}`}
                                onClick={e => handleNavClick(e, link.href)}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="nav-actions">
                    <button id="theme-toggle" className="icon-btn" aria-label="Toggle theme" title="Toggle theme"
                        onClick={toggleTheme}>
                        {theme === 'dark' ? <MoonIcon /> : <SunIcon />}
                    </button>
                    <a href={SOCIAL_LINKS.resume} target="_blank" rel="noopener" className="btn btn-sm btn-primary">
                        Resume
                    </a>
                    <button
                        className={`hamburger${menuOpen ? ' open' : ''}`}
                        id="hamburger"
                        aria-label="Toggle menu"
                        onClick={() => setMenuOpen(v => !v)}
                    >
                        <span /><span /><span />
                    </button>
                </div>
            </div>
        </nav>
    )
}
