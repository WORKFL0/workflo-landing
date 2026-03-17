"use client";

// Matches Stitch screen 2

const features = [
  { icon: "🖥", title: "Device Enrollment", desc: "Zero-touch via Apple Business Manager" },
  { icon: "⚙️", title: "Configuration Profiles", desc: "Automatische instellingen per apparaat" },
  { icon: "↻", title: "Software Updates", desc: "Stille updates buiten werktijden" },
  { icon: "📋", title: "Inventory Management", desc: "Real-time overzicht van uw fleet" },
  { icon: "🔒", title: "Remote Wipe", desc: "Veilig wissen bij verlies of diefstal" },
];

const videoCards = [
  {
    title: "Zero-Touch Deployment",
    desc: "Nieuwe Macs komen gebruiksklaar aan. Geen IT-bezoek vereist.",
    img: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&q=80",
  },
  {
    title: "Security by Default",
    desc: "FileVault, MDM en endpoint bescherming actief van dag één.",
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80",
  },
  {
    title: "Seamless Integration",
    desc: "Naadloze koppeling met Microsoft 365, Slack en meer.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
  },
];

export default function FleetManagement() {
  return (
    <section id="fleet" className="py-20 md:py-28" style={{ background: "#ffffff" }}>
      <div className="max-w-[1120px] mx-auto px-6">

        {/* Header image — matches Stitch screen 2 top */}
        <div className="relative rounded-2xl overflow-hidden mb-12" style={{ height: "260px" }}>
          <img
            src="https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=1400&q=80"
            alt="Mac Fleet"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ background: "rgba(0,0,0,0.28)" }}
          >
            <h2
              className="font-bold text-white"
              style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", textShadow: "0 2px 20px rgba(0,0,0,0.4)" }}
            >
              Mac Fleet Management
            </h2>
          </div>
        </div>

        {/* Two-column: feature list + MacBook image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-14">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="text-center p-4 rounded-xl transition-all cursor-pointer"
                style={{ background: "#f5f5f7" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background = "rgba(0,113,227,0.07)";
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background = "#f5f5f7";
                  (e.currentTarget as HTMLDivElement).style.transform = "";
                }}
              >
                <div className="text-2xl mb-2">{f.icon}</div>
                <div className="font-semibold text-xs mb-1" style={{ color: "#1d1d1f" }}>{f.title}</div>
                <div style={{ fontSize: "0.7rem", color: "#6e6e73", lineHeight: 1.4 }}>{f.desc}</div>
              </div>
            ))}
          </div>
          <div className="rounded-2xl overflow-hidden" style={{ boxShadow: "0 16px 48px rgba(0,0,0,0.1)" }}>
            <img
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80"
              alt="MacBook Pro"
              className="w-full h-64 object-cover"
            />
          </div>
        </div>

        {/* Video cards — matches Stitch screen 2 bottom */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videoCards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl overflow-hidden cursor-pointer group"
              style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.08)" }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center" style={{ background: "rgba(0,0,0,0.32)" }}>
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center transition-transform group-hover:scale-110"
                    style={{ background: "#F5C41E" }}
                  >
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <path d="M5 3l9 5-9 5V3z" fill="#1d1d1f"/>
                    </svg>
                  </div>
                </div>
                <div
                  className="absolute bottom-3 left-3 text-white text-xs font-medium px-2 py-1 rounded-full"
                  style={{ background: "rgba(0,0,0,0.5)" }}
                >
                  Play Video
                </div>
              </div>
              <div className="p-4 bg-white">
                <h3 className="font-semibold mb-1" style={{ fontSize: "0.9rem", color: "#1d1d1f" }}>{card.title}</h3>
                <p style={{ fontSize: "0.8rem", color: "#6e6e73" }}>{card.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
