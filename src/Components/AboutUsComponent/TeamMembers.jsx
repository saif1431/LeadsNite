function TeamMembers({ member }) {
  const defaultTeam = [
    {
      name: "Aleesha Brown",
      role: "CEO & Founder",
      image: "https://up2client.com/envato/proteam/html/preview/Grid-layout/assets/images/layout-4/1.jpg",
      linkedinUrl: "https://linkedin.com/in/aleesha-brown",
    },
    {
      name: "Kevin Martin",
      role: "Product Manager",
      image: "https://up2client.com/envato/proteam/html/preview/Grid-layout/assets/images/layout-4/2.jpg",
      linkedinUrl: "https://linkedin.com/in/kevin-martin",
    },
    {
      name: "Sarah Albert",
      role: "Financial Consultant",
      image: "https://up2client.com/envato/proteam/html/preview/Grid-layout/assets/images/layout-4/3.jpg",
      linkedinUrl: "https://linkedin.com/in/sarah-albert",
    },
    {
      name: "David Smith",
      role: "Developer",
      image: "https://up2client.com/envato/proteam/html/preview/Grid-layout/assets/images/layout-4/4.jpg",
      linkedinUrl: "https://linkedin.com/in/david-smith",
    },
  ];

  const membersToRender = member ? [member] : defaultTeam;

  return (
    <div className={member ? "" : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto lg:px-8 px-4  py-12"}>
      {membersToRender.map((m, idx) => (
        <div
          key={m.name + idx}
          className="group relative  "
        >
          {/* Image Container */}
          <div className="relative overflow-hidden rounded-2xl"> {/* added rounded-2xl here */}
            <img
              src={m.image || "/placeholder.svg"}
              alt={m.name}
              loading="lazy"
              onError={(e) => {
                console.warn("Image load failed:", m.image);
                e.currentTarget.onerror = null;
                e.currentTarget.src = "/placeholder.svg";
                e.currentTarget.style.objectFit = "cover";
              }}
              className="w-full h-80 object-cover block transition-transform duration-500 transform-gpu group-hover:scale-110 z-0"
            />

            {/* Gradient overlay: hidden by default. on hover it briefly shows then fades out */}
            <div
              aria-hidden
              className="team-overlay absolute inset-0 pointer-events-none z-10 bg-gradient-to-t from-white/60 via-white/30 to-transparent backdrop-blur-sm opacity-0"
            />

            {/* LinkedIn Icon - appears on hover */}
            <div className="absolute inset-0 flex items-end mb-8 justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              {m.linkedinUrl ? (
                <a
                  href={m.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                  aria-label={`Open ${m.name}'s LinkedIn`}
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              ) : null}
            </div>
          </div>

          {/* Content */}
          <div className="p-4 text-center">
            <p className="text-gray-500 text-sm ">{m.role}</p>
            <h3 className="text-2xl font-bold text-gray-900 hover:text-[#01ACE4] ">{m.name}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TeamMembers;
