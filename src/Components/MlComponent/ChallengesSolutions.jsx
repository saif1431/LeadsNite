import React from 'react';

const ChallengesSolutions = () => {
  const challenges = [
    {
      challenge: {
        title: "Launching Fast on a Startup Budget",
        description: "Building a polished site or app quickly—without overruns or technical debt."
      },
      solution: [
        "Rapid prototyping, component libraries, and clean architectures.",
        "Mobile-first UI with performance budgets baked in.",
        "Scope-tight MVPs that ship in weeks, not months."
      ]
    },
    {
      challenge: {
        title: "Standing Out in a Crowded Feed",
        description: "Paid ads, SEO, and content often miss the mark or fail to show ROI."
      },
      solution: [
        "Full-funnel strategy (SEO, PPC, social, email) aligned to KPIs.",
        "Creative that matches brand voice and audience intent.",
        "Analytics dashboards to track CAC, ROAS, and LTV."
      ]
    },
    {
      challenge: {
        title: "Turning Raw Data into Decisions",
        description: "Messy datasets and unclear models block insights and automation."
      },
      solution: [
        "Data cleaning pipelines and feature engineering.",
        "Right-fit ML models with A/B evaluated accuracy.",
        "Production-grade deployment and MLOps hygiene."
      ]
    },
    {
      challenge: {
        title: "Cross-Platform App Experience",
        description: "Keeping UX, performance, and security consistent on iOS, Android, and web."
      },
      solution: [
        "Flutter/React Native with shared design systems.",
        "Offline-first, API-driven architecture and secure auth.",
        "Automated testing and CI/CD for smooth releases."
      ]
    },
    {
      challenge: {
        title: "Consistent Visual Storytelling",
        description: "Raw footage and assets that don't feel unified across channels."
      },
      solution: [
        "Brand kits for motion, color, and typography.",
        "Editing workflows for speed + quality control.",
        "Export presets optimized for each platform."
      ],
      isWide: true
    }
  ];

  const BoltIcon = () => (
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" aria-hidden="true">
      <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"></path>
    </svg>
  );

  const CheckIcon = () => (
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" aria-hidden="true">
      <path d="M9 16.17l-3.88-3.88L3.7 13.7 9 19l12-12-1.41-1.41z"></path>
    </svg>
  );

  return (
    <section 
      id="challenges" 
      className=" text-slate-200 mt-12"
      
    >
      <div className="">
        {/* Header */}
        <header className="mb-8 md:mb-12">
          <h2 
            className="text-2xl text-center text-black lg:text-4xl font-bold leading-tight mb-2"
            // style={{
            //   background: 'linear-gradient(90deg, #7c5cff 0%, #00d4ff 100%)',
            //   WebkitBackgroundClip: 'text',
            //   backgroundClip: 'text',
            //   color: 'transparent'
            // }}
          >
            Challenges & Solutions
          </h2>
          <p className="text-slate-400 text-center text-base">
            Real startup problems—solved with design, code, and data.
          </p>
        </header>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {challenges.map((item, index) => (
            <article
              key={index}
              className={`
                group overflow-hidden transition-all duration-300 ease-out
                transform hover:-translate-y-1 focus-within:-translate-y-1
                hover:shadow-2xl focus-within:shadow-2xl
                focus-within:outline-none focus-within:ring-4 focus-within:ring-purple-500/45
                ${item.isWide ? 'md:col-span-2' : ''}
              `}
              style={{
                background: `linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01)), #131735`,
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '18px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.35)'
              }}
            >
              {/* Challenge Block */}
              <div className="p-4 md:p-5">
                <span className="inline-flex items-center gap-2 text-xs px-2.5 py-1.5 rounded-full border border-white/12 bg-white/3 text-amber-400 mb-2">
                  <BoltIcon />
                  Challenge
                </span>
                <h3 className="text-lg font-semibold mb-1.5 text-slate-100">
                  {item.challenge.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.challenge.description}
                </p>
              </div>

              {/* Divider */}
              <div 
                className="h-px mx-4"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)'
                }}
              />

              {/* Solution Block */}
              <div className="p-4 md:p-5">
                <span className="inline-flex items-center gap-2 text-xs px-2.5 py-1.5 rounded-full border border-white/12 bg-white/3 text-emerald-400 mb-2">
                  <CheckIcon />
                  Solution
                </span>
                <ul className="mt-2 ml-5 space-y-1.5">
                  {item.solution.map((solutionItem, sIndex) => (
                    <li key={sIndex} className="text-slate-200 text-sm leading-relaxed list-disc">
                      {solutionItem}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChallengesSolutions;