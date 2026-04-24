import { motion } from 'framer-motion'
import SkillsFileExplorer from '../components/SkillsFileExplorer'
import CodePlayground from '../components/CodePlayground'

export default function SkillsSection() {
  return (
    <section id="skills" className="border-t border-slate-800/80 py-24 dark:border-slate-800/80 light:border-slate-300">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="mb-12 space-y-4">
          <span className="text-sm uppercase tracking-[0.32em] text-slate-500 dark:text-slate-500 light:text-slate-600">Skills</span>
          <h2 className="text-3xl font-semibold text-white dark:text-white light:text-slate-900 sm:text-4xl">Navigate my skill set.</h2>
          <p className="max-w-2xl text-base leading-7 text-slate-400 dark:text-slate-400 light:text-slate-600">
            Explore my abilities through an interactive file explorer and live code playground. Click on folders to expand and discover what I can do, or edit and run code examples to see my development skills in action.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
        >
          <SkillsFileExplorer />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="mt-12"
        >
          <CodePlayground />
        </motion.div>
      </div>
    </section>
  )
}
