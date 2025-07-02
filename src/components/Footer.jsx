import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-10 text-center border-t border-slate border-opacity-20"
    >
      <p className="text-slate">Designed & Built by Eisha Maqbool</p>
      <p className="text-slate mt-2">
        © {new Date().getFullYear()} All Rights Reserved
      </p>
    </motion.footer>
  )
}

export default Footer
