import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'

export default function HeroSection() {
  return (
    <section id="home" className="pt-24 pb-20">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.05 }}
          className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"
        >
          <div className="space-y-8">
            <span className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-200">
              Frontend developer with international experience
            </span>
            <div className="space-y-6">
              <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-white sm:text-6xl">
                Building scalable and modern web experiences.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-300">
                Frontend developer with international experience, focused on performance, clean architecture, and real-world impact.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-blue-400"
              >
                View Projects
                <FiArrowRight className="ml-3 h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/90 px-6 py-3 text-sm font-semibold text-white transition hover:border-blue-500"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="rounded-[32px] border border-slate-800/80 bg-slate-950/90 p-8 shadow-2xl shadow-slate-950/30">
            <div className="space-y-6 rounded-3xl bg-slate-900/90 p-8 text-white">
              <p className="text-sm uppercase tracking-[0.26em] text-slate-500">
                Core focus
              </p>
              <div className="space-y-4">
                <div className="rounded-3xl border border-slate-800/80 bg-slate-950/70 p-6">
                  <p className="text-sm text-slate-400">Performance-first interfaces</p>
                  <p className="mt-3 text-base font-medium text-white">
                    Fast pages, accessible interactions, and polished animations.
                  </p>
                </div>
                <div className="rounded-3xl border border-slate-800/80 bg-slate-950/70 p-6">
                  <p className="text-sm text-slate-400">Agile collaboration</p>
                  <p className="mt-3 text-base font-medium text-white">
                    Shipping product features with cross-functional teams and strong communication.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
