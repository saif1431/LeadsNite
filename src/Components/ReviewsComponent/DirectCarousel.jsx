"use client"

import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight, Star, Users } from "lucide-react"
import reviewsData from "../ReviewsComponent/reviewData.json"

export default function DirectCarousel() {
  const { direct } = reviewsData
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const t = setInterval(() => {
      setCurrent((p) => (p + 1) % direct.reviews.length)
    }, 5000)
    return () => clearInterval(t)
  }, [direct.reviews.length])

  const next = () => setCurrent((p) => (p + 1) % direct.reviews.length)
  const prev = () => setCurrent((p) => (p - 1 + direct.reviews.length) % direct.reviews.length)

  return (
    <section id="direct" className="py-20 px-6 scroll-mt-20 ">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl font-bold text-center mb-4">{direct.title}</h2>
        <p className="text-center text-muted-foreground mb-12">{direct.subtitle}</p>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="transition-all duration-700 ease-in-out flex"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {direct.reviews.map((review, i) => (
                <div key={i} className="min-w-full px-2">
                  <div className="relative overflow-hidden p-8 md:p-12 rounded-lg shadow-2xl border-0 bg-gradient-to-br from-primary to-primary/90 text-primary-foreground min-h-[350px] flex flex-col justify-center">
                    {/* Decorative blobs */}
                    <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

                    <div className="relative z-10">
                      <div className="flex mb-4 justify-center md:justify-start">
                        {Array.from({ length: review.rating }).map((_, k) => (
                          <Star key={k} className="w-7 h-7 fill-current text-primary-foreground drop-shadow-lg" />
                        ))}
                      </div>
                      <p className="text-xl md:text-2xl leading-relaxed mb-8 italic">"{review.review}"</p>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                          <Users className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div>
                          <p className="font-bold text-xl">{review.name}</p>
                          <p className="text-primary-foreground/90 text-sm">{review.company}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            aria-label="Previous review"
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 bg-background text-foreground hover:bg-primary hover:text-primary-foreground border-2 border-primary shadow-lg transition-all hover:scale-110 w-12 h-12 rounded-full flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            aria-label="Next review"
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 bg-background text-foreground hover:bg-primary hover:text-primary-foreground border-2 border-primary shadow-lg transition-all hover:scale-110 w-12 h-12 rounded-full flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        <div className="flex justify-center gap-3 mt-10">
          {direct.reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to review ${i + 1}`}
              className={`h-2.5 rounded-full transition-all duration-500 ${
                i === current ? "w-12 bg-primary shadow-lg" : "w-2.5 bg-border hover:bg-primary/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}