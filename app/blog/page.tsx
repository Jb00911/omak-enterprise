import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { client, urlFor } from "@/lib/sanity";

export const metadata: Metadata = {
  title: "Blog – Digital Growth Insights",
  description:
    "Expert articles on SEO, web development, AI automation, CRM strategy, and digital growth from the team at Omak Enterprise Inc. — New York's premier digital growth agency.",
};

export const revalidate = 60; // ISR — revalidate every 60 seconds

// ── TYPES ──
interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  category: string;
  publishedAt: string;
  featured: boolean;
  mainImage?: { asset: { _ref: string }; alt?: string };
  author?: { name: string; role: string; initials: string };
}

// ── SANITY QUERY ──
async function getPosts(): Promise<Post[]> {
  return client.fetch(
    `*[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      category,
      publishedAt,
      featured,
      mainImage,
      "author": author->{ name, role, initials }
    }`
  );
}

// ── HELPERS ──
const categoryColors: Record<string, string> = {
  SEO: "bg-[#C9A84C]/10 text-[#C9A84C] border-[#C9A84C]/20",
  "Web Development": "bg-blue-900/20 text-blue-300 border-blue-800/30",
  "AI Automation": "bg-purple-900/20 text-purple-300 border-purple-800/30",
  CRM: "bg-emerald-900/20 text-emerald-300 border-emerald-800/30",
  Dashboards: "bg-orange-900/20 text-orange-300 border-orange-800/30",
  Strategy: "bg-rose-900/20 text-rose-300 border-rose-800/30",
};

const categories = ["All", "SEO", "Web Development", "AI Automation", "CRM", "Dashboards", "Strategy"];

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric", month: "long", day: "numeric",
  });
}

function readTime(excerpt: string) {
  const words = excerpt?.split(" ").length || 100;
  return `${Math.max(3, Math.ceil(words / 200) + 4)} min read`;
}

