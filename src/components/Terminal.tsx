import { motion, AnimatePresence } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'

const commands = {
  help: 'Available commands: help | about | skills | projects | contact | experience | clear | whoami | ls',
  about: 'Hi! I\'m Daniel Wahba Krasilchik, a Full Stack Developer based in Brazil with international experience in Israel.',
  skills: 'Use "ls" to explore the file system or "cat skills" for a quick overview',
  projects: '3 major projects: AI Study Assistant, Data Dashboard, and Productivity App',
  contact: 'Email: danielwahbakrasil@gmail.com | GitHub: github.com/Krassoo',
  experience: 'Docflo.ai (Israel) - Frontend Developer | Working with React, APIs, and agile teams',
  whoami: 'You are a curious recruiter exploring my interactive portfolio! 🎯',
  'cat skills': 'Frontend: React, TypeScript, JavaScript | Backend: Python, SQL, APIs | Tools: Git, Playwright, Agile',
  ls: 'frontend/  backend/  tools/  projects/  experience/',
  echo: 'Type "echo [message]" to echo a message',
  pwd: '/home/danielwahba/portfolio',
  clear: '',
}

type Log = {
  id: string
  text: string
  isInput: boolean
}

export default function Terminal() {
  const [logs, setLogs] = useState<Log[]>([
    { id: '1', text: 'Welcome to Daniel\'s Interactive Terminal', isInput: false },
    { id: '2', text: 'Type "help" for available commands', isInput: false },
  ])
  const [input, setInput] = useState('')
  const [visible, setVisible] = useState(false)
  const logsEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    logsEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [logs])

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase()
    
    if (trimmed === '') return
    
    const newLogs: Log[] = [
      ...logs,
      { id: `input-${Date.now()}`, text: `$ ${cmd}`, isInput: true },
    ]

    if (trimmed === 'clear') {
      setLogs([{ id: 'cleared', text: 'Terminal cleared', isInput: false }])
    } else if (trimmed.startsWith('echo ')) {
      const message = cmd.substring(5)
      newLogs.push({
        id: `output-${Date.now()}`,
        text: message,
        isInput: false,
      })
    } else if (trimmed in commands) {
      const response = commands[trimmed as keyof typeof commands]
      if (response) {
        newLogs.push({
          id: `output-${Date.now()}`,
          text: response,
          isInput: false,
        })
      }
    } else {
      newLogs.push({
        id: `error-${Date.now()}`,
        text: `command not found: ${cmd}`,
        isInput: false,
      })
    }

    setLogs(newLogs)
    setInput('')
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(input)
    }
  }

  return (
    <>
      <motion.button
        onClick={() => setVisible(!visible)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-40 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 p-4 shadow-lg shadow-blue-500/50 transition hover:shadow-lg hover:shadow-blue-600/50"
        title="Open Terminal"
      >
        <span className="text-2xl">➤</span>
      </motion.button>

      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.7, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.7, y: 20 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="fixed bottom-20 right-6 z-40 w-full max-w-lg border border-gray-600 bg-black shadow-2xl"
          >
            {/* Simple CMD title */}
            <div className="flex items-center justify-between border-b border-gray-600 bg-gray-800 px-4 py-2">
              <h3 className="font-mono text-sm font-semibold text-white">Command Prompt - portfolio@daniel</h3>
              <button
                onClick={() => setLogs([{ id: 'cleared', text: 'Terminal cleared', isInput: false }])}
                className="text-gray-400 hover:text-white transition-colors text-xs px-2 py-1 rounded border border-gray-600 hover:border-gray-400"
                title="Clear Terminal"
              >
                Clear
              </button>
            </div>

            {/* Terminal content */}
            <div className="h-64 overflow-y-auto bg-black p-4 font-mono text-sm text-green-400">
              {logs.map((log) => (
                <motion.div
                  key={log.id}
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-2"
                >
                  {log.isInput ? 'C:\\portfolio&gt; ' : ''}
                  <span>{log.text}</span>
                </motion.div>
              ))}
              <div ref={logsEndRef} />
            </div>

            {/* Input area */}
            <div className="border-t border-gray-600 bg-black px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="text-green-400">C:\portfolio&gt;</span>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="type command..."
                  className="flex-1 bg-transparent font-mono text-sm text-green-400 outline-none placeholder-gray-500"
                  autoFocus
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
