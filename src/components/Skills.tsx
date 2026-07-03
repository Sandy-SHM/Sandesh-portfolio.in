import { motion } from 'framer-motion'

const groups = [
  {
    title: 'Languages',
    tag: '01',
    items: ['Python', 'Java', 'C++', 'TypeScript'],
  },
  {
    title: 'AI / ML & LLM Tooling',
    tag: '02',
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
  },
  {
    title: 'Backend & Infrastructure',
    tag: '03',
    items: ['FastAPI', 'REST API Design', 'SSE Streaming', 'Docker', 'Git/GitHub', 'Render', 'Vercel'],
  },
  {
    title: 'Frontend & Data',
    tag: '04',
    items: ['React', 'Streamlit', 'NumPy', 'Pandas', 'Matplotlib', 'Plotly', 'PyMuPDF', 'ReportLab'],
  },
  {
    title: 'Core CS',
    tag: '05',
    items: ['Data Structures & Algorithms', 'OOP', 'System Design', 'Cloud Computing'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 border-t border-line">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="font-mono text-xs text-indigo-soft uppercase tracking-widest">Skills</span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold mt-3 text-ink">
            The stack behind the projects.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {groups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`border border-line bg-surface rounded-2xl p-6 hover:border-indigo/50 transition-colors ${
                group.title === 'AI / ML & LLM Tooling' ? 'md:col-span-2' : ''
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display text-lg text-ink">{group.title}</h3>
                <span className="font-mono text-xs text-muted">{group.tag}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="font-mono text-xs text-muted border border-line rounded-md px-2.5 py-1.5 hover:text-indigo-soft hover:border-indigo/40 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
