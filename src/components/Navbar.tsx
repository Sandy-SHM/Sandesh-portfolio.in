import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const links = [
  { label: 'about', href: '#about' },
  { label: 'skills', href: '#skills' },
  { label: 'projects', href: '#projects' },
  { label: 'contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-300 ${
        scrolled ? 'bg-paper/90 backdrop-blur-sm border-line' : 'bg-transparent border-transparent'
      }`}
    >
      <nav className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#top" className="font-mono text-sm text-ink">
          sandesh<span className="text-muted">.mane</span>
        </a>

        <ul className="hidden md:flex items-center gap-7">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-mono text-[13px] text-muted hover:text-type transition-colors"
              >
                {link.label}
                <span className="text-muted/50">()</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <a
            href="/Sandesh_Mane_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="font-mono text-[13px] text-ink underline decoration-line underline-offset-4 hover:decoration-type hover:text-type transition-colors"
          >
            resume.pdf
          </a>
          <span className="hidden sm:inline-flex items-center gap-1.5 font-mono text-[11px] text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-verified" />
            status: open_to_work
          </span>
        </div>
      </nav>
    </motion.header>
  )
}
