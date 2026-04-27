import { useEffect, useState } from 'react'
import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'
import ParticlesBackground from './components/ParticlesBackground'
import Terminal from './components/Terminal'
import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import ExperienceSection from './sections/ExperienceSection'
import SkillsSection from './sections/SkillsSection'
import ProjectsSection from './sections/ProjectsSection'
import ContactSection from './sections/ContactSection'
import useActiveSection from './hooks/useActiveSection'
import { ThemeProvider } from './hooks/useTheme'
import { ToastProvider } from './contexts/ToastContext'

const sectionIds = ['home', 'about', 'experience', 'skills', 'projects', 'contact']

function AppContent() {
  const [loading, setLoading] = useState(true)
  const activeSection = useActiveSection(sectionIds)

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 2100)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 dark:bg-slate-950 light:bg-slate-50 light:text-slate-900">
      <ParticlesBackground />
      <LoadingScreen show={loading} />
      <Navbar activeSection={activeSection} />
      <main className="relative mx-auto max-w-6xl px-6 pb-20 pt-20 sm:px-8">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Terminal />
    </div>
  )
}

function App() {
  return (
    <ToastProvider>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </ToastProvider>
  )
}

export default App
