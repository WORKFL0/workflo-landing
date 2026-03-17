"use client";

const features = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="2" y="2" width="18" height="14" rx="2" stroke="#0071e3" strokeWidth="1.6" />
        <path d="M7 16v2M15 16v2M5 18h12" stroke="#0071e3" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
    title: "Device Enrollment",
    desc: "Zero-touch via Apple Business Manager",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="8" stroke="#0071e3" strokeWidth="1.6" />
        <path d="M8 11l2 2 4-4" stroke="#0071e3" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Configuration Profiles",
    desc: "Automatische instellingen per apparaat",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M4 11h14M11 4l7 7-7 7" stroke="#0071e3" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Software Updates",
    desc: "Stille updates buiten werktijden",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="3" y="5" width="16" height="12" rx="2" stroke="#0071e3" strokeWidth="1.6" />
        <path d="M7 9h8M7 12h5" stroke="#0071e3" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
    title: "Inventory Management",
    desc: "Real-time overzicht van uw fleet",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 3l7 3.5v5c0 4-3 7.5-7 8.5C7 19 4 15.5 4 11.5V6.5L11 3z" stroke="#0071e3" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 11l2 2 4-4" stroke="#0071e3" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Remote Wipe",
    desc: "Veilig wissen bij verlies of diefstal",
  },
];

const videoCards = [
  {
    title: "Zero-Touch Deployment",
    desc: "Nieuwe Macs komen gebruiksklaar aan. Geen IT-bezoek vereist.",
    thumbnail: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&q=80",
  },
  {
    title: "Security by Default",
    desc: "FileVault, MDM en endpoint bescherming actief van dag één.",
    thumbnail: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80",
  },
  {
    title: "Seamless Integration",
    desc: "Naadloze koppeling met Microsoft 365, Slack en meer.",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
  },
];

export default function FleetManagement() {
  return (
    <section id="fleet" className="py-20 md:py-28" style={{ background: "#ffffff" }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div
            className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ background: "rgba(0,113,227,0.08)", color: "#0071e3" }}
          >
            Jamf Pro · Apple MDM
          </div>
          <h2
            className="font-bold mb-4"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", color: "#1d1d1f" }}
          >
            Mac Fleet Management
          </h2>
          <p className="mx-auto" style={{ fontSize: "1.05rem", color: "#6e6e73", maxWidth: "520px" }}>
            Volledig beheer van uw Apple-vloot — van aanschaf tot pensionering.
            Automatisch, veilig en schaalbaar.
          </p>
        </div>

        {/* Mac devices image */}
        <div
          className="rounded-2xl overflow-hidden mb-12"
          style={{ boxShadow: "0 16px 48px rgba(0,0,0,0.1)", height: "280px" }}
        >
          <img
            src="https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=1400&q=80"
            alt="Mac apparaten"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Feature icons row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="text-center p-4 rounded-xl transition-all cursor-pointer"
              style={{ background: "#f5f5f7" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.background = "rgba(0,113,227,0.06)";
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.background = "#f5f5f7";
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
              }}
            >
              <div className="flex justify-center mb-2">{feature.icon}</div>
              <div className="font-semibold text-xs mb-1" style={{ color: "#1d1d1f" }}>
                {feature.title}
              </div>
              <div style={{ fontSize: "0.72rem", color: "#6e6e73", lineHeight: 1.4 }}>
                {feature.desc}
              </div>
            </div>
          ))}
        </div>

        {/* Video cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videoCards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl overflow-hidden cursor-pointer group"
              style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.1)" }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={card.thumbnail}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ background: "rgba(0,0,0,0.35)" }}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center transition-transform group-hover:scale-110"
                    style={{ background: "rgba(255,255,255,0.9)" }}
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M5 3l9 5-9 5V3z" fill="#1d1d1f" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-4" style={{ background: "#ffffff" }}>
                <h3 className="font-semibold mb-1" style={{ fontSize: "0.95rem", color: "#1d1d1f" }}>
                  {card.title}
                </h3>
                <p style={{ fontSize: "0.82rem", color: "#6e6e73" }}>{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
