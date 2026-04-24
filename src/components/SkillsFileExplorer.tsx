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
      name: '👤 About Me',
      type: 'file',
      content: `Olá! Sou Daniel Wahba Krasilchik, Desenvolvedor Full Stack brasileiro com experiência internacional em Israel.

🎯 Especialista em desenvolvimento web moderno com foco em React, TypeScript e soluções escaláveis.

🌍 Experiência internacional: Trabalhei em startups israelenses, desenvolvendo aplicações de alta performance.

💡 Apaixonado por tecnologia, resolução de problemas complexos e criação de experiências digitais excepcionais.

🚀 Sempre buscando aprender novas tecnologias e contribuir para projetos inovadores.`
    },
    {
      id: 'skills',
      name: '🛠️ Skills',
      type: 'folder',
      children: [
        {
          id: 'frontend',
          name: 'Frontend Development',
          type: 'file',
          content: `🎨 FRONTEND EXPERTISE:

• React: Componentes avançados, hooks personalizados, otimização de performance
• TypeScript: Tipagem estática, generics, desenvolvimento type-safe
• JavaScript: ES6+, async/await, padrões modernos, manipulação DOM
• CSS/Tailwind: Design responsivo, animações, UI/UX moderna
• Next.js: SSR, SSG, otimização SEO, aplicações full-stack

💡 Experiência prática em desenvolvimento de interfaces complexas e interativas.`
        },
        {
          id: 'backend',
          name: 'Backend Development',
          type: 'file',
          content: `⚙️ BACKEND SKILLS:

• Python: Desenvolvimento backend, APIs, automação de processos
• SQL: Design de bancos de dados, otimização de queries, PostgreSQL/MySQL
• REST APIs: Desenvolvimento e integração de APIs RESTful
• Node.js: Express.js, desenvolvimento de servidores, APIs
• Database Design: Modelagem relacional, normalização, performance

🔧 Foco em soluções escaláveis e arquitetura robusta.`
        },
        {
          id: 'tools',
          name: 'Tools & Workflow',
          type: 'file',
          content: `🛠️ FERRAMENTAS E METODOLOGIAS:

• Git: Controle de versão, branching strategies, GitFlow
• Playwright: Testes E2E automatizados, testes de integração
• Agile/Scrum: Desenvolvimento iterativo, sprints, cerimônias
• Docker: Containerização, ambientes de desenvolvimento
• CI/CD: Pipelines automatizados, deploy contínuo

📈 Experiência em ambientes de desenvolvimento colaborativo e ágil.`
        },
      ],
    },
    {
      id: 'projects',
      name: '📂 Projects',
      type: 'folder',
      children: [
        {
          id: 'ai-assistant',
          name: 'AI Study Assistant',
          type: 'file',
          content: `🤖 AI STUDY ASSISTANT

• Aplicação web inteligente para auxiliar estudantes
• Tecnologias: React, TypeScript, OpenAI API, Node.js
• Funcionalidades: Geração de resumos, explicações personalizadas, quizzes adaptativos
• Impacto: Aumentou eficiência de estudo em 40% para usuários beta

🚀 Projeto pessoal demonstrando integração de IA em educação.`
        },
        {
          id: 'dashboard',
          name: 'Data Visualization Dashboard',
          type: 'file',
          content: `📊 DATA DASHBOARD INTERATIVO

• Dashboard analítico com visualizações em tempo real
• Tecnologias: React, D3.js, WebSocket, Express.js
• Funcionalidades: Gráficos dinâmicos, filtros avançados, exportação de dados
• Usuários: +500 usuários ativos mensalmente

💡 Solução completa para análise de dados empresariais.`
        },
        {
          id: 'productivity',
          name: 'Productivity Management App',
          type: 'file',
          content: `⚡ PRODUCTIVITY APP

• Aplicação full-stack para gestão de produtividade
• Tecnologias: React, Node.js, PostgreSQL, JWT
• Funcionalidades: Gerenciamento de tarefas, time tracking, relatórios, notificações
• Recursos: API REST, autenticação segura, interface responsiva

🎯 Ferramenta completa para otimização de workflows pessoais e empresariais.`
        },
      ],
    },
    {
      id: 'experience',
      name: '💼 Professional Experience',
      type: 'folder',
      children: [
        {
          id: 'docflo',
          name: 'Docflo.ai - Frontend Developer',
          type: 'file',
          content: `🏢 DOCFLO.AI - TEL AVIV, ISRAEL

• Cargo: Frontend Developer (2023-2024)
• Tecnologias: React, TypeScript, Redux, Material-UI
• Responsabilidades: Desenvolvimento de interfaces para plataforma de gestão documental
• Conquistas: Implementação de novos recursos, otimização de performance, colaboração internacional
• Impacto: Contribuição para crescimento da startup em 200% durante o período

🌍 Experiência valiosa em ambiente startup israelense, com foco em inovação e agilidade.`
        },
        {
          id: 'freelance',
          name: 'Freelance Development',
          type: 'file',
          content: `💻 DESENVOLVIMENTO FREELANCE

• Projetos diversos: E-commerce, landing pages, aplicações web
• Clientes: Startups brasileiras e internacionais
• Tecnologias: React, Next.js, WordPress, PHP, MySQL
• Serviços: Desenvolvimento completo, consultoria técnica, manutenção

🎨 Portfólio diversificado demonstrando versatilidade e adaptabilidade em diferentes contextos.`
        },
      ],
    },
  ],
}

export default function SkillsFileExplorer() {
  const [selectedFolder, setSelectedFolder] = useState<FileNode | null>(null)
  const [selectedContent, setSelectedContent] = useState<string>('Selecione uma pasta ou arquivo para ver mais detalhes...')

  const handleFolderClick = (folder: FileNode) => {
    setSelectedFolder(folder)
    if (folder.type === 'file' && folder.content) {
      setSelectedContent(folder.content)
    } else {
      setSelectedContent(`Conteúdo da pasta: ${folder.name}`)
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
          <h4 className="text-slate-300 light:text-slate-700 font-semibold">Pastas Principais:</h4>
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
            {selectedFolder ? `Arquivos em ${selectedFolder.name}:` : 'Selecione uma pasta'}
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
          <h4 className="text-slate-300 light:text-slate-700 font-semibold">Conteúdo:</h4>
          <div className="rounded-lg border border-slate-700/50 bg-slate-800/50 p-4 min-h-[300px] text-slate-200 light:bg-slate-100 light:border-slate-300 light:text-slate-800">
            <pre className="whitespace-pre-wrap font-mono text-sm leading-relaxed">{selectedContent}</pre>
          </div>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-slate-700/50 light:border-slate-300">
        <p className="text-xs text-slate-500 light:text-slate-600">
          💡 Clique nas pastas para explorar arquivos, depois clique nos arquivos para ver detalhes completos!
        </p>
      </div>
    </div>
  )
}
