"use client";

const quickLinks = [
  { name: "IT Consulting", active: true },
  { name: "Cybersecurity", active: false },
  { name: "Cloud", active: false },
  { name: "Connectivity", active: false },
  { name: "Managed IT", active: false },
  { name: "Audio Visueel", active: true },
  { name: "Project Management", active: false },
];

const gridItems = [
  {
    title: "Managed Mac IT",
    desc: "Workflo is jECT no-nonsense approach in intersformalie en noor jax plays on hover.",
    icon: (
      <svg className="w-16 h-16 text-[#4a5568]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    active: false,
  },
  {
    title: "Mac Cloud Integration",
    desc: "Workflo is jECT no-nonsense approach in increunt cloud antisservices plays on hover.",
    icon: (
      <svg className="w-16 h-16 text-[#3182ce]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    active: true,
  },
  {
    title: "Mac Security",
    desc: "Workflo is high-definition deliver, connectivity and connectivity plays on hover.",
    icon: (
      <svg className="w-16 h-16 text-[#805ad5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    active: true,
  },
  {
    title: "Mac Connectivity",
    desc: "Workflo is jECT no-nonsense approach in intersformalie en noor jar digitale Amsterdam.",
    icon: (
      <svg className="w-16 h-16 text-[#dd6b20]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
      </svg>
    ),
    active: true,
  },
  {
    title: "Remote Mac Support",
    desc: "Workflo is jECT no-nonsense approach in intersformalie en noor jar Instodam.",
    icon: (
      <svg className="w-16 h-16 text-[#319795]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2zM12 9v2m0 4h.01m-6.938 4h13.856" />
      </svg>
    ),
    active: true,
  },
  {
    title: "Mac Project Management",
    desc: "Workflo is jOCT no-nonsense approach in intersformalie en noor jax digitale management.",
    icon: (
      <svg className="w-16 h-16 text-[#e53e3e]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    active: true,
  },
];

export default function Hero() {
  return (
    <>
      <div 
        className="fixed inset-0 w-full h-full z-[-1]"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2850&auto=format&fit=crop')", // Warm, atmospheric office
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(12px) brightness(0.75)",
          transform: "scale(1.05)", // prevent blur edges showing
        }}
      />
      
      {/* Subtle overlay gradient to make text pop */}
      <div 
        className="fixed inset-0 w-full h-full z-[-1]"
        style={{
          background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.2) 100%)",
        }}
      />

      {/* Main Container - Reduced Max Width to tighten the grid */}
      <div className="max-w-[1150px] mx-auto w-full px-8 py-6 flex flex-col mt-4 min-h-[85vh]">
        
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Left Sidebar (Quick-links) */}
          <div className="w-full lg:w-52 flex-shrink-0 hidden lg:block pt-2">
            <h3 className="text-white text-[12px] font-semibold mb-3 opacity-95 tracking-wider pl-1 uppercase drop-shadow-md">Quick-links</h3>
            <div className="flex flex-col gap-1.5">
              {quickLinks.map((link, idx) => (
                <div
                  key={idx}
                  className={`px-4 py-2 rounded-xl backdrop-blur-3xl cursor-pointer transition-all ${
                    link.active 
                      ? "bg-[rgba(255,255,255,0.9)] border border-[#F5C41E] text-[#1d1d1f] font-semibold"
                      : "bg-[rgba(255,255,255,0.35)] border border-[rgba(255,255,255,0.4)] text-[rgba(255,255,255,0.95)] hover:bg-[rgba(255,255,255,0.5)] font-medium"
                  }`}
                  style={{
                    boxShadow: link.active ? "0 4px 15px rgba(245,196,30,0.25), inset 0 0 0 1px rgba(245,196,30,0.3)" : "0 2px 4px rgba(0,0,0,0.05)",
                    fontSize: "13px",
                  }}
                >
                  {link.name}
                </div>
              ))}
            </div>
          </div>

          {/* Main 3x2 Grid */}
          <div className="flex-grow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {gridItems.map((item, idx) => (
              <div
                key={idx}
                className="relative bg-[rgba(255,255,255,0.75)] backdrop-blur-2xl rounded-2xl p-4 px-5 hover:shadow-xl transition-transform hover:-translate-y-1 cursor-pointer flex flex-col h-[220px]"
                style={{
                  border: "1px solid rgba(255,255,255,0.9)",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
                }}
              >
                {/* Scaled-down SVG Icon Box */}
                <div className="w-full flex justify-center items-center h-14 mb-3 bg-white/70 rounded-[10px] max-w-[65px] mx-auto p-2 border border-white/80 shadow-sm">
                  <div className="scale-75 origin-center">{item.icon}</div>
                </div>
                
                <h4 className="text-[#1d1d1f] font-bold text-[15px] mb-1.5 mt-1 text-center">{item.title}</h4>
                <p className="text-[#424245] text-[12px] leading-relaxed mb-3 font-medium opacity-85 text-center px-1">
                  {item.desc}
                </p>

                {/* Bottom Active indicator line */}
                {item.active && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-8 h-1 bg-[#F5C41E] rounded-full" />
                )}
              </div>
            ))}
          </div>

        </div>

        {/* Bottom Trust Band */}
        <div className="mt-8 w-full lg:w-[calc(100%-240px)] lg:ml-auto pb-10">
          <div 
            className="w-full bg-[rgba(255,255,255,0.85)] backdrop-blur-2xl rounded-[18px] py-3.5 px-6 flex items-center gap-10"
            style={{
              border: "1px solid rgba(255,255,255,0.9)",
              boxShadow: "0 8px 20px rgba(0,0,0,0.06)",
            }}
          >
            <span className="text-[#1d1d1f] font-semibold text-[13px] mr-auto opacity-70 uppercase tracking-widest">Trust</span>
            
            {/* Logos */}
            <div className="flex items-center gap-8 opacity-80 scale-90 origin-right">
              <span className="text-[#1d1d1f] cursor-pointer hover:opacity-100">&lt;</span>
              <svg viewBox="0 0 50 50" className="h-[22px] w-auto text-[#1d1d1f] fill-current">
                <path d="M38.71 26.2c-.05-4.93 4.03-7.3 4.21-7.42-2.3-3.36-5.87-3.82-7.14-3.87-3.03-.31-5.94 1.79-7.48 1.79-1.56 0-3.94-1.75-6.49-1.7-3.32.05-6.4 1.93-8.11 4.88-3.48 6.03-.89 14.95 2.49 19.84 1.66 2.39 3.63 5.07 6.21 4.97 2.5-.1 3.44-1.6 6.47-1.6 3.02 0 3.88 1.6 6.52 1.55 2.69-.04 4.38-2.42 6.03-4.82 1.9-2.76 2.69-5.44 2.73-5.58-.06-.03-5.23-2.01-5.44-8.04zM33.76 12.4c1.38-1.67 2.31-3.99 2.06-6.3-1.99.08-4.4 1.33-5.83 2.99-1.28 1.48-2.4 3.84-2.1 6.11 2.22.17 4.49-1.13 5.87-2.8z" />
              </svg>
              <div className="flex items-center gap-1.5 text-[#1d1d1f]">
                <svg viewBox="0 0 50 50" className="h-[18px] w-auto" fill="currentColor">
                  <path d="M5 5h19v19H5zM26 5h19v19H26zM5 26h19v19H5zM26 26h19v19H26z" />
                </svg>
                <span className="font-bold text-[14px] tracking-tight">Microsoft</span>
              </div>
              <span className="font-bold text-[16px] tracking-wider uppercase text-[#1d1d1f]">LiDO</span>
              <div className="flex items-center gap-1.5 text-[#1d1d1f]">
                <svg viewBox="0 0 50 50" className="h-[18px] w-auto" fill="currentColor">
                  <path d="M5 5h19v19H5zM26 5h19v19H26zM5 26h19v19H5zM26 26h19v19H26z" />
                </svg>
                <span className="font-bold text-[14px] tracking-tight">Microsoft</span>
              </div>
              <span className="text-[#1d1d1f] font-semibold text-[12px]">Lin Professioneel</span>
              <span className="text-[#1d1d1f] cursor-pointer hover:opacity-100">&gt;</span>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
