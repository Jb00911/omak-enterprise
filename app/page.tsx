"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";

/* ── Intersection Observer hook for reveal animations ── */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((child) => {
              (child as HTMLElement).style.opacity = "1";
              (child as HTMLElement).style.transform = "none";
            });
          }
        });
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

/* ── Service Cards Data ── */
const services = [
  {
    icon: "◎",
    title: "Search Engine Optimization",
    desc: "Dominate search rankings with data-driven SEO strategies that bring qualified traffic, build domain authority, and generate sustainable organic growth for your business.",
    tag: "Growth",
  },
  {
    icon: "⬡",
    title: "Website Development",
    desc: "We design and build high-performance, conversion-focused websites that look exceptional and function flawlessly — crafted for speed, SEO, and user experience.",
    tag: "Build",
  },
  {
    icon: "◈",
    title: "AI Automation",
    desc: "Eliminate repetitive tasks and unlock efficiency with custom AI workflows. From intelligent chatbots to automated pipelines, we integrate AI where it creates real ROI.",
    tag: "Automate",
  },
  {
    icon: "◇",
    title: "CRM Integration",
    desc: "Unify your customer data, streamline your sales pipeline, and turn leads into loyal clients with expertly configured CRM systems tailored to your business model.",
    tag: "Optimize",
  },
  {
    icon: "▣",
    title: "Custom Dashboards",
    desc: "See your entire business at a glance. We build powerful, real-time analytics dashboards that transform raw data into actionable insights for smarter decisions.",
    tag: "Insights",
  },
  {
    icon: "◍",
    title: "Digital Strategy",
    desc: "Every successful digital presence starts with a clear roadmap. We craft comprehensive digital strategies that align technology, content, and growth objectives.",
    tag: "Strategy",
  },
];

const stats = [
  { number: "50+", label: "Projects Delivered" },
  { number: "90%", label: "Client Retention Rate" },
  { number: "20+", label: "Industries Served" },
  
];

const whyUs = [
  {
    title: "New York Registered, Globally Capable",
    desc: "As a registered New York corporation, we bring the discipline and professionalism of the world's business capital to clients across every timezone.",
  },
  {
    title: "Full-Stack Digital Expertise",
    desc: "From organic search to AI automation to real-time dashboards — we are not a one-trick shop. We provide end-to-end digital solutions under one roof.",
  },
  {
    title: "Data-Led, Results-Driven",
    desc: "Every recommendation we make is backed by data. We set clear KPIs from day one and relentlessly optimize until your goals are met and exceeded.",
  },
  {
    title: "Transparent Partnership",
    desc: "No jargon, no hidden fees, no ambiguity. You always know exactly what we are working on, why, and what results to expect. We earn trust through clarity.",
  },
];

