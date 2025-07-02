// src/components/ProjectCard.jsx
import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const ProjectCard = ({ title, description, tags, links }) => {
  return (
    <motion.div
      className="bg-lightNavy rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="h-48 bg-gradient-to-r from-lightBlue to-cyan-500 flex items-center justify-center text-navy font-bold text-xl">
        {title}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-lightest-slate mb-3">{title}</h3>
        <p className="text-slate mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span key={index} className="tech-tag">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lightBlue hover:text-lightest-slate transition-colors"
          >
            <FaGithub size={20} />
          </a>
          <a
            href={links.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lightBlue hover:text-lightest-slate transition-colors"
          >
            <FaExternalLinkAlt size={18} />
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard

// src/components/Projects.jsx
