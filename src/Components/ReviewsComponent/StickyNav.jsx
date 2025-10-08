import React from 'react'


export default function StickyNav({ activeTab, onNavigate }) {
  const base =
    "px-4 py-2 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-center gap-2">
          <button
            aria-pressed={activeTab === "fiverr"}
            onClick={() => onNavigate("fiverr")}
            className={
              activeTab === "fiverr"
                ? `${base} bg-primary text-primary-foreground`
                : `${base} text-foreground hover:text-primary`
            }
          >
            Fiverr
          </button>
          <button
            aria-pressed={activeTab === "upwork"}
            onClick={() => onNavigate("upwork")}
            className={
              activeTab === "upwork"
                ? `${base} bg-primary text-primary-foreground`
                : `${base} text-foreground hover:text-primary`
            }
          >
            Upwork
          </button>
          <button
            aria-pressed={activeTab === "direct"}
            onClick={() => onNavigate("direct")}
            className={
              activeTab === "direct"
                ? `${base} bg-primary text-primary-foreground`
                : `${base} text-foreground hover:text-primary`
            }
          >
            Direct Clients
          </button>
        </div>
      </div>
    </nav>
  )
}
