'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface TypewriterProps {
  text: string
  delay?: number
  speed?: number
  showCursor?: boolean
  onComplete?: () => void
}

export const Typewriter = ({
  text,
  delay = 0,
  speed = 50,
  showCursor = true,
  onComplete
}: TypewriterProps) => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, currentIndex === 0 ? delay + speed : speed) // Only apply delay to first character
      return () => clearTimeout(timeout)
    } else if (!isComplete) {
      setIsComplete(true)
      onComplete?.()
    }
  }, [currentIndex, text, delay, speed, isComplete, onComplete])

  return (
    <span className="relative">
      {displayText}
      {showCursor && (
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="inline-block ml-1 w-0.5 h-6 bg-gray-400"
        />
      )}
    </span>
  )
}

interface CodeTypewriterProps {
  delay?: number
  onComplete?: () => void
}

export const CodeTypewriter = ({ delay = 0, onComplete }: CodeTypewriterProps) => {
  const [stage, setStage] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  const stages = [
    'print',
    '(',
    '"',
    'Software Developer',
    '"',
    ')'
  ]

  const handleStageComplete = () => {
    if (stage < stages.length - 1) {
      setTimeout(() => setStage(prev => prev + 1), 100)
    } else if (!isComplete) {
      setIsComplete(true)
      onComplete?.()
    }
  }

  return (
    <span className="font-mono text-gray-400 tracking-wider">
      {stage >= 0 && (
        <span className="text-blue-400">
          <Typewriter
            text={stages[0]}
            delay={delay}
            speed={60}
            showCursor={stage === 0}
            onComplete={stage === 0 ? handleStageComplete : undefined}
          />
        </span>
      )}
      {stage >= 1 && (
        <span className="text-cyan-300">
          <Typewriter
            text={stages[1]}
            delay={0}
            speed={60}
            showCursor={stage === 1}
            onComplete={stage === 1 ? handleStageComplete : undefined}
          />
        </span>
      )}
      {stage >= 2 && (
        <span className="text-slate-300">
          <Typewriter
            text={stages[2]}
            delay={0}
            speed={60}
            showCursor={stage === 2}
            onComplete={stage === 2 ? handleStageComplete : undefined}
          />
        </span>
      )}
      {stage >= 3 && (
        <span className="text-gray-400">
          <Typewriter
            text={stages[3]}
            delay={0}
            speed={60}
            showCursor={stage === 3}
            onComplete={stage === 3 ? handleStageComplete : undefined}
          />
        </span>
      )}
      {stage >= 4 && (
        <span className="text-slate-300">
          <Typewriter
            text={stages[4]}
            delay={0}
            speed={60}
            showCursor={stage === 4}
            onComplete={stage === 4 ? handleStageComplete : undefined}
          />
        </span>
      )}
      {stage >= 5 && (
        <span className="text-cyan-300">
          <Typewriter
            text={stages[5]}
            delay={0}
            speed={60}
            showCursor={true}
            onComplete={stage === 5 ? handleStageComplete : undefined}
          />
        </span>
      )}
    </span>
  )
}