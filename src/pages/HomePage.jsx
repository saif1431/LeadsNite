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

// Loading fallback component
const LoadingFallback = () => (
  <div className="flex items-center justify-center py-20">
    <div className="animate-pulse text-gray-400">Loading...</div>
  </div>
)

function HomePage() {
  return (
    <div>
      {/* Above the fold - immediate load */}
      <HeroSection />
      <BrandLogos />

      {/* Below the fold - lazy loaded */}
      <Suspense fallback={<LoadingFallback />}>
        <ServicesCard />
      </Suspense>

      <Suspense fallback={<LoadingFallback />}>
        <JoinUs />
      </Suspense>

      <Suspense fallback={<LoadingFallback />}>
        <OurProcess />
      </Suspense>

      <Suspense fallback={<LoadingFallback />}>
        <ClientReviews />
      </Suspense>

      <Suspense fallback={<LoadingFallback />}>
        <PricingSection />
      </Suspense>

      <Suspense fallback={<LoadingFallback />}>
        <div className='px-4 mt-4 lg:px-0 py-20'>
          <Technologies />
          <ClientCount />
        </div>
      </Suspense>

      <Suspense fallback={<LoadingFallback />}>
        <LatestProject />
      </Suspense>

      <Suspense fallback={<LoadingFallback />}>
        <LetsTalk />
      </Suspense>
    </div>
  )
}

export default HomePage
