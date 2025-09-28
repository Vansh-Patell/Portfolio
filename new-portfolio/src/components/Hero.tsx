'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { CodeTypewriter } from './Typewriter'

export default function Hero() {
  const [showDescription, setShowDescription] = useState(false)

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about')
    aboutSection?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleTypewriterComplete = () => {
    setTimeout(() => setShowDescription(true), 300)
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 via-black to-gray-900/20" />
      
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/10 via-transparent to-gray-900/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900/20 via-transparent to-transparent" />
      </div>
      
      {/* CSS Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white/20 rounded-full animate-float" />
        <div className="absolute top-1/3 left-3/4 w-1 h-1 bg-white/10 rounded-full animate-twinkle" />
        <div className="absolute top-2/3 left-1/2 w-1 h-1 bg-white/15 rounded-full animate-float" />
        <div className="absolute top-1/2 left-1/5 w-1 h-1 bg-white/25 rounded-full animate-twinkle" />
        <div className="absolute top-3/4 left-4/5 w-1 h-1 bg-white/10 rounded-full animate-float" />
        <div className="absolute top-1/5 left-3/5 w-1 h-1 bg-white/20 rounded-full animate-twinkle" />
        <div className="absolute top-4/5 left-1/3 w-1 h-1 bg-white/15 rounded-full animate-float" />
        <div className="absolute top-1/6 left-2/3 w-1 h-1 bg-white/10 rounded-full animate-twinkle" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col justify-center min-h-[calc(100vh-10rem)]">
        <div className="text-center">
          {/* Main Title with Code Typewriter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight tracking-tight font-heading">
              Vansh Patel
            </h1>
            <div className="mt-8 mb-8 text-2xl md:text-4xl lg:text-5xl">
              <CodeTypewriter delay={500} onComplete={handleTypewriterComplete} />
            </div>
          </motion.div>

          {/* Description */}
          {showDescription && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-4xl mx-auto mb-12 mt-8"
            >
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed font-sans mb-6">
                I try to create good digital experiences for users with modern technologies. 
                Passionate about building scalable applications that make a difference.
              </p>
            </motion.div>
          )}

          {/* CTA Buttons */}
          {showDescription && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-white/10 hover:border-white transition-all duration-300"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
            </motion.div>
          )}

          {/* Social Links */}
          {showDescription && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex justify-center space-x-6 mb-16"
          >
            <motion.a
              href="https://github.com/Vansh-Patell"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/vansh-patel"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              href="mailto:vanshp.work@gmail.com"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <Mail size={24} />
            </motion.a>
            </motion.div>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      {showDescription && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-white transition-colors duration-300"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={24} />
        </motion.div>
        </motion.button>
      )}
    </section>
  )
}