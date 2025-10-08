import { useState, useEffect } from "react"
import ReviewHero from "../Components/ReviewsComponent/ReviewHero"
import StickyNav from "../Components/ReviewsComponent/StickyNav"
import ReviewsGrid from "../Components/ReviewsComponent/ReviewsGrid"
import DirectCarousel from "../Components/ReviewsComponent/DirectCarousel"
import reviewsData from "../Components/ReviewsComponent/reviewData.json"

function ReviewPage() {
  const [activeTab, setActiveTab] = useState("fiverr")

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId)
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" })
      setActiveTab(sectionId)
    }
  }

  // Keep activeTab in sync on scroll
  useEffect(() => {
    const handler = () => {
      const ids = ["fiverr", "upwork", "direct"]
      const offsets = ids
        .map((id) => {
          const el = document.getElementById(id)
          if (!el) return { id, top: Number.POSITIVE_INFINITY }
          const rect = el.getBoundingClientRect()
          return { id, top: Math.abs(rect.top) }
        })
        .sort((a, b) => a.top - b.top)
      if (offsets.length && offsets[0].id !== activeTab) {
        setActiveTab(offsets[0].id)
      }
    }
    window.addEventListener("scroll", handler, { passive: true })
    return () => window.removeEventListener("scroll", handler)
  }, [activeTab])

  return (
    <div className="min-h-screen max-w-7xl mx-auto px-4 md:px-6 bg-background text-foreground">
      <ReviewHero onNavigate={scrollToSection} />
      <StickyNav activeTab={activeTab} onNavigate={scrollToSection} />

      <ReviewsGrid
        id="fiverr"
        title={reviewsData.fiverr.title}
        subtitle={reviewsData.fiverr.subtitle}
        images={reviewsData.fiverr.images}
        altPrefix="Fiverr review"
      />

      <ReviewsGrid
        id="upwork"
        title={reviewsData.upwork.title}
        subtitle={reviewsData.upwork.subtitle}
        images={reviewsData.upwork.images}
        altPrefix="Upwork review"
        backgroundClass="bg-secondary/10"
      />

      <DirectCarousel />
    </div>
  )
}

export default ReviewPage