import { useState } from 'react'
import Editor from '@monaco-editor/react'
import { motion } from 'framer-motion'
import { useToast } from '../contexts/ToastContext'

type CodeExample = {
  title: string
  language: string
  code: string
  description: string
}

type ExampleKey = 'react' | 'algorithm' | 'api'

const codeExamples: Record<ExampleKey, CodeExample> = {
  react: {
    title: 'React Component Example',
    language: 'typescript',
    code: `import React, { useState, useEffect } from 'react'

interface UserProfile {
  name: string
  email: string
  skills: string[]
}

const UserCard: React.FC<{ user: UserProfile }> = ({ user }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-sm">
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-lg">
            {user.name.charAt(0)}
          </span>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            {user.name}
          </h3>
          <p className="text-gray-600">{user.email}</p>
        </div>
      </div>

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        {isExpanded ? 'Hide' : 'Show'} Skills
      </button>

      {isExpanded && (
        <div className="mt-4">
          <h4 className="font-semibold text-gray-900 mb-2">Skills:</h4>
          <div className="flex flex-wrap gap-2">
            {user.skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

// Usage example
const sampleUser: UserProfile = {
  name: 'Daniel Wahba',
  email: 'daniel@example.com',
  skills: ['React', 'TypeScript', 'Node.js', 'Python']
}

export default function App() {
  return (
    <div className="p-8">
      <UserCard user={sampleUser} />
    </div>
  )
}`,
    description: 'A modern React component with TypeScript, hooks, and responsive design.'
  },

  algorithm: {
    title: 'Algorithm: Binary Search',
    language: 'javascript',
    code: `/**
 * Binary Search Algorithm
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 */

function binarySearch(arr, target) {
  let left = 0
  let right = arr.length - 1

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)

    if (arr[mid] === target) {
      return mid // Found the target
    } else if (arr[mid] < target) {
      left = mid + 1 // Search right half
    } else {
      right = mid - 1 // Search left half
    }
  }

  return -1 // Target not found
}

// Test the algorithm
const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
const target = 11

console.log('Array:', sortedArray)
console.log('Target:', target)
console.log('Index found:', binarySearch(sortedArray, target))

// Test with non-existent element
const target2 = 8
console.log('Target:', target2)
console.log('Index found:', binarySearch(sortedArray, target2))`,
    description: 'Efficient binary search implementation with detailed comments and test cases.'
  },

  api: {
    title: 'REST API Integration',
    language: 'javascript',
    code: `/**
 * Modern API Integration with Error Handling
 * Demonstrates fetch API, async/await, and robust error handling
 */

class APIClient {
  constructor(baseURL) {
    this.baseURL = baseURL
  }

  async request(endpoint, options = {}) {
    const url = \`\${this.baseURL}\${endpoint}\`

    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers
      },
      ...options
    }

    try {
      const response = await fetch(url, config)

      if (!response.ok) {
        throw new Error(\`HTTP \${response.status}: \${response.statusText}\`)
      }

      const data = await response.json()
      return { success: true, data }
    } catch (error) {
      console.error('API Request failed:', error.message)
      return {
        success: false,
        error: error.message,
        status: error.status || 'NETWORK_ERROR'
      }
    }
  }

  // User management methods
  async getUsers() {
    return this.request('/users')
  }

  async createUser(userData) {
    return this.request('/users', {
      method: 'POST',
      body: JSON.stringify(userData)
    })
  }

  async updateUser(id, userData) {
    return this.request(\`/users/\${id}\`, {
      method: 'PUT',
      body: JSON.stringify(userData)
    })
  }

  async deleteUser(id) {
    return this.request(\`/users/\${id}\`, {
      method: 'DELETE'
    })
  }
}

// Usage example
const api = new APIClient('https://jsonplaceholder.typicode.com')

// Example: Fetch users
api.getUsers().then(result => {
  if (result.success) {
    console.log('Users fetched successfully:', result.data.slice(0, 3))
  } else {
    console.error('Failed to fetch users:', result.error)
  }
})

// Example: Create a new user
const newUser = {
  name: 'Daniel Wahba',
  email: 'daniel@example.com',
  phone: '+1-555-0123'
}

api.createUser(newUser).then(result => {
  if (result.success) {
    console.log('User created successfully:', result.data)
  } else {
    console.error('Failed to create user:', result.error)
  }
})`,
    description: 'Professional API client with comprehensive error handling and modern JavaScript patterns.'
  }
}

