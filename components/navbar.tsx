'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ChevronDown, Menu, X } from 'lucide-react'
import Image from 'next/image'

// Keep this in sync with whatever radius your buttons use (currently rounded-lg = 8px)
const PILL_RADIUS_CLASS = 'rounded-lg'
const PILL_RADIUS_PX = 8

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60)
    handleScroll() // run once on mount in case page loads pre-scrolled
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const servicesDropdown = [
    'Airlie Beach Removalists',
    'Hamilton Island Removalists',
    'Cannonvale Removalists',
    'Proserpine Removalists',
    'Bowen Removalists',
  ]

  const tipsDropdown = [
    'Pre Move Day Checklist',
    'Move Day Checklist',
    'Pre Packing Tips',
  ]

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown)
  }

  return (
    // STICKY, not fixed: at the top of the page this is a normal block in
    // document flow (Hero sits below it, no overlap). Once the page scrolls
    // past it, it sticks to the viewport top and floats above content.
    <header
      className={`sticky w-full transition-[top,padding] duration-300 ${
        isScrolled ? 'top-4 z-50 px-4 md:px-8' : 'top-0 z-30 px-0'
      }`}
    >
      <motion.div
        animate={{
          borderRadius: isScrolled ? PILL_RADIUS_PX : 0,
          boxShadow: isScrolled
            ? '0 10px 30px rgba(0,0,0,0.12)'
            : '0 0px 0px rgba(0,0,0,0)',
          backgroundColor: isScrolled
            ? 'rgba(255,255,255,0.85)'
            : 'rgba(255,255,255,1)',
        }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        style={{
          backdropFilter: isScrolled ? 'blur(14px)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(14px)' : 'none',
        }}
        className={`w-full max-w-7xl mx-auto ${isOpen ? 'overflow-hidden' : 'overflow-visible'}`}
      >
        <div
          className={`transition-all duration-300 ${
            isScrolled ? 'px-6 sm:px-8 h-16' : 'px-4 sm:px-6 lg:px-8 h-20'
          } flex justify-between items-center`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/truck-3d.png"
              alt="Logo"
              width={120}
              height={80}
              className={isScrolled ? `mr-4` : `mr-4 py-2`}
            />
            <h1
              className={`hidden sm:block font-heading font-bold text-foreground transition-all duration-300 ${
                isScrolled ? 'text-xl' : 'text-2xl'
              }`}
            >
              Airlie Beach Removalists
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <Link
              href="/"
              className="text-foreground font-heading font-medium text-sm hover:text-primary transition-colors duration-200 relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </Link>

            <Link
              href="#"
              onClick={(e) => e.preventDefault()}
              className="text-foreground font-heading font-medium text-sm hover:text-primary transition-colors duration-200 relative group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="text-foreground font-heading font-medium text-sm hover:text-primary transition-colors duration-200 flex items-center gap-1">
                Services
                <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
              </button>
              <div className="absolute left-0 pt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-border">
                  {servicesDropdown.map((item) => (
                    <Link
                      key={item}
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="block px-4 py-3 text-sm text-foreground hover:bg-secondary hover:text-primary transition-colors duration-150 first:pt-3 last:pb-3"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="#"
              onClick={(e) => e.preventDefault()}
              className={`${PILL_RADIUS_CLASS} bg-gradient-to-r from-primary to-primary-dark text-white font-heading font-medium hover:shadow-lg transition-all duration-300 ${
                isScrolled ? 'px-3 py-1.5 text-xs' : 'px-4 py-2 text-sm'
              }`}
            >
              Online Quote
            </Link>

            {/* Tips Dropdown */}
            <div className="relative group">
              <button className="text-foreground font-heading font-medium text-sm hover:text-primary transition-colors duration-200 flex items-center gap-1">
                Tips
                <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
              </button>
              <div className="absolute left-0 pt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-border">
                  {tipsDropdown.map((item) => (
                    <Link
                      key={item}
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="block px-4 py-3 text-sm text-foreground hover:bg-secondary hover:text-primary transition-colors duration-150 first:pt-3 last:pb-3"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="#"
              onClick={(e) => e.preventDefault()}
              className="text-foreground font-heading font-medium text-sm hover:text-primary transition-colors duration-200 relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border bg-white w-full">
            <div className="px-4 py-4 space-y-3">
              <Link
                href="/"
                className="block text-foreground font-heading font-medium text-sm hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>

              <Link
                href="#"
                className="block text-foreground font-heading font-medium text-sm hover:text-primary transition-colors"
                onClick={(e) => {
                  e.preventDefault()
                  setIsOpen(false)
                }}
              >
                About
              </Link>

              {/* Mobile Services Dropdown */}
              <div>
                <button
                  onClick={() => toggleDropdown('services')}
                  className="w-full flex justify-between items-center text-foreground font-heading font-medium text-sm hover:text-primary transition-colors"
                >
                  Services
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${
                      openDropdown === 'services' ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openDropdown === 'services' && (
                  <div className="mt-2 ml-4 space-y-2 border-l-2 border-primary pl-3">
                    {servicesDropdown.map((item) => (
                      <Link
                        key={item}
                        href="#"
                        className="block text-sm text-foreground hover:text-primary transition-colors"
                        onClick={(e) => {
                          e.preventDefault()
                          setIsOpen(false)
                        }}
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Tips Dropdown */}
              <div>
                <button
                  onClick={() => toggleDropdown('tips')}
                  className="w-full flex justify-between items-center text-foreground font-heading font-medium text-sm hover:text-primary transition-colors"
                >
                  Tips
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${
                      openDropdown === 'tips' ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openDropdown === 'tips' && (
                  <div className="mt-2 ml-4 space-y-2 border-l-2 border-primary pl-3">
                    {tipsDropdown.map((item) => (
                      <Link
                        key={item}
                        href="#"
                        className="block text-sm text-foreground hover:text-primary transition-colors"
                        onClick={(e) => {
                          e.preventDefault()
                          setIsOpen(false)
                        }}
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="#"
                className={`block w-full text-center px-4 py-2 ${PILL_RADIUS_CLASS} bg-gradient-to-r from-primary to-primary-dark text-white font-heading font-medium text-sm hover:shadow-lg transition-all duration-300`}
                onClick={(e) => {
                  e.preventDefault()
                  setIsOpen(false)
                }}
              >
                Online Quote
              </Link>

              <Link
                href="#"
                className="block text-foreground font-heading font-medium text-sm hover:text-primary transition-colors"
                onClick={(e) => {
                  e.preventDefault()
                  setIsOpen(false)
                }}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </motion.div>
    </header>
  )
}