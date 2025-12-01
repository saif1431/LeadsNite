import React from 'react';

/**
 * ChallengesSolutions Component
 * 
 * Usage:
 * 1. With project data: <ChallengesSolutions challenges={projectData.challengesData} />
 * 2. Without props (uses default challenges): <ChallengesSolutions />
 */

const ChallengesSolutions = ({ challenges: propChallenges }) => {
  // Default challenges (used if no prop is passed)
  const defaultChallenges = [
    {
      challenge: {
        title: "Ensuring Accurate Job Relevance",
        description: "Jobs often contain vague or inconsistent descriptions."
      },
      solution: [
        "Used AI-driven semantic matching for precision.",
        "Applied custom job title filters using Mistral logic.",
        "Verified top matches manually through score review."
      ]
    },
    {
      challenge: {
        title: "Avoiding Duplicate Job Listings",
        description: "Multiple job sources can repeat the same postings."
      },
      solution: [
        "Implemented dataset comparison using n8n nodes.",
        "Filtered results against existing Google Sheets data.",
        "Logged each job with unique URL-based identifier."
      ]
    },
    {
      challenge: {
        title: "Maintaining Resume Personalization",
        description: "Generic resumes reduce impact on job applications."
      },
      solution: [
        "Automated AI cover letter and resume customization.",
        "Inserted [ADD] and [QUANTIFY] hints for each section.",
        "Personalized tone to match job and company context."
      ]
    },
    {
      challenge: {
        title: "Streamlining Daily Job Tracking",
        description: "Manual tracking often becomes slow and disorganized."
      },
      solution: [
        "Centralized all job data into structured Google Sheets.",
        "Designed automated timestamp-based job entries.",
        "Enabled quick sort and filter for match score review."
      ]
    },
    {
      challenge: {
        title: "Delivering Digestible Daily Insights",
        description: "Users can get overwhelmed by multiple notifications."
      },
      solution: [
        "Compiled a single HTML digest summarizing top roles.",
        "Highlighted match scores with direct job links.",
        "Limited daily output to top five personalized matches."
      ],
      isWide: true
    }
  ];

  // Use prop challenges if provided, otherwise use defaults
  const challenges = propChallenges && propChallenges.length > 0 ? propChallenges : defaultChallenges;

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
      className="text-slate-200 mt-28"
    >
      <div className="">
        {/* Header */}
        <header className="mb-8 md:mb-12">
          <h2 
            className="text-2xl text-center text-black lg:text-4xl font-bold leading-tight mb-2"
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
                group bg-white border border-gray-200 shadow-lg text-black overflow-hidden transition-all duration-300 ease-out
                transform hover:-translate-y-1 focus-within:-translate-y-1
                hover:shadow-2xl focus-within:shadow-2xl
                focus-within:outline-none focus-within:ring-4 focus-within:ring-purple-500/45
                ${item.isWide ? 'md:col-span-2' : ''}
              `}
              style={{
                background: ``,
                borderRadius: '18px',
                
              }}
            >
              {/* Challenge Block */}
              <div className="p-4 md:p-5">
                <span className="inline-flex items-center gap-2 text-xs px-2.5 py-1.5 rounded-full border  text-amber-400 mb-2">
                  <BoltIcon />
                  Challenge
                </span>
                <h3 className="text-lg font-semibold mb-1.5 text-slate-900">
                  {item.challenge.title}
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed">
                  {item.challenge.description}
                </p>
              </div>

              {/* Divider */}
              <div 
                className="h-px border border-gray-100  mx-4"
                style={{
                  background: ''
                }}
              />

              {/* Solution Block */}
              <div className="p-4 md:p-5">
                <span className="inline-flex items-center gap-2 text-xs px-2.5 py-1.5 rounded-full  span border  mb-2">
                  <CheckIcon />
                  Solution
                </span>
                <ul className="mt-2 ml-5 space-y-1.5">
                  {item.solution.map((solutionItem, sIndex) => (
                    <li key={sIndex} className="text-slate-900 text-sm leading-relaxed list-disc">
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