import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore Omak Enterprise Inc.'s full suite of digital growth services — SEO, website development, AI automation, CRM integration, custom dashboards, and digital strategy. Based in New York.",
};

const services = [
  {
    number: "01",
    icon: "◎",
    title: "Search Engine Optimization",
    tagline: "Rank Higher. Get Found. Grow Organically.",
    desc: "In a world where the first page of Google receives over 90% of all clicks, visibility is everything. Our SEO team employs a comprehensive, white-hat approach that covers every dimension of modern search — from technical site architecture and Core Web Vitals optimization to authoritative link acquisition and content strategy. We build long-term organic growth engines, not quick fixes.",
    features: [
      "Technical SEO audits & remediation",
      "Keyword research & competitive analysis",
      "On-page & content optimization",
      "Link building & digital PR",
      "Local SEO for geo-targeted businesses",
      "Monthly performance reporting & insights",
    ],
    outcome: "Businesses working with us typically see a 3–5× increase in organic traffic within 6 months.",
  },
  {
    number: "02",
    icon: "⬡",
    title: "Website Development",
    tagline: "Beautiful, Fast, Built to Convert.",
    desc: "Your website is your most important digital asset — it works for you 24 hours a day, 7 days a week. We build custom, high-performance websites and web applications using modern frameworks like Next.js and React. Every site we build is engineered for speed (Core Web Vitals), optimized for search engines at the code level, and designed with conversion psychology at its core. We do not use templates. Every project is bespoke.",
    features: [
      "Custom Next.js / React web development",
      "UI/UX design with conversion optimization",
      "CMS integration (Sanity, Contentful, Wordpress)",
      "E-commerce development (Shopify, custom)",
      "Performance & accessibility optimization",
      "Ongoing maintenance & support plans",
    ],
    outcome: "Our websites consistently achieve 90+ Google PageSpeed scores and measurable conversion uplift.",
  },
  {
    number: "03",
    icon: "◈",
    title: "AI Automation",
    tagline: "Automate the Repetitive. Scale the Meaningful.",
    desc: "Artificial intelligence is no longer the future — it is the competitive advantage businesses use right now. We design and implement intelligent automation systems that eliminate manual, repetitive work from your operations. Whether it is an AI-powered customer support agent that resolves 80% of inquiries without human intervention, an automated lead qualification pipeline, or an intelligent document processing system, we build AI that delivers measurable ROI from day one.",
    features: [
      "AI chatbot & virtual assistant development",
      "Workflow automation with n8n / Zapier / custom",
      "Automated lead nurturing sequences",
      "AI-powered content generation pipelines",
      "Intelligent document processing & OCR",
      "Custom GPT & LLM integrations",
    ],
    outcome: "Our clients report saving 20–40 hours per week through automation — time reinvested in growth.",
  },
  {
    number: "04",
    icon: "◇",
    title: "CRM Integration",
    tagline: "Unify Your Customer Data. Accelerate Your Sales.",
    desc: "A CRM system is only as powerful as the processes built around it. We go beyond simple setup — we architect complete customer relationship ecosystems. From choosing the right CRM platform for your business to building custom fields, automating follow-up sequences, integrating with your marketing stack, and training your team, we ensure your CRM becomes the central nervous system of your revenue operation.",
    features: [
      "CRM platform selection & strategy",
      "HubSpot, Salesforce, Zoho, Pipedrive setup",
      "Custom field architecture & pipeline design",
      "Marketing & sales automation within CRM",
      "Third-party tool integrations & API connections",
      "Team training & adoption support",
    ],
    outcome: "Clients with our CRM implementations see average sales cycle reductions of 30%.",
  },
  {
    number: "05",
    icon: "▣",
    title: "Custom Dashboards",
    tagline: "Your Entire Business. One Intelligent View.",
    desc: "Data without visibility is wasted potential. We build custom real-time analytics dashboards that consolidate your most critical business metrics into a single, intuitive interface. Whether you need executive-level KPI overviews, granular marketing performance data, operational metrics, or financial reporting — we build dashboards that give decision-makers the clarity they need to act fast and act smart.",
    features: [
      "Custom dashboard design & development",
      "Multi-source data integration (GA4, CRM, ads, etc.)",
      "Real-time data visualization",
      "Role-based access & permissions",
      "Automated reporting & scheduled exports",
      "Mobile-responsive & embeddable widgets",
    ],
    outcome: "Leaders using our dashboards report 50% faster decision-making cycles.",
  },
  {
    number: "06",
    icon: "◍",
    title: "Digital Strategy",
    tagline: "Clarity Before Action. Direction Before Investment.",
    desc: "Before building anything, every successful digital transformation requires a clear, evidence-based strategy. Our digital strategy service gives you a comprehensive roadmap that maps your business goals to specific digital initiatives, prioritizes investments by expected ROI, identifies quick wins alongside long-term plays, and creates alignment across your entire team. Stop guessing. Start growing with intention.",
    features: [
      "Digital presence audit & competitive analysis",
      "Customer journey mapping",
      "Channel strategy & budget allocation",
      "Content strategy & editorial planning",
      "Growth roadmap with quarterly milestones",
      "Team alignment workshops",
    ],
    outcome: "Strategy engagements consistently improve marketing ROI by identifying and eliminating wasteful spend.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative pt-36 pb-20 bg-[#050F1F] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(#C9A84C 1px, transparent 1px), linear-gradient(90deg, #C9A84C 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#C9A84C]/4 blur-[120px] rounded-full -translate-y-1/2" />

        <div className="max-w-5xl mx-auto px-6 relative">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-xs tracking-[0.35em] uppercase font-mono">Our Services</span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-white font-light leading-tight mb-6">
            Everything Your Business
            <br />
            <span className="shimmer-text font-semibold italic">Needs to Dominate Online</span>
          </h1>
          <p className="text-[#8A95A3] text-lg font-body leading-relaxed max-w-2xl">
            We offer a complete suite of digital growth services — each one designed to work on its
            own, and all of them engineered to compound when combined. This is how we build
            unfair competitive advantages for our clients.
          </p>
        </div>
      </section>

      <div className="gold-line" />

      {/* ── SERVICES DETAIL ── */}
      <section className="py-20 bg-[#050F1F]">
        <div className="max-w-6xl mx-auto px-6 space-y-0">
          {services.map((service, i) => (
            <div key={service.number}>
              <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 py-20 items-start ${i % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>
                {/* Left: Info */}
                <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-5">
                    <span className="text-[#C9A84C]/30 font-mono text-4xl font-bold leading-none">
                      {service.number}
                    </span>
                    <span className="text-[#C9A84C] text-2xl">{service.icon}</span>
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl text-white font-semibold mb-2 leading-tight">
                    {service.title}
                  </h2>
                  <p className="text-[#C9A84C] text-sm font-mono tracking-wider mb-6 italic">
                    {service.tagline}
                  </p>
                  <p className="text-[#8A95A3] text-base font-body leading-relaxed mb-8">
                    {service.desc}
                  </p>

                  {/* Outcome */}
                  <div className="border-l-2 border-[#C9A84C] pl-5 mb-8 bg-[#C9A84C]/5 py-3 pr-4">
                    <p className="text-[#E2C27A] text-sm font-body italic leading-relaxed">
                      {service.outcome}
                    </p>
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-3 px-6 py-3 border border-[#C9A84C]/30 text-[#C9A84C] text-xs font-body tracking-[0.15em] uppercase hover:border-[#C9A84C] hover:bg-[#C9A84C]/5 transition-all duration-300"
                  >
                    Get Started <span>→</span>
                  </Link>
                </div>

                {/* Right: Features */}
                <div className={`${i % 2 !== 0 ? "lg:order-1" : ""}`}>
                  <div className="border border-[#C9A84C]/15 bg-[#071526]/70 p-8 relative">
                    <div className="absolute top-0 left-0 w-5 h-5 border-l-2 border-t-2 border-[#C9A84C]" />
                    <div className="absolute top-0 right-0 w-5 h-5 border-r-2 border-t-2 border-[#C9A84C]" />
                    <div className="absolute bottom-0 left-0 w-5 h-5 border-l-2 border-b-2 border-[#C9A84C]" />
                    <div className="absolute bottom-0 right-0 w-5 h-5 border-r-2 border-b-2 border-[#C9A84C]" />

                    <h3 className="text-[#C9A84C] text-xs font-mono tracking-[0.3em] uppercase mb-6">
                      What&apos;s Included
                    </h3>
                    <ul className="space-y-4">
                      {service.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-3">
                          <span className="text-[#C9A84C] mt-0.5 shrink-0">◆</span>
                          <span className="text-[#D4D9E1] text-sm font-body leading-relaxed">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Divider between services */}
              {i < services.length - 1 && <div className="gold-line" />}
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-[#071526] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-[#C9A84C]/5 blur-[100px] rounded-full" />
        <div className="max-w-3xl mx-auto px-6 text-center relative">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-px w-8 bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase font-mono">Let&apos;s Talk</span>
            <span className="h-px w-8 bg-[#C9A84C]" />
          </div>
          <h2 className="font-display text-3xl md:text-5xl text-white font-light mb-5 leading-tight">
            Not Sure Where to Start?
            <br />
            <span className="shimmer-text font-semibold italic">We&apos;ll Guide You.</span>
          </h2>
          <p className="text-[#8A95A3] text-base font-body leading-relaxed mb-10">
            Every business is at a different stage of its digital journey. Book a free 30-minute strategy
            call and we will tell you exactly which services will move the needle most for you, right now.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-[#C9A84C] text-[#050F1F] text-sm font-body font-semibold tracking-[0.1em] uppercase hover:bg-[#E2C27A] transition-all duration-300 hover:shadow-[0_0_40px_rgba(201,168,76,0.3)]"
          >
            Book Free Strategy Call
          </Link>
        </div>
      </section>
    </>
  );
}
