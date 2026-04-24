import { useEffect, useState } from 'react'

type SectionId = string

export default function useActiveSection(sectionIds: SectionId[]) {
  const [activeSection, setActiveSection] = useState<string>('home')

  useEffect(() => {
    const onScroll = () => {
      const scrollPosition = window.scrollY + 120
      let currentSection = 'home'

      sectionIds.forEach((sectionId) => {
        const section = document.getElementById(sectionId)
        if (section && section.offsetTop <= scrollPosition) {
          currentSection = sectionId
        }
      })

      setActiveSection(currentSection)
    }

    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [sectionIds])

  return activeSection
}
