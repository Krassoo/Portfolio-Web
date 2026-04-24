import { motion } from 'framer-motion'

const skills = [
  { title: 'Frontend', items: ['React', 'TypeScript', 'JavaScript'] },
  { title: 'Backend', items: ['Python', 'SQL', 'REST APIs'] },
  { title: 'Other', items: ['Git', 'Playwright', 'Agile'] },
]

export default function SkillsSection() {
  return (
    <section id="skills" className="border-t border-slate-800/80 py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="mb-12 space-y-4">
          <span className="text-sm uppercase tracking-[0.32em] text-slate-500">Skills</span>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">What I bring to product teams.</h2>
          <p className="max-w-2xl text-base leading-7 text-slate-400">
            A compact set of capabilities that match international startup expectations for frontend and API work.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="rounded-3xl border border-slate-800/80 bg-slate-950/80 p-7 shadow-xl shadow-slate-950/20"
            >
              <h3 className="text-xl font-semibold text-white">{skill.title}</h3>
              <div className="mt-6 space-y-3">
                {skill.items.map((item) => (
                  <div
                    key={item}
                    className="inline-flex rounded-2xl border border-slate-800/80 bg-slate-900/80 px-4 py-3 text-sm text-slate-300 transition hover:border-blue-500/40 hover:bg-slate-800/90"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
