import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="min-h-[80vh] flex flex-col justify-center px-[5%] py-20"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">About Me</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <p className="mb-6 text-slate">
                Hello! My name is Eisha and I'm a final year software
                engineering student based in Pakistan. I specialize in creating
                beautiful, functional, and responsive web interfaces.
              </p>

              <p className="mb-6 text-slate">
                I'm passionate about building applications that provide
                intuitive user experiences with clean, efficient code. My
                journey in web development started with a fascination for how
                digital interfaces shape our interactions with technology.
              </p>

              <p className="mb-6 text-slate">
                As a frontend developer, I have expertise in React, Tailwind
                CSS, and UI libraries like Chakra UI and Material UI. I'm
                constantly learning and exploring new technologies to enhance my
                skills.
              </p>
            </motion.div>
          </div>

          <motion.div
            className="flex justify-center items-start"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className="relative w-full max-w-xs">
              <div className="relative rounded-lg overflow-hidden shadow-xl transition-transform hover:-translate-y-2 float">
                <div className="bg-gradient-to-br from-lightBlue to-[#64ffdb] aspect-square flex items-center justify-center text-navy font-bold text-xl">
                  Eisha Maqbool
                </div>
              </div>
              <div className="absolute inset-0 border-2 border-lightBlue rounded-lg translate-x-6 translate-y-6 -z-10"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default About
