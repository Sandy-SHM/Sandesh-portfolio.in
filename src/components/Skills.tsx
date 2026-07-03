import { motion } from 'framer-motion'

const groups = [
  {
    field: 'languages',
    type: 'string[]',
    items: ['Python', 'Java', 'C++', 'TypeScript'],
  },
  {
    field: 'ai_ml_tooling',
    type: 'string[]',
    items: [
      'LangChain',
      'RAG Pipelines',
      'ChromaDB',
      'sentence-transformers',
      'Prompt Engineering',
      'Groq API',
      'Llama 3.3 70B',
      'scikit-learn',
    ],
    wide: true,
  },
  {
    field: 'backend_infra',
    type: 'string[]',
    items: ['FastAPI', 'REST APIs', 'SSE Streaming', 'Docker', 'Git', 'Render', 'Vercel'],
  },
  {
    field: 'frontend_data',
    type: 'string[]',
    items: ['React', 'Streamlit', 'NumPy', 'Pandas', 'Matplotlib', 'Plotly', 'PyMuPDF', 'ReportLab'],
  },
  {
    field: 'core_cs',
    type: 'string[]',
    items: ['Data Structures & Algorithms', 'OOP', 'System Design', 'Cloud Computing'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 border-t border-line">
      <div className="max-w-5xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          className="font-mono text-xs text-muted mb-8"
        >
          /skills.ts
        </motion.p>

        <div className="grid md:grid-cols-2 gap-4">
          {groups.map((g, i) => (
            <motion.div
              key={g.field}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`bg-paper2 border border-line rounded-lg p-5 ${g.wide ? 'md:col-span-2' : ''}`}
            >
              <div className="font-mono text-[13px] mb-3">
                <span className="text-type">{g.field}</span>
                <span className="text-muted">: {g.type} = [</span>
              </div>
              <div className="flex flex-wrap gap-2 pl-4">
                {g.items.map((item) => (
                  <span
                    key={item}
                    className="font-mono text-[12px] text-ink bg-paper border border-line rounded px-2.5 py-1.5"
                  >
                    "{item}"
                  </span>
                ))}
              </div>
              <div className="font-mono text-[13px] text-muted mt-3">]</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
