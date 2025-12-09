import React, { lazy, Suspense } from 'react'
// Immediate load - above the fold
import HeroSection from '../Components/HomeComponents/HeroSection'
import BrandLogos from '../Components/HomeComponents/BrandLogos'

// Lazy load - below the fold components
const ServicesCard = lazy(() => import('../Components/HomeComponents/ServicesCard'))
const JoinUs = lazy(() => import('../Components/HomeComponents/JoinUs'))
const OurProcess = lazy(() => import('../Components/HomeComponents/OurProcess'))
const ClientReviews = lazy(() => import('../Components/HomeComponents/ClientReviews'))
const PricingSection = lazy(() => import('../Components/HomeComponents/PricingSection'))
const Technologies = lazy(() => import('../Components/HomeComponents/Technologies '))
const ClientCount = lazy(() => import('../Components/HomeComponents/ClientCount'))
const LatestProject = lazy(() => import('../Components/HomeComponents/LatestProject'))
const LetsTalk = lazy(() => import('../Components/HomeComponents/LetsTalk'))

function HomePage() {
  return (
    <div>
      {/* Above the fold - immediate load */}
      <HeroSection />
      <BrandLogos />

      {/* Services and CTA - first below fold group */}
      <Suspense fallback={null}>
        <ServicesCard />
        <JoinUs />
      </Suspense>

      {/* Process and Reviews - second group */}
      <Suspense fallback={null}>
        <OurProcess />
        <ClientReviews />
      </Suspense>

      {/* Pricing and Tech stack - third group */}
      <Suspense fallback={null}>
        <PricingSection />
        <div className='px-4 mt-4 lg:px-0 py-20'>
          <Technologies />
          <ClientCount />
        </div>
      </Suspense>

      {/* Projects and footer CTA - final group */}
      <Suspense fallback={null}>
        <LatestProject />
        <LetsTalk />
      </Suspense>
    </div>
  )
}

export default HomePage
