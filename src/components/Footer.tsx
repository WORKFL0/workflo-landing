"use client";

const footerLinks = {
  Diensten: ["Mac Management", "Cloud Oplossingen", "Cyber Security", "Connectivity", "IT Consulting"],
  Bedrijf: ["Over Ons", "Team", "Vacatures", "Blog", "Contact"],
  Support: ["Helpdesk", "Knowledge Base", "Remote Hulp", "Status", "Download"],
  Juridisch: ["Privacy Policy", "Voorwaarden", "Cookies", "AVG", "SLA"],
};

export default function Footer() {
  return (
    <footer
      id="contact"
      style={{ background: "#1d1d1f", borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-8">
        {/* Top grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm"
                style={{ background: "#F5C41E", color: "#1d1d1f" }}
              >
                W
              </div>
              <span
                className="font-bold text-sm tracking-widest uppercase"
                style={{ color: "#ffffff", letterSpacing: "0.15em" }}
              >
                WORKFLO
              </span>
            </div>
            <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.7, maxWidth: "200px" }}>
              Uw Apple IT-partner in Amsterdam. Stressvrij beheer van uw Mac-omgeving.
            </p>

            {/* Address */}
            <div className="mt-4 flex items-start gap-2">
              <svg width="12" height="14" viewBox="0 0 12 14" fill="none" className="mt-0.5 flex-shrink-0">
                <path d="M6 1C3.8 1 2 2.8 2 5c0 3 4 8 4 8s4-5 4-8c0-2.2-1.8-4-4-4zm0 5.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" fill="rgba(255,255,255,0.35)" />
              </svg>
              <address style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.35)", fontStyle: "normal", lineHeight: 1.6 }}>
                Koivistokade 3<br />
                1013 AC Amsterdam<br />
                Nederland
              </address>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-2 mt-5">
              {/* Facebook */}
              <a
                href="#"
                className="w-8 h-8 rounded-lg flex items-center justify-center transition-all"
                style={{ background: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.5)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.12)"; (e.currentTarget as HTMLAnchorElement).style.color = "#fff"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.07)"; (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.5)"; }}
                aria-label="Facebook"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              {/* Twitter */}
              <a
                href="#"
                className="w-8 h-8 rounded-lg flex items-center justify-center transition-all"
                style={{ background: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.5)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.12)"; (e.currentTarget as HTMLAnchorElement).style.color = "#fff"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.07)"; (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.5)"; }}
                aria-label="Twitter / X"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="#"
                className="w-8 h-8 rounded-lg flex items-center justify-center transition-all"
                style={{ background: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.5)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.12)"; (e.currentTarget as HTMLAnchorElement).style.color = "#fff"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.07)"; (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.5)"; }}
                aria-label="LinkedIn"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, items]) => (
            <div key={category}>
              <div
                className="text-xs font-semibold uppercase tracking-wider mb-4"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                {category}
              </div>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm transition-colors"
                      style={{ color: "rgba(255,255,255,0.3)" }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.75)"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.3)"; }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.25)" }}>
            &copy; {new Date().getFullYear()} Workflo B.V. Alle rechten voorbehouden.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.25)" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.6)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.25)"; }}
            >
              Privacy Policy
            </a>
            <a href="#" style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.25)" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.6)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.25)"; }}
            >
              Voorwaarden
            </a>
            <div className="flex items-center gap-1.5" style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.25)" }}>
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "#34d399", display: "inline-block" }}
              />
              Alle systemen operationeel
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
