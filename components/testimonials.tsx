'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star } from 'lucide-react'

const featuredTestimonials = [
  {
    name: 'Sarah M.',
    suburb: 'Airlie Beach',
    initials: 'SM',
    quote:
      'The team arrived on time, wrapped every piece of furniture with care, and made our move to Airlie Beach completely stress-free. Couldn\'t recommend them more.',
    rating: 5,
  },
  {
    name: 'James T.',
    suburb: 'Cannonvale',
    initials: 'JT',
    quote:
      'Exceptional service from start to finish. They handled our belongings like their own and kept us updated every step of the way. Best decision we made.',
    rating: 5,
  },
  {
    name: 'Michelle R.',
    suburb: 'Hamilton Island',
    initials: 'MR',
    quote:
      'Fair pricing, professional team, and transparent communication. No hidden fees, no surprises. They made our interstate move seamless and affordable.',
    rating: 5,
  },
]

const miniTestimonials = [
  {
    name: 'David K.',
    suburb: 'Proserpine',
    quote: 'Punctual, reliable, and incredibly careful with our furniture. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Emma L.',
    suburb: 'Bowen',
    quote: 'Outstanding care and attention to detail. They treated everything as if it were their own.',
    rating: 5,
  },
  {
    name: 'Robert S.',
    suburb: 'Shute Harbour',
    quote: 'Transparent pricing and professional service. Best removal company we\'ve used.',
    rating: 5,
  },
]

export default function Testimonials() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.2 })
  const [current, setCurrent] = useState(0)

  // Auto-rotate featured testimonials every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % featuredTestimonials.length)
    }, 7000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      ref={containerRef}
      className="py-24 md:py-32 bg-gradient-to-b from-foreground to-[#1a1a1a] relative overflow-hidden"
    >
      {/* Decorative blurred circles */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold tracking-widest text-primary uppercase">Testimonials</span>
        </motion.div>

        {/* Featured Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-3xl mx-auto mb-16"
        >
          <div className="relative">
            {/* Quotation Mark */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 0.3 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute -top-8 -left-6 text-8xl md:text-9xl text-primary font-heading"
            >
              "
            </motion.div>

            {/* Quote Text Container with Crossfade */}
            <div className="relative pt-8">
              {featuredTestimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: current === index ? 1 : 0 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0"
                >
                  <p className="font-heading text-2xl md:text-3xl font-medium text-white leading-relaxed text-center">
                    {testimonial.quote}
                  </p>
                </motion.div>
              ))}

              {/* Invisible placeholder to maintain height */}
              <p className="font-heading text-2xl md:text-3xl font-medium text-white/0 leading-relaxed text-center">
                {featuredTestimonials[current].quote}
              </p>
            </div>

            {/* Star Rating */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex justify-center gap-1 my-6"
            >
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-primary text-primary"
                  strokeWidth={0}
                />
              ))}
            </motion.div>

            {/* Attribution */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center justify-center gap-3"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
                <span className="text-sm font-bold text-white">
                  {featuredTestimonials[current].initials}
                </span>
              </div>
              <div>
                <p className="font-heading text-white font-semibold">
                  {featuredTestimonials[current].name}
                </p>
                <p className="text-gray-400 text-sm">{featuredTestimonials[current].suburb}</p>
              </div>
            </motion.div>

            {/* Dot Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex justify-center gap-2 mt-8"
            >
              {featuredTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    current === index ? 'bg-primary w-8' : 'bg-primary/30 hover:bg-primary/50'
                  }`}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Mini Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {miniTestimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors duration-300"
            >
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-primary text-primary"
                    strokeWidth={0}
                  />
                ))}
              </div>
              <p className="text-white/90 text-sm leading-relaxed mb-4">{testimonial.quote}</p>
              <div>
                <p className="font-heading text-white font-semibold text-sm">{testimonial.name}</p>
                <p className="text-gray-400 text-xs">{testimonial.suburb}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
