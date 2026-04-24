import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

type LoadingScreenProps = {
  show: boolean
}

const title = 'Daniel Wahba Krasilchik'

export default function LoadingScreen({ show }: LoadingScreenProps) {
  const [text, setText] = useState('')

  useEffect(() => {
    if (!show) return
    let index = 0
    const interval = window.setInterval(() => {
      setText(title.slice(0, index + 1))
      index += 1
      if (index > title.length) {
        window.clearInterval(interval)
      }
    }, 70)
    return () => window.clearInterval(interval)
  }, [show])

  return <Animate show={show} text={text} />
}

function Animate({ show, text }: { show: boolean; text: string }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: show ? 1 : 0 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className={`pointer-events-none fixed inset-0 z-50 flex items-center justify-center bg-slate-950`}
    >
      <div className="flex flex-col items-center gap-4 rounded-3xl border border-slate-700/70 bg-slate-950/95 px-8 py-10 text-center shadow-2xl shadow-slate-950/30 backdrop-blur-xl sm:px-10">
        <span className="text-sm uppercase tracking-[0.35em] text-slate-500">
          Portfolio launch
        </span>
        <h1 className="text-4xl font-semibold text-white sm:text-5xl">
          {text}
          <span className="animate-pulse">|</span>
        </h1>
        <p className="max-w-xl text-sm leading-6 text-slate-400 sm:text-base">
          Building premium developer experiences with modern design, clear structure and fast interactions.
        </p>
      </div>
    </motion.div>
  )
}
