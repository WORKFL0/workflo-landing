const partners = [
  {
    name: "Apple",
    logo: (
      <svg viewBox="0 0 50 50" className="h-8 w-auto" fill="currentColor">
        <path d="M38.71 26.2c-.05-4.93 4.03-7.3 4.21-7.42-2.3-3.36-5.87-3.82-7.14-3.87-3.03-.31-5.94 1.79-7.48 1.79-1.56 0-3.94-1.75-6.49-1.7-3.32.05-6.4 1.93-8.11 4.88-3.48 6.03-.89 14.95 2.49 19.84 1.66 2.39 3.63 5.07 6.21 4.97 2.5-.1 3.44-1.6 6.47-1.6 3.02 0 3.88 1.6 6.52 1.55 2.69-.04 4.38-2.42 6.03-4.82 1.9-2.76 2.69-5.44 2.73-5.58-.06-.03-5.23-2.01-5.44-8.04zM33.76 12.4c1.38-1.67 2.31-3.99 2.06-6.3-1.99.08-4.4 1.33-5.83 2.99-1.28 1.48-2.4 3.84-2.1 6.11 2.22.17 4.49-1.13 5.87-2.8z" />
      </svg>
    ),
  },
  {
    name: "Jamf",
    logo: (
      <div className="h-8 flex items-center">
        <span className="font-bold text-xl tracking-tight">jamf</span>
      </div>
    ),
  },
  {
    name: "Microsoft",
    logo: (
      <svg viewBox="0 0 50 50" className="h-8 w-auto" fill="currentColor">
        <path d="M5 5h19v19H5zM26 5h19v19H26zM5 26h19v19H5zM26 26h19v19H26z" />
      </svg>
    ),
  },
  {
    name: "Cisco",
    logo: (
      <div className="h-8 flex items-center">
        <span className="font-bold text-lg tracking-widest uppercase">CISCO</span>
      </div>
    ),
  },
  {
    name: "Ubiquiti",
    logo: (
      <div className="h-8 flex items-center gap-2">
        <div className="w-6 h-6 rounded-full border-2 border-current flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-current" />
        </div>
        <span className="font-bold text-sm tracking-wider uppercase">Ubiquiti</span>
      </div>
    ),
  },
  {
    name: "LiDO",
    logo: (
      <div className="h-8 flex items-center">
        <span className="font-bold text-lg tracking-wider uppercase">LiDO</span>
      </div>
    ),
  },
];

// Duplicate for seamless loop
const allPartners = [...partners, ...partners];

export default function Partners() {
  return (
    <section
      id="partners"
      className="py-14 overflow-hidden"
      style={{ background: "#f5f5f7", borderTop: "1px solid rgba(0,0,0,0.05)" }}
    >
      <div className="max-w-6xl mx-auto px-6 mb-8 text-center">
        <p style={{ fontSize: "0.82rem", fontWeight: 600, color: "#6e6e73", letterSpacing: "0.1em", textTransform: "uppercase" }}>
          Onze partners
        </p>
      </div>

      {/* Scrolling carousel */}
      <div className="relative">
        {/* Gradient fades */}
        <div
          className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #f5f5f7, transparent)" }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #f5f5f7, transparent)" }}
        />

        <div
          className="flex gap-12 items-center"
          style={{
            display: "flex",
            width: "max-content",
            animation: "scroll-left 28s linear infinite",
          }}
        >
          {allPartners.map((partner, i) => (
            <div
              key={`${partner.name}-${i}`}
              className="partner-logo flex items-center justify-center px-6 cursor-pointer"
              style={{ color: "#1d1d1f", minWidth: "120px" }}
              title={partner.name}
            >
              {partner.logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
