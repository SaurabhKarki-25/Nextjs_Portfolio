'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi'

const Navbar: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrollTop / docHeight) * 100
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black shadow-[0_4px_12px_rgba(0,0,0,0.6)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo / Brand */}
          <Link href="/" className="text-xl font-bold text-white">
            Hari Joshi
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-4">
            <Link href="/" className="text-blue hover:text-blue-600 text-xl text-white">
              Home
            </Link>
            <Link href="/" className="text-green-700 hover:text-blue-600 text-xl text-white">
              Create Your Resume
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <HiOutlineX size={28} /> : <HiOutlineMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black px-4 py-2 space-y-2">
          <Link href="/" className="block text-white text-lg hover:text-blue-500">
            Home
          </Link>
          <Link href="/" className="block text-white text-lg hover:text-blue-500">
            Create Your Resume
          </Link>
        </div>
      )}

      {/* Scroll Progress Bar */}
      <div className="h-[4px] bg-gray-700 w-full">
        <div
          className="h-full bg-[#00FFC8] transition-all duration-200 ease-linear"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </nav>
  )
}

export default Navbar