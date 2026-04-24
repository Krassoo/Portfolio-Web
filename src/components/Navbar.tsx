import { motion } from 'framer-motion'
import { FiMoon, FiSun } from 'react-icons/fi'
import { useTheme } from '../hooks/useTheme'

type NavbarProps = {
  activeSection: string
}

const navigation = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar({ activeSection }: NavbarProps) {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-lg dark:bg-slate-950/80 dark:border-slate-800/80 light:bg-slate-50/80 light:border-slate-200/80"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
        <a href="#home" className="font-semibold text-base text-white dark:text-white light:text-slate-900">
          Daniel Wahba
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`text-sm transition-colors duration-200 ${
                activeSection === item.id
                  ? 'text-white dark:text-white light:text-slate-900'
                  : 'text-slate-400 dark:text-slate-400 light:text-slate-600 hover:text-white dark:hover:text-white light:hover:text-slate-900'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="rounded-full border border-slate-700 bg-slate-900/90 p-2 text-slate-300 transition hover:bg-slate-800 dark:bg-slate-900/90 dark:border-slate-700 light:bg-slate-100 light:border-slate-300 light:text-slate-700"
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? (
              <FiSun className="h-5 w-5" />
            ) : (
              <FiMoon className="h-5 w-5" />
            )}
          </button>

          <a
            href="#contact"
            className="inline-flex items-center rounded-full border border-blue-500/40 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-200 transition hover:bg-blue-500/20"
          >
            Contact
          </a>
        </div>
      </div>
    </motion.header>
  )
}
