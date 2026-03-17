"use client";

// Matches Stitch screen 5: "Support & Helpdesk"

const options = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z" stroke="#1d1d1f" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Live Support",
    desc: "Direct in gesprek met een Mac-expert. Gemiddelde reactietijd: 2 minuten.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" stroke="#1d1d1f" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" stroke="#1d1d1f" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Knowledge Base",
    desc: "Honderden handleidingen en how-to's voor uw Apple-omgeving.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="3" width="20" height="14" rx="2" stroke="#1d1d1f" strokeWidth="1.6"/>
        <path d="M8 21h8M12 17v4" stroke="#1d1d1f" strokeWidth="1.6" strokeLinecap="round"/>
        <path d="M7 10l2 2 4-4" stroke="#1d1d1f" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Remote Help",
    desc: "Ons team neemt veilig de controle over uw Mac voor snelle probleemoplossing.",
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
      {/* Light overlay — matches screen 5 (bright, airy) */}
      <div className="absolute inset-0" style={{ background: "rgba(245,245,247,0.82)" }}/>

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">

        {/* Centered glass card — matches Stitch screen 5 */}
        <div
          className="glass-card p-8 md:p-12"
          style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.08)" }}
        >
          <h2
            className="font-bold mb-8"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.4rem)", color: "#1d1d1f" }}
          >
            Support &amp; Helpdesk
          </h2>

          {/* 3 option cards — matches Stitch screen 5 */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {options.map((opt) => (
              <div
                key={opt.title}
                className="p-5 rounded-xl text-left cursor-pointer transition-all"
                style={{
                  background: "rgba(255,255,255,0.7)",
                  border: "1px solid rgba(0,0,0,0.06)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.95)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 24px rgba(0,0,0,0.08)";
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.7)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "";
                  (e.currentTarget as HTMLDivElement).style.transform = "";
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                  style={{ background: "rgba(0,0,0,0.04)", border: "1px solid rgba(0,0,0,0.06)" }}
                >
                  {opt.icon}
                </div>
                <h3 className="font-semibold mb-1" style={{ fontSize: "0.88rem", color: "#1d1d1f" }}>{opt.title}</h3>
                <p style={{ fontSize: "0.75rem", color: "#6e6e73", lineHeight: 1.5 }}>{opt.desc}</p>
              </div>
            ))}
          </div>

          {/* Yellow CTA — matches Stitch screen 5 "Get Help Now" */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-base transition-all"
            style={{ background: "#F5C41E", color: "#1d1d1f", boxShadow: "0 4px 20px rgba(245,196,30,0.35)" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.filter = "brightness(1.05)";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.filter = "";
              (e.currentTarget as HTMLAnchorElement).style.transform = "";
            }}
          >
            Get Help Now
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

          <p className="mt-4" style={{ fontSize: "0.78rem", color: "#6e6e73" }}>
            Of bel ons:{" "}
            <a href="tel:+31206001234" style={{ color: "#0071e3" }}>+31 (0)20 600 1234</a>
          </p>
        </div>
      </div>
    </section>
  );
}
