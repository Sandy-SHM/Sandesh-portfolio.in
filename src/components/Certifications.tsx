import { motion } from 'framer-motion'

const certs = [
  { name: 'Applied Machine Learning in Python', issuer: 'University of Michigan / Coursera', date: 'May 2026', done: true },
  { name: 'Cloud Computing — Elite, 87%', issuer: 'NPTEL', date: '', done: true },
  { name: 'Data Analytics & Technology Job Simulation', issuer: 'Deloitte / Forage', date: 'March 2026', done: true },
  { name: 'SQL, ETL & Data Warehousing', issuer: 'IBM / Coursera', date: 'in progress', done: false },
]

export default function Certifications() {
  return (
    <section className="relative py-24 border-t border-line">
      <div className="max-w-5xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          className="font-mono text-xs text-muted mb-8"
        >
          /certifications.log
        </motion.p>

        <div className="border-t border-line">
          {certs.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 py-4 border-b border-line"
            >
              <div className="flex items-center gap-3">
                <span className={`font-mono text-sm ${c.done ? 'text-verified' : 'text-pending'}`}>
                  {c.done ? '✓' : '…'}
                </span>
                <span className="text-ink text-[15px]">{c.name}</span>
              </div>
              <span className="font-mono text-[12px] text-muted pl-7 sm:pl-0">
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
