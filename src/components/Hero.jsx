import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <motion.section
      id="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex flex-col justify-center pt-32 px-[5%]"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-slate"
        >
          Hi, my name is
        </motion.h2>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-4xl md:text-7xl font-bold text-lightest-slate mt-4 mb-6"
        >
          Eisha Maqbool.
        </motion.h1>

        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-3xl md:text-6xl text-slate mb-8"
        >
          I build things for the web.
        </motion.h2>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="max-w-2xl text-lg md:text-xl text-slate mb-12"
        >
          I'm a software engineering student and frontend developer specializing
          in building exceptional digital experiences. Currently focused on
          creating responsive and accessible web applications.
        </motion.p>

        <motion.a
          href="#projects"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
          className="btn"
        >
          Check out my work!
        </motion.a>
      </div>
    </motion.section>
  )
}

export default Hero
