import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, FolderGit2, Code2 } from 'lucide-react'

const roles = ['AI/ML Engineer', 'Full-Stack Developer', 'RAG Pipeline Builder', 'Fintech & Product-Curious']

function useTypingCycle(words: string[], typeSpeed = 55, deleteSpeed = 30, pause = 1400) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[index % words.length]
    let timeout: ReturnType<typeof setTimeout>

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), typeSpeed)
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), deleteSpeed)
    } else {
      setDeleting(false)
      setIndex((i) => i + 1)
    }
    return () => clearTimeout(timeout)
  }, [text, deleting, index, words, typeSpeed, deleteSpeed, pause])

  return text
}

export default function Hero() {
  const typed = useTypingCycle(roles)

  return (
    <section id="top" className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-dot-grid">
      <div className="absolute inset-0 bg-grid-fade pointer-events-none" />

      <div className="relative max-w-6xl mx-auto w-full px-6 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 border border-line bg-surface rounded-full px-4 py-1.5 mb-8 font-mono text-xs text-muted"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-indigo" />
          VIT Bhopal · B.Tech CSE (AI &amp; ML) · 3rd Year
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display font-semibold leading-[0.95] tracking-tight text-[clamp(3rem,10vw,7rem)]"
        >
          <span className="block text-ink">Sandesh</span>
          <span className="block bg-gradient-to-r from-indigo-soft via-indigo to-amber bg-clip-text text-transparent">
            Sharad Mane
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 font-mono text-lg sm:text-xl text-indigo-soft h-8 flex items-center"
        >
          <span className="text-muted mr-2">$</span>
          {typed}
          <span className="ml-0.5 w-[2px] h-5 bg-indigo-soft animate-pulse" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-6 max-w-xl text-muted text-lg leading-relaxed"
        >
          I build full-stack, production-grade software — from backend APIs to the
          RAG pipelines and LLM systems that power them. Two apps shipped end-to-end
          so far, both live and in use.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-ink text-base font-medium rounded-full px-5 py-2.5 text-sm hover:bg-indigo-soft transition-colors"
          >
            <FolderGit2 size={16} /> Projects
          </a>
          <a
            href="https://github.com/Sandy-SHM"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-line rounded-full px-5 py-2.5 text-sm text-ink hover:border-indigo hover:text-indigo-soft transition-colors"
          >
            <Github size={16} /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/sandesh-sharad-mane-4671583bb/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-line rounded-full px-5 py-2.5 text-sm text-ink hover:border-indigo hover:text-indigo-soft transition-colors"
          >
            <Linkedin size={16} /> LinkedIn
          </a>
          <a
            href="https://leetcode.com/u/Sandesh_Mane/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-line rounded-full px-5 py-2.5 text-sm text-ink hover:border-indigo hover:text-indigo-soft transition-colors"
          >
            <Code2 size={16} /> LeetCode
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-indigo/10 border border-indigo/40 rounded-full px-5 py-2.5 text-sm text-indigo-soft hover:bg-indigo/20 transition-colors"
          >
            <Mail size={16} /> Contact
          </a>
        </motion.div>
      </div>
    </section>
  )
}
