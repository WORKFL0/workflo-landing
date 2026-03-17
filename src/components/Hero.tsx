"use client";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#fdfdfd]"
    >
      {/* Background with CSS slow-pan animation (Ken Burns effect) to simulate slow-motion video */}
      <div 
        className="absolute inset-0 w-full h-full animate-scroll-left"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2850&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.85,
          animation: "pan-image 40s linear infinite alternate",
        }}
      />
      
      <style>{`
        @keyframes pan-image {
          0% { transform: scale(1.05) translate(0, 0); }
          100% { transform: scale(1.15) translate(-2%, 2%); }
        }
      `}</style>

      {/* Light frost gradient overlay for the Zen feel */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.7) 100%)",
          backdropFilter: "blur(6px)",
          WebkitBackdropFilter: "blur(6px)",
        }}
      />

      {/* Main floating glass card */}
      <div 
        className="relative z-10 max-w-5xl mx-auto px-8 py-20 text-center rounded-[32px] mt-12"
        style={{
          background: "rgba(255, 255, 255, 0.75)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          border: "1px solid rgba(255, 255, 255, 0.6)",
          boxShadow: "0 20px 40px rgba(0,0,0,0.08), inset 0 0 0 1px rgba(255,255,255,0.5)",
          animation: "float 6s ease-in-out infinite",
        }}
      >
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-10 text-xs font-semibold tracking-widest text-[#1d1d1f] shadow-sm"
          style={{
            background: "rgba(255,255,255,0.9)",
            border: "1px solid rgba(200,200,200,0.3)",
            letterSpacing: "0.15em",
            textTransform: "uppercase"
          }}
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse inline-block" />
          Mac IT Managed Services · Amsterdam
        </div>

        <h1
          className="font-bold leading-tight mb-8 tracking-tighter text-[#1d1d1f]"
          style={{
            fontSize: "clamp(3rem, 7vw, 5.5rem)",
          }}
        >
          Uw IT, Onze Zorg.
          <br />
          <span style={{ color: "#F5C41E" }}>Pure Rust.</span>
        </h1>

        <p
          className="mb-12 mx-auto leading-relaxed"
          style={{
            fontSize: "clamp(1.1rem, 2vw, 1.35rem)",
            color: "#424245",
            maxWidth: "680px",
            fontWeight: 400,
          }}
        >
          Wij beheren uw volledige Apple-omgeving, zodat u zich kunt focussen op wat echt belangrijk is. 
          Stressvrije IT voor moderne bedrijven.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <a
            href="#services"
            className="btn-primary"
          >
            Ontdek onze aanpak
          </a>
          <a
            href="#contact"
            className="btn-secondary gap-3"
          >
            Direct Advies
            <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>

      {/* Stats row integrated seamlessly at bottom */}
      <div className="absolute bottom-10 w-full px-6 flex justify-center z-10">
        <div 
          className="flex flex-wrap justify-center gap-10 py-5 px-12 rounded-full shadow-lg"
          style={{ 
            background: "rgba(255,255,255,0.85)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            border: "1px solid rgba(255,255,255,0.4)",
            color: "#1d1d1f",
          }}
        >
          <div className="text-center px-4">
            <div className="text-3xl font-bold tracking-tight">9.8</div>
            <div className="text-sm mt-1" style={{ color: "#86868b", fontWeight: 500 }}>Klanttevredenheid</div>
          </div>
          <div className="hidden sm:block my-auto h-8" style={{ width: "1px", background: "rgba(0,0,0,0.08)" }} />
          <div className="text-center px-4">
            <div className="text-3xl font-bold tracking-tight">100+</div>
            <div className="text-sm mt-1" style={{ color: "#86868b", fontWeight: 500 }}>Tevreden klanten</div>
          </div>
          <div className="hidden sm:block my-auto h-8" style={{ width: "1px", background: "rgba(0,0,0,0.08)" }} />
          <div className="text-center px-4">
            <div className="text-3xl font-bold tracking-tight">24/7</div>
            <div className="text-sm mt-1" style={{ color: "#86868b", fontWeight: 500 }}>Monitoring & Support</div>
          </div>
        </div>
      </div>
    </section>
  );
}
