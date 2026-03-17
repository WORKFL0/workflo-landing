"use client";

const checklistItems = [
  "24/7 Monitoring & Support",
  "Apple Certified Experts",
  "Voorspelbare vaste kosten",
  "Jamf Pro gecertificeerd",
  "On-site & remote service",
];

export default function ContentBlock() {
  return (
    <section
      id="about"
      className="py-20 md:py-28"
      style={{ background: "#f5f5f7" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: text + checklist */}
          <div>
            <div
              className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-6"
              style={{ background: "rgba(0,113,227,0.08)", color: "#0071e3" }}
            >
              Uw Apple-partner
            </div>
            <h2
              className="font-bold mb-6 leading-tight"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", color: "#1d1d1f" }}
            >
              Uw Apple-partner voor een zorgeloze werkplek
            </h2>
            <p
              className="mb-8 leading-relaxed"
              style={{ fontSize: "1.05rem", color: "#6e6e73" }}
            >
              Workflo is uw dedicated Apple MSP in Amsterdam. Wij nemen het volledige IT-beheer van u over,
              van device enrollment tot helpdesk. U focust op uw bedrijf, wij zorgen voor de rest.
            </p>

            {/* Checklist */}
            <ul className="space-y-3 mb-8">
              {checklistItems.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "#0071e3" }}
                  >
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4l3 3 5-6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span style={{ fontSize: "0.95rem", color: "#1d1d1f", fontWeight: 500 }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all"
              style={{
                background: "#0071e3",
                color: "#ffffff",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "#0077ed";
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "#0071e3";
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
              }}
            >
              Neem contact op
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M7 2l5 5-5 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          {/* Right: image + badge */}
          <div className="relative">
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                boxShadow: "0 24px 64px rgba(0,0,0,0.12)",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=80"
                alt="MacBook op werkplek"
                className="w-full h-80 object-cover"
                style={{ display: "block" }}
              />
            </div>

            {/* Satisfaction badge */}
            <div
              className="absolute -bottom-6 -left-6 glass-card p-4 flex items-center gap-3"
              style={{
                boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                minWidth: "200px",
              }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: "#F5C41E" }}
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M9 1l2.06 5.26L17 7.27l-4 3.9.94 5.5L9 14 5.06 16.67l.94-5.5-4-3.9 5.94-.01L9 1z" fill="#1d1d1f" />
                </svg>
              </div>
              <div>
                <div className="font-bold text-sm" style={{ color: "#1d1d1f" }}>
                  KLANTTEVREDENHEID
                </div>
                <div className="font-bold text-lg" style={{ color: "#0071e3" }}>
                  9.8<span className="text-sm font-normal" style={{ color: "#6e6e73" }}>/10</span>
                </div>
              </div>
            </div>

            {/* Amsterdam badge */}
            <div
              className="absolute -top-4 -right-4 glass-card px-4 py-2 flex items-center gap-2"
              style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 1C4.8 1 3 2.8 3 5c0 3 4 8 4 8s4-5 4-8c0-2.2-1.8-4-4-4zm0 5.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" fill="#0071e3" />
              </svg>
              <span style={{ fontSize: "0.78rem", fontWeight: 600, color: "#1d1d1f" }}>
                Amsterdam
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
