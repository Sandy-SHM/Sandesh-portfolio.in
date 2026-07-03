import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
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
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-base/80 backdrop-blur-md border-b border-line' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#top" className="font-mono text-sm text-ink tracking-tight">
          sandesh<span className="text-indigo">.mane</span>
        </a>

        <ul className="hidden md:flex items-center gap-1 bg-surface border border-line rounded-full px-1.5 py-1.5">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="px-4 py-1.5 text-sm text-muted hover:text-ink rounded-full hover:bg-surface2 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="/Sandesh_Mane_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm border border-line rounded-full px-4 py-1.5 text-ink hover:border-indigo hover:text-indigo transition-colors"
          >
            Resume ↗
          </a>
          <span className="inline-flex items-center gap-1.5 text-xs font-mono text-muted border border-line rounded-full pl-2.5 pr-3 py-1.5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber"></span>
            </span>
            Open to Work
          </span>
        </div>
      </nav>
    </motion.header>
  )
}
