import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import Stats from '@/components/stats'
import Services from '@/components/services'
import HowItWorks from '@/components/how-it-works'
import Testimonials from '@/components/testimonials'
import ServiceAreas from '@/components/service-areas'
import CTABanner from '@/components/cta-banner'
import Footer from '@/components/footer'

export default function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <HowItWorks />
      <Testimonials />
      <ServiceAreas />
      <CTABanner />
      <Footer />
    </>
  )
}
