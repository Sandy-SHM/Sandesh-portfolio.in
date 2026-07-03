import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Code2, Phone } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 border-t border-line bg-dot-grid">
      <div className="absolute inset-0 bg-grid-fade pointer-events-none" />
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-mono text-xs text-indigo-soft uppercase tracking-widest">Contact</span>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold mt-4 text-ink">
            Let's build something.
          </h2>
          <p className="text-muted text-lg mt-4 max-w-lg mx-auto">
            Open to internships and collaborations. The fastest way to reach me is email.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-10">
            <a
              href="mailto:sandeshsharadmane03@gmail.com"
              className="inline-flex items-center gap-2 bg-ink text-base font-medium rounded-full px-6 py-3 text-sm hover:bg-indigo-soft transition-colors"
            >
              <Mail size={16} /> sandeshsharadmane03@gmail.com
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mt-4">
            <a
              href="tel:+918279922896"
              className="inline-flex items-center gap-2 border border-line rounded-full px-5 py-2.5 text-sm text-muted hover:border-indigo hover:text-indigo-soft transition-colors"
            >
              <Phone size={15} /> +91 82799 22896
            </a>
            <a
              href="https://github.com/Sandy-SHM"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-line rounded-full px-5 py-2.5 text-sm text-muted hover:border-indigo hover:text-indigo-soft transition-colors"
            >
              <Github size={15} /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/sandesh-sharad-mane-4671583bb/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-line rounded-full px-5 py-2.5 text-sm text-muted hover:border-indigo hover:text-indigo-soft transition-colors"
            >
              <Linkedin size={15} /> LinkedIn
            </a>
            <a
              href="https://leetcode.com/u/Sandesh_Mane/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-line rounded-full px-5 py-2.5 text-sm text-muted hover:border-indigo hover:text-indigo-soft transition-colors"
            >
              <Code2 size={15} /> LeetCode
            </a>
          </div>
        </motion.div>
      </div>

      <footer className="relative max-w-6xl mx-auto px-6 mt-24 pt-8 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted font-mono">
        <span>© {new Date().getFullYear()} Sandesh Sharad Mane</span>
        <span>Built with React, TypeScript &amp; Tailwind</span>
      </footer>
    </section>
  )
}
