"use client";

// Matches Stitch screen 6: dark server room, sidebar, 3 dark glass cards

const quickLinks = [
  "IT Consulting", "Cybersecurity", "Cloud", "Connectivity",
  "Managed IT", "Audio Visueel", "Project Management",
];

const cards = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 3l10 5v7c0 6-4 11-10 13C10 26 6 21 6 15V8L16 3z" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="rgba(255,255,255,0.08)"/>
        <path d="M11 16l3.5 3.5 6-6" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Invisible Protection",
    desc: "Workflo handles the complex security so you don't have to. Continuous monitoring and threat prevention.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="3" y="9" width="26" height="16" rx="2" stroke="white" strokeWidth="1.8" fill="rgba(255,255,255,0.08)"/>
        <circle cx="16" cy="17" r="3.5" stroke="white" strokeWidth="1.6"/>
        <path d="M9 9V7a7 7 0 0114 0v2" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    title: "Secure Network Infrastructure",
    desc: "Robust and resilient network design for seamless, secure connectivity. Cisco Meraki & Ubiquiti.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 5c-6 0-11 4-11 9v2c0 4 2.5 7.5 6.5 9L16 28l4.5-3c4-1.5 6.5-5 6.5-9v-2c0-5-5-9-11-9z" stroke="white" strokeWidth="1.8" fill="rgba(255,255,255,0.08)"/>
        <path d="M12 17l3 3 6-6" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "High-Availability Cloud Security",
    desc: "Advanced cloud protection for your Mac environment. 99.9% uptime, always on.",
  },
];

export default function SecureInfrastructure() {
  return (
    <section
      id="security"
      className="relative py-20 md:py-28 overflow-hidden"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(135deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.68) 100%)" }}
      />

      <div className="relative z-10 max-w-[1120px] mx-auto px-6">

        {/* Layout: sidebar + main — matches Stitch screen 6 */}
        <div className="flex gap-8">

          {/* Left sidebar */}
          <aside className="hidden lg:flex flex-col gap-2 w-[170px] flex-shrink-0 pt-10">
            {quickLinks.map((link) => (
              <div
                key={link}
                className="py-2 px-3 rounded-lg text-xs font-medium cursor-pointer transition-all"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "rgba(255,255,255,0.7)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.15)";
                  (e.currentTarget as HTMLDivElement).style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.08)";
                  (e.currentTarget as HTMLDivElement).style.color = "rgba(255,255,255,0.7)";
                }}
              >
                {link}
              </div>
            ))}
          </aside>

          {/* Main content */}
          <div className="flex-1">
            {/* Header */}
            <div className="mb-10">
              <div
                className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.8)" }}
              >
                Beveiliging & Infrastructuur
              </div>
              <h2 className="font-bold text-white mb-3" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
                Workflo Secure Infrastructure
              </h2>
              <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.6)", maxWidth: "480px" }}>
                Meerdere beveiligingslagen die samenwerken om uw bedrijf te beschermen.
                Proactief, onzichtbaar en altijd actief.
              </p>
            </div>

            {/* 3 dark glass cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
              {cards.map((card) => (
                <div key={card.title} className="dark-card p-6">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: "rgba(255,255,255,0.08)" }}
                  >
                    {card.icon}
                  </div>
                  <h3 className="font-semibold text-white mb-2" style={{ fontSize: "0.95rem" }}>{card.title}</h3>
                  <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.6 }}>{card.desc}</p>
                </div>
              ))}
            </div>

            {/* Trust bar — same as screen 6 */}
            <div
              className="flex flex-wrap items-center gap-6 px-5 py-3 rounded-xl"
              style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }}
            >
              <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.4)" }}>Trust</span>
              <div className="flex items-center gap-5 flex-wrap" style={{ color: "rgba(255,255,255,0.5)" }}>
                <svg viewBox="0 0 814 1000" className="h-5 w-auto fill-current">
                  <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-42.3-162.1-109.4C85 459 55.1 338.6 55.1 222c0-90.4 31.7-174.4 89.3-236.9C220.7 12.7 296.4-1 368.7-1c71.1 0 136.6 25 185 25.3 45.7.2 115.9-25.5 198.3-25.5zM541.2 37.6c34.1-40.8 94.2-65 147.3-65 7 48.5-18.3 97.1-51.5 131.5-31.1 32.1-87.5 56.4-142.2 51.1-8.5-47.6 18-99.1 46.4-117.6z"/>
                </svg>
                <div className="flex items-center gap-1.5">
                  <svg viewBox="0 0 50 50" className="h-4 w-auto fill-current"><path d="M5 5h19v19H5zM26 5h19v19H26zM5 26h19v19H5zM26 26h19v19H26z"/></svg>
                  <span className="font-semibold text-sm">Microsoft</span>
                </div>
                <span className="font-bold text-sm tracking-widest uppercase">LiDO</span>
                <span className="font-medium text-sm">Lin Professioneel</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