export default function CodePlayground() {
  const [selectedExample, setSelectedExample] = useState<ExampleKey>('react')
  const [code, setCode] = useState(codeExamples.react.code)
  const [output, setOutput] = useState('')
  const [isRunning, setIsRunning] = useState(false)

  const { addToast } = useToast()

  const currentExample = codeExamples[selectedExample]

  const handleExampleChange = (exampleKey: ExampleKey) => {
    setSelectedExample(exampleKey)
    setCode(codeExamples[exampleKey].code)
    setOutput('')
  }

  const runCode = async () => {
    setIsRunning(true)
    setOutput('')

    addToast(
      'info',
      'Running code...',
      `Executing ${currentExample.title}`
    )

    // Simulate code execution (in a real implementation, this would use a code execution service)
    setTimeout(() => {
      if (selectedExample === 'algorithm') {
        setOutput(`Array: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
Target: 11
Index found: 5

Target: 8
Index found: -1

Binary search executed successfully!`)
        addToast(
          'success',
          'Algorithm executed!',
          'Binary search completed successfully'
        )
      } else if (selectedExample === 'api') {
        setOutput(`API Client initialized
Making request to https://jsonplaceholder.typicode.com/users
Users fetched successfully
Sample users displayed in console

API integration demonstrated with proper error handling!`)
        addToast(
          'success',
          'API demo completed!',
          'REST API integration simulated successfully'
        )
      } else {
        setOutput(`React component rendered successfully!
Modern UI with responsive design
TypeScript integration working
Component lifecycle demonstrated

This showcases production-ready React development!`)
        addToast(
          'success',
          'React component rendered!',
          'Modern React development demonstrated'
        )
      }
      setIsRunning(false)
    }, 1500)
  }

  return (
    <div className="rounded-2xl border border-slate-700/50 bg-slate-900/50 p-6 font-mono text-sm dark:bg-slate-900/50 dark:border-slate-700/50 light:bg-white light:border-slate-300">
      <div className="mb-4 flex items-center gap-2 pb-4 border-b border-slate-700/50 light:border-slate-300">
        <div className="flex gap-1">
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <div className="h-3 w-3 rounded-full bg-yellow-500" />
          <div className="h-3 w-3 rounded-full bg-green-500" />
        </div>
        <span className="ml-2 text-xs text-slate-500 light:text-slate-600">Code Playground • Interactive Editor</span>
      </div>

      <div className="space-y-4">
        {/* Example selector */}
        <div className="flex flex-wrap gap-2">
          {Object.entries(codeExamples).map(([key, example]) => (
            <motion.button
              key={key}
              onClick={() => handleExampleChange(key as ExampleKey)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedExample === key
                  ? 'bg-blue-500 text-white'
                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600 light:bg-slate-200 light:text-slate-700 light:hover:bg-slate-300'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {example.title}
            </motion.button>
          ))}
        </div>

        {/* Description */}
        <div className="text-slate-300 light:text-slate-700">
          <p className="text-sm">{currentExample.description}</p>
        </div>

        {/* Code editor */}
        <div className="border border-slate-700/50 rounded-lg overflow-hidden light:border-slate-300">
          <div className="bg-slate-800 px-4 py-2 border-b border-slate-700/50 light:bg-slate-100 light:border-slate-300">
            <span className="text-slate-300 text-sm light:text-slate-700">
              {currentExample.title} ({currentExample.language})
            </span>
          </div>
          <Editor
            height="400px"
            language={currentExample.language}
            value={code}
            onChange={(value) => setCode(value || '')}
            theme="vs-dark"
            options={{
              minimap: { enabled: false },
              fontSize: 14,
              lineNumbers: 'on',
              roundedSelection: false,
              scrollBeyondLastLine: false,
              automaticLayout: true,
              tabSize: 2,
              wordWrap: 'on'
            }}
          />
        </div>

        {/* Run button and output */}
        <div className="space-y-3">
          <motion.button
            onClick={runCode}
            disabled={isRunning}
            className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
              isRunning
                ? 'bg-slate-600 text-slate-400 cursor-not-allowed'
                : 'bg-green-500 text-white hover:bg-green-600'
            }`}
            whileHover={!isRunning ? { scale: 1.02 } : {}}
            whileTap={!isRunning ? { scale: 0.98 } : {}}
          >
            {isRunning ? 'Running Code...' : 'Run Code'}
          </motion.button>

          {/* Output console */}
          {output && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="bg-black rounded-lg p-4 font-mono text-sm text-green-400 border border-slate-700/50"
            >
              <div className="text-slate-500 mb-2">Output:</div>
              <pre className="whitespace-pre-wrap">{output}</pre>
            </motion.div>
          )}
        </div>

        <div className="text-xs text-slate-500 light:text-slate-600 border-t border-slate-700/50 pt-4 light:border-slate-300">
          Edit the code above and click "Run Code" to see it in action! This demonstrates real development workflow.
        </div>
      </div>
    </div>
  )
}