"use client";

const quickLinks = [
  { name: "IT Consulting", active: true },
  { name: "Cybersecurity", active: false },
  { name: "Cloud", active: false },
  { name: "Connectivity", active: false },
  { name: "Managed IT", active: false },
  { name: "Audio Visueel", active: false },
  { name: "Project Management", active: false },
];

const services = [
  {
    title: "Managed Mac IT",
    desc: "Volledig beheer van uw Apple-apparaten via Jamf. Automatische updates en monitoring — zonder zorgen.",
    img: "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?w=600&q=80",
  },
  {
    title: "Mac Cloud Integration",
    desc: "Microsoft 365, Azure en cloud infrastructuur naadloos geïntegreerd in uw Apple-werkplek.",
    img: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=600&q=80",
    active: true,
  },
  {
    title: "Mac Security",
    desc: "Endpoint beveiliging, netwerk monitoring en compliance — uw bedrijfsdata altijd veilig.",
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80",
    active: true,
  },
  {
    title: "Mac Connectivity",
    desc: "Cisco Meraki en Ubiquiti netwerken voor maximale prestaties en betrouwbaarheid.",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
    active: true,
  },
  {
    title: "Remote Mac Support",
    desc: "Directe hulp op afstand of on-site. Onze experts lossen problemen snel op.",
    img: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=600&q=80",
    active: true,
  },
  {
    title: "Mac Project Management",
    desc: "Van migraties tot rollouts — IT-projecten van begin tot eind professioneel beheerd.",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",
    active: true,
  },
];

const partners = [
  {
    label: "Apple",
    logo: (
      <svg viewBox="0 0 814 1000" className="h-6 w-auto fill-current">
        <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-42.3-162.1-109.4C85 459 55.1 338.6 55.1 222c0-90.4 31.7-174.4 89.3-236.9C220.7 12.7 296.4-1 368.7-1c71.1 0 136.6 25 185 25.3 45.7.2 115.9-25.5 198.3-25.5zM541.2 37.6c34.1-40.8 94.2-65 147.3-65 7 48.5-18.3 97.1-51.5 131.5-31.1 32.1-87.5 56.4-142.2 51.1-8.5-47.6 18-99.1 46.4-117.6z"/>
      </svg>
    ),
  },
  {
    label: "Jamf",
    logo: (
      <svg viewBox="0 0 200 200" className="h-7 w-auto fill-current">
        <path d="M100 10C50.3 10 10 50.3 10 100s40.3 90 90 90 90-40.3 90-90S149.7 10 100 10zm0 160c-38.6 0-70-31.4-70-70s31.4-70 70-70 70 31.4 70 70-31.4 70-70 70zm-10-100h20v60h-20z"/>
      </svg>
    ),
    text: "jamf",
  },
  {
    label: "Microsoft",
    logo: (
      <svg viewBox="0 0 50 50" className="h-5 w-auto fill-current">
        <path d="M5 5h19v19H5zM26 5h19v19H26zM5 26h19v19H5zM26 26h19v19H26z"/>
      </svg>
    ),
    text: "Microsoft",
  },
  { label: "LiDO", text: "LiDO" },
  { label: "Lin Professioneel", text: "Lin Professioneel" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex flex-col overflow-hidden"
      style={{ minHeight: "100svh" }}
    >
      {/* Blurred background photo — matches Stitch screen 1 */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(4px)",
          transform: "scale(1.04)",
        }}
      />
      {/* Subtle light overlay to keep it airy */}
      <div className="absolute inset-0 z-0" style={{ background: "rgba(245,245,247,0.35)" }} />

      {/* Main layout: sidebar + cards */}
      <div className="relative z-10 flex-1 flex flex-col max-w-[1120px] w-full mx-auto px-6" style={{ paddingTop: "80px", paddingBottom: "16px" }}>

        {/* Grid: sidebar left + service cards right */}
        <div className="flex gap-6 flex-1" style={{ minHeight: 0 }}>

          {/* Left sidebar — Quick-links */}
          <aside className="hidden lg:flex flex-col gap-2 w-[190px] flex-shrink-0">
            <span
              className="text-[11px] font-bold uppercase tracking-widest mb-1 pl-1"
              style={{ color: "rgba(29,29,31,0.55)" }}
            >
              Quick-links
            </span>
            {quickLinks.map((link) => (
              <div key={link.name} className={`ql-item ${link.active ? "active" : ""}`}>
                {link.name}
              </div>
            ))}
          </aside>

          {/* 3×2 Service card grid — fills available height */}
          <div
            className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            style={{ gridTemplateRows: "1fr 1fr" }}
          >
            {services.map((svc) => (
              <div key={svc.title} className="svc-card flex flex-col">
                {/* Card photo — 58% of card height */}
                <div className="overflow-hidden" style={{ height: "58%", flexShrink: 0 }}>
                  <img
                    src={svc.img}
                    alt={svc.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Card text — compact */}
                <div className="p-3 flex flex-col flex-1 min-h-0">
                  <h3 className="font-bold mb-1" style={{ fontSize: "0.82rem", color: "#1d1d1f" }}>
                    {svc.title}
                  </h3>
                  <p style={{ fontSize: "0.7rem", color: "#424245", lineHeight: 1.45, overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" }}>
                    {svc.desc}
                  </p>
                  {svc.active && (
                    <div className="mt-auto" style={{ borderBottom: "2px solid #F5C41E", width: "28px" }} />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust band — matches bottom of Stitch screen 1 */}
        <div className="trust-band mt-6 px-6 py-3 flex items-center gap-6 flex-wrap lg:ml-[206px]">
          <span
            className="text-xs font-semibold uppercase tracking-wider"
            style={{ color: "rgba(29,29,31,0.45)" }}
          >
            Trust
          </span>
          <div className="flex items-center gap-6 flex-wrap" style={{ color: "#1d1d1f", opacity: 0.55 }}>
            {/* Apple */}
            <svg viewBox="0 0 814 1000" className="h-5 w-auto fill-current">
              <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-42.3-162.1-109.4C85 459 55.1 338.6 55.1 222c0-90.4 31.7-174.4 89.3-236.9C220.7 12.7 296.4-1 368.7-1c71.1 0 136.6 25 185 25.3 45.7.2 115.9-25.5 198.3-25.5zM541.2 37.6c34.1-40.8 94.2-65 147.3-65 7 48.5-18.3 97.1-51.5 131.5-31.1 32.1-87.5 56.4-142.2 51.1-8.5-47.6 18-99.1 46.4-117.6z"/>
            </svg>
            {/* Jamf */}
            <span className="font-bold text-sm tracking-wide">▲ jamf</span>
            {/* Microsoft */}
            <div className="flex items-center gap-1.5">
              <svg viewBox="0 0 50 50" className="h-4 w-auto fill-current">
                <path d="M5 5h19v19H5zM26 5h19v19H26zM5 26h19v19H5zM26 26h19v19H26z"/>
              </svg>
              <span className="font-semibold text-sm">Microsoft</span>
            </div>
            {/* LiDO */}
            <span className="font-bold text-sm tracking-widest uppercase">LiDO</span>
            {/* Lin Professioneel */}
            <span className="font-medium text-sm">Lin Professioneel</span>
          </div>
        </div>

      </div>
    </section>
  );
}
