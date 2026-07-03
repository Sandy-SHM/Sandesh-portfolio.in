import { motion } from 'framer-motion'

const stats = [
  { value: '2', label: 'Apps shipped end-to-end' },
  { value: '3+', label: 'LLM/RAG pipelines built' },
  { value: '4', label: 'Certifications completed' },
  { value: '2028', label: 'Expected graduation' },
]

export default function About() {
  return (
    <section id="about" className="relative py-28 border-t border-line">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-[1fr,1.1fr] gap-14"
        >
          <div>
            <span className="font-mono text-xs text-indigo-soft uppercase tracking-widest">About</span>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold mt-3 text-ink">
              CS fundamentals, applied through shipped software.
            </h2>
          </div>

          <div className="space-y-5 text-muted text-lg leading-relaxed">
            <p>
              I'm a B.Tech Computer Science (AI &amp; ML) student at VIT Bhopal, and I care more
              about what I've shipped than what I've studied. My two flagship projects,{' '}
              <span className="text-ink">CodeSense</span> and the{' '}
              <span className="text-ink">AI Resume Analyzer</span>, are both live, both
              integrate LLM APIs behind clean internal abstractions, and both were built to
              be used — not just demoed.
            </p>
            <p>
              I'm comfortable across the stack: REST API design, containerized deployment
              on Render and Vercel, and the applied ML layer that turns a raw model
              response into something reliable enough to ship — schema-validated
              output, RAG grounding, structured prompts.
            </p>
            <p>
              I'm also drawn to where engineering meets decision-making — I worked on a{' '}
              <span className="text-ink">sentiment-driven trader performance analysis</span>{' '}
              on Hyperliquid data, and I'm increasingly interested in
              fintech and product management: understanding not just how to build a
              system, but why it should exist and who it's for.
            </p>
            <p>
              Right now I'm building <span className="text-ink">Upskyll</span>, an
              AI-powered career mentorship platform for Indian students and early
              professionals, and actively looking for internships where I can keep
              building real software.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-line pt-10"
        >
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-display text-3xl sm:text-4xl font-semibold text-ink">{s.value}</div>
              <div className="text-sm text-muted mt-1">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
