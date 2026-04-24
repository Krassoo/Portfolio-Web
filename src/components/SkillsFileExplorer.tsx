import { motion } from 'framer-motion'
import { useState } from 'react'
import { FiFolder, FiFile } from 'react-icons/fi'

type FileNode = {
  id: string
  name: string
  type: 'folder' | 'file'
  children?: FileNode[]
  content?: string
}

const skillsTree: FileNode = {
  id: 'root',
  name: 'Portfolio',
  type: 'folder',
  children: [
    {
      id: 'about',
      name: 'About Me',
      type: 'file',
      content: `Hello! I'm Daniel Wahba Krasilchik, a Brazilian Full Stack Developer with international experience in Israel.

Specialist in modern web development with focus on React, TypeScript, and scalable solutions.

International Experience: Worked in Israeli startups, developing high-performance applications.

Passionate about technology, solving complex problems, and creating exceptional digital experiences.

Always seeking to learn new technologies and contribute to innovative projects.`
    },
    {
      id: 'skills',
      name: 'Skills',
      type: 'folder',
      children: [
        {
          id: 'frontend',
          name: 'Frontend Development',
          type: 'file',
          content: `FRONTEND EXPERTISE:

• React: Advanced components, custom hooks, performance optimization
• TypeScript: Static typing, generics, type-safe development
• JavaScript: ES6+, async/await, modern patterns, DOM manipulation
• CSS/Tailwind: Responsive design, animations, modern UI/UX
• Next.js: SSR, SSG, SEO optimization, full-stack applications

Practical experience in developing complex and interactive interfaces.`
        },
        {
          id: 'backend',
          name: 'Backend Development',
          type: 'file',
          content: `BACKEND SKILLS:

• Python: Backend development, APIs, process automation
• SQL: Database design, query optimization, PostgreSQL/MySQL
• REST APIs: RESTful API development and integration
• Node.js: Express.js, server development, APIs
• Database Design: Relational modeling, normalization, performance

Focus on scalable solutions and robust architecture.`
        },
        {
          id: 'tools',
          name: 'Tools & Workflow',
          type: 'file',
          content: `TOOLS AND METHODOLOGIES:

• Git: Version control, branching strategies, GitFlow
• Playwright: Automated E2E testing, integration testing
• Agile/Scrum: Iterative development, sprints, ceremonies
• Docker: Containerization, development environments
• CI/CD: Automated pipelines, continuous deployment

Experience in collaborative development environments and agile practices.`
        },
      ],
    },
    {
      id: 'projects',
      name: 'Projects',
      type: 'folder',
      children: [
        {
          id: 'ai-assistant',
          name: 'AI Study Assistant',
          type: 'file',
          content: `AI STUDY ASSISTANT

• Intelligent web application to assist students
• Technologies: React, TypeScript, OpenAI API, Node.js
• Features: Summary generation, personalized explanations, adaptive quizzes
• Impact: Increased study efficiency by 40% for beta users

Personal project demonstrating AI integration in education.`
        },
        {
          id: 'dashboard',
          name: 'Data Visualization Dashboard',
          type: 'file',
          content: `INTERACTIVE DATA DASHBOARD

• Analytical dashboard with real-time visualizations
• Technologies: React, D3.js, WebSocket, Express.js
• Features: Dynamic charts, advanced filters, data export
• Users: +500 active monthly users

Complete solution for business data analysis.`
        },
        {
          id: 'productivity',
          name: 'Productivity Management App',
          type: 'file',
          content: `PRODUCTIVITY APP

• Full-stack application for productivity management
• Technologies: React, Node.js, PostgreSQL, JWT
• Features: Task management, time tracking, reports, notifications
• Resources: REST API, secure authentication, responsive interface

Complete tool for personal and business workflow optimization.`
        },
      ],
    },
    {
      id: 'experience',
      name: 'Professional Experience',
      type: 'folder',
      children: [
        {
          id: 'docflo',
          name: 'Docflo.ai - Frontend Developer',
          type: 'file',
          content: `DOCFLO.AI - TEL AVIV, ISRAEL

• Position: Frontend Developer (2023-2024)
• Technologies: React, TypeScript, Redux, Material-UI
• Responsibilities: Developing interfaces for document management platform
• Achievements: Implementation of new features, performance optimization, international collaboration
• Impact: Contributed to 200% startup growth during the period

Valuable experience in Israeli startup environment, focused on innovation and agility.`
        },
        {
          id: 'freelance',
          name: 'Freelance Development',
          type: 'file',
          content: `FREELANCE DEVELOPMENT

• Diverse projects: E-commerce, landing pages, web applications
• Clients: Brazilian and international startups
• Technologies: React, Next.js, WordPress, PHP, MySQL
• Services: Full development, technical consulting, maintenance

Diverse portfolio demonstrating versatility and adaptability in different contexts.`
        },
      ],
    },
  ],
}

