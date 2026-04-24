import { motion } from 'framer-motion'

const highlights = [
  {
    icon: '🌍',
    title: 'International Experience',
    description: 'Delivered features for a team in Israel while using English for collaboration and product delivery.',
  },
  {
    icon: '⚡',
    title: 'Performance Focus',
    description: 'Optimized components and page load to create fast, responsive web experiences.',
  },
  {
    icon: '🤝',
    title: 'Team Collaboration',
    description: 'Worked in agile squads with product, design, and backend engineers on real products.',
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="border-t border-slate-800/80 py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]"
        >
          <div className="space-y-6">
            <span className="text-sm uppercase tracking-[0.32em] text-slate-500">
              About
            </span>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Story-driven frontend craftsmanship.
            </h2>
            <p className="max-w-2xl text-lg leading-8 text-slate-300">
              I build interfaces that feel polished and reliable.
              With production experience in Israel, I contribute to modern web products using React, TypeScript and clean architecture.
              I bring a growth mindset, strong English communication and a practical approach to shipping features fast.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-800/80 bg-slate-950/80 p-6 transition hover:-translate-y-1 hover:border-blue-500/40 hover:bg-slate-900/90"
              >
                <div className="text-3xl">{item.icon}</div>
                <h3 className="mt-5 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