export default function HomePage() {
  const servicesRef = useReveal();
  const statsRef = useReveal();
  const whyRef = useReveal();

  return (
    <>
      {/* ────────────────────── HERO ────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050F1F]">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#C9A84C 1px, transparent 1px), linear-gradient(90deg, #C9A84C 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Radial glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#0B1E3E] rounded-full blur-[100px] opacity-70" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#C9A84C]/5 rounded-full blur-[80px]" />

        {/* Decorative corner lines */}
        <div className="absolute top-24 left-10 w-16 h-16 border-l border-t border-[#C9A84C]/20" />
        <div className="absolute top-24 right-10 w-16 h-16 border-r border-t border-[#C9A84C]/20" />
        <div className="absolute bottom-24 left-10 w-16 h-16 border-l border-b border-[#C9A84C]/20" />
        <div className="absolute bottom-24 right-10 w-16 h-16 border-r border-b border-[#C9A84C]/20" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-3 mb-8">
            <span className="h-px w-8 bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-xs tracking-[0.35em] uppercase font-mono font-medium">
              New York Digital Growth Agency
            </span>
            <span className="h-px w-8 bg-[#C9A84C]" />
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light text-white leading-[1.05] mb-6 tracking-tight">
            We Build the Digital
            <br />
            <span className="shimmer-text font-semibold italic">
              Infrastructure
            </span>
            <br />
            That Grows Your Business
          </h1>

          {/* Sub */}
          <p className="text-[#8A95A3] text-lg md:text-xl font-body font-light max-w-2xl mx-auto leading-relaxed mb-12">
            Omak Enterprise Inc. delivers results-driven SEO, world-class web development,
            AI automation, CRM integration, and real-time analytics — all engineered to
            accelerate your growth.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-[#C9A84C] text-[#050F1F] text-sm font-body font-semibold tracking-[0.1em] uppercase hover:bg-[#E2C27A] transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,168,76,0.3)]"
            >
              Start Your Project
            </Link>
            <Link
              href="/services"
              className="px-8 py-4 border border-[#C9A84C]/30 text-[#D4D9E1] text-sm font-body tracking-[0.1em] uppercase hover:border-[#C9A84C] hover:text-white transition-all duration-300"
            >
              Explore Services
            </Link>
          </div>

          
        </div>
      </section>

      {/* ────────────────────── STATS ────────────────────── */}
      <section className="py-16 bg-[#071526] border-y border-[#C9A84C]/10 relative">
        <div className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: "linear-gradient(#C9A84C 1px, transparent 1px), linear-gradient(90deg, #C9A84C 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div ref={statsRef} className="max-w-6xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="reveal text-center"
              style={{ opacity: 0, transform: "translateY(20px)", transition: `all 0.6s ease ${i * 0.12}s` }}
            >
              <div className="font-display text-4xl md:text-5xl text-[#C9A84C] font-semibold mb-2">
                {stat.number}
              </div>
              <div className="text-[#8A95A3] text-xs font-mono tracking-[0.2em] uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ────────────────────── SERVICES ────────────────────── */}
      <section className="py-24 md:py-32 bg-[#050F1F] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A84C]/3 blur-[120px] rounded-full" />

        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-8 bg-[#C9A84C]" />
                <span className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase font-mono">What We Do</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl text-white font-light leading-tight">
                Services That Drive
                <br />
                <span className="shimmer-text font-semibold italic">Real Results</span>
              </h2>
            </div>
            <p className="text-[#8A95A3] text-base font-body max-w-sm leading-relaxed md:text-right">
              We combine strategy, technology, and creativity to build digital systems that work for your business around the clock.
            </p>
          </div>

          {/* Cards */}
          <div ref={servicesRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, i) => (
              <div
                key={service.title}
                className="reveal group relative border border-[#C9A84C]/10 bg-[#071526]/60 hover:border-[#C9A84C]/40 hover:bg-[#0B1E3E]/60 transition-all duration-500 p-8"
                style={{ opacity: 0, transform: "translateY(24px)", transition: `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s, border-color 0.3s, background-color 0.3s` }}
              >
                {/* Top row */}
                <div className="flex items-start justify-between mb-6">
                  <span className="text-[#C9A84C] text-2xl">{service.icon}</span>
                  <span className="text-[10px] text-[#C9A84C]/60 tracking-[0.25em] uppercase font-mono border border-[#C9A84C]/20 px-2 py-0.5">
                    {service.tag}
                  </span>
                </div>

                <h3 className="font-display text-xl text-white font-semibold mb-3 leading-snug group-hover:text-[#E2C27A] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-[#8A95A3] text-sm font-body leading-relaxed">
                  {service.desc}
                </p>

                {/* Hover arrow */}
                <div className="mt-6 flex items-center gap-2 text-[#C9A84C]/0 group-hover:text-[#C9A84C] transition-all duration-300 text-xs font-mono tracking-wider uppercase">
                  <span>Learn More</span>
                  <span className="text-base">→</span>
                </div>

                {/* Corner accent */}
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-[#C9A84C]/20 group-hover:border-[#C9A84C]/60 transition-colors duration-300" />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-3 px-8 py-4 border border-[#C9A84C]/30 text-[#C9A84C] text-sm font-body tracking-[0.1em] uppercase hover:border-[#C9A84C] hover:bg-[#C9A84C]/5 transition-all duration-300"
            >
              View All Services
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ────────────────────── WHY US ────────────────────── */}
      <section className="py-24 md:py-32 bg-[#071526] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: "radial-gradient(circle, #C9A84C 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#C9A84C]/3 blur-[120px] rounded-full" />

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left text */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-8 bg-[#C9A84C]" />
                <span className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase font-mono">Why Omak Enterprise</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl text-white font-light leading-tight mb-6">
                Precision-Built for
                <br />
                <span className="shimmer-text font-semibold italic">Business Growth</span>
              </h2>
              <p className="text-[#8A95A3] text-base font-body leading-relaxed mb-8">
                We are not a generic agency. Omak Enterprise Inc. was founded to serve businesses
                that are serious about digital growth. Every engagement starts with deep discovery,
                is powered by proven technology, and is measured relentlessly against your KPIs.
              </p>
              <p className="text-[#8A95A3] text-base font-body leading-relaxed mb-10">
                Based in New York and serving clients globally, we bring enterprise-level thinking
                to every project — whether you are a fast-growing startup or an established brand
                looking to accelerate.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-3 text-[#C9A84C] text-sm font-body tracking-[0.15em] uppercase border-b border-[#C9A84C]/30 pb-1 hover:border-[#C9A84C] transition-all duration-300"
              >
                Learn About Us <span>→</span>
              </Link>
            </div>

            {/* Right cards */}
            <div ref={whyRef} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whyUs.map((item, i) => (
                <div
                  key={item.title}
                  className="reveal border border-[#C9A84C]/10 bg-[#050F1F]/80 p-6 hover:border-[#C9A84C]/30 transition-all duration-400"
                  style={{ opacity: 0, transform: "translateY(20px)", transition: `all 0.5s ease ${i * 0.1}s` }}
                >
                  <div className="w-6 h-px bg-[#C9A84C] mb-4" />
                  <h3 className="font-display text-base text-white font-semibold mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[#8A95A3] text-sm font-body leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────── CTA BANNER ────────────────────── */}
      <section className="py-24 relative overflow-hidden bg-[#050F1F]">
        {/* Gold glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#C9A84C]/6 blur-[100px] rounded-full" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="border border-[#C9A84C]/20 bg-[#071526]/60 px-8 md:px-16 py-14 md:py-16 relative">
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-[#C9A84C]" />
            <div className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-[#C9A84C]" />
            <div className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-[#C9A84C]" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-[#C9A84C]" />

            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="h-px w-8 bg-[#C9A84C]" />
              <span className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase font-mono">Ready to Grow?</span>
              <span className="h-px w-8 bg-[#C9A84C]" />
            </div>

            <h2 className="font-display text-3xl md:text-5xl text-white font-light leading-tight mb-5">
              Let&apos;s Build Something
              <br />
              <span className="shimmer-text font-semibold italic">Exceptional Together</span>
            </h2>

            <p className="text-[#8A95A3] text-base font-body leading-relaxed max-w-xl mx-auto mb-10">
              Schedule a free consultation with our team. We will audit your current digital presence,
              identify the highest-leverage opportunities, and propose a custom growth roadmap — at no cost.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-10 py-4 bg-[#C9A84C] text-[#050F1F] text-sm font-body font-semibold tracking-[0.1em] uppercase hover:bg-[#E2C27A] transition-all duration-300 hover:shadow-[0_0_40px_rgba(201,168,76,0.35)]"
              >
                Book Free Consultation
              </Link>
              <Link
                href="/services"
                className="px-10 py-4 border border-[#C9A84C]/30 text-[#D4D9E1] text-sm font-body tracking-[0.1em] uppercase hover:border-[#C9A84C] hover:text-white transition-all duration-300"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
