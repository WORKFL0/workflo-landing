"use client";

const floatingIcons = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 2l7.5 3.75v5.25c0 4.4-3.1 8.5-7.5 9.5C6.6 19.5 3.5 15.4 3.5 11V5.75L11 2z" stroke="white" strokeWidth="1.6" fill="rgba(255,255,255,0.15)" />
        <path d="M8 11l2.5 2.5 4-4" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: "Veilig",
    delay: "0s",
    animClass: "animate-float",
    top: "20%",
    left: "8%",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M3 9c0-3.3 3.6-6 8-6s8 2.7 8 6-3.6 6-8 6c-1.1 0-2.2-.2-3.1-.5L4 18v-4.5C3.4 12.2 3 10.6 3 9z" stroke="white" strokeWidth="1.6" fill="rgba(255,255,255,0.15)" />
      </svg>
    ),
    label: "Support",
    delay: "1s",
    animClass: "animate-float-2",
    top: "15%",
    right: "10%",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 3C7 3 4 6 4 9.5c0 2.1 1 3.9 2.5 5.1L11 19l4.5-4.4C17 13.4 18 11.6 18 9.5 18 6 15 3 11 3z" stroke="white" strokeWidth="1.6" fill="rgba(255,255,255,0.15)" />
        <circle cx="11" cy="9.5" r="2" fill="white" fillOpacity="0.6" />
      </svg>
    ),
    label: "Amsterdam",
    delay: "2s",
    animClass: "animate-float-3",
    bottom: "25%",
    left: "6%",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 3c-4.5 0-7 2.5-7 5v1c0 2.5 1.5 4.5 4 5.5V18l3-2 3 2v-3.5c2.5-1 4-3 4-5.5V8c0-2.5-2.5-5-7-5z" stroke="white" strokeWidth="1.6" fill="rgba(255,255,255,0.15)" />
      </svg>
    ),
    label: "Cloud",
    delay: "0.5s",
    animClass: "animate-float-4",
    bottom: "20%",
    right: "8%",
  },
];

const galleryThumbs = [
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
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.7) 100%)" }}
      />

      {/* Floating glassmorphic icons — only on very wide screens */}
      {floatingIcons.map((item) => (
        <div
          key={item.label}
          className={`absolute ${item.animClass} hidden 2xl:flex flex-col items-center gap-2`}
          style={{
            top: item.top,
            left: item.left,
            right: item.right,
            bottom: item.bottom,
            animationDelay: item.delay,
          }}
        >
          <div
            className="w-12 h-12 rounded-2xl flex items-center justify-center"
            style={{
              background: "rgba(255,255,255,0.15)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.25)",
            }}
          >
            {item.icon}
          </div>
          <span
            className="text-xs font-medium px-2 py-0.5 rounded-full"
            style={{
              background: "rgba(0,0,0,0.4)",
              color: "rgba(255,255,255,0.8)",
              backdropFilter: "blur(8px)",
            }}
          >
            {item.label}
          </span>
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div
          className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-6"
          style={{
            background: "rgba(245,196,30,0.2)",
            border: "1px solid rgba(245,196,30,0.4)",
            color: "#F5C41E",
          }}
        >
          The Workflo Way
        </div>

        <h2
          className="font-bold mb-6"
          style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)", color: "#ffffff", lineHeight: 1.1 }}
        >
          The Workflo Way.
          <br />
          <span style={{ color: "#F5C41E" }}>Your Peace of Mind.</span>
        </h2>

        <p
          className="mx-auto mb-10"
          style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.7)", maxWidth: "560px", lineHeight: 1.7 }}
        >
          Proactive, invisible IT. We manage your Mac environment so you can focus on what matters.
          Stress-free, seamless, and secure.
        </p>

        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base transition-all"
          style={{
            background: "#0071e3",
            color: "#ffffff",
            boxShadow: "0 4px 20px rgba(0,113,227,0.4)",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.background = "#0077ed";
            (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.background = "#0071e3";
            (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
          }}
        >
          Ontdek onze aanpak
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>

        {/* Gallery thumbnails */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-3">
          {galleryThumbs.map((src, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden group cursor-pointer"
              style={{
                height: "100px",
                border: "1px solid rgba(255,255,255,0.15)",
              }}
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
    </section>
  );
}
