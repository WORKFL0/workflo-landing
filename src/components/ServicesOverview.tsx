const services = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="3" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 19h6M10 15v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Device Enrollment",
    description: "Zero-touch provisioning. New Macs arrive ready to work — no IT visit required.",
    color: "#8b5cf6",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2L3 6v4c0 4.418 3.134 8.555 7 9 3.866-.445 7-4.582 7-9V6l-7-4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M7 10l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Security Compliance",
    description: "Continuous compliance checks keep every device aligned with your security policies.",
    color: "#34d399",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 6v4l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Patch Management",
    description: "OS updates and app patches deployed silently, on schedule, without disrupting work.",
    color: "#3b82f6",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M3 5h14M3 10h14M3 15h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "App Catalog",
    description: "A curated self-service catalog so teams get the tools they need, instantly.",
    color: "#f59e0b",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2C5.58 2 2 5.58 2 10s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 6v4l2.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Real-time Monitoring",
    description: "Live dashboards surfacing device health, battery cycles, and storage trends.",
    color: "#ec4899",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M4 4h12v8a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 12v3M12 12v3M6 18h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Remote Control",
    description: "Help any employee in seconds with secure, permission-based remote sessions.",
    color: "#6366f1",
  },
];

export default function ServicesOverview() {
  return (
    <section id="services" className="relative py-32 px-6 overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(139,92,246,0.06) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass mb-5 border border-blue-500/20">
            <span className="text-xs text-blue-300 font-medium tracking-wide uppercase">Services overview</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Everything your Mac fleet
            <br />
            <span className="gradient-text">needs in one place.</span>
          </h2>
          <p className="text-white/40 text-lg max-w-xl mx-auto">
            From enrollment to retirement, Workflo handles every stage of your device lifecycle
            with elegant, automated workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => (
            <div
              key={service.title}
              className="glass rounded-2xl p-6 group hover:bg-white/[0.06] transition-all duration-300 hover:-translate-y-1"
              style={{
                boxShadow: `inset 0 1px 0 rgba(255,255,255,0.06)`,
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{
                  background: service.color + "15",
                  border: `1px solid ${service.color}25`,
                  color: service.color,
                }}
              >
                {service.icon}
              </div>
              <h3 className="text-white font-semibold mb-2">{service.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{service.description}</p>
              <div
                className="mt-4 flex items-center gap-1.5 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ color: service.color }}
              >
                Learn more
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2.5 6h7M6.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
