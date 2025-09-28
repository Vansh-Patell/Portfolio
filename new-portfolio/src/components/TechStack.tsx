'use client'

import { motion } from 'framer-motion'

export default function TechStack() {
  const technologies = [
    {
      name: 'Java',
      category: 'Language',
      logo: '☕'
    },
    {
      name: 'Python',
      category: 'Language',
      logo: '🐍'
    },
    {
      name: 'JavaScript',
      category: 'Language',
      logo: '🔥'
    },
    {
      name: 'TypeScript',
      category: 'Language',
      logo: '⚡'
    },
    {
      name: 'React',
      category: 'Frontend',
      logo: '⚛️'
    },
    {
      name: 'Node.js',
      category: 'Backend',
      logo: '�'
    },
    {
      name: 'Spring Boot',
      category: 'Framework',
      logo: '🍃'
    },
    {
      name: 'Azure',
      category: 'Cloud',
      logo: '☁️'
    },
    {
      name: 'AWS',
      category: 'Cloud',
      logo: '🔶'
    },
    {
      name: 'Docker',
      category: 'DevOps',
      logo: '🐳'
    },
    {
      name: 'MongoDB',
      category: 'Database',
      logo: '🍃'
    },
    {
      name: 'SQL',
      category: 'Database',
      logo: '🗄️'
    }
  ]

  return (
    <section id="tech-stack" className="py-20 bg-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Powered by the best.
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            I work with cutting-edge technologies and tools that enable me to build 
            scalable, performant, and modern applications.
          </p>
        </motion.div>

        {/* Technologies Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Tech Card */}
              <div className="relative p-8 bg-gray-900/30 rounded-lg border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:bg-gray-900/50">
                {/* Logo/Icon */}
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {tech.logo}
                </div>
                
                {/* Tech Name */}
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  {tech.name}
                </h3>
                
                {/* Category */}
                <p className="text-sm text-gray-500 uppercase tracking-wide">
                  {tech.category}
                </p>

                {/* Hover Effect Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gray-900/50 rounded-full border border-gray-800">
            <span className="text-gray-400 mr-2">Always learning</span>
            <motion.span
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-blue-400"
            >
              ✨
            </motion.span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}