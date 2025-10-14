import React from 'react'


export default function StickyNav({ activeTab, onNavigate }) {
  const base =
    "px-4 py-2 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-300 ">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-center gap-2">
          <button
            aria-pressed={activeTab === "fiverr"}
            onClick={() => onNavigate("fiverr")}
            className={
              activeTab === "fiverr"
                ? `${base} btn2 cursor-pointer`
                : `${base} btn`
            }
          >
            Fiverr Review
          </button>
          <button
            aria-pressed={activeTab === "upwork"}
            onClick={() => onNavigate("upwork")}
            className={
              activeTab === "upwork"
                ? `${base} btn2 cursor-pointer`
                : `${base} btn`
            }
          >
            Upwork Review
          </button>
          <button
            aria-pressed={activeTab === "direct"}
            onClick={() => onNavigate("direct")}
            className={
              activeTab === "direct"
                ? `${base} btn2 cursor-pointer`
                : `${base} btn`
            }
          >
            Direct Clients Review
          </button>
        </div>
      </div>
    </nav>
  )
}
