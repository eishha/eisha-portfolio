import React from 'react'
import { motion } from 'framer-motion'
import { FaReact, FaCss3Alt } from 'react-icons/fa'
import {
  SiTailwindcss,
  SiChakraui,
  SiJavascript,
  SiMaterialdesign,
} from 'react-icons/si'

const Skills = () => {
  const skills = [
    { name: 'React', icon: <FaReact className="w-8 h-8" /> },
    { name: 'JavaScript', icon: <SiJavascript className="w-8 h-8" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-8 h-8" /> },
    { name: 'CSS', icon: <FaCss3Alt className="w-8 h-8" /> },
    { name: 'Chakra UI', icon: <SiChakraui className="w-8 h-8" /> },
    { name: 'Material UI', icon: <SiMaterialdesign className="w-8 h-8" /> },
  ]

  const otherSkills = [
    'HTML5',
    'Responsive Design',
    'Git & GitHub',
    'UI/UX Principles',
    'Performance Optimization',
    'Accessibility',
    'REST APIs',
    'Problem Solving',
  ]

  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="min-h-[80vh] flex flex-col justify-center px-[5%] py-20 bg-lightNavy"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">My Skills</h2>

        <div className="flex flex-col gap-16">
          <div>
            <h3 className="text-xl font-bold mb-8 text-lightest-slate">
              Technologies I Work With
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-lightest-navy p-6 rounded-lg flex flex-col items-center transition-transform hover:-translate-y-1"
                >
                  <div className="text-lightBlue mb-3">{skill.icon}</div>
                  <h4 className="font-medium">{skill.name}</h4>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-8 text-lightest-slate">
              Other Skills
            </h3>
            <div className="flex flex-wrap">
              {otherSkills.map((skill, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="tech-tag"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Skills
