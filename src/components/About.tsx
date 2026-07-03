import { motion } from 'framer-motion'

const stats = [
  { value: '2', label: 'apps_shipped' },
  { value: '3+', label: 'rag_pipelines_built' },
  { value: '4', label: 'certifications' },
  { value: "'28", label: 'expected_grad' },
]

export default function About() {
  return (
    <section id="about" className="relative py-24 border-t border-line">
      <div className="max-w-5xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          className="font-mono text-xs text-muted mb-8"
        >
          /about.md
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-[0.8fr,1.2fr] gap-14"
        >
          <h2 className="text-2xl sm:text-[28px] font-medium leading-snug text-ink">
            CS fundamentals, applied through shipped software — not just studied.
          </h2>

          <div className="space-y-5 text-[16px] text-muted leading-relaxed">
            <p>
              I'm a B.Tech Computer Science (AI &amp; ML) student at VIT Bhopal. My two
              flagship projects, <span className="text-ink font-medium">CodeSense</span> and
              the <span className="text-ink font-medium">AI Resume Analyzer</span>, are both
              live, both integrate LLM APIs behind clean internal abstractions, and both were
              built to be used — not demoed once and shelved.
            </p>
            <p>
              I'm comfortable across the stack: REST API design, containerized deployment on
              Render and Vercel, and the applied ML layer that turns a raw model response into
              something reliable enough to ship — schema-validated output, RAG grounding,
              structured prompts.
            </p>
            <p>
              I'm also drawn to where engineering meets decision-making. I worked on a{' '}
              <span className="text-ink font-medium">sentiment-driven trader performance
              analysis</span> on Hyperliquid data for PrimeTrade.ai, and I'm increasingly
              interested in fintech and product management — not just how to build a system,
              but why it should exist and who it's for.
            </p>
            <p>
              Right now I'm building <span className="text-ink font-medium">Upskyll</span>, an
              AI-powered career mentorship platform for Indian students, and actively looking
              for internships where I can keep building real software.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-line pt-8"
        >
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-2xl sm:text-3xl font-medium text-ink">{s.value}</div>
              <div className="font-mono text-[11px] text-muted mt-1">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
