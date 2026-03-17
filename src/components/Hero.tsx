"use client";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="https://cdn.coverr.co/videos/coverr-a-beautiful-workspace-5092/1080p.mp4" type="video/mp4" />
      </video>

      {/* Light Frost Gradient overlay instead of dark - Zen feel */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to bottom, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.4) 100%)",
          backdropFilter: "blur(4px)",
        }}
      />

      {/* Content in a floating glass card */}
      <div 
        className="relative z-10 max-w-4xl mx-auto px-8 py-16 text-center animate-fade-up rounded-3xl"
        style={{
          background: "rgba(255, 255, 255, 0.6)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 255, 255, 0.8)",
          boxShadow: "0 20px 40px rgba(0,0,0,0.05)",
        }}
      >
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-xs font-semibold uppercase tracking-widest"
          style={{
            background: "rgba(255,255,255,0.8)",
            border: "1px solid rgba(0,0,0,0.05)",
            color: "#6e6e73",
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse inline-block" />
          Mac IT Managed Services · Amsterdam
        </div>

        <h1
          className="font-bold leading-tight mb-6 tracking-tight text-[#1d1d1f]"
          style={{
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
          }}
        >
          Uw IT, Onze Zorg.
          <br />
          <span style={{ color: "#F5C41E" }}>Pure Rust.</span>
        </h1>

        <p
          className="mb-10 mx-auto leading-relaxed font-normal"
          style={{
            fontSize: "clamp(1.1rem, 2vw, 1.25rem)",
            color: "#424245",
            maxWidth: "600px",
          }}
        >
          Wij beheren uw volledige Apple-omgeving, zodat u zich kunt focussen op wat echt belangrijk is.
          Stressvrije IT voor moderne bedrijven.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#services"
            className="px-8 py-4 rounded-full font-semibold text-base transition-all text-[#1d1d1f]"
            style={{
              background: "#F5C41E",
              boxShadow: "0 4px 15px rgba(245,196,30,0.4)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.filter = "brightness(1.05)";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.filter = "brightness(1)";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
            }}
          >
            Ontdek onze aanpak
          </a>
          <a
            href="#contact"
            className="px-8 py-4 rounded-full font-medium text-base transition-all flex items-center gap-2 text-[#1d1d1f]"
            style={{
              background: "rgba(255,255,255,0.7)",
              border: "1px solid rgba(0,0,0,0.1)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.9)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.7)";
            }}
          >
            Direct Advies
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>

      {/* Stats row integrated seamlessly at bottom */}
      <div className="absolute bottom-12 w-full px-6 flex justify-center z-10">
        <div 
          className="flex flex-wrap justify-center gap-12 py-4 px-10 rounded-full"
          style={{ 
            background: "rgba(255,255,255,0.6)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.8)",
            color: "#1d1d1f",
            fontSize: "0.875rem" 
          }}
        >
          <div className="text-center">
            <div className="text-2xl font-bold">9.8</div>
            <div className="text-[#6e6e73]">Klanttevredenheid</div>
          </div>
          <div className="hidden sm:block" style={{ width: "1px", background: "rgba(0,0,0,0.1)" }} />
          <div className="text-center">
            <div className="text-2xl font-bold">100+</div>
            <div className="text-[#6e6e73]">Tevreden klanten</div>
          </div>
          <div className="hidden sm:block" style={{ width: "1px", background: "rgba(0,0,0,0.1)" }} />
          <div className="text-center">
            <div className="text-2xl font-bold">24/7</div>
            <div className="text-[#6e6e73]">Monitoring & Support</div>
          </div>
        </div>
      </div>
    </section>
  );
}