export default function SkillsFileExplorer() {
  const [selectedFolder, setSelectedFolder] = useState<FileNode | null>(null)
  const [selectedContent, setSelectedContent] = useState<string>('Select a folder or file to view more details...')

  const handleFolderClick = (folder: FileNode) => {
    setSelectedFolder(folder)
    if (folder.type === 'file' && folder.content) {
      setSelectedContent(folder.content)
    } else {
      setSelectedContent(`Folder content: ${folder.name}`)
    }
  }

  const handleFileClick = (file: FileNode) => {
    if (file.content) {
      setSelectedContent(file.content)
    }
  }

  return (
    <div className="rounded-2xl border border-slate-700/50 bg-slate-900/50 p-6 font-mono text-sm dark:bg-slate-900/50 dark:border-slate-700/50 light:bg-white light:border-slate-300">
      <div className="mb-4 flex items-center gap-2 pb-4 border-b border-slate-700/50 light:border-slate-300">
        <div className="flex gap-1">
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <div className="h-3 w-3 rounded-full bg-yellow-500" />
          <div className="h-3 w-3 rounded-full bg-green-500" />
        </div>
        <span className="ml-2 text-xs text-slate-500 light:text-slate-600">Explorer • My Portfolio</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Folders */}
        <div className="space-y-2">
          <h4 className="text-slate-300 light:text-slate-700 font-semibold">Main Folders:</h4>
          <div className="space-y-1">
            {skillsTree.children?.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => handleFolderClick(item)}
                className={`flex w-full items-center gap-3 px-4 py-3 text-left rounded-lg transition-colors ${
                  selectedFolder?.id === item.id
                    ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                    : 'text-slate-300 hover:bg-slate-800/50 hover:text-slate-100 dark:text-slate-300 dark:hover:bg-slate-800/50 light:text-slate-700 light:hover:bg-slate-200/50'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FiFolder size={20} />
                <span className="font-medium">{item.name}</span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Files in Selected Folder */}
        <div className="space-y-2">
          <h4 className="text-slate-300 light:text-slate-700 font-semibold">
            {selectedFolder ? `Files in ${selectedFolder.name}:` : 'Select a folder'}
          </h4>
          <div className="space-y-1">
            {selectedFolder?.children?.map((file) => (
              <motion.button
                key={file.id}
                onClick={() => handleFileClick(file)}
                className="flex w-full items-center gap-3 px-4 py-2 text-left rounded-lg transition-colors text-slate-300 hover:bg-slate-800/30 hover:text-slate-100 dark:text-slate-300 dark:hover:bg-slate-800/30 light:text-slate-600 light:hover:bg-slate-200/50"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <FiFile size={16} />
                <span>{file.name}</span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Content Display */}
        <div className="space-y-2">
          <h4 className="text-slate-300 light:text-slate-700 font-semibold">Content:</h4>
          <div className="rounded-lg border border-slate-700/50 bg-slate-800/50 p-4 min-h-[300px] text-slate-200 light:bg-slate-100 light:border-slate-300 light:text-slate-800">
            <pre className="whitespace-pre-wrap font-mono text-sm leading-relaxed">{selectedContent}</pre>
          </div>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-slate-700/50 light:border-slate-300">
        <p className="text-xs text-slate-500 light:text-slate-600">
          Click on folders to explore files, then click on files to view complete details!
        </p>
      </div>
    </div>
  )
}
