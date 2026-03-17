"use client";
import { useState, useEffect } from "react";

const navLinks = [
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
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "nav-glass" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1120px] mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo — yellow W box + WORKFLO wordmark */}
        <a href="#home" className="flex items-center gap-2.5 flex-shrink-0">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm"
            style={{ background: "#F5C41E", color: "#1d1d1f" }}
          >
            W
          </div>
          <span
            className="font-bold text-[14px] tracking-[0.12em] uppercase transition-colors"
            style={{ color: scrolled ? "#1d1d1f" : "#ffffff" }}
          >
            WORKFLO
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((item) =>
            item.isButton ? (
              <a
                key={item.label}
                href="#contact"
                className="px-5 py-2 rounded-full text-[13px] font-semibold transition-all"
                style={{
                  background: scrolled ? "#1d1d1f" : "rgba(255,255,255,0.18)",
                  color: "#ffffff",
                  border: "1px solid rgba(255,255,255,0.3)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "#0071e3";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "#0071e3";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = scrolled ? "#1d1d1f" : "rgba(255,255,255,0.18)";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.3)";
                }}
              >
                {item.label}
              </a>
            ) : (
              <a
                key={item.label}
                href={`#${item.label.toLowerCase().replace(" ", "-")}`}
                className="flex items-center gap-1 text-[13px] font-medium transition-opacity opacity-90 hover:opacity-100"
                style={{ color: scrolled ? "#1d1d1f" : "rgba(255,255,255,0.92)" }}
              >
                {item.label}
                {item.hasDropdown && (
                  <svg width="8" height="5" viewBox="0 0 10 6" fill="none">
                    <path d="M1 1.5L5 5L9 1.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </a>
            )
          )}
        </div>

        {/* Download Support button — right side, matches Stitch */}
        <a
          href="#support"
          className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg text-[13px] font-medium transition-all"
          style={{
            background: "#F5C41E",
            color: "#1d1d1f",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.filter = "brightness(1.05)";
            (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-1px)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.filter = "";
            (e.currentTarget as HTMLAnchorElement).style.transform = "";
          }}
        >
          <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
            <path d="M7 1v8M4 6l3 3 3-3M2 11h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Download Support
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-lg"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{ color: scrolled ? "#1d1d1f" : "#ffffff" }}
        >
          <svg width="22" height="22" viewBox="0 0 20 20" fill="none">
            {mobileOpen
              ? <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              : <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden nav-glass px-6 pb-6 pt-2">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href="#"
              className="block py-3 text-sm font-medium border-b"
              style={{ color: "#1d1d1f", borderColor: "rgba(0,0,0,0.06)" }}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#support"
            className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium"
            style={{ background: "#F5C41E", color: "#1d1d1f" }}
          >
            Download Support
          </a>
        </div>
      )}
    </nav>
  );
}
