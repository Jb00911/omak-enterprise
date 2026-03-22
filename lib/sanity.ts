// lib/sanity.ts
// ─────────────────────────────────────────────────────────────────
// SANITY SETUP INSTRUCTIONS:
// 1. Run: npm install next-sanity @sanity/image-url
// 2. Replace YOUR_PROJECT_ID with your Sanity project ID
// 3. Replace YOUR_DATASET with your dataset name (usually "production")
// 4. Uncomment the imports in blog/page.tsx and blog/[slug]/page.tsx
// 5. Replace placeholder data fetching with the actual client queries
// ─────────────────────────────────────────────────────────────────

import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "fdvzvyho",   // ← Replace with your Sanity project ID
  dataset: "production",           // ← Replace if your dataset is named differently
  apiVersion: "2024-01-01",
  useCdn: true,
});

const builder = imageUrlBuilder(client);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source: any) {
  return builder.image(source);
}

// ─────────────────────────────────────────────────────────────────
// SANITY SCHEMA (create in your Sanity Studio project)
// Save as: schemas/post.ts
// ─────────────────────────────────────────────────────────────────
//
// export default {
//   name: 'post',
//   title: 'Blog Post',
//   type: 'document',
//   fields: [
//     { name: 'title', title: 'Title', type: 'string' },
//     { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } },
//     { name: 'excerpt', title: 'Excerpt', type: 'text', rows: 3 },
//     { name: 'mainImage', title: 'Main Image', type: 'image', options: { hotspot: true } },
//     { name: 'categories', title: 'Category', type: 'string',
//       options: { list: ['SEO','Web Development','AI Automation','CRM','Dashboards','Strategy'] }
//     },
//     { name: 'publishedAt', title: 'Published At', type: 'datetime' },
//     { name: 'author', title: 'Author', type: 'reference', to: [{ type: 'author' }] },
//     { name: 'body', title: 'Body', type: 'array', of: [{ type: 'block' }, { type: 'image' }] },
//   ],
//   preview: {
//     select: { title: 'title', media: 'mainImage' },
//   },
// };
//
// ─────────────────────────────────────────────────────────────────
// GROQ QUERIES (use these in your page components)
// ─────────────────────────────────────────────────────────────────
//
// All posts:
// *[_type == "post"] | order(publishedAt desc) {
//   title, "slug": slug.current, excerpt, publishedAt,
//   categories, mainImage, estimatedReadingTime
// }
//
// Single post by slug:
// *[_type == "post" && slug.current == $slug][0]{
//   title, body, publishedAt, categories,
//   "author": author->{ name, role },
//   mainImage, excerpt
// }
