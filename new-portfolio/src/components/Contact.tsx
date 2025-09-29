'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Send, Github, Linkedin } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Send email using Resend API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message')
      }

      // Reset form on success
      setFormData({ name: '', email: '', subject: '', message: '' })
      alert('Thank you for your message! I\'ll get back to you soon. 📧')
      
    } catch (error) {
      console.error('Error sending message:', error)
      alert('Sorry, there was an error sending your message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: 'vanshp.work@gmail.com',
      href: 'mailto:vanshp.work@gmail.com'
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: 'Location',
      value: 'Canada',
      href: null
    }
  ]

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      label: 'GitHub',
      href: 'https://github.com/Vansh-Patell'
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/vansh-patel-789b22234/'
    }
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
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
            Get In Touch
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            I&apos;m always open to discussing new opportunities, creative projects, 
            or just having a chat about technology.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 font-heading">
                Let&apos;s Connect
              </h3>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <motion.div
                  key={info.label}
                  whileHover={{ x: 8, scale: 1.02 }}
                  className="group flex items-center space-x-4 p-4 rounded-lg bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 hover:border-gray-700/50 hover:bg-gray-900/50 transition-all duration-300"
                >
                  <div className="relative flex-shrink-0">
                    {/* Glow effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="relative w-12 h-12 bg-gray-800/50 backdrop-blur-sm rounded-lg flex items-center justify-center border border-gray-700/50 group-hover:border-blue-500/50 transition-all duration-300">
                      <div className="text-gray-300 group-hover:text-blue-400 transition-colors duration-300">
                        {info.icon}
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-white hover:text-gray-300 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-white">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-6 border-t border-gray-800/50">
              <p className="text-gray-400 mb-6 font-sans">Socials</p>
              <div className="flex space-x-6">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -4 }}
                    whileTap={{ scale: 0.9 }}
                    className="group relative"
                  >
                    {/* Glow effect */}
                    <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                    
                    <div className="relative w-14 h-14 bg-gray-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center border border-gray-700/50 group-hover:border-blue-500/50 text-gray-300 group-hover:text-blue-400 group-hover:bg-gray-800/70 transition-all duration-300 shadow-lg">
                      {social.icon}
                    </div>
                    
                    {/* Tooltip */}
                    <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      {social.label}
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="group"
          >
            {/* Animated border gradient */}
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-600/30 via-gray-500/30 to-gray-600/30 rounded-xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
              
              <Card className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 group-hover:border-gray-600/50 transition-all duration-300 rounded-xl overflow-hidden">
                {/* Subtle inner glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-500/5 via-transparent to-gray-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <CardContent className="relative p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="group/input">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-3 group-focus-within/input:text-gray-200 transition-colors duration-200">
                        Name *
                      </label>
                      <div className="relative">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-600/20 to-gray-500/20 rounded-lg blur opacity-0 group-focus-within/input:opacity-40 transition-opacity duration-300"></div>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="relative w-full px-4 py-3 bg-gray-800 backdrop-blur-sm border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500/50 focus:border-gray-500/70 hover:border-gray-600 transition-all duration-300 group-focus-within/input:shadow-lg group-focus-within/input:shadow-gray-500/20"
                          placeholder="Your name"
                        />
                      </div>
                    </div>
                    <div className="group/input">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-3 group-focus-within/input:text-gray-200 transition-colors duration-200">
                        Email *
                      </label>
                      <div className="relative">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-600/20 to-gray-500/20 rounded-lg blur opacity-0 group-focus-within/input:opacity-40 transition-opacity duration-300"></div>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="relative w-full px-4 py-3 bg-gray-800 backdrop-blur-sm border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500/50 focus:border-gray-500/70 hover:border-gray-600 transition-all duration-300 group-focus-within/input:shadow-lg group-focus-within/input:shadow-gray-500/20"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="group/input">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-3 group-focus-within/input:text-gray-200 transition-colors duration-200">
                      Subject *
                    </label>
                    <div className="relative">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-600/20 to-gray-500/20 rounded-lg blur opacity-0 group-focus-within/input:opacity-40 transition-opacity duration-300"></div>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="relative w-full px-4 py-3 bg-gray-800 backdrop-blur-sm border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500/50 focus:border-gray-500/70 hover:border-gray-600 transition-all duration-300 group-focus-within/input:shadow-lg group-focus-within/input:shadow-gray-500/20"
                        placeholder="What's this about?"
                      />
                    </div>
                  </div>

                  <div className="group/input">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-3 group-focus-within/input:text-gray-200 transition-colors duration-200">
                      Message *
                    </label>
                    <div className="relative">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-600/20 to-gray-500/20 rounded-lg blur opacity-0 group-focus-within/input:opacity-40 transition-opacity duration-300"></div>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="relative w-full px-4 py-3 bg-gray-800 backdrop-blur-sm border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500/50 focus:border-gray-500/70 hover:border-gray-600 transition-all duration-300 resize-none group-focus-within/input:shadow-lg group-focus-within/input:shadow-gray-500/20"
                        placeholder="Tell me more about your inquiry!"
                      />
                    </div>
                  </div>

                  <div className="group/button relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-500/30 via-gray-400/30 to-gray-500/30 rounded-lg blur opacity-0 group-hover/button:opacity-50 transition-opacity duration-300"></div>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="relative w-full bg-white text-black hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-gray-400/20 border border-gray-300/20 hover:border-gray-400/30"
                    >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-black mr-2" />
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center">
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </div>
                    )}
                    </Button>
                  </div>
                </form>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}