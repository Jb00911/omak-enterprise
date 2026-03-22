import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Omak Enterprise Inc. — the terms and conditions governing use of our website and services.",
};

const sections = [
  {
    title: "Acceptance of Terms",
    content: `By accessing or using the website at omakenterprise.com or engaging any services provided by Omak Enterprise Inc., you agree to be bound by these Terms of Service. If you do not agree to all of these terms, you may not use our website or services. These terms apply to all visitors, users, and clients.`,
  },
  {
    title: "Services Description",
    content: `Omak Enterprise Inc. provides digital growth services including but not limited to search engine optimization (SEO), website design and development, AI automation, CRM integration, custom dashboard development, and digital strategy consulting. The specific scope, deliverables, timelines, and fees for any engagement are defined in individual service agreements or proposals provided to each client.`,
  },
  {
    title: "Client Responsibilities",
    content: `Clients are responsible for providing accurate information, timely feedback, and necessary access to systems required for service delivery. Delays caused by failure to provide required materials, approvals, or access may affect project timelines without reducing agreed fees. Clients retain responsibility for all content, products, and services offered on their own websites and platforms.`,
  },
  {
    title: "Intellectual Property",
    content: `Upon full payment of all invoices, clients receive full ownership of all custom deliverables created specifically for their project, including custom code, designs, and written content. Omak Enterprise retains ownership of proprietary frameworks, methodologies, tools, and templates developed independently and used across multiple client projects. Neither party may use the other's trademarks or branding without prior written consent.`,
  },
  {
    title: "Confidentiality",
    content: `Both parties agree to keep confidential all non-public information shared during the course of an engagement, including business strategies, customer data, pricing information, and technical systems. This obligation survives the termination of any service agreement. Omak Enterprise will never share client information with competitors or third parties without explicit written consent.`,
  },
  {
    title: "Payment Terms",
    content: `Payment terms are specified in individual project proposals and service agreements. Unless otherwise agreed, invoices are due within 14 days of issuance. Late payments may incur a 1.5% monthly interest charge. Omak Enterprise reserves the right to pause or suspend services on accounts with overdue balances. All fees are stated in USD unless otherwise specified.`,
  },
  {
    title: "Limitation of Liability",
    content: `Omak Enterprise Inc. makes no guarantees regarding specific search engine rankings, traffic volumes, conversion rates, or other performance metrics, as these are influenced by factors outside our direct control. To the maximum extent permitted by law, Omak Enterprise's total liability for any claim arising from our services shall not exceed the total fees paid by the client in the three months preceding the claim.`,
  },
  {
    title: "Termination",
    content: `Either party may terminate a service agreement with 30 days written notice unless otherwise specified in the project agreement. Upon termination, the client is responsible for payment of all work completed up to the termination date. Omak Enterprise will provide all completed deliverables upon receipt of final payment.`,
  },
  {
    title: "Governing Law",
    content: `These Terms of Service shall be governed by and construed in accordance with the laws of the State of New York, United States of America, without regard to its conflict of law provisions. Any disputes arising under these terms shall be resolved in the courts of New York.`,
  },
  {
    title: "Changes to Terms",
    content: `Omak Enterprise Inc. reserves the right to update these Terms of Service at any time. Changes will be posted on this page with an updated revision date. Continued use of our website or services after changes are posted constitutes acceptance of the revised terms. We encourage you to review these terms periodically.`,
  },
];

export default function TermsPage() {
  return (
    <>
      <section className="relative pt-36 pb-14 bg-[#050F1F] overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A84C]/3 blur-[150px] rounded-full" />
        <div className="max-w-3xl mx-auto px-6 relative">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-xs tracking-[0.35em] uppercase font-mono">Legal</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl text-white font-semibold leading-tight mb-4">
            Terms of Service
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
            These Terms of Service govern your use of the Omak Enterprise Inc. website and the
            engagement of our services. By using our website or services, you accept these terms in
            full. Please read them carefully before proceeding.
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
            <Link href="/privacy" className="text-[#C9A84C] text-xs font-mono hover:underline">
              View Privacy Policy →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
