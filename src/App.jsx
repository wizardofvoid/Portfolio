import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
    // Scroll progress bar
    useEffect(() => {
        const bar = document.getElementById('scroll-progress')
        if (!bar) return
        const onScroll = () => {
            const scrollTop = document.documentElement.scrollTop
            const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
            bar.style.width = docHeight > 0 ? (scrollTop / docHeight * 100) + '%' : '0%'
        }
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    // Page load fade-in
    useEffect(() => {
        document.body.style.opacity = '0'
        document.body.style.transition = 'opacity 0.5s ease'
        requestAnimationFrame(() => { document.body.style.opacity = '1' })
    }, [])

    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Certifications />
            <Contact />
            <Footer />
        </>
    )
}
