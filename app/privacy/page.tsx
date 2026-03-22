import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Omak Enterprise Inc. — how we collect, use, and protect your personal information.",
};

const sections = [
  {
    title: "Information We Collect",
    content: `We collect information you provide directly to us when you fill out our contact form, subscribe to our newsletter, or communicate with our team. This includes your name, email address, company name, and the details of your inquiry. We may also collect information automatically when you visit our website, including your IP address, browser type, referring URLs, and pages visited, through standard web analytics tools.`,
  },
  {
    title: "How We Use Your Information",
    content: `We use the information we collect to respond to your inquiries and provide the services you request, send you relevant communications about our services and insights (with your consent), improve our website and services based on usage patterns, and comply with legal obligations. We do not sell, rent, or trade your personal information to third parties for their marketing purposes under any circumstances.`,
  },
  {
    title: "Cookies and Tracking",
    content: `Our website uses cookies and similar tracking technologies to enhance your browsing experience and collect analytics data. We use Google Analytics to understand how visitors interact with our website. You can control cookie settings through your browser preferences. By continuing to use our website, you consent to the use of cookies in accordance with this policy.`,
  },
  {
    title: "Data Security",
    content: `We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. This includes encrypted data transmission (HTTPS), access controls, and secure data storage. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.`,
  },
  {
    title: "Data Retention",
    content: `We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, provide ongoing services, and comply with our legal obligations. Contact form submissions are retained for up to 3 years. You may request deletion of your data at any time by contacting us at hello@omakenterprise.com.`,
  },
  {
    title: "Your Rights",
    content: `Depending on your jurisdiction, you may have the right to access the personal data we hold about you, request correction of inaccurate data, request deletion of your data, object to processing of your data, and data portability. To exercise any of these rights, please contact us at hello@omakenterprise.com. We will respond to all requests within 30 days.`,
  },
  {
    title: "Third-Party Services",
    content: `Our website may contain links to third-party websites and we may use third-party services such as analytics providers and email platforms. These third parties have their own privacy policies and we are not responsible for their practices. We encourage you to review the privacy policies of any third-party services you interact with through our website.`,
  },
  {
    title: "Changes to This Policy",
    content: `We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. We will notify you of any material changes by posting the updated policy on this page with a revised date. Your continued use of our website following any changes constitutes your acceptance of the updated policy.`,
  },
  {
    title: "Contact Us",
    content: `If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at hello@omakenterprise.com. Omak Enterprise Inc. is registered in the State of New York, United States of America.`,
  },
];

export default function PrivacyPage() {
  return (
    <>
      <section className="relative pt-36 pb-14 bg-[#050F1F] overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#C9A84C]/3 blur-[150px] rounded-full" />
        <div className="max-w-3xl mx-auto px-6 relative">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-xs tracking-[0.35em] uppercase font-mono">Legal</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl text-white font-semibold leading-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-[#6B7685] text-sm font-mono">
            Last updated: January 1, 2025 · Omak Enterprise Inc., New York, USA
          </p>
        </div>
      </section>

      <div className="gold-line" />

      <section className="py-16 bg-[#050F1F]">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-[#8A95A3] text-base font-body leading-relaxed mb-12">
            At Omak Enterprise Inc., we take your privacy seriously. This Privacy Policy explains how
            we collect, use, and protect the personal information you share with us when you visit
            our website or engage our services. Please read this policy carefully.
          </p>

          <div className="space-y-10">
            {sections.map((section, i) => (
              <div key={section.title}>
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-[#C9A84C]/30 font-mono text-lg font-bold leading-none mt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-display text-xl md:text-2xl text-white font-semibold leading-snug">
                    {section.title}
                  </h2>
                </div>
                <p className="text-[#8A95A3] text-base font-body leading-relaxed pl-10">
                  {section.content}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 pt-10 border-t border-[#C9A84C]/10 flex items-center justify-between flex-wrap gap-4">
            <p className="text-[#6B7685] text-xs font-mono">
              © {new Date().getFullYear()} Omak Enterprise Inc. All rights reserved.
            </p>
            <Link href="/terms" className="text-[#C9A84C] text-xs font-mono hover:underline">
              View Terms of Service →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
