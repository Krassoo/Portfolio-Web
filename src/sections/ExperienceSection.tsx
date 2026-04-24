import { motion } from 'framer-motion'

const timeline = [
  {
    title: 'Docflo.ai (Israel)',
    period: 'Frontend Developer',
    bullets: [
      'Built frontend features using React and modern UI patterns.',
      'Integrated REST APIs and optimized data flow.',
      'Collaborated in an agile product team with designers and backend engineers.',
    ],
  },
  {
    title: 'International Program',
    period: 'Cross-cultural collaboration',
    bullets: [
      'Worked in a multicultural environment with global teammates.',
      'Delivered solutions while improving English communication.',
      'Learned fast and adapted to real product feedback loops.',
    ],
  },
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="border-t border-slate-800/80 py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="mb-12 space-y-4">
          <span className="text-sm uppercase tracking-[0.32em] text-slate-500">Experience</span>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Real production work with clear impact.</h2>
          <p className="max-w-2xl text-base leading-7 text-slate-400">
            A timeline of how I grew from intern-level work to shipping features in a live environment with product quality and team alignment.
          </p>
        </div>

        <div className="space-y-10">
          {timeline.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              className="relative overflow-hidden rounded-[32px] border border-slate-800/80 bg-slate-950/80 p-8 shadow-[0_32px_120px_-60px_rgba(15,23,42,0.9)]"
            >
              <div className="absolute left-6 top-6 h-3 w-3 rounded-full bg-blue-400"></div>
              <div className="ml-6 space-y-4">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-500">{item.period}</p>
                <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                <ul className="mt-4 space-y-3 text-slate-300">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-blue-400"></span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
