import { useState, useEffect } from 'react'

const links = [
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Contact', href: '#contact', id: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Highlight the nav link for whichever section is currently in view.
  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3 bg-base-950/70 backdrop-blur-lg border-b border-glass-border' : 'py-6 bg-transparent'
      }`}
    >
      <nav className="section-container flex items-center justify-between" aria-label="Primary">
        <a href="#home" className="font-display font-bold text-lg gradient-text">
          Your Name
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm text-white/80">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`transition-colors ${
                  activeId === link.id ? 'text-aurora-cyan font-medium' : 'hover:text-white'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="glass-panel px-4 py-2 text-sm font-medium hover:bg-white/10 transition-colors"
        >
          Resume
        </a>
      </nav>
    </header>
  )
}
