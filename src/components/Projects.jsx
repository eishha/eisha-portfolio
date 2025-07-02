import React from 'react'
import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'

const Projects = () => {
  const projects = [
    {
      title: 'Contacts App',
      description:
        'A basic CRUD application for saving email contacts, using Firebase as database logic, provides an alternative and very simpler version to Google Contacts.',
      tags: ['TailwindCss', 'React', 'Firebase'],
      links: {
        github: 'https://github.com/eishha/Firebase-Contacts-Application',
        live: 'https://firebase-contacts-application.vercel.app/',
      },
    },
    {
      title: 'Chat Application',
      description:
        'A basic real-time chat application using socket.io and firebase for user authentication, built smoothly with react. Focused on principles of basic IM(instant messaging) apps working',
      tags: ['React', 'Redux', 'Tailwind CSS', 'Firebase'],
      links: {
        github: 'https://github.com/eishha/Chat-Application',
        live: 'https://chat-application-theta-six.vercel.app/',
      },
    },
    {
      title: 'Productivity Dashboard',
      description:
        'A Kanban-style task management application with drag-and-drop functionality, task categorization, and progress tracking.(In progress)',
      tags: ['React', 'Chakra UI', 'Dnd Kit', 'LocalStorage'],
      links: {},
    },
  ]

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="min-h-[80vh] flex flex-col justify-center px-[5%] py-20"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">My Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Projects
