import Link from "next/link";

const services = [
  "Search Engine Optimization",
  "Website Development",
  "AI Automation",
  "CRM Integration",
  "Custom Dashboards",
  "Digital Strategy",
];

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#050F1F] border-t border-[#C9A84C]/10 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#C9A84C]/3 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-15 mb-14">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              
              <div>
                <div className="text-white font-display text-base font-semibold">Omak Enterprise</div>
                <div className="text-[#C9A84C] text-[9px] tracking-[0.2em] uppercase">Inc. · New York</div>
              </div>
            </div>
            <p className="text-[#8A95A3] text-sm leading-relaxed font-body mb-6">
              A New York-registered digital growth agency helping businesses scale through intelligent technology, strategic SEO, and bespoke digital solutions.
            </p>
            <div className="flex items-center gap-1 text-[#C9A84C] text-xs font-mono tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] animate-pulse" />
              <span>Available for new projects</span>
            </div>
          </div>

    

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-display text-base font-semibold mb-5 tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#8A95A3] text-sm font-body hover:text-[#C9A84C] transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-3 h-px bg-[#C9A84C]/40 group-hover:w-5 group-hover:bg-[#C9A84C] transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-display text-base font-semibold mb-5 tracking-wide">
              Get In Touch
            </h4>
            <div className="space-y-4">
              <div>
                <div className="text-[#C9A84C] text-[10px] tracking-[0.2em] uppercase font-mono mb-1">Location</div>
                <div className="text-[#8A95A3] text-sm font-body">New York, USA</div>
              </div>
              <div>
                <div className="text-[#C9A84C] text-[10px] tracking-[0.2em] uppercase font-mono mb-1">Email</div>
                <a
                  href="mailto:hello@omakenterprise.com"
                  className="text-[#8A95A3] text-sm font-body hover:text-white transition-colors"
                >
                  hello@omakenterprise.com
                </a>
              </div>
              <div>
                <div className="text-[#C9A84C] text-[10px] tracking-[0.2em] uppercase font-mono mb-1">Business Hours</div>
                <div className="text-[#8A95A3] text-sm font-body">Mon–Fri, 9AM–6PM EST</div>
              </div>
              <Link
                href="/contact"
                className="inline-block mt-2 px-5 py-2.5 border border-[#C9A84C] text-[#C9A84C] text-xs font-body tracking-widest uppercase hover:bg-[#C9A84C] hover:text-[#050F1F] transition-all duration-300 font-medium"
              >
                Start a Project
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="gold-line mb-6" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[#6B7685] text-xs font-body tracking-wide">
            © {new Date().getFullYear()} Omak Enterprise Inc. All rights reserved. Registered in New York, USA.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="text-[#6B7685] text-xs font-body hover:text-[#C9A84C] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-[#6B7685] text-xs font-body hover:text-[#C9A84C] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
