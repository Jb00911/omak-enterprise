import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Omak Enterprise Inc. is a New York-registered digital growth agency built to help businesses compete and win online — through SEO, AI automation, world-class web development, and intelligent digital strategy.",
};

const values = [
  {
    icon: "◎",
    title: "Results Over Optics",
    desc: "We measure success by the outcomes we create for our clients — not by impressive-looking reports. Every KPI we set is tied directly to your business goals, and we do not stop optimizing until those goals are met.",
  },
  {
    icon: "◇",
    title: "Relentless Precision",
    desc: "Great digital work demands attention to detail that most agencies overlook. We obsess over the small things because small optimizations compound into enormous competitive advantages over time.",
  },
  {
    icon: "⬡",
    title: "Radical Transparency",
    desc: "You will always know what we are doing, why we are doing it, and what it is costing you. We believe the best client relationships are built on complete openness — no jargon, no hidden agendas.",
  },
  {
    icon: "▣",
    title: "Long-Term Thinking",
    desc: "We turn down short-term tactics that create long-term damage. Every recommendation we make is designed to build durable, compounding value — not just a quick spike that disappears next month.",
  },
];

const offerings = [
  {
    title: "We Think Strategically",
    desc: "Before writing a single line of code or publishing a single keyword, we study your market, your competitors, and your customers. Strategy comes before execution — always.",
    icon: "01",
  },
  {
    title: "We Build for Performance",
    desc: "Every website, automation, and dashboard we build is engineered for speed, reliability, and scalability. We do not cut corners because we know your business depends on these systems working perfectly.",
    icon: "02",
  },
  {
    title: "We Optimize Continuously",
    desc: "Digital growth is not a one-time project — it is an ongoing process. We monitor, measure, and improve everything we build so your results keep getting better over time.",
    icon: "03",
  },
  {
    title: "We Communicate Clearly",
    desc: "You will never be left wondering what is happening with your project. We give you regular updates, clear reporting, and direct access to the people doing the work.",
    icon: "04",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative pt-36 pb-20 bg-[#050F1F] overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#C9A84C 1px, transparent 1px), linear-gradient(90deg, #C9A84C 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#C9A84C]/4 blur-[150px] rounded-full" />

        <div className="max-w-5xl mx-auto px-6 relative">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-xs tracking-[0.35em] uppercase font-mono">
              About Us
            </span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-white font-light leading-tight mb-6">
            We Exist to Make
            <br />
            <span className="shimmer-text font-semibold italic">Your Business Win Online</span>
          </h1>
          <p className="text-[#8A95A3] text-lg font-body leading-relaxed max-w-2xl">
            Omak Enterprise Inc. is a New York-registered digital growth agency. We were built
            with one purpose: to give ambitious businesses the tools, technology, and strategy
            they need to dominate their space online — and to do it with complete transparency
            and measurable results.
          </p>
        </div>
      </section>

      <div className="gold-line" />

      {/* ── MISSION & VISION ── */}
      <section className="py-24 bg-[#071526] relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-[#C9A84C]/3 blur-[130px] rounded-full" />

        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative">
          {/* Left */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-[#C9A84C]" />
              <span className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase font-mono">
                Our Mission
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl text-white font-light mb-6 leading-tight">
              To Be the Digital Partner
              <br />
              <span className="shimmer-text font-semibold italic">Every Business Deserves</span>
            </h2>
            <div className="space-y-4 text-[#8A95A3] text-base font-body leading-relaxed">
              <p>
                Too many businesses are underserved by their digital partners. They get templated
                solutions, junior-level execution, and agencies that disappear after the invoice
                is paid. We started Omak Enterprise to fix that.
              </p>
              <p>
                Our mission is straightforward: deliver digital solutions that actually move the
                needle for our clients. Not vanity metrics. Not activity reports. Real, measurable
                growth — in traffic, in leads, in revenue.
              </p>
              <p>
                We are registered in New York and built to serve businesses that are serious about
                their digital presence. Whether you are a startup finding your footing or an
                established company ready to scale, we bring the same level of dedication,
                precision, and expertise to every engagement.
              </p>
            </div>
          </div>

          {/* Right: Vision card */}
          <div className="space-y-5">
            <div className="border border-[#C9A84C]/20 bg-[#050F1F]/80 p-8 relative">
              <div className="absolute top-0 left-0 w-5 h-5 border-l-2 border-t-2 border-[#C9A84C]" />
              <div className="absolute bottom-0 right-0 w-5 h-5 border-r-2 border-b-2 border-[#C9A84C]" />
              <p className="text-[#C9A84C] text-xs font-mono tracking-[0.3em] uppercase mb-4">
                Our Vision
              </p>
              <p className="font-display text-2xl text-white font-light leading-snug mb-4">
                &ldquo;A world where every business — regardless of size — has access to
                enterprise-grade digital capability.&rdquo;
              </p>
              <p className="text-[#8A95A3] text-sm font-body leading-relaxed">
                Enterprise-level SEO, AI, and web development should not be reserved for
                Fortune 500 companies with massive budgets. We are leveling the playing field —
                one client at a time.
              </p>
            </div>

        

            <div className="border border-[#C9A84C]/10 bg-[#050F1F]/60 p-6 flex items-center gap-4">
              <span className="w-2 h-2 rounded-full bg-[#C9A84C] animate-pulse shrink-0" />
              <div>
                <p className="text-[#C9A84C] text-xs font-mono tracking-[0.2em] uppercase mb-1">
                  Status
                </p>
                <p className="text-white text-sm font-body font-medium">
                  Actively accepting new clients
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW WE WORK ── */}
      <section className="py-24 bg-[#050F1F] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: "radial-gradient(circle, #C9A84C 1px, transparent 1px)",
            backgroundSize: "45px 45px",
          }}
        />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A84C]/3 blur-[120px] rounded-full" />

        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-px w-8 bg-[#C9A84C]" />
              <span className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase font-mono">
                How We Work
              </span>
              <span className="h-px w-8 bg-[#C9A84C]" />
            </div>
            <h2 className="font-display text-3xl md:text-5xl text-white font-light leading-tight">
              The Omak Standard —
              <br />
              <span className="shimmer-text font-semibold italic">What You Can Always Expect</span>
            </h2>
            <p className="text-[#8A95A3] text-base font-body leading-relaxed max-w-xl mx-auto mt-5">
              Every client engagement at Omak Enterprise follows the same four principles. These
              are not aspirational — they are operational standards we hold ourselves to on every
              project, every time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {offerings.map((item) => (
              <div
                key={item.title}
                className="group border border-[#C9A84C]/10 bg-[#071526]/60 p-8 hover:border-[#C9A84C]/35 hover:bg-[#0B1E3E]/60 transition-all duration-500 relative"
              >
                <div className="flex items-start gap-5 mb-5">
                  <span className="text-[#C9A84C]/25 font-mono text-3xl font-bold leading-none shrink-0">
                    {item.icon}
                  </span>
                  <h3 className="font-display text-xl text-white font-semibold leading-snug group-hover:text-[#E2C27A] transition-colors duration-300">
                    {item.title}
                  </h3>
                </div>
                <p className="text-[#8A95A3] text-sm font-body leading-relaxed">{item.desc}</p>
                <div className="absolute bottom-0 right-0 w-5 h-5 border-b border-r border-[#C9A84C]/15 group-hover:border-[#C9A84C]/45 transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="py-24 bg-[#071526] relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C9A84C]/3 blur-[120px] rounded-full" />

        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-px w-8 bg-[#C9A84C]" />
              <span className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase font-mono">
                What We Stand For
              </span>
              <span className="h-px w-8 bg-[#C9A84C]" />
            </div>
            <h2 className="font-display text-3xl md:text-5xl text-white font-light leading-tight">
              Values That Guide
              <br />
              <span className="shimmer-text font-semibold italic">Every Decision We Make</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v) => (
              <div
                key={v.title}
                className="group border border-[#C9A84C]/10 bg-[#050F1F]/60 p-7 hover:border-[#C9A84C]/40 hover:bg-[#0B1E3E]/60 transition-all duration-500"
              >
                <span className="text-[#C9A84C] text-2xl block mb-5">{v.icon}</span>
                <h3 className="font-display text-lg text-white font-semibold mb-3 group-hover:text-[#E2C27A] transition-colors duration-300">
                  {v.title}
                </h3>
                <p className="text-[#8A95A3] text-sm font-body leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-24 bg-[#050F1F] relative overflow-hidden">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#C9A84C]/3 blur-[120px] rounded-full -translate-y-1/2" />

        <div className="max-w-6xl mx-auto px-6 relative grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-[#C9A84C]" />
              <span className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase font-mono">
                Why Omak Enterprise
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl text-white font-light leading-tight mb-6">
              Not Just Another Agency.
              <br />
              <span className="shimmer-text font-semibold italic">A Growth Partner.</span>
            </h2>
            <div className="space-y-4 text-[#8A95A3] text-base font-body leading-relaxed">
              <p>
                The digital agency market is crowded. Most agencies promise the world, deliver
                mediocre work, and move on to the next client. We built Omak Enterprise as a
                direct response to that problem.
              </p>
              <p>
                We operate as a true extension of your team. When your business grows, we
                consider that a shared win. When something is not performing, we own it and fix it —
                we do not make excuses or hide behind vanity metrics.
              </p>
              <p>
                Our edge is the combination of strategic depth, technical excellence, and a
                genuine commitment to long-term client success. We are not here for a quick
                transaction — we are here to build something lasting with you.
              </p>
            </div>
          </div>

          {/* Right: Differentiators */}
          <div className="space-y-4">
            {[
              {
                title: "New York Incorporated, Globally Capable",
                desc: "Registered in New York — one of the world's most demanding business environments. We bring that standard of professionalism to clients everywhere.",
              },
              {
                title: "Full-Stack Digital Under One Roof",
                desc: "SEO, web dev, AI automation, CRM, dashboards — you will never need to coordinate between multiple agencies again. We handle it all.",
              },
              {
                title: "Senior Expertise on Every Project",
                desc: "No bait-and-switch. The experienced people you speak with are the same people who execute your work.",
              },
              {
                title: "Priced for Growth, Not Extravagance",
                desc: "Enterprise-quality work does not have to come with an enterprise-sized price tag. We structure our engagements to be accessible and ROI-positive.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex gap-4 border border-[#C9A84C]/10 bg-[#071526]/60 p-5 hover:border-[#C9A84C]/25 transition-all duration-300"
              >
                <span className="text-[#C9A84C] mt-0.5 shrink-0 text-lg">◆</span>
                <div>
                  <h3 className="font-display text-base text-white font-semibold mb-1">
                    {item.title}
                  </h3>
                  <p className="text-[#8A95A3] text-sm font-body leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-[#071526] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-[#C9A84C]/5 blur-[100px] rounded-full" />
        <div className="max-w-3xl mx-auto px-6 text-center relative">
          <div className="border border-[#C9A84C]/20 bg-[#050F1F]/60 px-10 py-14 relative">
            <div className="absolute top-0 left-0 w-5 h-5 border-l-2 border-t-2 border-[#C9A84C]" />
            <div className="absolute top-0 right-0 w-5 h-5 border-r-2 border-t-2 border-[#C9A84C]" />
            <div className="absolute bottom-0 left-0 w-5 h-5 border-l-2 border-b-2 border-[#C9A84C]" />
            <div className="absolute bottom-0 right-0 w-5 h-5 border-r-2 border-b-2 border-[#C9A84C]" />

            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="h-px w-8 bg-[#C9A84C]" />
              <span className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase font-mono">
                Let&apos;s Work Together
              </span>
              <span className="h-px w-8 bg-[#C9A84C]" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl text-white font-light mb-4 leading-tight">
              Ready to Build Something
              <br />
              <span className="shimmer-text font-semibold italic">That Actually Grows?</span>
            </h2>
            <p className="text-[#8A95A3] text-base font-body leading-relaxed mb-10 max-w-lg mx-auto">
              Book a free consultation and let us show you exactly how Omak Enterprise can
              accelerate your digital growth — with zero obligation and complete transparency.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-10 py-4 bg-[#C9A84C] text-[#050F1F] text-sm font-body font-semibold tracking-[0.1em] uppercase hover:bg-[#E2C27A] transition-all duration-300 hover:shadow-[0_0_40px_rgba(201,168,76,0.3)]"
              >
                Book Free Consultation
              </Link>
              <Link
                href="/services"
                className="px-10 py-4 border border-[#C9A84C]/30 text-[#D4D9E1] text-sm font-body tracking-[0.1em] uppercase hover:border-[#C9A84C] hover:text-white transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
