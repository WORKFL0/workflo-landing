"use client";

const supportOptions = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z" stroke="#0071e3" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Live Support",
    desc: "Direct in gesprek met een Mac-expert. Gemiddelde reactietijd: 2 minuten.",
    badge: "Online",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" stroke="#0071e3" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" stroke="#0071e3" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Knowledge Base",
    desc: "Honderden handleidingen en how-to's voor uw Apple-omgeving.",
    badge: "500+ artikelen",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="3" width="20" height="14" rx="2" stroke="#0071e3" strokeWidth="1.8" />
        <path d="M8 21h8M12 17v4" stroke="#0071e3" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M7 10l2 2 4-4" stroke="#0071e3" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Remote Help",
    desc: "Ons team neemt veilig de controle over uw Mac voor snelle probleemoplossing.",
    badge: "Veilig & Versleuteld",
  },
];

export default function Support() {
  return (
    <section
      id="support"
      className="relative py-20 md:py-28 overflow-hidden"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1920&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center top",
      }}
    >
      {/* Light overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "rgba(245,245,247,0.88)" }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        {/* Centered glass card */}
        <div
          className="glass-card p-8 md:p-12 text-center"
          style={{ boxShadow: "0 24px 64px rgba(0,0,0,0.1)" }}
        >
          <div
            className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-6"
            style={{ background: "rgba(0,113,227,0.08)", color: "#0071e3" }}
          >
            Support & Helpdesk
          </div>
          <h2
            className="font-bold mb-4"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", color: "#1d1d1f" }}
          >
            Wij staan altijd voor u klaar
          </h2>
          <p
            className="mb-8 mx-auto"
            style={{ fontSize: "1.05rem", color: "#6e6e73", maxWidth: "440px", lineHeight: 1.6 }}
          >
            Ons Nederlandse support team is beschikbaar wanneer u ons nodig heeft.
            Snel, persoonlijk en altijd in uw taal.
          </p>

          {/* Support options */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {supportOptions.map((option) => (
              <div
                key={option.title}
                className="p-4 rounded-xl text-left transition-all cursor-pointer group"
                style={{
                  background: "rgba(255,255,255,0.6)",
                  border: "1px solid rgba(0,0,0,0.06)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background = "rgba(0,113,227,0.05)";
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(0,113,227,0.2)";
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.6)";
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(0,0,0,0.06)";
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                  style={{ background: "rgba(0,113,227,0.08)" }}
                >
                  {option.icon}
                </div>
                <h3 className="font-semibold mb-1" style={{ fontSize: "0.9rem", color: "#1d1d1f" }}>
                  {option.title}
                </h3>
                <p style={{ fontSize: "0.78rem", color: "#6e6e73", lineHeight: 1.5, marginBottom: "8px" }}>
                  {option.desc}
                </p>
                <span
                  className="inline-block px-2 py-0.5 rounded-full text-xs font-medium"
                  style={{ background: "rgba(0,113,227,0.1)", color: "#0071e3" }}
                >
                  {option.badge}
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-base transition-all"
            style={{
              background: "#F5C41E",
              color: "#1d1d1f",
              boxShadow: "0 4px 20px rgba(245,196,30,0.4)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "#f0ba0a";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "#F5C41E";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
            }}
          >
            Get Help Now
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>

          <p style={{ marginTop: "12px", fontSize: "0.78rem", color: "#6e6e73" }}>
            Of bel ons: <a href="tel:+31206001234" style={{ color: "#0071e3" }}>+31 (0)20 600 1234</a>
          </p>
        </div>
      </div>
    </section>
  );
}
