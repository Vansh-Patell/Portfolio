'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function TechStack() {
  const technologies = [
    {
      name: 'Java',
      category: 'Language',
      iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/openjdk.svg'
    },
    {
      name: 'Python',
      category: 'Language',
      iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/python.svg'
    },
    {
      name: 'JavaScript',
      category: 'Language',
      iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/javascript.svg'
    },
    {
      name: 'TypeScript',
      category: 'Language',
      iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/typescript.svg'
    },
    {
      name: 'React',
      category: 'Frontend',
      iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/react.svg'
    },
    {
      name: 'Next.js',
      category: 'Frontend',
      iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/nextdotjs.svg'
    },
    {
      name: 'Node.js',
      category: 'Backend',
      iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/nodedotjs.svg'
    },
    {
      name: 'Spring Boot',
      category: 'Framework',
      iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/springboot.svg'
    },
    {
      name: 'Azure',
      category: 'Cloud',
      iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/microsoftazure.svg'
    },
    {
      name: 'AWS',
      category: 'Cloud',
      iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/amazonaws.svg'
    },
    {
      name: 'Docker',
      category: 'DevOps',
      iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/docker.svg'
    },
    {
      name: 'MongoDB',
      category: 'Database',
      iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/mongodb.svg'
    },
    {
      name: 'SQL',
      category: 'Database',
      iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/mysql.svg'
    },
    {
      name: 'C/C++',
      category: 'Language',
      iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/cplusplus.svg'
    },
    {
      name: 'Flask',
      category: 'Framework',
      iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/flask.svg'
    },
    {
      name: 'Django',
      category: 'Framework',
      iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/django.svg'
    },
    {
      name: 'Kubernetes',
      category: 'DevOps',
      iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/kubernetes.svg'
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            My Toolkit.
          </h2>
        </motion.div>

        {/* Technologies Grid */}
        <div className="relative border border-white/20 rounded-lg overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative border-r border-b border-white/20 last:border-r-0 [&:nth-child(4n)]:lg:border-r-0 [&:nth-child(3n)]:md:border-r-0 [&:nth-child(2n)]:border-r-0 [&:nth-last-child(-n+4)]:lg:border-b-0 [&:nth-last-child(-n+3)]:md:border-b-0 [&:nth-last-child(-n+2)]:border-b-0"
            >
              <div className="relative p-6 bg-gray-900/50 hover:bg-gray-900/70 transition-all duration-300 min-h-[140px] flex flex-col items-center justify-center">
                {/* Logo/Icon */}
                <div className="mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Image 
                    src={tech.iconUrl} 
                    alt={`${tech.name} logo`}
                    width={32}
                    height={32}
                    className="filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
                    style={{ filter: 'brightness(0) invert(1)' }}
                  />
                </div>
                
                {/* Tech Name */}
                <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-blue-400 transition-colors duration-300 text-center">
                  {tech.name}
                </h3>
                
                {/* Category */}
                <p className="text-xs text-gray-500 uppercase tracking-wide text-center">
                  {tech.category}
                </p>

                {/* Hover Effect Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
          </motion.div>
                  
                  {/* Gradient overlay for fading borders */}
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-black/80 to-transparent"></div>
                    <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-black/80 to-transparent"></div>
                    <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-black/80 to-transparent"></div>
                    <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-black/80 to-transparent"></div>
                  </div>
                </div>

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