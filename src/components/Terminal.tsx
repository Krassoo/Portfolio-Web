import { motion } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'

const commands = {
  help: 'Available commands: help, about, skills, projects, contact, clear, whoami',
  about: 'Hi! I\'m Daniel Wahba Krasilchik, a Full Stack Developer based in Brazil with international experience in Israel.',
  skills: 'Frontend: React, TypeScript, JavaScript | Backend: Python, SQL, REST APIs | Tools: Git, Playwright, Agile',
  projects: 'AI Study Assistant • Data Dashboard • Productivity App',
  contact: 'Email: danielwahbakrasil@gmail.com | GitHub: github.com/Krassoo | LinkedIn: linkedin.com/in/danielwahba',
  whoami: 'You are a curious visitor exploring my interactive portfolio! 🎉',
  clear: '',
}

type Log = {
  id: string
  text: string
  isInput: boolean
}

export default function Terminal() {
  const [logs, setLogs] = useState<Log[]>([
    { id: '1', text: 'Welcome to Daniel\'s Interactive Portfolio Terminal', isInput: false },
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
      setLogs([])
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
        text: `Command not found: ${cmd}. Type "help" for available commands.`,
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
      <button
        onClick={() => setVisible(!visible)}
        className="fixed bottom-6 right-6 z-40 rounded-full bg-blue-500 p-4 shadow-lg transition hover:bg-blue-600"
        title="Open Terminal"
      >
        <span className="text-2xl">💻</span>
      </button>

      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          className="fixed bottom-20 right-6 z-40 w-96 rounded-2xl border border-slate-700 bg-slate-950/95 shadow-2xl backdrop-blur-xl"
        >
          <div className="flex items-center justify-between border-b border-slate-700 px-4 py-3">
            <h3 className="font-semibold text-white">Terminal</h3>
            <button
              onClick={() => setVisible(false)}
              className="text-slate-400 transition hover:text-white"
            >
              ✕
            </button>
          </div>

          <div className="h-64 overflow-y-auto bg-slate-900/50 p-4 font-mono text-sm">
            {logs.map((log) => (
              <div
                key={log.id}
                className={`mb-2 ${log.isInput ? 'text-blue-300' : 'text-slate-300'}`}
              >
                {log.text}
              </div>
            ))}
            <div ref={logsEndRef} />
          </div>

          <div className="border-t border-slate-700 px-4 py-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type a command..."
              className="w-full bg-transparent font-mono text-sm text-white placeholder-slate-500 outline-none"
              autoFocus
            />
          </div>
        </motion.div>
      )}
    </>
  )
}
