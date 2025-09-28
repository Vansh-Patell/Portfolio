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
    "\t\tthis.location = 'Winnipeg, Canada';",
    "\t\tthis.education = 'B.Sc. Computer Science';",
    "\t\tthis.university = 'University of Manitoba';",
    "\t}",
    "",
    "\tgetSkills() {",
    "\t\treturn [",
    "\t\t\t'Java', 'Python', 'JavaScript', 'TypeScript',",
    "\t\t\t'React', 'Node.js', 'Spring Boot', 'Azure',",
    "\t\t\t'AWS', 'Docker', 'MongoDB', 'SQL'",
    "\t\t];",
    "\t}",
    "",
    "\tgetCurrentFocus() {",
    "\t\treturn 'Full-stack development & Cloud computing';",
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
            <div className="bg-gray-900 rounded-b-lg p-6 font-mono text-sm overflow-hidden" style={{ minHeight: '400px', tabSize: 4, whiteSpace: 'pre' }}>
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
                    {line.includes('getSkills') && (
                      <>
                        <span className="text-blue-400">{'\t'}getSkills</span>
                        <span className="text-gray-300">() {'{'}</span>
                      </>
                    )}
                    {line.includes('getCurrentFocus') && (
                      <>
                        <span className="text-blue-400">{'\t'}getCurrentFocus</span>
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
                    {line.includes("'JavaScript'") && (
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
                  I'm a Computer Science student at the University of Manitoba with a 3.5 GPA 
                  and multiple Dean's Honour List achievements. I specialize in full-stack 
                  development, cloud computing, and building scalable applications.
                </p>
                
                <p className="text-lg">
                  My experience includes developing AI-powered applications, 3D visualizations 
                  with NASA data, and mobile apps. I've worked with technologies ranging from 
                  Java and Python to React and cloud platforms like Azure and AWS.
                </p>

                <p className="text-lg">
                  Currently focused on cybersecurity, distributed systems, and creating 
                  innovative solutions that make a real impact in the tech industry.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}