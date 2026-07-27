'use client'

import { Phone, ArrowRight, ChevronDown } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  const handlePhoneClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Allow the tel: link to work naturally
    e.preventDefault()
    window.location.href = 'tel:+61432441287'
  }

  return (
    <section className="py-18 sm:py-2 relative min-h-[90vh] w-full overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/moving-hero.jpg')`,
          backgroundPosition: 'center 30%',
        }}
      />

      {/* Gradient Overlay - from black/70 left to primary-dark/60 right */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to right, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.5) 50%, rgba(221, 82, 39, 0.4) 100%)`,
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 flex flex-col items-start justify-center min-h-[90vh] lg:items-start md:items-center sm:items-center">
        {/* Eyebrow Text - Staggered fade-in animation */}
        <div
          className="mb-4 text-primary uppercase tracking-widest text-sm font-semibold"
          style={{
            animation: 'fadeInSlideUp 0.6s ease-out 0.1s both',
          }}
        >
          North Queensland&apos;s Local Removalists
        </div>

        {/* Headline - Staggered fade-in animation */}
        <h1
          className="font-heading font-bold text-white mb-6 leading-tight text-5xl sm:text-6xl lg:text-7xl max-w-4xl"
          style={{
            animation: 'fadeInSlideUp 0.6s ease-out 0.2s both',
          }}
        >
          Airlie Beach&apos;s Trusted Moving Experts
        </h1>

        {/* Subheadline - Staggered fade-in animation */}
        <p
          className="text-white/90 font-body text-lg lg:text-xl mb-8 max-w-2xl leading-relaxed"
          style={{
            animation: 'fadeInSlideUp 0.6s ease-out 0.3s both',
          }}
        >
          Local, interstate, and international removals across North Queensland — handled by an experienced team with a modern fleet, so your move is fast, safe, and stress-free.
        </p>

        {/* Button Container - Staggered fade-in animation */}
        <div
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          style={{
            animation: 'fadeInSlideUp 0.6s ease-out 0.4s both',
          }}
        >
          {/* Call Now Button */}
          <a
            href="tel:+61432441287"
            onClick={handlePhoneClick}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-primary text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95"
          >
            <Phone size={20} />
            <span>Call Now: 0432 441 287</span>
          </a>

          {/* Online Quote Button */}
          <button
            onClick={() => {
              // Scroll to contact form or navigate to quote page
              const contactSection = document.getElementById('contact')
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-lg transition-all duration-300 hover:bg-white hover:text-primary group"
          >
            <span>Get an Online Quote</span>
            <ArrowRight
              size={20}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        style={{
          animation: 'bounce 2s infinite',
        }}
      >

      </div>

      {/* Fade-in and Slide-up Keyframes */}
      <style>{`
        @keyframes fadeInSlideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateX(-50%) translateY(0);
          }
          50% {
            transform: translateX(-50%) translateY(-10px);
          }
        }
      `}</style>
    </section>
  )
}
