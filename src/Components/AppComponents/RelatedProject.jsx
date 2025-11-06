"use client"

import { useEffect, useRef } from "react"

function RelatedProject({ data }) {
  const scrollerRef = useRef(null)

  useEffect(() => {
    const scroller = scrollerRef.current
    if (!scroller) return

    let animationId
    let scrollPosition = 0
    const scrollSpeed = 1 // Pixels per frame (adjust for speed)

    const animate = () => {
      scrollPosition += scrollSpeed
      
      // Reset position when first set of items scrolls out
      if (scrollPosition >= scroller.scrollWidth / 2) {
        scrollPosition = 0
      }
      
      scroller.scrollLeft = scrollPosition
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    // Pause on hover
    const handleMouseEnter = () => cancelAnimationFrame(animationId)
    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(animate)
    }

    scroller.addEventListener("mouseenter", handleMouseEnter)
    scroller.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      cancelAnimationFrame(animationId)
      scroller.removeEventListener("mouseenter", handleMouseEnter)
      scroller.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  // Duplicate projects for seamless loop
  const duplicatedProjects = [...data.relatedProjects, ...data.relatedProjects]

  return (
    <div className="lg:mt-28 mt-12 relative overflow-hidden">
      <h2 className="lg:text-4xl text-2xl lg:mt-6 mb-6 font-bold text-center">
        Related Projects
      </h2>

      <div
      
        ref={scrollerRef}
        className="flex gap-6 h-[600px] overflow-x-hidden"
        style={{ scrollBehavior: "auto" }}
      >
        {duplicatedProjects.map((relatedProject, index) => (
          <div
            key={`${relatedProject.id}-${index}`}
            className="flex-shrink-0 w-[calc(100%-2rem)] md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]"
          >
            <div className="flex flex-col rounded-xl items-start shadow-lg py-6 gap-4 h-[550px] mt-4">
              <img
                className="rounded-md w-full object-cover"
                src={relatedProject.image || "/placeholder.svg"}
                alt={relatedProject.title}
                style={{ height: "350px", objectFit: "cover" }}
              />
              <div className="px-6  space-y-4 w-full">
                <h3 className="text-2xl font-semibold">{relatedProject.title}</h3>
             <div className="btn w-fit">
                 <a
                  href={relatedProject.link}
                  className="  font-semibold"
                  onClick={() => {
                    window.scrollTo(0, 0)
                  }}
                >
                  Read more
                </a>
             </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RelatedProject