export default async function BlogPage() {
  const posts = await getPosts();
  const featured = posts.filter((p) => p.featured);
  const regular = posts.filter((p) => !p.featured);

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative pt-36 pb-16 bg-[#050F1F] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(#C9A84C 1px, transparent 1px), linear-gradient(90deg, #C9A84C 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C9A84C]/4 blur-[150px] rounded-full" />
        <div className="max-w-5xl mx-auto px-6 relative">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-xs tracking-[0.35em] uppercase font-mono">The Omak Blog</span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-white font-light leading-tight mb-5">
            Insights That
            <br />
            <span className="shimmer-text font-semibold italic">Move the Needle</span>
          </h1>
          <p className="text-[#8A95A3] text-lg font-body leading-relaxed max-w-2xl">
            Deep-dive articles on SEO, web development, AI automation, CRM strategy, and digital
            growth — written by practitioners who implement these strategies daily for real businesses.
          </p>
        </div>
      </section>

      <div className="gold-line" />

      {/* ── CATEGORY PILLS ── */}
      <section className="py-8 bg-[#071526] border-b border-[#C9A84C]/10">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <span key={cat}
              className={`px-4 py-1.5 text-xs font-mono tracking-widest uppercase border cursor-default ${
                cat === "All"
                  ? "border-[#C9A84C] text-[#C9A84C] bg-[#C9A84C]/5"
                  : "border-[#C9A84C]/15 text-[#8A95A3]"
              }`}
            >
              {cat}
            </span>
          ))}
        </div>
      </section>

      {/* ── EMPTY STATE ── */}
      {posts.length === 0 && (
        <section className="py-32 bg-[#050F1F] text-center">
          <div className="max-w-md mx-auto px-6">
            <span className="text-[#C9A84C] text-4xl block mb-6">◆</span>
            <h2 className="font-display text-2xl text-white font-semibold mb-3">Articles Coming Soon</h2>
            <p className="text-[#8A95A3] text-sm font-body leading-relaxed">
              Our team is crafting the first batch of expert articles. Check back soon for insights on SEO, AI automation, and digital growth.
            </p>
          </div>
        </section>
      )}

      {/* ── FEATURED POSTS ── */}
      {featured.length > 0 && (
        <section className="py-16 bg-[#050F1F]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-10">
              <span className="h-px w-8 bg-[#C9A84C]" />
              <span className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase font-mono">Featured Articles</span>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {featured.map((post) => (
                <Link key={post._id} href={`/blog/${post.slug.current}`}
                  className="group block border border-[#C9A84C]/15 bg-[#071526]/60 hover:border-[#C9A84C]/40 hover:bg-[#0B1E3E]/60 transition-all duration-400 relative overflow-hidden"
                >
                  {post.mainImage && (
                    <div className="relative w-full h-48 overflow-hidden">
                      <Image
                        src={urlFor(post.mainImage).width(700).height(400).url()}
                        alt={post.mainImage.alt || post.title}
                        fill className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#071526]/80" />
                    </div>
                  )}
                  <div className="p-8">
                    <div className="absolute top-5 right-5 text-[9px] font-mono tracking-[0.25em] uppercase text-[#C9A84C]/60 border border-[#C9A84C]/20 px-2 py-0.5 bg-[#050F1F]/80">
                      Featured
                    </div>
                    <span className={`inline-block text-[10px] font-mono tracking-[0.2em] uppercase px-2.5 py-1 border mb-5 ${categoryColors[post.category] || "bg-[#C9A84C]/10 text-[#C9A84C] border-[#C9A84C]/20"}`}>
                      {post.category}
                    </span>
                    <h2 className="font-display text-xl md:text-2xl text-white font-semibold mb-3 leading-snug group-hover:text-[#E2C27A] transition-colors duration-300">
                      {post.title}
                    </h2>
                    <p className="text-[#8A95A3] text-sm font-body leading-relaxed mb-6">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-[#6B7685] text-xs font-mono">
                        <span>{formatDate(post.publishedAt)}</span>
                        <span>·</span>
                        <span>{readTime(post.excerpt)}</span>
                      </div>
                      <span className="text-[#C9A84C]/0 group-hover:text-[#C9A84C] transition-colors duration-300 text-sm">→</span>
                    </div>
                  </div>
                  <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-[#C9A84C]/20 group-hover:border-[#C9A84C]/50 transition-colors duration-300" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── REGULAR POSTS ── */}
      {regular.length > 0 && (
        <section className="py-10 pb-24 bg-[#050F1F]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-10">
              <span className="h-px w-8 bg-[#C9A84C]" />
              <span className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase font-mono">
                {featured.length > 0 ? "Latest Articles" : "All Articles"}
              </span>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {regular.map((post) => (
                <Link key={post._id} href={`/blog/${post.slug.current}`}
                  className="group block border border-[#C9A84C]/10 bg-[#071526]/40 hover:border-[#C9A84C]/35 hover:bg-[#071526]/80 transition-all duration-400 relative overflow-hidden"
                >
                  {post.mainImage && (
                    <div className="relative w-full h-36 overflow-hidden">
                      <Image
                        src={urlFor(post.mainImage).width(600).height(300).url()}
                        alt={post.mainImage.alt || post.title}
                        fill className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#071526]/70" />
                    </div>
                  )}
                  <div className="p-7">
                    <span className={`inline-block text-[10px] font-mono tracking-[0.2em] uppercase px-2.5 py-1 border mb-4 ${categoryColors[post.category] || "bg-[#C9A84C]/10 text-[#C9A84C] border-[#C9A84C]/20"}`}>
                      {post.category}
                    </span>
                    <h2 className="font-display text-lg text-white font-semibold mb-3 leading-snug group-hover:text-[#E2C27A] transition-colors duration-300">
                      {post.title}
                    </h2>
                    <p className="text-[#8A95A3] text-sm font-body leading-relaxed mb-5 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-[#6B7685] text-xs font-mono">
                        <span>{formatDate(post.publishedAt)}</span>
                        <span>·</span>
                        <span>{readTime(post.excerpt)}</span>
                      </div>
                      <span className="text-[#C9A84C]/0 group-hover:text-[#C9A84C] transition-colors text-sm">→</span>
                    </div>
                  </div>
                  <div className="absolute bottom-0 right-0 w-5 h-5 border-b border-r border-[#C9A84C]/15 group-hover:border-[#C9A84C]/40 transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── NEWSLETTER ── */}
      <section className="py-20 bg-[#071526] border-t border-[#C9A84C]/10 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[250px] bg-[#C9A84C]/4 blur-[100px] rounded-full" />
        <div className="max-w-xl mx-auto px-6 text-center relative">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-8 bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase font-mono">Stay Sharp</span>
            <span className="h-px w-8 bg-[#C9A84C]" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl text-white font-light mb-4 leading-tight">
            Get Weekly Digital Growth
            <br />
            <span className="shimmer-text font-semibold italic">Insights in Your Inbox</span>
          </h2>
          <p className="text-[#8A95A3] text-sm font-body leading-relaxed mb-8">
            Join professionals who receive our best articles on SEO, AI, web development, and business growth — every week, no spam.
          </p>
          <div className="flex">
            <input type="email" placeholder="your@email.com"
              className="flex-1 bg-[#050F1F] border border-[#C9A84C]/20 text-[#D4D9E1] text-sm font-body px-4 py-3 placeholder-[#6B7685] focus:outline-none focus:border-[#C9A84C]/60 transition-colors"
            />
            <button className="px-6 py-3 bg-[#C9A84C] text-[#050F1F] text-sm font-body font-semibold tracking-wider uppercase hover:bg-[#E2C27A] transition-all duration-300 shrink-0">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
