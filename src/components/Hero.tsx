import { motion } from 'framer-motion'

const fields: { line: string; key?: string; value?: string; raw?: string; comment?: string }[] = [
  { line: '{', raw: '{' },
  { line: '', key: '"name"', value: '"Sandesh Mane"' },
  { line: '', key: '"role"', value: '"AI/ML Engineer"' },
  { line: '', key: '"based_in"', value: '"Bhopal, India"' },
  { line: '', key: '"education"', value: '"B.Tech CSE (AI & ML), VIT Bhopal \'28"' },
  { line: '', key: '"status"', value: '"open_to_work"' },
  { line: '', key: '"shipped"', value: '2', comment: '// live, in production' },
  { line: '', key: '"focus"', value: '["LLM systems", "RAG pipelines", "fintech"]' },
  { line: '}', raw: '}' },
]

function CallToAction({ href, external, children }: { href: string; external?: boolean; children: string }) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      className="font-mono text-sm text-ink border-b border-line hover:border-type hover:text-type transition-colors pb-0.5"
    >
      {children}
      <span className="text-muted">()</span>
    </a>
  )
}

export default function Hero() {
  return (
    <section id="top" className="relative pt-36 pb-24">
      <div className="max-w-5xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="font-mono text-xs text-muted mb-4"
        >
          /profile/sandesh-mane.json
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="bg-term rounded-xl border border-termLine overflow-hidden"
        >
          <div className="flex items-center gap-2 px-4 py-2.5 border-b border-termLine">
            <span className="h-2.5 w-2.5 rounded-full bg-[#EA5F52]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#E5B03C]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#4CA75B]" />
            <span className="font-mono text-[11px] text-termText/60 ml-2">sandesh-mane.json</span>
          </div>
          <div className="px-5 py-5 sm:px-7 sm:py-7 font-mono text-[13px] sm:text-sm leading-relaxed overflow-x-auto">
            {fields.map((f, i) => (
              <div key={i} className="flex gap-4 whitespace-pre">
                <span className="text-termText/30 select-none w-5 text-right shrink-0">{i + 1}</span>
                {f.raw ? (
                  <span className="text-termText/70">{f.raw}</span>
                ) : (
                  <span>
                    <span className="pl-4 text-type-soft">{f.key}</span>
                    <span className="text-termText/50">: </span>
                    <span className="text-[#E7C88D]">{f.value}</span>
                    {i < fields.length - 2 && <span className="text-termText/50">,</span>}
                    {f.comment && <span className="text-termText/30 italic ml-3">{f.comment}</span>}
                  </span>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-8 max-w-xl text-[17px] text-muted leading-relaxed"
        >
          I build full-stack software with a habit I can't shake: forcing unreliable
          model output into something typed and validated before it ships. Two apps
          live so far, both grounded in that same discipline.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.22 }}
          className="mt-9 flex flex-wrap gap-x-8 gap-y-3"
        >
          <CallToAction href="#projects">view_projects</CallToAction>
          <CallToAction href="https://github.com/Sandy-SHM" external>
            view_github
          </CallToAction>
          <CallToAction href="https://www.linkedin.com/in/sandesh-sharad-mane-4671583bb/" external>
            view_linkedin
          </CallToAction>
          <CallToAction href="#contact">get_in_touch</CallToAction>
        </motion.div>
      </div>
    </section>
  )
}
