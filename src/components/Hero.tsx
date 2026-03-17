"use client";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.65) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-20">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-xs font-semibold uppercase tracking-widest"
          style={{
            background: "rgba(245,196,30,0.15)",
            border: "1px solid rgba(245,196,30,0.4)",
            color: "#F5C41E",
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse inline-block" />
          Mac IT Managed Services · Amsterdam
        </div>

        <h1
          className="font-bold leading-tight mb-6"
          style={{
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            color: "#ffffff",
            lineHeight: 1.1,
          }}
        >
          Uw IT, Onze Zorg.
          <br />
          <span style={{ color: "#F5C41E" }}>Pure Rust.</span>
        </h1>

        <p
          className="mb-10 mx-auto leading-relaxed"
          style={{
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            color: "rgba(255,255,255,0.78)",
            maxWidth: "600px",
          }}
        >
          Wij beheren uw volledige Apple-omgeving, zodat u zich kunt focussen op wat echt belangrijk is.
          Stressvrije IT voor moderne bedrijven.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#services"
            className="px-8 py-4 rounded-full font-semibold text-base transition-all"
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
          </a>
          <a
            href="#contact"
            className="px-8 py-4 rounded-full font-medium text-base transition-all flex items-center gap-2"
            style={{
              background: "rgba(255,255,255,0.15)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.3)",
              color: "#ffffff",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.22)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.15)";
            }}
          >
            Direct Advies
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* Stats row */}
        <div
          className="mt-16 flex flex-wrap justify-center gap-8"
          style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.875rem" }}
        >
          <div className="text-center">
            <div className="text-2xl font-bold text-white">9.8</div>
            <div>Klanttevredenheid</div>
          </div>
          <div className="hidden sm:block" style={{ width: "1px", background: "rgba(255,255,255,0.15)" }} />
          <div className="text-center">
            <div className="text-2xl font-bold text-white">100+</div>
            <div>Tevreden klanten</div>
          </div>
          <div className="hidden sm:block" style={{ width: "1px", background: "rgba(255,255,255,0.15)" }} />
          <div className="text-center">
            <div className="text-2xl font-bold text-white">24/7</div>
            <div>Monitoring & Support</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 flex flex-col items-center gap-2"
        style={{ transform: "translateX(-50%)", color: "rgba(255,255,255,0.4)" }}
      >
        <span style={{ fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>Scroll</span>
        <svg width="16" height="20" viewBox="0 0 16 20" fill="none" className="animate-bounce">
          <path d="M8 2v12M4 10l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  );
}
