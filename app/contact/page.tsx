"use client";
import { useState } from "react";
import type { Metadata } from "next";

const services = [
  "Search Engine Optimization",
  "Website Development",
  "AI Automation",
  "CRM Integration",
  "Custom Dashboard",
  "Digital Strategy",
  "Multiple Services",
];

const budgets = [
  "Under $1,000",
  "$1,000 – $5,000",
  "$5,000 – $15,000",
  "$15,000 – $50,000",
  "$50,000+",
  "Not Sure Yet",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        return;
      }
      setSubmitted(true);
    } catch {
      setError("Unable to send. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative pt-36 pb-16 bg-[#050F1F] overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#C9A84C 1px, transparent 1px), linear-gradient(90deg, #C9A84C 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#C9A84C]/4 blur-[150px] rounded-full -translate-y-1/2" />

        <div className="max-w-5xl mx-auto px-6 relative">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-xs tracking-[0.35em] uppercase font-mono">
              Contact Us
            </span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-white font-light leading-tight mb-5">
            Let&apos;s Start Your
            <br />
            <span className="shimmer-text font-semibold italic">Growth Journey</span>
          </h1>
          <p className="text-[#8A95A3] text-lg font-body leading-relaxed max-w-2xl">
            Tell us about your business and goals. Our team will review your request and respond
            within one business day with a tailored proposal and a free consultation offer.
          </p>
        </div>
      </section>

      <div className="gold-line" />

      {/* ── FORM + INFO ── */}
      <section className="py-20 bg-[#050F1F] relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C9A84C]/3 blur-[120px] rounded-full" />

        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-5 gap-14 relative">
          {/* Left: Info */}
          <div className="lg:col-span-2 space-y-10">
            {/* Availability */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#C9A84C] animate-pulse" />
                <span className="text-[#C9A84C] text-xs font-mono tracking-[0.25em] uppercase">
                  Currently Accepting Clients
                </span>
              </div>
              <p className="text-[#8A95A3] text-sm font-body leading-relaxed">
                We take on a limited number of new engagements each quarter to ensure every client
                receives our full attention. Reach out now to secure your spot.
              </p>
            </div>

            {/* Contact details */}
            <div className="space-y-6">
              {[
                {
                  label: "Email",
                  value: "hello@omakenterprise.com",
                  href: "mailto:hello@omakenterprise.com",
                },
                {
                  label: "Location",
                  value: "New York, USA",
                  href: null,
                },
                {
                  label: "Business Hours",
                  value: "Monday – Friday, 9AM – 6PM EST",
                  href: null,
                },
                {
                  label: "Response Time",
                  value: "Within 1 business day",
                  href: null,
                },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-[#C9A84C] text-[10px] tracking-[0.25em] uppercase font-mono mb-1">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-[#D4D9E1] text-sm font-body hover:text-[#C9A84C] transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-[#D4D9E1] text-sm font-body">{item.value}</p>
                  )}
                </div>
              ))}
            </div>

            {/* What to expect */}
            <div className="border border-[#C9A84C]/15 bg-[#071526]/70 p-6 relative">
              <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-[#C9A84C]" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-[#C9A84C]" />
              <h3 className="text-[#C9A84C] text-xs font-mono tracking-[0.25em] uppercase mb-5">
                What Happens Next
              </h3>
              <ol className="space-y-4">
                {[
                  "We review your submission within 24 hours",
                  "We schedule a free 30-minute discovery call",
                  "We send a tailored proposal with clear pricing",
                  "We kick off your project — and start delivering results",
                ].map((step, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="shrink-0 w-5 h-5 border border-[#C9A84C]/40 flex items-center justify-center text-[#C9A84C] text-[10px] font-mono">
                      {i + 1}
                    </span>
                    <span className="text-[#8A95A3] text-sm font-body leading-snug">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="border border-[#C9A84C]/30 bg-[#071526]/70 p-12 text-center relative">
                <div className="absolute top-0 left-0 w-5 h-5 border-l-2 border-t-2 border-[#C9A84C]" />
                <div className="absolute top-0 right-0 w-5 h-5 border-r-2 border-t-2 border-[#C9A84C]" />
                <div className="absolute bottom-0 left-0 w-5 h-5 border-l-2 border-b-2 border-[#C9A84C]" />
                <div className="absolute bottom-0 right-0 w-5 h-5 border-r-2 border-b-2 border-[#C9A84C]" />
                <div className="text-[#C9A84C] text-4xl mb-5">◆</div>
                <h2 className="font-display text-3xl text-white font-semibold mb-4">
                  Message Received
                </h2>
                <p className="text-[#8A95A3] text-base font-body leading-relaxed max-w-md mx-auto">
                  Thank you for reaching out to Omak Enterprise. A member of our team will review
                  your inquiry and respond within one business day.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="border border-[#C9A84C]/15 bg-[#071526]/60 p-8 md:p-10 space-y-6 relative"
              >
                <div className="absolute top-0 left-0 w-5 h-5 border-l-2 border-t-2 border-[#C9A84C]" />
                <div className="absolute top-0 right-0 w-5 h-5 border-r-2 border-t-2 border-[#C9A84C]" />
                <div className="absolute bottom-0 left-0 w-5 h-5 border-l-2 border-b-2 border-[#C9A84C]" />
                <div className="absolute bottom-0 right-0 w-5 h-5 border-r-2 border-b-2 border-[#C9A84C]" />

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-[#C9A84C] text-[10px] tracking-[0.25em] uppercase font-mono mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className="w-full bg-[#050F1F] border border-[#C9A84C]/20 text-[#D4D9E1] text-sm font-body px-4 py-3 placeholder-[#6B7685] focus:outline-none focus:border-[#C9A84C]/60 transition-colors"
                    />
                  </div>
                  {/* Email */}
                  <div>
                    <label className="block text-[#C9A84C] text-[10px] tracking-[0.25em] uppercase font-mono mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className="w-full bg-[#050F1F] border border-[#C9A84C]/20 text-[#D4D9E1] text-sm font-body px-4 py-3 placeholder-[#6B7685] focus:outline-none focus:border-[#C9A84C]/60 transition-colors"
                    />
                  </div>
                </div>

                {/* Company */}
                <div>
                  <label className="block text-[#C9A84C] text-[10px] tracking-[0.25em] uppercase font-mono mb-2">
                    Company / Website
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Acme Inc. / www.acme.com"
                    className="w-full bg-[#050F1F] border border-[#C9A84C]/20 text-[#D4D9E1] text-sm font-body px-4 py-3 placeholder-[#6B7685] focus:outline-none focus:border-[#C9A84C]/60 transition-colors"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Service */}
                  <div>
                    <label className="block text-[#C9A84C] text-[10px] tracking-[0.25em] uppercase font-mono mb-2">
                      Service Interested In *
                    </label>
                    <select
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-[#050F1F] border border-[#C9A84C]/20 text-[#D4D9E1] text-sm font-body px-4 py-3 focus:outline-none focus:border-[#C9A84C]/60 transition-colors appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Select a service</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  {/* Budget */}
                  <div>
                    <label className="block text-[#C9A84C] text-[10px] tracking-[0.25em] uppercase font-mono mb-2">
                      Estimated Budget
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full bg-[#050F1F] border border-[#C9A84C]/20 text-[#D4D9E1] text-sm font-body px-4 py-3 focus:outline-none focus:border-[#C9A84C]/60 transition-colors appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Select budget range</option>
                      {budgets.map((b) => (
                        <option key={b} value={b}>{b}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[#C9A84C] text-[10px] tracking-[0.25em] uppercase font-mono mb-2">
                    Tell Us About Your Project *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your business, your goals, any challenges you are facing, and what success looks like for you..."
                    className="w-full bg-[#050F1F] border border-[#C9A84C]/20 text-[#D4D9E1] text-sm font-body px-4 py-3 placeholder-[#6B7685] focus:outline-none focus:border-[#C9A84C]/60 transition-colors resize-none"
                  />
                </div>

                {error && (
                  <div className="border border-red-500/30 bg-red-900/10 px-4 py-3 text-red-400 text-sm font-body">
                    {error}
                  </div>
                )}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-[#C9A84C] text-[#050F1F] text-sm font-body font-semibold tracking-[0.12em] uppercase hover:bg-[#E2C27A] transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,168,76,0.3)] disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending your message..." : "Send Message →"}
                </button>

                <p className="text-[#6B7685] text-xs font-body text-center leading-relaxed">
                  By submitting this form you agree to be contacted by our team. We respect your privacy and will never share your information.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

    </>
  );
}
