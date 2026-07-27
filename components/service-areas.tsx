'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin } from 'lucide-react'

const localAreas = ['Airlie Beach', 'Hamilton Island', 'Cannonvale', 'Shute Harbour']
const interstateAreas = ['Brisbane', 'Sunshine Coast', 'Gold Coast', 'Sydney', 'Melbourne']

export default function ServiceAreas() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.2 })

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6 }}
          >
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 mb-4"
            >
              <div className="h-1 w-2 bg-primary" />
              <span className="text-sm font-semibold tracking-widest text-primary uppercase">
                Where We Operate
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-4 leading-tight"
            >
              Areas We Service
            </motion.h2>

            {/* Supporting text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-lg text-muted-foreground mb-12"
            >
              From Airlie Beach to Sydney, we&apos;ve got your move covered.
            </motion.p>

            {/* Local Areas */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-10"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                Local & Islands
              </h3>
              <div className="flex flex-wrap gap-3">
                {localAreas.map((area, index) => (
                  <motion.button
                    key={area}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.08 }}
                    whileHover={{
                      backgroundColor: '#f37828',
                      color: '#ffffff',
                      scale: 1.05,
                    }}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-border bg-background text-foreground font-medium transition-all duration-200 hover:shadow-lg"
                  >
                    <MapPin className="w-4 h-4" strokeWidth={1.5} />
                    {area}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Interstate Areas */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                Interstate
              </h3>
              <div className="flex flex-wrap gap-2">
                {interstateAreas.map((area, index) => (
                  <motion.button
                    key={area}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, delay: 0.35 + index * 0.08 }}
                    whileHover={{
                      backgroundColor: '#f37828',
                      color: '#ffffff',
                      scale: 1.05,
                    }}
                    className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-background text-muted-foreground font-medium text-sm transition-all duration-200 hover:shadow-lg"
                  >
                    <MapPin className="w-3.5 h-3.5" strokeWidth={1.5} />
                    {area}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Decorative Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="hidden lg:flex items-center justify-center"
          >
            <svg
              viewBox="0 0 200 300"
              className="w-full max-w-sm"
              style={{ filter: 'drop-shadow(0 10px 30px rgba(243, 120, 40, 0.1))' }}
            >
              {/* Coastline suggestion */}
              <path
                d="M 50 20 Q 60 40, 65 60 Q 70 90, 72 120 Q 73 150, 70 180 Q 68 210, 60 240 L 55 280"
                stroke="#f37828"
                strokeWidth="2"
                fill="none"
                opacity="0.3"
              />

              {/* Route line connecting points */}
              <path
                d="M 65 60 L 65 140 L 100 200 L 140 270"
                stroke="#f37828"
                strokeWidth="1.5"
                fill="none"
                opacity="0.5"
                strokeDasharray="5,5"
              />

              {/* Airlie Beach point */}
              <g>
                <circle cx="65" cy="60" r="6" fill="#f37828" opacity="0.2" />
                <circle cx="65" cy="60" r="4" fill="#f37828" />
                <circle cx="65" cy="60" r="6" fill="#f37828" opacity="0" stroke="#f37828" strokeWidth="1">
                  <animate
                    attributeName="r"
                    values="6;12"
                    dur="2s"
                    repeatCount="indefinite"
                    opacity="0"
                  />
                </circle>
              </g>

              {/* Brisbane point */}
              <g>
                <circle cx="65" cy="140" r="6" fill="#f37828" opacity="0.2" />
                <circle cx="65" cy="140" r="4" fill="#f37828" opacity="0.6" />
              </g>

              {/* Sydney point */}
              <g>
                <circle cx="100" cy="200" r="6" fill="#f37828" opacity="0.2" />
                <circle cx="100" cy="200" r="4" fill="#f37828" opacity="0.6" />
              </g>

              {/* Melbourne point */}
              <g>
                <circle cx="140" cy="270" r="6" fill="#f37828" opacity="0.2" />
                <circle cx="140" cy="270" r="4" fill="#f37828" opacity="0.6" />
              </g>

              {/* Decorative background elements */}
              <circle cx="120" cy="80" r="30" fill="#f37828" opacity="0.05" />
              <circle cx="40" cy="180" r="40" fill="#f37828" opacity="0.03" />

              {/* Text labels */}
              <text x="65" y="45" fontSize="11" fill="#1a1a1a" opacity="0.6" textAnchor="middle">
                Airlie Beach
              </text>
              <text x="65" y="155" fontSize="10" fill="#1a1a1a" opacity="0.5" textAnchor="middle">
                Brisbane
              </text>
              <text x="100" y="220" fontSize="10" fill="#1a1a1a" opacity="0.5" textAnchor="middle">
                Sydney
              </text>
              <text x="140" y="290" fontSize="10" fill="#1a1a1a" opacity="0.5" textAnchor="middle">
                Melbourne
              </text>
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
