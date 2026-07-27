'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Waves, MapPin, Truck, Package, ArrowRight } from 'lucide-react'
import Image from 'next/image'

interface ServiceTileProps {
  title: string
  description: string
  icon?: React.ReactNode
  index: number
  inView: boolean
  isFeatured?: boolean
  imageSrc?: string
}

function ServiceTile({
  title,
  description,
  icon,
  index,
  inView,
  isFeatured,
  imageSrc,
}: ServiceTileProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`group relative overflow-hidden rounded-2xl ${
        isFeatured ? 'md:col-span-2 md:row-span-2' : ''
      }`}
    >
      <motion.div
        whileHover={isFeatured ? { scale: 1.05 } : { scale: 1.02 }}
        className="relative h-full transition-shadow duration-300 group-hover:shadow-2xl"
      >
        {isFeatured && imageSrc ? (
          <>
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-primary-dark/40" />
            <div className="relative flex flex-col justify-end p-8 md:p-12">
              <div className="mb-4 inline-flex w-fit items-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white">
                Most Popular
              </div>
              <h3 className="mb-4 text-3xl font-bold font-heading text-white md:text-4xl">
                {title}
              </h3>
              <motion.button
                whileHover={{ x: 4 }}
                className="flex w-fit items-center gap-2 rounded-full bg-white/20 px-6 py-3 font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/30"
              >
                Learn more <ArrowRight size={18} />
              </motion.button>
            </div>
          </>
        ) : (
          <div className="h-full rounded-2xl border border-gray-100 bg-white p-8 shadow-lg">
            <div className="mb-6 inline-flex items-center justify-center rounded-xl bg-primary/10 p-4">
              <div className="text-primary text-2xl">{icon}</div>
            </div>
            <h3 className="mb-3 text-xl font-bold font-heading text-foreground">
              {title}
            </h3>
            <p className="mb-6 text-sm text-gray-600">{description}</p>
            <motion.a
              whileHover={{ x: 4 }}
              href="#"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
            >
              Learn more <ArrowRight size={16} />
            </motion.a>
          </div>
        )}
      </motion.div>
    </motion.div>
  )
}

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: false, amount: 0.2 })

  const services = [
    {
      title: 'Airlie Beach Removalists',
      description: 'Fast, careful local moves in Airlie Beach and surrounds',
      icon: <Waves size={32} />,
      isFeatured: true,
      imageSrc: '/airlie-beach-removalists.png',
    },
    {
      title: 'Hamilton Island Removalists',
      description: 'Specialist island moving services with expert logistics',
      icon: <Waves size={32} />,
    },
    {
      title: 'Cannonvale Removalists',
      description: 'Professional relocations throughout Cannonvale',
      icon: <MapPin size={32} />,
    },
    {
      title: 'Proserpine Removalists',
      description: 'Reliable moving services in Proserpine and surrounds',
      icon: <Truck size={32} />,
    },
    {
      title: 'Bowen Removalists',
      description: 'Careful handling for all your moving needs in Bowen',
      icon: <Package size={32} />,
    },
  ]

  return (
    <section ref={ref} className="px-4 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary"
          >
            OUR SERVICES
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-4 text-4xl font-bold font-heading text-foreground md:text-5xl"
          >
            Removalist Services Across the Whole Region
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-2xl text-lg text-gray-600"
          >
            Wherever you&apos;re moving to or from, our experienced team and modern fleet make it simple.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:gap-6 md:auto-rows-[300px]">
          {services.map((service, index) => (
            <ServiceTile
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              index={index}
              inView={inView}
              isFeatured={service.isFeatured}
              imageSrc={service.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
