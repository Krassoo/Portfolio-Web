import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { motion } from 'framer-motion'

export default function ContactSection() {
  return (
    <section id="contact" className="border-t border-slate-800/80 py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="rounded-[32px] border border-slate-800/80 bg-slate-950/90 p-10 shadow-2xl shadow-slate-950/20"
        >
          <div className="grid gap-10 lg:grid-cols-[0.9fr_0.6fr] lg:items-center">
            <div className="space-y-6">
              <span className="text-sm uppercase tracking-[0.32em] text-slate-500">Contact</span>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">Open to international opportunities.</h2>
              <p className="max-w-xl text-base leading-7 text-slate-300">
                I am available for remote and relocation roles. Reach out for frontend development, API integration, or collaborative product delivery.
              </p>
            </div>
            <div className="space-y-4 rounded-3xl border border-slate-800/80 bg-slate-900/90 p-6">
              <a
                href="mailto:danielwahbakrasil@gmail.com"
                className="flex items-center gap-3 rounded-3xl bg-slate-950/90 px-5 py-4 text-sm text-slate-100 transition hover:bg-blue-500/10"
              >
                <FiMail className="h-5 w-5 text-blue-300" />
                danielwahbakrasil@gmail.com
              </a>
              <a
                href="https://github.com/Krassoo"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-3xl bg-slate-950/90 px-5 py-4 text-sm text-slate-100 transition hover:bg-blue-500/10"
              >
                <FiGithub className="h-5 w-5 text-blue-300" />
                github.com/Krassoo
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-3xl bg-slate-950/90 px-5 py-4 text-sm text-slate-100 transition hover:bg-blue-500/10"
              >
                <FiLinkedin className="h-5 w-5 text-blue-300" />
                linkedin.com/in/danielwahba
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
