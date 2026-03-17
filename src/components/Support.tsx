const faqs = [
  {
    q: "How long does setup take?",
    a: "Most teams are fully deployed within a day. Zero-touch enrollment means no physical device access needed.",
  },
  {
    q: "Does it work with Apple Business Manager?",
    a: "Yes — Workflo integrates natively with Apple Business Manager and Apple School Manager.",
  },
  {
    q: "What identity providers do you support?",
    a: "Okta, Azure AD, Google Workspace, JumpCloud, and any SAML 2.0 compliant IdP.",
  },
  {
    q: "Can I try it before committing?",
    a: "Absolutely. 14-day free trial, no credit card required, up to 25 devices.",
  },
];

export default function Support() {
  return (
    <section id="support" className="relative py-32 px-6 overflow-hidden">
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(139,92,246,0.1) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left: CTA */}
        <div className="flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass mb-5 border border-pink-500/20 w-fit">
            <span className="text-xs text-pink-300 font-medium tracking-wide uppercase">Support & helpdesk</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
            We're here
            <br />
            <span className="gradient-text-warm">whenever you need us.</span>
          </h2>
          <p className="text-white/40 text-lg leading-relaxed mb-8">
            World-class support from people who actually know Macs. Reach us via chat,
            email, or phone — and get real answers fast.
          </p>

          <div className="space-y-4 mb-8">
            {[
              { icon: "💬", title: "Live chat", sub: "Average response: 2 minutes" },
              { icon: "📧", title: "Email support", sub: "Within 4 hours, guaranteed" },
              { icon: "📞", title: "Phone support", sub: "Business hours, all time zones" },
            ].map((channel) => (
              <div key={channel.title} className="flex items-center gap-4 glass rounded-xl px-4 py-3.5">
                <span className="text-xl">{channel.icon}</span>
                <div>
                  <div className="text-white font-medium text-sm">{channel.title}</div>
                  <div className="text-white/35 text-xs">{channel.sub}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-3">
            <a
              href="#"
              className="px-6 py-3 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-semibold text-sm transition-all hover:shadow-lg hover:shadow-violet-500/25 hover:-translate-y-0.5"
            >
              Start free trial
            </a>
            <a
              href="#"
              className="px-6 py-3 rounded-full glass hover:bg-white/[0.06] text-white/70 font-medium text-sm transition-all border border-white/10"
            >
              Talk to sales
            </a>
          </div>
        </div>

        {/* Right: FAQ */}
        <div className="flex flex-col justify-center space-y-4">
          <div className="text-white/50 text-sm mb-2 font-medium">Frequently asked questions</div>
          {faqs.map((faq) => (
            <div
              key={faq.q}
              className="glass rounded-xl p-5 hover:bg-white/[0.05] transition-colors"
            >
              <div className="text-white font-medium text-sm mb-2">{faq.q}</div>
              <div className="text-white/40 text-sm leading-relaxed">{faq.a}</div>
            </div>
          ))}

          {/* Pricing teaser */}
          <div
            className="glass-strong rounded-2xl p-6 mt-4"
            style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08)" }}
          >
            <div className="flex items-center justify-between mb-3">
              <div>
                <div className="text-white font-semibold">Pro plan</div>
                <div className="text-white/30 text-xs">Up to 500 devices</div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-white">$8</div>
                <div className="text-white/30 text-xs">/ device / month</div>
              </div>
            </div>
            <div className="h-px bg-white/5 mb-3" />
            <div className="grid grid-cols-2 gap-2">
              {["All features", "Priority support", "SSO/SAML", "Audit logs", "Custom policies", "API access"].map((f) => (
                <div key={f} className="flex items-center gap-1.5 text-xs text-white/40">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 5l2 2 4-4" stroke="#34d399" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {f}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
