'use client'

import { useRef } from 'react'
import { motion, useInView, useMotionTemplate, useMotionValue } from 'framer-motion'
import { Search, Phone, FileText } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Browse Our Services',
    description: 'Explore our services to find the right fit for your relocation needs.',
  },
  {
    number: '02',
    icon: Phone,
    title: 'Call Our Friendly Team',
    description: 'Speak directly with us on 0432 441 287 to discuss your move and get answers to any questions.',
  },
  {
    number: '03',
    icon: FileText,
    title: 'Get Your Free Quote',
    description: 'Fill in our obligation-free online quote form for a prompt, written removal quotation.',
  },
]

export default function HowItWorks() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.2 })
  const lineWidth = useMotionValue(0)

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Left Aligned */}
        <div className="max-w-xl mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-4"
          >
            <div className="h-1 w-2 bg-primary" />
            <span className="text-sm font-semibold tracking-widest text-primary uppercase">How It Works</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl font-semibold text-foreground leading-tight mb-6"
          >
            Booking Your Move Is Simple
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-md"
          >
            Follow three easy steps to get your relocation started with Airlie Beach Removalists.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Animated Background Line */}
          <motion.div
            className="absolute top-0 left-0 h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20"
            style={{
              width: isInView ? '100%' : '0%',
            }}
            transition={{ duration: 1.2, delay: 0.3 }}
            initial={{ width: '0%' }}
          />

          {/* Steps Container */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 pt-32 md:pt-0">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.5 + index * 0.15,
                  }}
                  className="flex flex-col items-center"
                >
                  {/* Badge Container */}
                  <div className="relative mb-8 md:mb-0">
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-primary/5 rounded-full blur-2xl" />

                    {/* Badge */}
                    <div className="relative w-20 h-20 flex items-center justify-center rounded-full border-2 border-primary bg-white shadow-lg">
                      <Icon className="w-10 h-10 text-primary" strokeWidth={1.5} />
                    </div>

                    {/* Number Badge */}
                    <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-foreground flex items-center justify-center">
                      <span className="text-xs font-bold text-background">{step.number}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center md:mt-8">
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
