const testimonials = [
  {
    quote: "Workflo cut our onboarding from 3 hours to 12 minutes. New hires open the box and they're just... ready.",
    author: "Maya Chen",
    role: "Head of IT, Stripe",
    avatar: "MC",
    color: "#8b5cf6",
  },
  {
    quote: "We went from weekly fire drills to zero unplanned incidents in 6 months. The visibility alone is worth every dollar.",
    author: "Tom Rivera",
    role: "VP Engineering, Linear",
    avatar: "TR",
    color: "#3b82f6",
  },
  {
    quote: "SOC 2 audit used to be a quarterly nightmare. Now it's a dashboard view. We passed in one afternoon.",
    author: "Priya Nair",
    role: "CTO, Loom",
    avatar: "PN",
    color: "#34d399",
  },
];

const environments = [
  { label: "Home office", emoji: "🏡", desc: "Serene, distraction-free" },
  { label: "Coffee shop", emoji: "☕", desc: "Secure on any network" },
  { label: "Airport lounge", emoji: "✈️", desc: "VPN auto-connects" },
  { label: "Headquarters", emoji: "🏢", desc: "Full SSO + compliance" },
];

export default function PeaceOfMind() {
  return (
    <section id="gallery" className="relative py-32 px-6 overflow-hidden">
      <div
        className="absolute top-1/3 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(52,211,153,0.07) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass mb-5 border border-emerald-500/20">
            <span className="text-xs text-emerald-300 font-medium tracking-wide uppercase">Peace of mind</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Work from anywhere.
            <br />
            <span className="gradient-text">Stay protected everywhere.</span>
          </h2>
          <p className="text-white/40 text-lg max-w-xl mx-auto">
            Workflo adapts to wherever your team works, maintaining security and compliance
            without friction.
          </p>
        </div>

        {/* Environment cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {environments.map((env, i) => (
            <div
              key={env.label}
              className="glass rounded-2xl p-6 text-center hover:bg-white/[0.06] transition-all animate-float"
              style={{ animationDelay: `${i * 0.5}s` }}
            >
              <div className="text-4xl mb-3">{env.emoji}</div>
              <div className="text-white font-semibold text-sm mb-1">{env.label}</div>
              <div className="text-white/35 text-xs">{env.desc}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="glass rounded-2xl p-6 flex flex-col gap-4"
              style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)" }}
            >
              {/* Stars */}
              <div className="flex gap-1">
                {[0, 1, 2, 3, 4].map((i) => (
                  <svg key={i} className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-white/60 text-sm leading-relaxed flex-1">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold text-white"
                  style={{ background: t.color + "40", border: `1px solid ${t.color}30` }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="text-white text-sm font-medium">{t.author}</div>
                  <div className="text-white/30 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
