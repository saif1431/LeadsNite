import { useState } from "react"

export default function ReviewsGrid({ id, title, subtitle, images, altPrefix = "Review", backgroundClass = "" }) {
  const [visible, setVisible] = useState(8)

  const loadMore = () => setVisible((v) => Math.min(v + 8, images.length))

  const onImgError = (e) => {
    e.currentTarget.src = "/placeholder.svg"
    e.currentTarget.alt = "Placeholder image"
  }

  return (
    <section id={id} className={`py-20 px-6 scroll-mt-20 ${backgroundClass}`}>
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">{title}</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">{subtitle}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {images.slice(0, visible).map((src, index) => (
            <div
              key={`${id}-${index}`}
              className="overflow-hidden rounded-lg border border-border bg-card text-card-foreground shadow-sm hover:shadow-lg transition-shadow duration-300 animate-fade-in"
            >
              <img
                src={src || "/placeholder.svg"}
                alt={`${altPrefix} ${index + 1}`}
                className="w-full h-64 object-contain"
                onError={onImgError}
              />
            </div>
          ))}
        </div>

        {visible < images.length && (
          <div className="text-center">
            <button
              onClick={loadMore}
              className="px-6 py-3 rounded-md bg-primary text-primary-foreground font-semibold hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Explore More
            </button>
          </div>
        )}
      </div>
    </section>
  )
}