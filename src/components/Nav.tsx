"use client";
import { useState, useEffect } from "react";

const topNavLinks = [
  { label: "Over Ons", hasDropdown: true },
  { label: "Expertise", hasDropdown: true },
  { label: "Diensten", hasDropdown: true },
  { label: "Support", hasDropdown: false },
  { label: "Contact", isButton: true },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
    // Initial check
    onScroll();
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
           scrolled ? "bg-[rgba(255,255,255,0.85)] backdrop-blur-3xl shadow-sm border-b border-[rgba(0,0,0,0.05)]" : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-[1400px] mx-auto w-full px-8 h-16 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 flex-shrink-0">
            <div
              className={`w-9 h-9 rounded-[10px] flex items-center justify-center font-bold text-lg shadow-sm bg-[#F5C41E] text-[#1d1d1f]`}
            >
              W
            </div>
            <span
              className="font-bold text-base tracking-[0.15em] uppercase transition-colors"
              style={{ color: scrolled ? "#1d1d1f" : "#ffffff" }}
            >
              WORKFLO
            </span>
          </a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-10">
            {topNavLinks.map((item) =>
              item.isButton ? (
                <a
                  key={item.label}
                  href="#contact"
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                    scrolled 
                      ? "border border-[#1d1d1f] text-[#1d1d1f] hover:bg-black hover:text-white"
                      : "border border-[rgba(255,255,255,0.4)] text-white hover:bg-white hover:text-black"
                  }`}
                >
                  {item.label}
                </a>
              ) : (
                <a
                  key={item.label}
                  href="#"
                  className={`text-sm font-medium transition-opacity flex items-center gap-1.5 opacity-90 hover:opacity-100 ${
                    scrolled ? 'text-[#1d1d1f]' : 'text-white drop-shadow-md'
                  }`}
                >
                  {item.label}
                  {item.hasDropdown && (
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="opacity-70">
                      <path d="M1 1.5L5 5.5L9 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </a>
              )
            )}
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 rounded-lg transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ color: scrolled ? "#1d1d1f" : "#ffffff" }}
          >
            <svg width="22" height="22" viewBox="0 0 20 20" fill="none">
              {mobileOpen ? (
                <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <>
                  <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div
            className="md:hidden px-6 pb-6 pt-2 shadow-2xl"
            style={{
              background: "rgba(255,255,255,0.98)",
              backdropFilter: "blur(20px)",
              borderTop: "1px solid rgba(0,0,0,0.05)"
            }}
          >
            {topNavLinks.map((item) => (
              <a
                key={item.label}
                href="#"
                className="block py-4 text-sm font-medium border-b"
                style={{ color: "#1d1d1f", borderColor: "rgba(0,0,0,0.06)" }}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}
