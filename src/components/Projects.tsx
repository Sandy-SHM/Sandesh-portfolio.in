import { motion } from 'framer-motion'
import { ArrowUpRight, Github } from 'lucide-react'

const projects = [
  {
    name: 'CodeSense',
    status: 'Live',
    description:
      'A RAG-powered AI code review assistant. React/Monaco frontend, FastAPI backend, and a LangChain + ChromaDB pipeline that grounds LLM output in real code context across four analysis modes — review, explain, document, refactor.',
    highlight: 'SSE streaming cut perceived first-token latency to sub-second.',
    stack: ['React', 'FastAPI', 'LangChain', 'ChromaDB', 'Groq API', 'Docker'],
    live: 'https://codesense-cyan.vercel.app',
    code: 'https://github.com/Sandy-SHM/Codesense_AIcodeanalyzer',
  },
  {
    name: 'AI Resume Analyzer',
    status: 'Live',
    description:
      'A Python pipeline that extracts resume text (PyMuPDF, pdfplumber) and queries Llama 3.3 70B for a 10-dimension analysis — match score, skill gaps, ATS report, interview questions — enforced against a strict JSON schema.',
    highlight: 'From raw model output to interactive Plotly charts and a downloadable PDF report.',
    stack: ['Python', 'Streamlit', 'Groq API', 'PyMuPDF', 'Plotly', 'ReportLab'],
    live: 'https://ai-resume-analyzer-k4lshdkjuaqmxyjmqntdek.streamlit.app',
    code: 'https://github.com/Sandy-SHM/ai-resume-analyzer',
  },
  {
    name: 'Upskyll',
    status: 'In Progress',
    description:
      'An AI-powered career mentorship platform for Indian students, aspirants, and working professionals — built to feel like an honest friend, not a sales pitch.',
    highlight: 'React + TypeScript + Tailwind + Framer Motion, on a FastAPI + Groq backend.',
    stack: ['React', 'TypeScript', 'Tailwind', 'FastAPI', 'Groq API'],
    live: null,
    code: null,
  },
  {
    name: 'Telemetry Unifier',
    status: 'Complete',
    description:
      'A Python ETL pipeline that ingests IoT sensor data from multiple heterogeneous JSON sources and normalizes inconsistent schemas into one unified structure for downstream processing.',
    highlight: 'Data wrangling at the schema level, not just the row level.',
    stack: ['Python', 'JSON', 'ETL'],
    live: null,
    code: 'https://github.com/Sandy-SHM/telemetry-unifier',
  },
  {
    name: 'Bitcoin Sentiment Trader Analysis',
    status: 'Complete',
    description:
      'A data science hiring assignment for PrimeTrade.ai — analyzing how market sentiment correlates with trader performance on Hyperliquid, a decentralized derivatives exchange.',
    highlight: 'Sentiment data joined against real trade performance, not just price data.',
    stack: ['Python', 'Pandas', 'Data Analysis'],
    live: null,
    code: 'https://github.com/Sandy-SHM/bitcoin-sentiment-trader-analysis',
  },
  {
    name: 'Expense Tracker',
    status: 'Complete',
    description:
      'A command-line expense tracker built with core Java — expenses modeled as objects, stored and managed with ArrayList, structured around OOP principles.',
    highlight: 'Fundamentals done properly: no framework to hide behind.',
    stack: ['Java', 'OOP', 'ArrayList'],
    live: null,
    code: 'https://github.com/Sandy-SHM/expense-tracker-java',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 border-t border-line">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="font-mono text-xs text-indigo-soft uppercase tracking-widest">Projects</span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold mt-3 text-ink">
            Built end-to-end, not just prototyped.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group border border-line bg-surface rounded-2xl p-7 flex flex-col hover:border-indigo/50 transition-colors"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-display text-xl text-ink">{p.name}</h3>
                <span
                  className={`font-mono text-[11px] rounded-full px-2.5 py-1 border ${
                    p.status === 'Live'
                      ? 'text-amber border-amber/40 bg-amber/10'
                      : p.status === 'In Progress'
                      ? 'text-indigo-soft border-indigo/40 bg-indigo/10'
                      : 'text-muted border-line'
                  }`}
                >
                  {p.status}
                </span>
              </div>

              <p className="text-muted leading-relaxed text-sm flex-1">{p.description}</p>
              <p className="text-ink/80 text-sm mt-3 italic">{p.highlight}</p>

              <div className="flex flex-wrap gap-1.5 mt-5">
                {p.stack.map((s) => (
                  <span key={s} className="font-mono text-[11px] text-muted border border-line rounded px-2 py-1">
                    {s}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-6 pt-5 border-t border-line">
                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-ink hover:text-indigo-soft transition-colors"
                  >
                    Live <ArrowUpRight size={14} />
                  </a>
                )}
                {p.code && (
                  <a
                    href={p.code}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-muted hover:text-indigo-soft transition-colors"
                  >
                    <Github size={14} /> Code
                  </a>
                )}
                {!p.live && !p.code && <span className="text-sm text-muted/60">Repo private</span>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
