import { motion } from 'framer-motion'

const projects = [
  {
    title: 'AI Study Assistant',
    description:
      'A smart study companion that organizes notes, suggests learning paths, and surfaces actionable insights for effective study sessions.',
    tech: ['React', 'TypeScript', 'REST APIs'],
  },
  {
    title: 'Data Dashboard',
    description:
      'A polished analytics workspace that turns raw metrics into clear dashboards with interactive filters and performance insights.',
    tech: ['React', 'Tailwind', 'APIs'],
  },
  {
    title: 'Productivity App',
    description:
      'A modern productivity tool designed for streamlined task flows, quick collaboration, and mobile-friendly workflows.',
    tech: ['React', 'TypeScript', 'Framer Motion'],
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="border-t border-slate-800/80 py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="mb-12 space-y-4">
          <span className="text-sm uppercase tracking-[0.32em] text-slate-500">Projects</span>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Product work built for impact.</h2>
          <p className="max-w-2xl text-base leading-7 text-slate-400">
            Three modern products that demonstrate my approach to solving real user problems with clean design and robust implementation.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group overflow-hidden rounded-[32px] border border-slate-800/80 bg-slate-950/80 p-7 shadow-2xl shadow-slate-950/20 transition hover:-translate-y-1 hover:border-blue-500/40"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex rounded-full bg-slate-900/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-blue-300">
                  {project.title}
                </span>
                <div className="h-2 w-16 rounded-full bg-slate-800" />
              </div>
              <p className="mt-6 text-sm leading-7 text-slate-300">{project.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-2xl border border-slate-800/80 bg-slate-900/90 px-3 py-1 text-xs text-slate-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-8 text-sm tracking-tight text-slate-400">
                <p>Designed as premium product concepts for modern SaaS experiences.</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
