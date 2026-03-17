export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0" style={{ background: "#080a0f" }} />

      {/* Ambient orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full animate-pulse-glow pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] rounded-full animate-pulse-glow pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)",
          filter: "blur(60px)",
          animationDelay: "2s",
        }}
      />
      <div
        className="absolute top-1/2 right-1/3 w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(52,211,153,0.08) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass mb-8 border border-violet-500/20">
          <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
          <span className="text-xs text-violet-300 font-medium tracking-wide uppercase">
            Now in public beta
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.05] mb-6">
          Your Mac team,{" "}
          <br />
          <span className="gradient-text">running like silk.</span>
        </h1>

        <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed mb-10">
          Workflo gives IT teams invisible protection, effortless fleet management,
          and a workspace that feels as calm as it is powerful.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a
            href="#support"
            className="px-8 py-4 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-semibold text-base transition-all hover:shadow-lg hover:shadow-violet-500/25 hover:-translate-y-0.5"
          >
            Start free trial
          </a>
          <a
            href="#services"
            className="px-8 py-4 rounded-full glass hover:bg-white/[0.06] text-white/80 font-medium text-base transition-all border border-white/10 flex items-center gap-2"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="7" stroke="currentColor" strokeOpacity="0.6" />
              <path d="M6.5 5.5L10.5 8L6.5 10.5V5.5Z" fill="currentColor" fillOpacity="0.8" />
            </svg>
            Watch demo
          </a>
        </div>

        {/* Floating mock UI */}
        <div className="relative mx-auto max-w-4xl animate-float">
          <div
            className="glass-strong rounded-2xl p-1 overflow-hidden"
            style={{
              boxShadow: "0 0 80px rgba(139,92,246,0.12), 0 40px 80px rgba(0,0,0,0.5)",
            }}
          >
            {/* Window chrome */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
              <div className="flex-1 mx-4">
                <div className="glass rounded-md h-5 w-48 mx-auto" />
              </div>
            </div>
            {/* Dashboard preview */}
            <div className="p-6 grid grid-cols-3 gap-4 min-h-[240px] md:min-h-[320px]">
              {/* Sidebar */}
              <div className="col-span-1 space-y-3">
                {["Fleet Overview", "Security", "Services", "Helpdesk", "Analytics"].map((item, i) => (
                  <div
                    key={item}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                      i === 0 ? "bg-violet-600/20 border border-violet-500/20" : "hover:bg-white/5"
                    }`}
                  >
                    <div
                      className="w-4 h-4 rounded"
                      style={{
                        background: ["#8b5cf6", "#3b82f6", "#34d399", "#f59e0b", "#ec4899"][i] + "40",
                        border: `1px solid ${["#8b5cf6", "#3b82f6", "#34d399", "#f59e0b", "#ec4899"][i]}40`,
                      }}
                    />
                    <span className={`text-xs ${i === 0 ? "text-violet-300" : "text-white/40"}`}>{item}</span>
                  </div>
                ))}
              </div>
              {/* Main content */}
              <div className="col-span-2 space-y-4">
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "Devices", value: "1,247", color: "#8b5cf6" },
                    { label: "Healthy", value: "99.2%", color: "#34d399" },
                    { label: "Updates", value: "3", color: "#f59e0b" },
                  ].map((stat) => (
                    <div key={stat.label} className="glass rounded-xl p-3">
                      <div className="text-xs text-white/40 mb-1">{stat.label}</div>
                      <div className="text-lg font-semibold" style={{ color: stat.color }}>
                        {stat.value}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="glass rounded-xl p-4 flex-1">
                  <div className="text-xs text-white/40 mb-3">Fleet Health</div>
                  <div className="space-y-2">
                    {[85, 95, 72, 100, 88].map((val, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-16 text-xs text-white/30">MacBook {i + 1}</div>
                        <div className="flex-1 h-1.5 rounded-full bg-white/5">
                          <div
                            className="h-full rounded-full transition-all"
                            style={{
                              width: `${val}%`,
                              background: val > 90 ? "#34d399" : val > 75 ? "#8b5cf6" : "#f59e0b",
                            }}
                          />
                        </div>
                        <div className="text-xs text-white/30 w-8">{val}%</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social proof */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-white/30">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-7 h-7 rounded-full border-2 border-[#080a0f]"
                  style={{
                    background: `hsl(${i * 60 + 200}, 70%, 50%)`,
                  }}
                />
              ))}
            </div>
            <span>Trusted by 2,000+ Mac teams</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-white/10" />
          <div className="flex items-center gap-1">
            {[0, 1, 2, 3, 4].map((i) => (
              <svg key={i} className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="ml-1">4.9 / 5 on G2</span>
          </div>
        </div>
      </div>
    </section>
  );
}
