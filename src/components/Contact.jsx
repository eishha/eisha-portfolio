import React from 'react'
import { motion } from 'framer-motion'
import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
} from 'react-icons/fa'

const Contact = () => {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="min-h-[80vh] flex flex-col justify-center px-[5%] py-20 text-center"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="section-title justify-center">Get In Touch</h2>

        <motion.p
          className="text-slate text-lg mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          I'm currently looking for new opportunities as a frontend developer.
          Whether you have a question or just want to say hi, I'll try my best
          to get back to you!
        </motion.p>

        <motion.div
          className="flex justify-center gap-8 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <a
            href="https://github.com/eishha"
            className="text-lightest-slate hover:text-lightBlue transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/eisha-maqbool-45215a368/"
            className="text-lightest-slate hover:text-lightBlue transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={28} />
          </a>

          <a
            href="https://www.instagram.com/_program.error_"
            className="text-lightest-slate hover:text-lightBlue transition-colors"
            aria-label="Instagram"
          >
            <FaInstagram size={28} />
          </a>
          <a
            href="mailto:eishadev@icloud.com"
            className="text-lightest-slate hover:text-lightBlue transition-colors"
            aria-label="Email"
          >
            <FaEnvelope size={28} />
          </a>
        </motion.div>

        <motion.a
          href="mailto:eishadev@icloud.com"
          className="btn inline-block"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
        >
          Say Hello
        </motion.a>
      </div>
    </motion.section>
  )
}

export default Contact
