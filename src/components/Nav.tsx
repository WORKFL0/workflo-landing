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
    onScroll();
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
           scrolled ? "bg-[rgba(255,255,255,0.7)] backdrop-blur-2xl border-b border-white/30 shadow-sm" : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-[1050px] mx-auto w-full px-6 h-16 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 flex-shrink-0">
            <div
              className={`w-8 h-8 rounded-[8px] flex items-center justify-center font-bold text-sm shadow-sm bg-[#F5C41E] text-[#1d1d1f]`}
            >
              W
            </div>
            <span
              className="font-bold text-[14px] tracking-[0.1em] transition-colors"
              style={{ color: scrolled ? "#1d1d1f" : "#ffffff" }}
            >
              WORKFLO
            </span>
          </a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {topNavLinks.map((item) =>
              item.isButton ? (
                <a
                  key={item.label}
                  href="#contact"
                  className={`px-5 py-2 rounded-full text-[13px] font-medium transition-all ${
                    scrolled 
                      ? "border border-[#1d1d1f] text-[#1d1d1f] hover:bg-black hover:text-white"
                      : "border border-white/50 text-white hover:bg-white hover:text-black"
                  }`}
                >
                  {item.label}
                </a>
              ) : (
                <a
                  key={item.label}
                  href="#"
                  className={`text-[13px] font-medium transition-opacity flex items-center gap-1.5 opacity-90 hover:opacity-100 ${
                    scrolled ? 'text-[#1d1d1f]' : 'text-white'
                  }`}
                >
                  {item.label}
                  {item.hasDropdown && (
                    <svg width="8" height="5" viewBox="0 0 10 6" fill="none" className="opacity-80">
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
                <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div
            className="md:hidden px-6 pb-6 pt-2 shadow-xl"
            style={{
              background: "rgba(255,255,255,0.95)",
              backdropFilter: "blur(20px)",
              borderTop: "1px solid rgba(0,0,0,0.05)"
            }}
          >
            {topNavLinks.map((item) => (
              <a
                key={item.label}
                href="#"
                className="block py-4 text-sm font-medium border-b border-black/5 text-[#1d1d1f]"
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
