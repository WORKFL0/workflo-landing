export default function Footer() {
  const links = {
    Product: ["Features", "Pricing", "Security", "Changelog", "Roadmap"],
    Company: ["About", "Blog", "Careers", "Press", "Contact"],
    Resources: ["Docs", "API Reference", "Status", "Community", "Partners"],
    Legal: ["Privacy", "Terms", "Cookies", "GDPR", "DPA"],
  };

  return (
    <footer className="relative border-t border-white/5 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7L5.5 10.5L12 3.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="text-white font-semibold">Workflo</span>
            </div>
            <p className="text-white/30 text-xs leading-relaxed max-w-[180px]">
              Modern Mac fleet management for teams who care about craft.
            </p>
            <div className="flex items-center gap-3 mt-5">
              {["𝕏", "in", "gh"].map((icon) => (
                <a
                  key={icon}
                  href="#"
                  className="w-7 h-7 glass rounded-md flex items-center justify-center text-xs text-white/40 hover:text-white/70 transition-colors"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <div className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-4">
                {category}
              </div>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-white/30 text-sm hover:text-white/70 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs">
            © {new Date().getFullYear()} Workflo Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5 text-xs text-white/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  );
}
