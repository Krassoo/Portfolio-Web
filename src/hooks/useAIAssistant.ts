import { useState } from 'react'

const portfolioKnowledge = {
  about: `Daniel Wahba Krasilchik is a Brazilian Full Stack Developer with international experience in Israel. He specializes in modern web development with React, TypeScript, and scalable solutions. He has worked in Israeli startups and brings international experience to his development work.`,

  skills: `Daniel's technical skills include:
• Frontend: React, TypeScript, JavaScript, Next.js, CSS/Tailwind
• Backend: Python, SQL, Node.js, REST APIs
• Tools: Git, Playwright, Agile/Scrum, Docker, CI/CD
• Specialties: Performance optimization, clean architecture, real-world impact`,

  experience: `Professional Experience:
• Docflo.ai (Israel) - Frontend Developer (2023-2024): React, TypeScript, Redux, Material-UI
• Freelance Development: E-commerce, landing pages, web applications using React, Next.js, WordPress, PHP, MySQL
• Focus on international collaboration and startup environments`,

  projects: `Major Projects:
• AI Study Assistant: Intelligent web app for students using React, TypeScript, OpenAI API
• Data Visualization Dashboard: Real-time analytics with React, D3.js, WebSocket
• Productivity Management App: Full-stack productivity tool with React, Node.js, PostgreSQL
All projects demonstrate modern development practices and real-world impact.`,

  contact: `Contact Information:
• Email: danielwahbakrasil@gmail.com
• GitHub: github.com/Krassoo
• Location: Brazil with international experience
• Available for opportunities and collaborations`
}

export function useAIAssistant() {
  const [isTyping, setIsTyping] = useState(false)

  const generateResponse = async (query: string): Promise<string> => {
    setIsTyping(true)

    try {
      // Convert query to lowercase for matching
      const lowerQuery = query.toLowerCase()

      // Simple keyword matching for demo purposes
      // In production, this would use OpenAI API or similar
      if (lowerQuery.includes('about') || lowerQuery.includes('who') || lowerQuery.includes('daniel')) {
        return portfolioKnowledge.about
      }

      if (lowerQuery.includes('skill') || lowerQuery.includes('tech') || lowerQuery.includes('expertise')) {
        return portfolioKnowledge.skills
      }

      if (lowerQuery.includes('experience') || lowerQuery.includes('work') || lowerQuery.includes('job')) {
        return portfolioKnowledge.experience
      }

      if (lowerQuery.includes('project') || lowerQuery.includes('work')) {
        return portfolioKnowledge.projects
      }

      if (lowerQuery.includes('contact') || lowerQuery.includes('email') || lowerQuery.includes('reach')) {
        return portfolioKnowledge.contact
      }

      if (lowerQuery.includes('react') || lowerQuery.includes('frontend')) {
        return `Daniel is an expert in React development with extensive experience in:
• Component architecture and state management
• Performance optimization and code splitting
• TypeScript integration for type safety
• Modern React patterns (hooks, context, custom hooks)
• UI/UX implementation with responsive design`
      }

      if (lowerQuery.includes('backend') || lowerQuery.includes('python') || lowerQuery.includes('api')) {
        return `Daniel's backend expertise includes:
• Python development for APIs and automation
• RESTful API design and implementation
• Database design with SQL (PostgreSQL, MySQL)
• Node.js and Express.js for server-side development
• API integration and third-party service connections`
      }

      if (lowerQuery.includes('israel') || lowerQuery.includes('international')) {
        return `Daniel's international experience in Israel includes:
• Working at Docflo.ai, a document management startup
• Frontend development with React and TypeScript
• Agile development in a fast-paced startup environment
• International collaboration and cross-cultural communication
• Experience with Israeli tech industry standards`
      }

      // Default response for unmatched queries
      return `I'm Daniel's AI assistant! I can help you learn about his skills, experience, and projects. Try asking about:
• "Tell me about Daniel" - Personal background
• "What are his skills?" - Technical expertise
• "Show me his projects" - Portfolio work
• "What's his experience?" - Professional background
• "How to contact him?" - Contact information`

    } catch (error) {
      console.error('AI Assistant error:', error)
      return `Sorry, I'm having trouble processing your request right now. Please try again or use the regular terminal commands like 'help' for available options.`
    } finally {
      setIsTyping(false)
    }
  }

  return { generateResponse, isTyping }
}