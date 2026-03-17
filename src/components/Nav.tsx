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
      {/* Top horizontal nav */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
           scrolled ? "nav-glass shadow-sm" : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 flex-shrink-0">
            <div
              className={`w-8 h-8 rounded-[8px] flex items-center justify-center font-bold text-sm transition-all shadow-sm ${scrolled ? 'bg-[#1d1d1f] text-white' : 'bg-white text-[#1d1d1f]'}`}
            >
              W
            </div>
            <span
              className="font-bold text-base tracking-widest uppercase transition-colors"
              style={{ color: scrolled ? "#1d1d1f" : "#1d1d1f", letterSpacing: "0.15em" }}
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
                  className="btn-nav-special"
                >
                  {item.label}
                </a>
              ) : (
                <a
                  key={item.label}
                  href="#"
                  className={`text-sm font-medium transition-colors flex items-center gap-1.5 ${scrolled ? 'text-[#1d1d1f]' : 'text-[#1d1d1f]'}`}
                  style={{ opacity: 0.9 }}
                >
                  {item.label}
                  {item.hasDropdown && (
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                      <path d="M1 1.5L5 5.5L9 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </a>
              )
            )}
          </div>

          {/* Download Support button */}
          <a
            href="#support"
            className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all text-[#1d1d1f]"
            style={{
              background: scrolled ? "rgba(0,0,0,0.03)" : "rgba(255,255,255,0.7)",
              backdropFilter: "blur(12px)",
              border: scrolled ? "1px solid rgba(0,0,0,0.06)" : "1px solid rgba(255,255,255,0.8)",
              boxShadow: scrolled ? "none" : "0 4px 10px rgba(0,0,0,0.03)",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 1v8M4 6l3 3 3-3M2 11h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Download Support
          </a>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 rounded-lg transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ color: "#1d1d1f" }}
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
            <a
              href="#support"
              className="mt-6 flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all text-[#1d1d1f]"
              style={{
                background: "rgba(0,0,0,0.04)",
              }}
            >
              Download Support
            </a>
          </div>
        )}
      </nav>
    </>
  );
}
