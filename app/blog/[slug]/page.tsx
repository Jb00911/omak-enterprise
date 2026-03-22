import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { client, urlFor } from "@/lib/sanity";
import { notFound } from "next/navigation";

export const revalidate = 60;

// ── TYPES ──
interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  category: string;
  publishedAt: string;
  mainImage?: { asset: { _ref: string }; alt?: string };
  author?: { name: string; role: string; initials: string };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body: any[];
}

// ── QUERIES ──
async function getPost(slug: string): Promise<Post | null> {
  return client.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
      _id,
      title,
      slug,
      excerpt,
      category,
      publishedAt,
      mainImage,
      body,
      "author": author->{ name, role, initials }
    }`,
    { slug }
  );
}

async function getRelatedPosts(category: string, currentId: string): Promise<Post[]> {
  return client.fetch(
    `*[_type == "post" && category == $category && _id != $currentId] | order(publishedAt desc)[0...3]{
      _id, title, slug, excerpt, category, publishedAt, mainImage
    }`,
    { category, currentId }
  );
}

export async function generateStaticParams() {
  const slugs: { slug: string }[] = await client.fetch(
    `*[_type == "post"]{ "slug": slug.current }`
  );
  return slugs.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.mainImage
        ? [{ url: urlFor(post.mainImage).width(1200).height(630).url() }]
        : [],
    },
  };
}

// ── PORTABLE TEXT COMPONENTS ──
const ptComponents = {
  block: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    normal: ({ children }: any) => (
      <p className="text-[#D4D9E1] text-base font-body leading-[1.9] mb-5">{children}</p>
    ),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    h2: ({ children }: any) => (
      <h2 className="font-display text-2xl md:text-3xl text-white font-semibold mt-12 mb-5 leading-snug">
        {children}
      </h2>
    ),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    h3: ({ children }: any) => (
      <h3 className="font-display text-xl text-white font-semibold mt-8 mb-4 leading-snug">
        {children}
      </h3>
    ),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-2 border-[#C9A84C] pl-6 my-8 py-2 bg-[#C9A84C]/5">
        <p className="text-[#E2C27A] text-base font-body italic leading-relaxed">{children}</p>
      </blockquote>
    ),
  },
  list: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    bullet: ({ children }: any) => (
      <ul className="my-5 space-y-2 pl-2">{children}</ul>
    ),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    number: ({ children }: any) => (
      <ol className="my-5 space-y-2 pl-2 list-decimal list-inside">{children}</ol>
    ),
  },
  listItem: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    bullet: ({ children }: any) => (
      <li className="flex items-start gap-3 text-[#C8CDD5] text-base font-body leading-relaxed">
        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#8A95A3] shrink-0" />
        <span>{children}</span>
      </li>
    ),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    number: ({ children }: any) => (
      <li className="text-[#C8CDD5] text-base font-body leading-relaxed pl-1">{children}</li>
    ),
  },
  marks: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    strong: ({ children }: any) => (
      <strong className="text-white font-semibold">{children}</strong>
    ),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    em: ({ children }: any) => (
      <em className="text-[#D4D9E1] italic">{children}</em>
    ),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    code: ({ children }: any) => (
      <code className="bg-[#071526] border border-[#C9A84C]/20 text-[#C9A84C] text-sm font-mono px-2 py-0.5 rounded">
        {children}
      </code>
    ),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    link: ({ value, children }: any) => (
      <a
        href={value?.href}
        target={value?.blank ? "_blank" : "_self"}
        rel="noopener noreferrer"
        className="text-[#C9A84C] underline underline-offset-2 hover:text-[#E2C27A] transition-colors"
      >
        {children}
      </a>
    ),
  },
  types: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    image: ({ value }: any) => (
      <div className="my-10 relative w-full aspect-video overflow-hidden border border-[#C9A84C]/15">
        <Image
          src={urlFor(value).width(900).url()}
          alt={value.alt || "Blog image"}
          fill
          className="object-cover"
        />
        {value.caption && (
          <p className="absolute bottom-0 left-0 right-0 bg-[#050F1F]/80 text-[#6B7685] text-xs font-mono px-4 py-2 text-center">
            {value.caption}
          </p>
        )}
      </div>
    ),
  },
};

const categoryColors: Record<string, string> = {
  SEO: "bg-[#C9A84C]/10 text-[#C9A84C] border-[#C9A84C]/20",
  "Web Development": "bg-blue-900/20 text-blue-300 border-blue-800/30",
  "AI Automation": "bg-purple-900/20 text-purple-300 border-purple-800/30",
  CRM: "bg-emerald-900/20 text-emerald-300 border-emerald-800/30",
  Dashboards: "bg-orange-900/20 text-orange-300 border-orange-800/30",
  Strategy: "bg-rose-900/20 text-rose-300 border-rose-800/30",
};

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric", month: "long", day: "numeric",
  });
}

// ── PAGE ──
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const related = await getRelatedPosts(post.category, post._id);

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative pt-36 pb-14 bg-[#050F1F] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "linear-gradient(#C9A84C 1px, transparent 1px), linear-gradient(90deg, #C9A84C 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#C9A84C]/4 blur-[150px] rounded-full" />

        <div className="max-w-3xl mx-auto px-6 relative">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-8 text-xs font-mono text-[#6B7685]">
            <Link href="/" className="hover:text-[#C9A84C] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-[#C9A84C] transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-[#8A95A3] truncate max-w-[200px]">{post.title}</span>
          </div>

          {/* Category */}
          <span className={`inline-block text-[10px] font-mono tracking-[0.25em] uppercase px-3 py-1 border mb-6 ${categoryColors[post.category] || "bg-[#C9A84C]/10 text-[#C9A84C] border-[#C9A84C]/20"}`}>
            {post.category}
          </span>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white font-semibold leading-tight mb-6">
            {post.title}
          </h1>

          <p className="text-[#8A95A3] text-lg font-body leading-relaxed mb-8">{post.excerpt}</p>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-5 pt-6 border-t border-[#C9A84C]/15">
            {post.author && (
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 border border-[#C9A84C]/40 flex items-center justify-center bg-[#071526]">
                  <span className="text-[#C9A84C] text-[10px] font-mono font-bold">
                    {post.author.initials || post.author.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <div>
                  <p className="text-[#D4D9E1] text-sm font-body font-medium">{post.author.name}</p>
                  <p className="text-[#6B7685] text-xs font-mono">{post.author.role}</p>
                </div>
              </div>
            )}
            <div className="flex items-center gap-4 text-[#6B7685] text-xs font-mono">
              <span>{formatDate(post.publishedAt)}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAIN IMAGE ── */}
      {post.mainImage && (
        <div className="w-full bg-[#050F1F] py-8">
          <div className="max-w-3xl mx-auto px-6">
            <div className="relative w-full aspect-video overflow-hidden border border-[#C9A84C]/15">
              <Image
                src={urlFor(post.mainImage).width(1200).height(675).url()}
                alt={post.mainImage.alt || post.title}
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      )}

      <div className="w-full bg-[#050F1F]"><div className="gold-line" /></div>

      {/* ── ARTICLE BODY ── */}
      <section className="py-16 bg-[#050F1F]">
        <div className="max-w-3xl mx-auto px-6">
          <PortableText value={post.body} components={ptComponents} />

          {/* Inline CTA */}
          <div className="mt-14 border border-[#C9A84C]/20 bg-[#071526]/70 p-8 relative">
            <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-[#C9A84C]" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-[#C9A84C]" />
            <p className="text-[#C9A84C] text-xs font-mono tracking-[0.25em] uppercase mb-3">
              Need Help With This?
            </p>
            <p className="text-[#D4D9E1] font-body text-base leading-relaxed mb-5">
              Omak Enterprise specializes in{" "}
              {post.category === "SEO" && "technical SEO, content strategy, and organic growth."}
              {post.category === "Web Development" && "high-performance website development that converts."}
              {post.category === "AI Automation" && "custom AI automation that saves you time and scales your business."}
              {post.category === "CRM" && "CRM setup, integration, and sales pipeline automation."}
              {post.category === "Dashboards" && "custom real-time analytics dashboards for smarter decisions."}
              {post.category === "Strategy" && "comprehensive digital strategies that align technology with growth."}
              {!["SEO","Web Development","AI Automation","CRM","Dashboards","Strategy"].includes(post.category) &&
                "complete digital growth solutions for ambitious businesses."}
              {" "}Book a free consultation and let us build a solution for you.
            </p>
            <Link href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#C9A84C] text-[#050F1F] text-sm font-body font-semibold tracking-wider uppercase hover:bg-[#E2C27A] transition-all duration-300"
            >
              Get a Free Consultation →
            </Link>
          </div>
        </div>
      </section>

      {/* ── RELATED POSTS ── */}
      {related.length > 0 && (
        <section className="py-16 bg-[#071526] border-t border-[#C9A84C]/10">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-10">
              <span className="h-px w-8 bg-[#C9A84C]" />
              <span className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase font-mono">
                More in {post.category}
              </span>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {related.map((rp) => (
                <Link key={rp._id} href={`/blog/${rp.slug.current}`}
                  className="group block border border-[#C9A84C]/10 bg-[#050F1F]/60 hover:border-[#C9A84C]/30 transition-all duration-300 p-6"
                >
                  <h3 className="font-display text-base text-white font-semibold mb-2 leading-snug group-hover:text-[#E2C27A] transition-colors">
                    {rp.title}
                  </h3>
                  <p className="text-[#8A95A3] text-xs font-body leading-relaxed line-clamp-2 mb-4">
                    {rp.excerpt}
                  </p>
                  <span className="text-[#C9A84C] text-xs font-mono tracking-wider">Read More →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── BACK TO BLOG ── */}
      <section className="py-10 bg-[#050F1F] border-t border-[#C9A84C]/10">
        <div className="max-w-3xl mx-auto px-6 flex items-center justify-between">
          <Link href="/blog" className="flex items-center gap-2 text-[#C9A84C] text-sm font-mono tracking-wider uppercase hover:gap-3 transition-all duration-300">
            ← Back to Blog
          </Link>
          <Link href="/contact" className="text-[#8A95A3] text-sm font-body hover:text-[#C9A84C] transition-colors">
            Work with us →
          </Link>
        </div>
      </section>
    </>
  );
}
