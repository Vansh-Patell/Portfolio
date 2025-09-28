'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const projects = [
  {
    title: 'Match-Pro',
    description: 'AI-Powered Resume Analysis Platform built with React.js, Node.js, and Firebase authentication. Integrated OpenAI GPT-3.5 API for ATS compatibility scores and personalized suggestions, with secure AWS S3 file upload and automated CI/CD pipeline.',
    image: '/1.png',
    technologies: [],
    github: 'https://github.com/Vansh-Patell/match-pro',
    live: null,
    featured: true
  },
  {
    title: 'ExoSky',
    description: '3D Exoplanet Explorer built with Three.js, integrating NASA exoplanet records via APIs. Features Node.js backend with Express and MongoDB, optimized for high traffic with Azure deployment and CI/CD pipeline.',
    image: '/2.png',
    technologies: [],
    github: 'https://github.com/Vansh-Patell/NASA_exosky',
    live: null,
    featured: true
  },
  {
    title: 'Harmonix',
    description: 'Android Music App designed as a native Android music player in Java with playlist persistence using SQLite. Features offline mode, background playback, and responsive UI with 90% unit test coverage using JUnit and Mockito.',
    image: '/3.png',
    technologies: [],
    github: 'https://github.com/Vansh-Patell/harmonix',
    live: null,
    featured: true
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
}

export default function Projects() {
  const featuredProjects = projects.filter(project => project.featured)


  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6 font-heading">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto font-sans">
            A showcase of my recent work, featuring projects that demonstrate 
            my skills in full-stack development, UI/UX design, and problem-solving.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12 mb-20"
        >
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className={`group grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Project Image */}
              <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                {/* Glow effect background */}
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-blue-500/30 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                
                {/* Image container with enhanced styling */}
                <div className="relative aspect-video bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800/50 overflow-hidden group-hover:border-gray-700/50 transition-all duration-300 shadow-2xl">
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Subtle overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60"></div>
                  
                  {/* Enhanced hover overlay */}
                  <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl flex items-center justify-center">
                    <div className="flex space-x-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <Button
                        size="sm"
                        className="bg-white text-black hover:bg-gray-100 shadow-lg border border-white/20 backdrop-blur-sm"
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                      {project.live && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-white/50 text-white hover:bg-white/10 hover:border-white backdrop-blur-sm shadow-lg"
                          onClick={() => project.live && window.open(project.live, '_blank')}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Corner accent */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg shadow-blue-500/50"></div>
              </div>

              {/* Project Details */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''} group-hover:transform group-hover:translate-x-1 transition-transform duration-300`}>
                {/* Project title with accent line */}
                <div className="relative">
                  <div className="absolute -left-4 top-3 w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-heading group-hover:text-blue-100 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  {/* Enhanced description box */}
                  <div className="relative p-6 bg-gray-900/30 backdrop-blur-sm rounded-lg border border-gray-800/50 group-hover:border-gray-700/50 group-hover:bg-gray-900/50 transition-all duration-300">
                    <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300 font-sans">
                      {project.description}
                    </p>
                    
                    {/* Corner decoration */}
                    <div className="absolute top-2 right-2 w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>

                {/* Technology badges (hidden since technologies array is empty, but keeping for future) */}
                {project.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700/50 backdrop-blur-sm"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                )}

                {/* Enhanced action buttons */}
                <div className="flex space-x-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-gray-600/50 text-gray-300 hover:bg-white/5 hover:border-gray-500 hover:text-white backdrop-blur-sm transition-all duration-300 shadow-lg"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Button>
                  {project.live && (
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                      onClick={() => project.live && window.open(project.live, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>


      </div>
    </section>
  )
}