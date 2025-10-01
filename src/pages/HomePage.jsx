import React from 'react'
import HeroSection from '../Components/HomeComponents/HeroSection'
import BrandLogos from '../Components/HomeComponents/BrandLogos'
import Services from '../Components/HomeComponents/Services'
import ServicesGrid from '../Components/HomeComponents/Services'
import ServiceOverview from '../Components/HomeComponents/ServiceOverview'
import PricingSection from '../Components/HomeComponents/PricingSection'
import OrbitAnimation from '../Components/HomeComponents/OrbitAnimation'
import JoinUs from '../Components/HomeComponents/JoinUs'
import Technologies from '../Components/HomeComponents/Technologies '
import ClientCount from '../Components/HomeComponents/ClientCount'
import LatestProject from '../Components/HomeComponents/LatestProject'
import TrustedReview from '../Components/HomeComponents/TrustedReview'
import SplashCursor from '../Components/HomeComponents/SplashCursor'
import OurProcess from '../Components/HomeComponents/OurProcess'
import LetsTalk from '../Components/HomeComponents/LetsTalk'
import ServicesCard from '../Components/HomeComponents/ServicesCard'

function HomePage() {
  return (
    <div>
      {/* <SplashCursor/> */}
<HeroSection/>
<BrandLogos/>
<ServicesCard/>
{/* <ServiceOverview/> */}
<JoinUs/>
{/* <OrbitAnimation/> */}
<OurProcess/>
<PricingSection/> 
<LetsTalk/>
<div className='px-4 mt-4 lg:px-0 py-20'>
  <Technologies/>
<ClientCount/>
</div>
<LatestProject/>
<TrustedReview/>    
          </div>
  )
}

export default HomePage
