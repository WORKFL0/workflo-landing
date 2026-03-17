const devices = [
  { name: "MacBook Pro 16\"", user: "Sarah K.", os: "macOS 14.4", battery: 94, status: "healthy" },
  { name: "MacBook Air M3", user: "James L.", os: "macOS 14.4", battery: 67, status: "healthy" },
  { name: "Mac Studio", user: "Design Team", os: "macOS 14.3", battery: 100, status: "update" },
  { name: "MacBook Pro 14\"", user: "Alex R.", os: "macOS 14.4", battery: 41, status: "healthy" },
  { name: "iMac 27\"", user: "Reception", os: "macOS 14.4", battery: 100, status: "healthy" },
];

const statusColors: Record<string, string> = {
  healthy: "#34d399",
  update: "#f59e0b",
  warning: "#ef4444",
};

export default function FleetManagement() {
  return (
    <section id="fleet" className="relative py-32 px-6 overflow-hidden">
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 65%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: copy */}
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass mb-5 border border-emerald-500/20">
            <span className="text-xs text-emerald-300 font-medium tracking-wide uppercase">Mac fleet management</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
            Every device,
            <br />
            <span className="gradient-text">always in view.</span>
          </h2>
          <p className="text-white/40 text-lg leading-relaxed mb-8">
            A clean, technical command center for your entire Mac fleet. Spot issues before
            users notice them. Push fixes silently. Stay ahead.
          </p>
          <ul className="space-y-4">
            {[
              "Live device inventory with hardware specs",
              "Battery health trending over time",
              "Automated policy enforcement",
              "One-click remote wipe for lost devices",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-white/60 text-sm">
                <span className="mt-0.5 w-4 h-4 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center flex-shrink-0">
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                    <path d="M1.5 4l2 2 3-3" stroke="#34d399" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Right: device table */}
        <div
          className="glass-strong rounded-2xl overflow-hidden"
          style={{ boxShadow: "0 40px 80px rgba(0,0,0,0.4)" }}
        >
          {/* Table header */}
          <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between">
            <div>
              <div className="text-sm font-semibold text-white">Fleet Overview</div>
              <div className="text-xs text-white/30 mt-0.5">1,247 devices · 99.2% compliant</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-white/40">Live</span>
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 divide-x divide-white/5 border-b border-white/5">
            {[
              { label: "Total", value: "1,247", sub: "devices" },
              { label: "Healthy", value: "1,236", sub: "99.2%" },
              { label: "Alerts", value: "11", sub: "need attention" },
            ].map((s) => (
              <div key={s.label} className="px-4 py-3">
                <div className="text-xs text-white/30">{s.label}</div>
                <div className="text-lg font-semibold text-white">{s.value}</div>
                <div className="text-xs text-white/25">{s.sub}</div>
              </div>
            ))}
          </div>

          {/* Device rows */}
          <div className="divide-y divide-white/5">
            {devices.map((device) => (
              <div key={device.name} className="px-6 py-3.5 flex items-center gap-4 hover:bg-white/[0.02] transition-colors">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(255,255,255,0.05)" }}
                >
                  <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
                    <rect x="0.5" y="0.5" width="15" height="9" rx="1.5" stroke="white" strokeOpacity="0.4" />
                    <path d="M5 11.5h6" stroke="white" strokeOpacity="0.4" strokeLinecap="round" />
                    <path d="M8 9.5v2" stroke="white" strokeOpacity="0.4" strokeLinecap="round" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm text-white font-medium truncate">{device.name}</div>
                  <div className="text-xs text-white/30">{device.user} · {device.os}</div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="hidden sm:flex items-center gap-1.5">
                    <div className="w-16 h-1 rounded-full bg-white/10 overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${device.battery}%`,
                          background: device.battery > 70 ? "#34d399" : device.battery > 30 ? "#f59e0b" : "#ef4444",
                        }}
                      />
                    </div>
                    <span className="text-xs text-white/30 w-8 text-right">{device.battery}%</span>
                  </div>
                  <div
                    className="px-2 py-0.5 rounded-full text-xs font-medium"
                    style={{
                      background: statusColors[device.status] + "15",
                      color: statusColors[device.status],
                      border: `1px solid ${statusColors[device.status]}25`,
                    }}
                  >
                    {device.status}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="px-6 py-4 border-t border-white/5">
            <button className="text-xs text-violet-400 hover:text-violet-300 transition-colors">
              View all 1,247 devices →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
