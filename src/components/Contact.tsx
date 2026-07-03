import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 border-t border-line">
      <div className="max-w-5xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          className="font-mono text-xs text-muted mb-8"
        >
          /contact.ts
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="bg-term rounded-xl border border-termLine overflow-hidden"
        >
          <div className="flex items-center gap-2 px-4 py-2.5 border-b border-termLine">
            <span className="h-2.5 w-2.5 rounded-full bg-[#EA5F52]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#E5B03C]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#4CA75B]" />
            <span className="font-mono text-[11px] text-termText/60 ml-2">contact.ts</span>
          </div>
          <div className="px-5 py-6 sm:px-7 sm:py-8 font-mono text-[13px] sm:text-sm leading-loose">
            <div><span className="text-type-soft">const</span> <span className="text-termText">contact</span> <span className="text-termText/50">= {'{'}</span></div>
            <div className="pl-4">
              <span className="text-type-soft">email</span>
              <span className="text-termText/50">: </span>
              <a href="mailto:sandeshsharadmane03@gmail.com" className="text-[#E7C88D] hover:text-white transition-colors">
                "sandeshsharadmane03@gmail.com"
              </a>
              <span className="text-termText/50">,</span>
            </div>
            <div className="pl-4">
              <span className="text-type-soft">phone</span>
              <span className="text-termText/50">: </span>
              <a href="tel:+918279922896" className="text-[#E7C88D] hover:text-white transition-colors">
                "+91 82799 22896"
              </a>
              <span className="text-termText/50">,</span>
            </div>
            <div className="pl-4">
              <span className="text-type-soft">github</span>
              <span className="text-termText/50">: </span>
              <a href="https://github.com/Sandy-SHM" target="_blank" rel="noreferrer" className="text-[#E7C88D] hover:text-white transition-colors">
                "github.com/Sandy-SHM"
              </a>
              <span className="text-termText/50">,</span>
            </div>
            <div className="pl-4">
              <span className="text-type-soft">linkedin</span>
              <span className="text-termText/50">: </span>
              <a href="https://www.linkedin.com/in/sandesh-sharad-mane-4671583bb/" target="_blank" rel="noreferrer" className="text-[#E7C88D] hover:text-white transition-colors">
                "linkedin.com/in/sandesh-sharad-mane"
              </a>
              <span className="text-termText/50">,</span>
            </div>
            <div className="pl-4">
              <span className="text-type-soft">leetcode</span>
              <span className="text-termText/50">: </span>
              <a href="https://leetcode.com/u/Sandesh_Mane/" target="_blank" rel="noreferrer" className="text-[#E7C88D] hover:text-white transition-colors">
                "leetcode.com/u/Sandesh_Mane"
              </a>
            </div>
            <div className="text-termText/50">{'}'}</div>
          </div>
        </motion.div>
      </div>

      <footer className="max-w-5xl mx-auto px-6 mt-16 pt-6 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-[11px] text-muted">
        <span>© {new Date().getFullYear()} Sandesh Sharad Mane</span>
        <span>built with React, TypeScript &amp; Tailwind</span>
      </footer>
    </section>
  )
}
