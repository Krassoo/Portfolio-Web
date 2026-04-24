import { motion } from 'framer-motion'
import { useState } from 'react'
import { FiChevronRight, FiChevronDown, FiFolder, FiFile } from 'react-icons/fi'

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
      id: 'skills',
      name: '📁 Skills',
      type: 'folder',
      children: [
        {
          id: 'frontend',
          name: '📱 Frontend',
          type: 'folder',
          children: [
            { id: 'react', name: 'React.tsx', type: 'file', content: 'Advanced proficiency in React, including hooks, context, and performance optimization.' },
            { id: 'typescript', name: 'TypeScript.ts', type: 'file', content: 'Strong TypeScript skills with advanced types, generics, and strict mode development.' },
            { id: 'javascript', name: 'JavaScript.js', type: 'file', content: 'Expert JavaScript knowledge including ES6+, async/await, and modern patterns.' },
          ],
        },
        {
          id: 'backend',
          name: '⚙️ Backend',
          type: 'folder',
          children: [
            { id: 'python', name: 'Python.py', type: 'file', content: 'Intermediate Python skills for backend development and scripting.' },
            { id: 'sql', name: 'SQL.sql', type: 'file', content: 'Database design and SQL query optimization experience.' },
            { id: 'apis', name: 'APIs.json', type: 'file', content: 'REST API development and integration with various services.' },
          ],
        },
        {
          id: 'tools',
          name: '🛠️ Tools',
          type: 'folder',
          children: [
            { id: 'git', name: 'Git.md', type: 'file', content: 'Version control with Git, branching strategies, and collaborative workflows.' },
            { id: 'playwright', name: 'Playwright.spec.ts', type: 'file', content: 'End-to-end testing with Playwright for reliable web applications.' },
            { id: 'agile', name: 'Agile.txt', type: 'file', content: 'Agile methodology experience in fast-paced development environments.' },
          ],
        },
      ],
    },
    {
      id: 'projects',
      name: '📂 Projects',
      type: 'folder',
      children: [
        { id: 'ai-assistant', name: 'AI Study Assistant', type: 'file', content: 'AI-powered study assistant built with React and machine learning APIs.' },
        { id: 'dashboard', name: 'Data Dashboard', type: 'file', content: 'Interactive data visualization dashboard using D3.js and real-time data.' },
        { id: 'productivity', name: 'Productivity App', type: 'file', content: 'Full-stack productivity application with task management and analytics.' },
      ],
    },
    {
      id: 'experience',
      name: '💼 Experience',
      type: 'folder',
      children: [
        { id: 'docflo', name: 'Docflo.ai', type: 'file', content: 'Frontend Developer at Docflo.ai (Israel) - React, APIs, agile teams.' },
        { id: 'freelance', name: 'Freelance', type: 'file', content: 'Various freelance projects including web development and consulting.' },
      ],
    },
  ],
}

function FileExplorerNode({ node, level = 0, onFileSelect }: { node: FileNode; level?: number; onFileSelect: (content: string) => void }) {
  const [expanded, setExpanded] = useState(false)

  const isFolder = node.type === 'folder'

  return (
    <div className="select-none">
      <motion.button
        onClick={() => {
          if (isFolder) setExpanded(!expanded)
          else if (node.content) onFileSelect(node.content)
        }}
        className="flex w-full items-center gap-2 px-3 py-2 text-left text-sm transition-colors text-slate-300 hover:bg-slate-800/50 hover:text-slate-100 dark:text-slate-300 dark:hover:bg-slate-800/50 light:text-slate-600 light:hover:bg-slate-200/50"
        initial={{ x: -10, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: level * 0.05 }}
      >
        {isFolder && (
          <span className="transition-transform" style={{ transform: expanded ? 'rotate(90deg)' : 'rotate(0deg)' }}>
            {expanded ? <FiChevronDown size={16} /> : <FiChevronRight size={16} />}
          </span>
        )}
        {!isFolder && <span className="w-4" />}

        {isFolder ? <FiFolder size={16} /> : <FiFile size={16} />}
        <span>{node.name}</span>
      </motion.button>

      {isFolder && expanded && node.children && (
        <div className="ml-2 border-l border-slate-700/50">
          {node.children.map((child) => (
            <FileExplorerNode key={child.id} node={child} level={level + 1} onFileSelect={onFileSelect} />
          ))}
        </div>
      )}
    </div>
  )
}

export default function SkillsFileExplorer() {
  const [selectedContent, setSelectedContent] = useState<string>('Click on a file to view its contents...')

  return (
    <div className="rounded-2xl border border-slate-700/50 bg-slate-900/50 p-6 font-mono text-sm dark:bg-slate-900/50 dark:border-slate-700/50 light:bg-slate-100 light:border-slate-300">
      <div className="mb-4 flex items-center gap-2 pb-4 border-b border-slate-700/50 light:border-slate-300">
        <div className="flex gap-1">
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <div className="h-3 w-3 rounded-full bg-yellow-500" />
          <div className="h-3 w-3 rounded-full bg-green-500" />
        </div>
        <span className="ml-2 text-xs text-slate-500 light:text-slate-600">Explorer • My Portfolio</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <h4 className="text-slate-300 light:text-slate-600">Navigate folders:</h4>
          <div className="space-y-0">
            {skillsTree.children?.map((folder) => (
              <FileExplorerNode key={folder.id} node={folder} onFileSelect={setSelectedContent} />
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="text-slate-300 light:text-slate-600">File content:</h4>
          <div className="rounded-lg border border-slate-700/50 bg-slate-800/50 p-4 min-h-[200px] text-slate-200 light:bg-slate-200 light:border-slate-300 light:text-slate-700">
            <pre className="whitespace-pre-wrap font-mono text-sm">{selectedContent}</pre>
          </div>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-slate-700/50 light:border-slate-300">
        <p className="text-xs text-slate-500 light:text-slate-600">
          💡 Click on folders to expand and files to view details!
        </p>
      </div>
    </div>
  )
}
