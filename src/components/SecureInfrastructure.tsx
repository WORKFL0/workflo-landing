const shields = [
  {
    title: "FileVault Encryption",
    description: "Full-disk encryption enforced across every Mac in your fleet, automatically.",
    icon: "🔐",
    color: "#8b5cf6",
  },
  {
    title: "Zero-Trust Access",
    description: "Device trust signals feed directly into your identity provider for conditional access.",
    icon: "🛡️",
    color: "#3b82f6",
  },
  {
    title: "Gatekeeper Control",
    description: "Define exactly which apps can run. Block unknown software before it runs.",
    icon: "🚫",
    color: "#34d399",
  },
  {
    title: "Audit Logs",
    description: "Immutable audit trail for every action — perfect for SOC 2, ISO 27001, and HIPAA.",
    icon: "📋",
    color: "#f59e0b",
  },
];

export default function SecureInfrastructure() {
  return (
    <section id="security" className="relative py-32 px-6 overflow-hidden">
      {/* Dark ambient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(15,10,30,0.8) 0%, transparent 100%)",
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(99,102,241,0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass mb-5 border border-violet-500/20">
            <span className="text-xs text-violet-300 font-medium tracking-wide uppercase">Secure infrastructure</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Invisible protection.
            <br />
            <span className="gradient-text-warm">Absolute confidence.</span>
          </h2>
          <p className="text-white/40 text-lg max-w-xl mx-auto">
            Security that works quietly in the background. Your team never notices it —
            and neither do threats.
          </p>
        </div>

        {/* Central graphic */}
        <div className="relative flex justify-center mb-16">
          <div className="relative">
            {/* Pulse rings */}
            {[160, 220, 280].map((size, i) => (
              <div
                key={size}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-500/10 animate-pulse-glow"
                style={{
                  width: size,
                  height: size,
                  animationDelay: `${i * 0.8}s`,
                }}
              />
            ))}
            {/* Center */}
            <div
              className="relative w-24 h-24 rounded-2xl flex items-center justify-center glass-strong"
              style={{ boxShadow: "0 0 60px rgba(139,92,246,0.3)" }}
            >
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path
                  d="M20 4L6 11v10c0 8.836 6.268 17.11 14 18 7.732-.89 14-9.164 14-18V11L20 4z"
                  fill="rgba(139,92,246,0.2)"
                  stroke="#8b5cf6"
                  strokeWidth="1.5"
                />
                <path
                  d="M14 20l4 4 8-8"
                  stroke="#a78bfa"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {shields.map((item) => (
            <div
              key={item.title}
              className="glass rounded-2xl p-6 hover:bg-white/[0.05] transition-all hover:-translate-y-1"
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="text-white font-semibold mb-2 text-sm">{item.title}</h3>
              <p className="text-white/35 text-xs leading-relaxed">{item.description}</p>
              <div className="mt-4 h-0.5 rounded-full" style={{ background: item.color + "40" }} />
            </div>
          ))}
        </div>

        {/* Compliance badges */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {["SOC 2 Type II", "ISO 27001", "HIPAA Ready", "GDPR Compliant", "FedRAMP"].map((badge) => (
            <div
              key={badge}
              className="glass px-4 py-2 rounded-full text-xs font-medium text-white/50 border border-white/5"
            >
              {badge}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
