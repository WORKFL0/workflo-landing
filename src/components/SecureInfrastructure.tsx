"use client";

const cards = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 3l9 4.5v6.5c0 5.5-3.8 10.6-9 12-5.2-1.4-9-6.5-9-12V7.5L14 3z" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="rgba(255,255,255,0.08)" />
        <path d="M10 14l3 3 5-5" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Invisible Protection",
    desc: "Endpoint beveiliging die op de achtergrond werkt. Uw team merkt er niets van — maar dreigingen ook niet.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="8" width="22" height="14" rx="2" stroke="white" strokeWidth="1.6" fill="rgba(255,255,255,0.08)" />
        <circle cx="14" cy="15" r="3" stroke="white" strokeWidth="1.5" />
        <path d="M8 8V6a6 6 0 0112 0v2" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
    title: "Secure Network Infrastructure",
    desc: "Zakelijke netwerken met Cisco Meraki en Ubiquiti. Gesegmenteerd, gemonitord en altijd beschikbaar.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 5c-5 0-9 3-9 7v2c0 2.8 1.8 5.2 4.5 6.5L14 23l4.5-2.5C21.2 19.2 23 16.8 23 14v-2c0-4-4-7-9-7z" stroke="white" strokeWidth="1.6" fill="rgba(255,255,255,0.08)" />
        <path d="M10 14l3 3 6-6" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "High-Availability Cloud Security",
    desc: "Cloud-gebaseerde beveiliging met 99.9% uptime. Uw data is altijd beschermd, waar uw team ook werkt.",
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
        style={{ background: "linear-gradient(135deg, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.65) 100%)" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div
            className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
            style={{
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "rgba(255,255,255,0.8)",
            }}
          >
            Beveiliging & Infrastructuur
          </div>
          <h2
            className="font-bold mb-4"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", color: "#ffffff" }}
          >
            Workflo Secure Infrastructure
          </h2>
          <p
            className="mx-auto"
            style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.6)", maxWidth: "520px" }}
          >
            Meerdere beveiligingslagen die samenwerken om uw bedrijf te beschermen.
            Proactief, onzichtbaar en altijd actief.
          </p>
        </div>

        {/* 3 dark glass cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className="p-6 rounded-2xl transition-all cursor-pointer"
              style={{
                background: "rgba(0,0,0,0.45)",
                backdropFilter: "blur(16px)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.background = "rgba(0,113,227,0.2)";
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(0,113,227,0.4)";
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.background = "rgba(0,0,0,0.45)";
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.1)";
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ background: "rgba(255,255,255,0.08)" }}
              >
                {card.icon}
              </div>
              <h3 className="font-semibold mb-2" style={{ fontSize: "1rem", color: "#ffffff" }}>
                {card.title}
              </h3>
              <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.6 }}>
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Compliance badges */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {["ISO 27001", "GDPR Compliant", "NEN 7510", "AVG Conform", "SOC 2 Ready"].map((badge) => (
            <div
              key={badge}
              className="px-4 py-2 rounded-full text-xs font-medium"
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.15)",
                color: "rgba(255,255,255,0.6)",
              }}
            >
              {badge}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
