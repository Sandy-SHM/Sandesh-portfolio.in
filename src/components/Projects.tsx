import { motion } from 'framer-motion'

type Status = 'live' | 'in_progress' | 'complete'

const statusStyle: Record<Status, string> = {
  live: 'text-verified',
  complete: 'text-verified',
  in_progress: 'text-pending',
}

const projects: {
  name: string
  status: Status
  description: string
  highlight: string
  stack: string[]
  live: string | null
  code: string | null
}[] = [
  {
    name: 'CodeSense',
    status: 'live',
    description:
      'A RAG-powered AI code review assistant. React/Monaco frontend, FastAPI backend, and a LangChain + ChromaDB pipeline that grounds LLM output in real code context across four analysis modes.',
    highlight: 'SSE streaming cut perceived first-token latency to sub-second.',
    stack: ['React', 'FastAPI', 'LangChain', 'ChromaDB', 'Groq API', 'Docker'],
    live: 'https://codesense-cyan.vercel.app',
    code: 'https://github.com/Sandy-SHM/Codesense_AIcodeanalyzer',
  },
  {
    name: 'AI Resume Analyzer',
    status: 'live',
    description:
      'A Python pipeline that extracts resume text and queries Llama 3.3 70B for a 10-dimension analysis — match score, skill gaps, ATS report, interview questions — enforced against a strict JSON schema.',
    highlight: 'Raw model output to interactive Plotly charts and a downloadable PDF report.',
    stack: ['Python', 'Streamlit', 'Groq API', 'PyMuPDF', 'Plotly', 'ReportLab'],
    live: 'https://ai-resume-analyzer-k4lshdkjuaqmxyjmqntdek.streamlit.app',
    code: 'https://github.com/Sandy-SHM/ai-resume-analyzer',
  },
  {
    name: 'Bitcoin Sentiment Trader Analysis',
    status: 'complete',
    description:
      'A data science hiring assignment for PrimeTrade.ai — analyzing how market sentiment correlates with trader performance on Hyperliquid, a decentralized derivatives exchange.',
    highlight: 'Sentiment data joined against real trade performance, not just price data.',
    stack: ['Python', 'Pandas', 'Data Analysis'],
    live: null,
    code: 'https://github.com/Sandy-SHM/bitcoin-sentiment-trader-analysis',
  },
  {
    name: 'Upskyll',
    status: 'in_progress',
    description:
      'An AI-powered career mentorship platform for Indian students and working professionals — built to feel like an honest friend, not a sales pitch.',
    highlight: 'React + TypeScript + Tailwind + Framer Motion, on a FastAPI + Groq backend.',
    stack: ['React', 'TypeScript', 'Tailwind', 'FastAPI', 'Groq API'],
    live: null,
    code: null,
  },
  {
    name: 'Telemetry Unifier',
    status: 'complete',
    description:
      'A Python ETL pipeline that ingests IoT sensor data from multiple heterogeneous JSON sources and normalizes inconsistent schemas into one unified structure.',
    highlight: 'Data wrangling at the schema level, not just the row level.',
    stack: ['Python', 'JSON', 'ETL'],
    live: null,
    code: 'https://github.com/Sandy-SHM/telemetry-unifier',
  },
  {
    name: 'Expense Tracker',
    status: 'complete',
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
    <section id="projects" className="relative py-24 border-t border-line">
      <div className="max-w-5xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          className="font-mono text-xs text-muted mb-8"
        >
          /projects.ts
        </motion.p>

        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-paper2 border border-line rounded-lg p-5 flex flex-col"
            >
              <div className="font-mono text-[13px] mb-3">
                <span className="text-ink font-medium">{p.name}</span>
                <span className="text-muted">: Project = {'{'}</span>
              </div>

              <div className="pl-4 space-y-2.5 flex-1">
                <div className="font-mono text-[12px]">
                  <span className="text-type">status</span>
                  <span className="text-muted">: </span>
                  <span className={statusStyle[p.status]}>
                    "{p.status}" {p.status !== 'in_progress' ? '✓' : '…'}
                  </span>
                </div>

                <p className="text-[14px] text-muted leading-relaxed">{p.description}</p>
                <p className="text-[13px] text-ink/70 italic">{p.highlight}</p>

                <div className="font-mono text-[12px]">
                  <span className="text-type">stack</span>
                  <span className="text-muted">: [</span>
                  <span className="text-ink">{p.stack.map((s) => `"${s}"`).join(', ')}</span>
                  <span className="text-muted">]</span>
                </div>
              </div>

              <div className="font-mono text-[13px] text-muted mt-3">{'}'}</div>

              <div className="flex gap-5 mt-4 pt-4 border-t border-line">
                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono text-[12px] text-ink border-b border-line hover:border-type hover:text-type transition-colors pb-0.5"
                  >
                    live()
                  </a>
                )}
                {p.code && (
                  <a
                    href={p.code}
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono text-[12px] text-muted border-b border-line hover:border-type hover:text-type transition-colors pb-0.5"
                  >
                    source()
                  </a>
                )}
                {!p.live && !p.code && (
                  <span className="font-mono text-[12px] text-muted/60">source: private</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
