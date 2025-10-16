import React from 'react'


export default function StickyNav({ activeTab, onNavigate }) {
  const base =
    "px-4 py-2 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-300 ">
      <div className="container mx-auto  py-4">
        <div className="flex lg:justify-center flex-wrap items-start gap-2">
          <button
            aria-pressed={activeTab === "fiverr"}
            onClick={() => onNavigate("fiverr")}
            className={
              activeTab === "fiverr"
                ? `${base} btn2 w-full lg:w-fit cursor-pointer`
                : `${base} btn w-full lg:w-fit`
            }
          >
            Fiverr Review
          </button>
          <button
            aria-pressed={activeTab === "upwork"}
            onClick={() => onNavigate("upwork")}
            className={
              activeTab === "upwork"
                ? `${base} btn2 w-full lg:w-fit cursor-pointer`
                : `${base} btn w-full lg:w-fit`
            }
          >
            Upwork Review
          </button>
          <button
            aria-pressed={activeTab === "direct"}
            onClick={() => onNavigate("direct")}
            className={
              activeTab === "direct"
                ? `${base} btn2 w-full lg:w-fit cursor-pointer`
                : `${base} btn w-full lg:w-fit`
            }
          >
            Direct Clients Review
          </button>
        </div>
      </div>
    </nav>
  )
}
