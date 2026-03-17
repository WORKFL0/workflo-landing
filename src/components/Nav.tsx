"use client";
import { useState, useEffect } from "react";

const sidebarLinks = [
  "IT Consulting",
  "Cybersecurity",
  "Cloud",
  "Connectivity",
  "Managed IT",
  "Audio Visueel",
  "Project Management",
];

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
  }, []);

  return (
    <>
      {/* Left sidebar quick-links */}
      <aside
        className="fixed left-0 top-1/2 z-40 hidden xl:flex flex-col gap-1 py-4 px-2"
        style={{
          transform: "translateY(-50%)",
          background: "rgba(255,255,255,0.85)",
          backdropFilter: "blur(12px)",
          borderRight: "1px solid rgba(0,0,0,0.07)",
          borderRadius: "0 12px 12px 0",
        }}
      >
        {sidebarLinks.map((link) => (
          <a
            key={link}
            href="#"
            className="text-xs font-medium px-3 py-2 rounded-lg transition-all"
            style={{ color: "#1d1d1f", whiteSpace: "nowrap" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "rgba(0,0,0,0.05)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
            }}
          >
            {link}
          </a>
        ))}
      </aside>
      {/* Top horizontal nav */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
           scrolled ? "nav-glass shadow-sm" : "bg-transparent mix-blend-difference text-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 flex-shrink-0">
            <div
              className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm ${scrolled ? 'bg-[#1d1d1f] text-white' : 'bg-white text-black'}`}
            >
              W
            </div>
            <span
              className="font-bold text-base tracking-widest uppercase"
              style={{ color: scrolled ? "#1d1d1f" : "#ffffff", letterSpacing: "0.15em" }}
            >
              WORKFLO
            </span>
          </a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-6">
            {topNavLinks.map((item) =>
              item.isButton ? (
                <a
                  key={item.label}
                  href="#contact"
                  className="px-4 py-2 rounded-full text-sm font-medium transition-all text-[#1d1d1f]"
                  style={{
                    background: "#F5C41E",
                    boxShadow: "0 2px 10px rgba(245,196,30,0.3)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.filter = "brightness(1.05)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.filter = "brightness(1)";
                  }}
                >
                  {item.label}
                </a>
              ) : (
                <a
                  key={item.label}
                  href="#"
                  className={`text-sm font-medium transition-colors flex items-center gap-1 ${scrolled ? 'text-[#1d1d1f]' : 'text-white'}`}
                >
                  {item.label}
                  {item.hasDropdown && (
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                      <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  )}
                </a>
              )
            )}
          </div>

          {/* Download Support button */}
          <a
            href="#support"
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all text-[#1d1d1f]"
            style={{
              background: scrolled ? "rgba(0,0,0,0.04)" : "rgba(255,255,255,0.8)",
              border: scrolled ? "1px solid rgba(0,0,0,0.1)" : "1px solid transparent",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 1v8M4 6l3 3 3-3M2 11h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Download Support
          </a>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 rounded-lg"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ color: scrolled ? "#1d1d1f" : "#ffffff" }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
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
            className="md:hidden px-6 pb-6 pt-2"
            style={{
              background: "rgba(255,255,255,0.95)",
              backdropFilter: "blur(20px)",
            }}
          >
            {topNavLinks.map((item) => (
              <a
                key={item.label}
                href="#"
                className="block py-3 text-sm font-medium border-b"
                style={{ color: "#1d1d1f", borderColor: "rgba(0,0,0,0.06)" }}
              >
                {item.label}
              </a>
            ))}
            <div className="mt-4 space-y-2">
              {sidebarLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="block py-2 text-xs"
                  style={{ color: "#6e6e73" }}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
