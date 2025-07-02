import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 py-6 px-[5%] transition-all duration-300 ${
        scrolled
          ? 'py-4 shadow-lg bg-[rgba(10,25,47,0.85)] backdrop-blur'
          : 'py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a
          href="#"
          className="text-2xl font-bold text-lightBlue transition-transform hover:scale-105"
        >
          <img src="src/assets/Ellipse 1.png" alt="" />
        </a>

        <nav className="hidden md:block">
          <ul className="flex space-x-10">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-lightest-slate hover:text-lightBlue transition-colors"
                >
                  <span className="text-lightBlue">{`0${index + 1}.`}</span>{' '}
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <button className="w-18 h-8 pb-1 bg-[#4876CE] rounded-lg">
          <a href="public/Resume.pdf" target="blank">
            Resume
          </a>
        </button>
        <button className="md:hidden text-lightest-slate">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </motion.header>
  )
}

export default Header
