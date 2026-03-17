"use client";

const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="6" width="20" height="14" rx="2" stroke="#0071e3" strokeWidth="1.8" />
        <path d="M10 20v2M18 20v2M7 22h14" stroke="#0071e3" strokeWidth="1.8" strokeLinecap="round" />
        <rect x="8" y="9" width="12" height="8" rx="1" fill="#0071e3" fillOpacity="0.12" />
      </svg>
    ),
    title: "Mac Management",
    description: "Volledig beheer van uw Apple-apparaten via Jamf. Automatische updates, configuratie en monitoring — zonder dat u er naar om hoeft te kijken.",
    delay: "0s",
    animClass: "animate-float",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4C14 4 6 8 6 14c0 4.4 3.6 8 8 8s8-3.6 8-8c0-6-8-10-8-10z" stroke="#0071e3" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="14" cy="14" r="3" fill="#0071e3" fillOpacity="0.2" stroke="#0071e3" strokeWidth="1.5" />
      </svg>
    ),
    title: "Cloud Oplossingen",
    description: "Microsoft 365, Azure en cloud infrastructuur — naadloos geïntegreerd in uw Apple-werkplek. Veilig, schaalbaar en betrouwbaar.",
    delay: "0.5s",
    animClass: "animate-float-2",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4l8 4v6c0 5-3.5 9.7-8 11C9.5 23.7 6 19 6 14V8l8-4z" stroke="#0071e3" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 14l3 3 5-5" stroke="#0071e3" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Cyber Security",
    description: "Proactieve bescherming tegen cyberdreigingen. Endpoint security, netwerk monitoring en compliance — uw bedrijfsdata altijd veilig.",
    delay: "1s",
    animClass: "animate-float-3",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="10" stroke="#0071e3" strokeWidth="1.8" />
        <path d="M4 14h20M14 4c-2.8 3-4.5 6.4-4.5 10s1.7 7 4.5 10M14 4c2.8 3 4.5 6.4 4.5 10s-1.7 7-4.5 10" stroke="#0071e3" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Connectivity",
    description: "Bedrijfsnetwerken ontworpen voor prestaties en betrouwbaarheid. Cisco Meraki, Ubiquiti en Wi-Fi oplossingen voor elk kantoor.",
    delay: "1.5s",
    animClass: "animate-float-4",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative z-10 py-20"
      style={{ background: "#f5f5f7" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className={`glass-card p-6 cursor-pointer group transition-all duration-300 ${service.animClass}`}
              style={{
                boxShadow: "0 8px 40px rgba(0,0,0,0.12)",
                animationDelay: service.delay,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 16px 48px rgba(0,113,227,0.15)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 40px rgba(0,0,0,0.12)";
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ background: "rgba(0,113,227,0.08)" }}
              >
                {service.icon}
              </div>
              <h3
                className="font-semibold mb-2"
                style={{ fontSize: "1rem", color: "#1d1d1f" }}
              >
                {service.title}
              </h3>
              <p style={{ fontSize: "0.85rem", color: "#6e6e73", lineHeight: 1.6 }}>
                {service.description}
              </p>
              <div
                className="mt-4 flex items-center gap-1 text-xs font-medium transition-all group-hover:gap-2"
                style={{ color: "#0071e3" }}
              >
                Meer info
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
