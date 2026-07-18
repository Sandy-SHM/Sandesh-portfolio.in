import { motion } from 'framer-motion'

const certs = [
  {
    name: 'Applied Machine Learning in Python',
    issuer: 'University of Michigan / Coursera',
    date: 'May 2026',
  },
  {
    name: 'Cloud Computing — Elite, 87%',
    issuer: 'NPTEL',
    date: '',
  },
  {
    name: 'Data Analytics & Technology Job Simulation',
    issuer: 'Deloitte / Forage',
    date: 'March 2026',
  },
  {
    name: 'ServiceNow Virtual Internship Program',
    issuer: 'ServiceNow University, AICTE & SmartBridge',
    date: 'July 2026',
  },
]

export default function Certifications() {
  return (
    <section className="relative py-28 border-t border-line">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="font-mono text-xs text-indigo-soft uppercase tracking-widest">Certifications</span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold mt-3 text-ink">Keeping the fundamentals sharp.</h2>
        </motion.div>

        <div className="divide-y divide-line border-y border-line">
          {certs.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 py-5"
            >
              <span className="text-ink font-medium">{c.name}</span>
              <span className="font-mono text-xs text-muted">
                {c.issuer}
                {c.date && ` · ${c.date}`}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
