'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Phone, ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function CTABanner() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.3 })

  return (
    <section
      ref={containerRef}
      className="py-12 md:py-18 bg-gradient-to-br from-primary via-primary to-primary-dark relative overflow-hidden"
    >
      {/* Decorative Glows */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[80%] rounded-full bg-white/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-30%] right-[-10%] w-[60%] h-[90%] rounded-full bg-white/15 blur-[130px] pointer-events-none" />

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 pointer-events-none opacity-15">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cta-grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="white" strokeWidth="2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text Content - Left Side */}
          <div>
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="inline-block"
            >
              <span className="text-white/80 text-sm font-semibold tracking-widest uppercase">
                Get Started Today
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading text-4xl md:text-5xl font-bold text-white mt-4 mb-6 leading-tight"
            >
              Ready to Make Your Move?
            </motion.h2>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-white/90 mb-12"
            >
              Get a free, obligation-free quote today — it only takes a few minutes.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 items-start"
            >
              {/* Call Button */}
              <motion.a
                href="tel:0432441287"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 px-8 py-4 bg-white text-primary-dark font-semibold rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 whitespace-nowrap"
              >
                <Phone className="w-5 h-5" strokeWidth={2} />
                Call Now: 0432 441 287
              </motion.a>

              {/* Quote Button */}
              <motion.button
                whileHover={{
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  borderColor: 'rgba(255, 255, 255, 1)',
                }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-white/60 text-white font-semibold rounded-lg hover:border-white transition-all duration-300 group"
              >
                Get Online Quote
                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight className="w-5 h-5" strokeWidth={2} />
                </motion.div>
              </motion.button>
            </motion.div>
          </div>

          {/* Truck Visual - Right Side */}
          <div className="relative h-64 md:h-96 hidden lg:flex items-center justify-center">
            {/* 3D Truck Image */}
            <motion.div
              initial={{ opacity: 0, x: 60, rotateY: -10 }}
              animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : { opacity: 0, x: 60, rotateY: -10 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              className="relative z-20"
              style={{
                perspective: '1000px',
              }}
            >
              <Image
                src="/truck-3d.png"
                alt="Professional 3D moving truck"
                width={500}
                height={350}
                className="drop-shadow-2xl"
                priority
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
