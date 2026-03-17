"use client";

// Matches Stitch screens 3 & 7

const quickLinks = [
  "IT Consulting", "Cybersecurity", "Cloud", "Connectivity",
  "Managed IT", "Audio Visueel", "Project Management",
];

const floatingIcons = [
  {
    svg: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 2l7.5 3.75v5.25c0 4.4-3.1 8.5-7.5 9.5C6.6 19.5 3.5 15.4 3.5 11V5.75L11 2z" stroke="white" strokeWidth="1.6" fill="rgba(255,255,255,0.15)"/>
        <path d="M8 11l2.5 2.5 4-4" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: "Security",
    pos: { top: "28%", right: "12%" },
    anim: "animate-float",
  },
  {
    svg: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 3c-4.5 0-7 2.5-7 5v1c0 2.5 1.5 4.5 4 5.5V18l3-2 3 2v-3.5c2.5-1 4-3 4-5.5V8c0-2.5-2.5-5-7-5z" stroke="white" strokeWidth="1.6" fill="rgba(255,255,255,0.15)"/>
      </svg>
    ),
    label: "Cloud",
    pos: { top: "22%", left: "10%" },
    anim: "animate-float-2",
  },
  {
    svg: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M3 9c0-3.3 3.6-6 8-6s8 2.7 8 6-3.6 6-8 6c-1.1 0-2.2-.2-3.1-.5L4 18v-4.5C3.4 12.2 3 10.6 3 9z" stroke="white" strokeWidth="1.6" fill="rgba(255,255,255,0.15)"/>
      </svg>
    ),
    label: "Support",
    pos: { bottom: "30%", right: "10%" },
    anim: "animate-float-3",
  },
];

const galleryImgs = [
  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=70",
  "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&q=70",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=70",
  "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&q=70",
];

export default function PeaceOfMind() {
  return (
    <section
      id="workflo-way"
      className="relative py-20 md:py-28 overflow-hidden"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.52) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.62) 100%)" }}
      />

      {/* Floating icons — only on 2xl to avoid overlap */}
      {floatingIcons.map((item) => (
        <div
          key={item.label}
          className={`absolute hidden 2xl:flex flex-col items-center gap-2 ${item.anim}`}
          style={{ ...item.pos }}
        >
          <div
            className="w-12 h-12 rounded-2xl flex items-center justify-center"
            style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.25)" }}
          >
            {item.svg}
          </div>
          <span
            className="text-xs font-medium px-2 py-0.5 rounded-full"
            style={{ background: "rgba(0,0,0,0.4)", color: "rgba(255,255,255,0.85)", backdropFilter: "blur(8px)" }}
          >
            {item.label}
          </span>
        </div>
      ))}

      <div className="relative z-10 max-w-[1120px] mx-auto px-6">
        <div className="flex gap-8">

          {/* Left sidebar — matches Stitch screen 3 */}
          <aside className="hidden lg:flex flex-col gap-2 w-[170px] flex-shrink-0">
            {quickLinks.map((link) => (
              <div
                key={link}
                className="py-2 px-3 rounded-lg text-xs font-medium cursor-pointer transition-all"
                style={{
                  background: "rgba(255,255,255,0.15)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  color: "rgba(255,255,255,0.8)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.25)";
                  (e.currentTarget as HTMLDivElement).style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.15)";
                  (e.currentTarget as HTMLDivElement).style.color = "rgba(255,255,255,0.8)";
                }}
              >
                {link}
              </div>
            ))}
          </aside>

          {/* Main content */}
          <div className="flex-1">
            {/* Breadcrumb */}
            <p className="text-xs font-medium mb-6" style={{ color: "rgba(255,255,255,0.5)" }}>
              Philosophy / Peace of Mind
            </p>

            <h2
              className="font-bold mb-5"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#ffffff", lineHeight: 1.1 }}
            >
              The Workflo Way.<br />
              <span style={{ color: "#F5C41E" }}>Your Peace of Mind.</span>
            </h2>

            <p
              className="mb-8"
              style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.72)", maxWidth: "480px", lineHeight: 1.7 }}
            >
              Proactive, invisible IT. We manage your Mac environment so you can focus on what matters.
              Stress-free, seamless, and secure.
            </p>

            <div
              className="inline-block px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest mb-10"
              style={{ background: "rgba(245,196,30,0.2)", border: "1px solid rgba(245,196,30,0.4)", color: "#F5C41E" }}
            >
              Peace of Mind
            </div>

            {/* Gallery thumbnails — matches Stitch screen 3 bottom */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {galleryImgs.map((src, i) => (
                <div
                  key={i}
                  className="rounded-xl overflow-hidden group cursor-pointer"
                  style={{ height: "90px", border: "1px solid rgba(255,255,255,0.15)" }}
                >
                  <img
                    src={src}
                    alt={`Werkplek ${i + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
