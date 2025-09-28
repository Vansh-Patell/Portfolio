'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function About() {
  const [currentLine, setCurrentLine] = useState(0)
  const [isTyping, setIsTyping] = useState(true)

  const codeLines = [
    "class VanshPatel {",
    "\tconstructor() {",
    "\t\tthis.name = 'Vansh Patel';",
    "\t\tthis.role = 'Software Developer';",
    "\t\tthis.location = 'Canada';",
    "\t\tthis.university = 'University of Manitoba';",
    "\t}",
    "",
    "\tgetLearningMindset() {",
    "\t\treturn [",
    "\t\t\t'Always eager to learn and ",
    "\t\t\t'adapt to new challenges'",
    "\t\t];",
    "\t}",
    "}"
  ]

  useEffect(() => {
    if (currentLine < codeLines.length) {
      const timer = setTimeout(() => {
        setCurrentLine(prev => prev + 1)
      }, 150)
      return () => clearTimeout(timer)
    } else {
      setIsTyping(false)
    }
  }, [currentLine, codeLines.length])

  return (
    <section id="about" className="py-20 bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Code Editor */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Terminal Header */}
            <div className="bg-gray-800 rounded-t-lg p-4 flex items-center space-x-2">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="text-gray-400 text-sm ml-4">about-vansh.js</div>
            </div>

            {/* Code Content */}
            <div className="bg-gray-900 rounded-b-lg p-6 font-mono text-sm overflow-hidden" style={{ minHeight: '500px', tabSize: 4, whiteSpace: 'pre' }}>
              {codeLines.map((line, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: index <= currentLine ? 1 : 0 }}
                  transition={{ duration: 0.1 }}
                  className="flex items-center mb-1"
                >
                  <span className="text-gray-500 w-8 text-right mr-4 select-none">
                    {line ? (index + 1).toString().padStart(2, ' ') : ''}
                  </span>
                  <span className="text-gray-300">
                    {line.includes('class') && (
                      <>
                        <span className="text-purple-400">class</span>
                        <span className="text-yellow-300"> VanshPatel </span>
                        <span className="text-gray-300">{'{'}</span>
                      </>
                    )}
                    {line.includes('constructor') && (
                      <>
                        <span className="text-blue-400">{'\t'}constructor</span>
                        <span className="text-gray-300">() {'{'}</span>
                      </>
                    )}
                    {line.includes('this.') && (
                      <>
                        <span className="text-blue-300">{'\t\t'}this</span>
                        <span className="text-gray-300">.</span>
                        <span className="text-red-300">{line.split('.')[1]?.split(' ')[0]}</span>
                        <span className="text-gray-300"> = </span>
                        <span className="text-green-300">'{line.split("'")[1]}'</span>
                        <span className="text-gray-300">;</span>
                      </>
                    )}
                    {(line.includes('getLanguages') || line.includes('getFrameworks') || line.includes('getCloudTools') || line.includes('getExperience') || line.includes('getLearningMindset')) && (
                      <>
                        <span className="text-blue-400">{'\t'}{line.trim().split('(')[0]}</span>
                        <span className="text-gray-300">() {'{'}</span>
                      </>
                    )}
                    {line.includes('return [') && (
                      <>
                        <span className="text-purple-400">{'\t\t'}return</span>
                        <span className="text-gray-300"> [</span>
                      </>
                    )}
                    {line.includes('return \'') && (
                      <>
                        <span className="text-purple-400">{'\t\t'}return</span>
                        <span className="text-green-300"> '{line.split("'")[1]}'</span>
                        <span className="text-gray-300">;</span>
                      </>
                    )}
                    {line.includes("'") && !line.includes('this.') && !line.includes('return \'') && (
                      <span className="text-green-300">{'\t\t\t'}{line.trim()}</span>
                    )}
                    {line === '\t\t];' && (
                      <span className="text-gray-300">{'\t\t'}];</span>
                    )}
                    {line === '\t}' && (
                      <span className="text-gray-300">{'\t}'}</span>
                    )}
                    {line === '}' && (
                      <span className="text-gray-300">{'}'}</span>
                    )}
                    {line === '' && <span>&nbsp;</span>}
                  </span>
                  {index === currentLine && isTyping && (
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                      className="text-white ml-1"
                    >
                      |
                    </motion.span>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Introduction & Photo */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Profile Photo */}
            <div className="relative w-48 h-48 mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-lg opacity-20"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-gray-700">
                <Image
                  src="/IMG_5138.jpeg"
                  alt="Vansh Patel"
                  width={192}
                  height={192}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Introduction Text */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white font-heading">
                About Me
              </h2>
              
              <div className="space-y-4 text-gray-300 leading-relaxed font-sans">
                <p className="text-lg">
                  I'm a Computer Science graduate from the University of Manitoba who loves 
                  solving tricky problems with code. Give me a challenge that needs both 
                  technical skills and creative thinking, and I'm all in.
                </p>
                
                <p className="text-lg">
                  My approach is simple: understand what needs to be built, then build it 
                  right. I enjoy working across the entire spectrum - from making websites 
                  look great to setting up the systems that power them, and even building 
                  simple automation tools that handle boring repetitive tasks.
                </p>

                <p className="text-lg">
                  When I'm not staring at code, I'm either working out, enjoying nature, reading philosophical texts, or spending time with friends.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}