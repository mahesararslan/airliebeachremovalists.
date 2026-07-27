'use client'

import { Phone } from 'lucide-react'
import Link from 'next/link'

const footerSections = [
  {
    title: 'COMPANY',
    links: [
      { label: 'Home', href: '#' },
      { label: 'About', href: '#' },
      { label: 'Services', href: '#' },
      { label: 'Online Quote', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  },
  {
    title: 'SERVICES',
    links: [
      { label: 'Airlie Beach Removalists', href: '#' },
      { label: 'Hamilton Island Removalists', href: '#' },
      { label: 'Cannonvale Removalists', href: '#' },
      { label: 'Proserpine Removalists', href: '#' },
      { label: 'Bowen Removalists', href: '#' },
    ],
  },
  {
    title: 'RESOURCES',
    links: [
      { label: 'Pre Move Day Checklist', href: '#' },
      { label: 'Move Day Checklist', href: '#' },
      { label: 'Pre Packing Tips', href: '#' },
    ],
  },
]

const socialLinks = [
  // { icon: Facebook, href: '#' },
  // { icon: Instagram, href: '#' },
  // { icon: Linkedin, href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#111113] to-[#0a0a0b] relative overflow-hidden">
      {/* Subtle decorative element */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 pb-12 border-b border-gray-800">
          {/* Brand Column */}
          <div>
            <h3 className="font-heading text-xl font-bold text-white mb-2">
              Airlie Beach Removalists
            </h3>
            <p className="text-gray-400 text-sm mb-6">
              North Queensland&apos;s Trusted Local Removalists
            </p>

            {/* Phone Contact */}
            <a
              href="tel:0432441287"
              className="flex items-center gap-3 text-white font-medium hover:text-primary transition-colors duration-200 mb-6"
            >
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                <Phone className="w-4 h-4 text-primary" strokeWidth={2} />
              </div>
              0432 441 287
            </a>

            {/* Social Icons */}
            {/* <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-200"
                  >
                    <Icon className="w-4 h-4" strokeWidth={2} />
                  </a>
                )
              })}
            </div> */}
          </div>

          {/* Links Columns */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-xs uppercase tracking-wider font-semibold text-gray-500 mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-gray-400 text-sm hover:text-primary transition-all duration-200 hover:translate-x-1 inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8">
          {/* Copyright */}
          <p className="text-gray-500 text-sm text-center md:text-left">
            © 2026 Airlie Beach Removalists. All rights reserved.
          </p>

          {/* Footer Links */}
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <Link href="#" className="hover:text-primary transition-colors duration-200">
              Terms and Conditions
            </Link>
            <span className="text-gray-700">•</span>
            <Link href="#" className="hover:text-primary transition-colors duration-200">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
