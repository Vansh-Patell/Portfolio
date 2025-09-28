'use client'

import { motion } from 'framer-motion'
import { Code, Palette, Smartphone, Server } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const skills = [
  {
    category: 'Frontend',
    icon: <Code className="w-6 h-6" />,
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion']
  },
  {
    category: 'Backend',
    icon: <Server className="w-6 h-6" />,
    technologies: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'REST APIs']
  },
  {
    category: 'Mobile',
    icon: <Smartphone className="w-6 h-6" />,
    technologies: ['React Native', 'Flutter', 'iOS', 'Android', 'Expo']
  },
  {
    category: 'Design',
    icon: <Palette className="w-6 h-6" />,
    technologies: ['Figma', 'Adobe XD', 'UI/UX', 'Prototyping', 'Responsive Design']
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
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

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            About Me
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            I'm a passionate full-stack developer with a love for creating 
            exceptional digital experiences. With expertise in modern web technologies, 
            I enjoy turning complex problems into simple, elegant solutions.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Hello! I'm Vansh, a software developer based in [Your Location]. 
                I discovered my passion for programming during my [background - e.g., university years], 
                and since then, I've been dedicated to creating impactful digital solutions.
              </p>
              <p>
                My journey has led me through various technologies and frameworks, 
                always with a focus on writing clean, efficient code and creating 
                intuitive user experiences. I believe in the power of technology 
                to solve real-world problems and improve people's lives.
              </p>
              <p>
                When I'm not coding, you can find me [your hobbies/interests], 
                always seeking inspiration for my next project. I'm constantly 
                learning new technologies and staying up-to-date with industry trends.
              </p>
            </div>
          </motion.div>

          {/* Profile Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-gray-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Code className="w-12 h-12 text-gray-400" />
                </div>
                <p className="text-gray-400">Your Photo Here</p>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-white rounded-full animate-pulse" />
            <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-gray-400 rounded-full animate-pulse" />
          </motion.div>
        </div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div key={skill.category} variants={itemVariants}>
              <Card className="bg-gray-900/50 border-gray-800 hover:bg-gray-900/70 transition-all duration-300 group hover:shadow-xl hover:shadow-white/5">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="text-white group-hover:text-gray-300 transition-colors">
                      {skill.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white ml-3">
                      {skill.category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}