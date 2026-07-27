'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

interface StatProps {
  number: string | number
  label: string
  index: number
  inView: boolean
}

function Stat({ number, label, index, inView }: StatProps) {
  const [displayNumber, setDisplayNumber] = useState(0)
  const isDecimal = typeof number === 'string' && number.includes('.')
  const numericValue = parseFloat(String(number).replace(/[^0-9.]/g, '')) || 0

  useEffect(() => {
    if (!inView) return

    let count = 0
    const increment = isDecimal ? numericValue / 50 : Math.ceil(numericValue / 50)
    const interval = setInterval(() => {
      count += increment
      if (count >= numericValue) {
        setDisplayNumber(numericValue)
        clearInterval(interval)
      } else {
        setDisplayNumber(count)
      }
    }, 20)

    return () => clearInterval(interval)
  }, [inView, numericValue, isDecimal])

  const displayValue = inView ? displayNumber : 0

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="text-center md:text-left md:border-l md:border-gray-300 md:pl-8"
    >
      <div className="text-5xl md:text-6xl font-bold font-heading text-foreground mb-3">
        {isDecimal
          ? displayValue.toFixed(1)
          : Math.floor(displayValue).toLocaleString()}
        {typeof number === 'string' && number.includes('+') && '+'}
        {typeof number === 'string' && number.includes('/5') && (
          <span className="text-2xl md:text-3xl text-gray-400 font-normal">/5</span>
        )}
      </div>
      <p className="text-sm md:text-base font-medium text-gray-500">{label}</p>
    </motion.div>
  )
}

export default function Stats() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: false, amount: 0.3 })

  const stats = [
    {
      number: '2500+',
      label: 'Happy Families Moved',
    },
    {
      number: '4.8/5',
      label: 'Average Client Rating',
    },
    {
      number: '15+',
      label: 'Years of Local Experience',
    },
    {
      number: '100%',
      label: 'On-Time Delivery Rate',
    },
  ]

  return (
    <section ref={ref} className="bg-[#F5F5F3] px-4 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Eyebrow Label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">
            Our Numbers Speak For Itself
          </span>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
          {stats.map((stat, index) => (
            <Stat
              key={index}
              number={stat.number}
              label={stat.label}
              index={index}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
