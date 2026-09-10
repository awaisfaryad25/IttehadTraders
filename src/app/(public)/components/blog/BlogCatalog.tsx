"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Calendar } from "lucide-react";

type BlogCategory =
  | "Market Analysis"
  | "Eco Packaging"
  | "Business Guide"
  | "Pakistan Market";

type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  date: string;
  readTime: string;
};

// TODO: placeholder posts — write real content and replace before launch.
// Dates/read-times are illustrative only.
const posts: BlogPost[] = [
  {
    slug: "karahi-container-size-guide",
    title: "Choosing the right container size for your karahi orders",
    excerpt:
      "A quick guide to matching container sizes to portion sizes, so you're not overpaying for capacity you don't use.",
    category: "Business Guide",
    date: "TBD",
    readTime: "4 min read",
  },
  {
    slug: "pakistan-packaging-regulations",
    title: "What Pakistan's food packaging rules mean for your business",
    excerpt:
      "An overview of current regulatory expectations around food-grade packaging and what to check before you stock up.",
    category: "Pakistan Market",
    date: "TBD",
    readTime: "6 min read",
  },
  {
    slug: "reducing-packaging-waste",
    title: "Cutting packaging waste without cutting order volume",
    excerpt:
      "Practical ways kitchens are trimming waste costs — right-sizing containers, batching orders, and smarter storage.",
    category: "Eco Packaging",
    date: "TBD",
    readTime: "5 min read",
  },
  {
    slug: "demand-trends-2026",
    title: "What's driving packaging demand across Pakistani food businesses",
    excerpt:
      "A look at which categories are growing fastest and what that signals for kitchens planning ahead.",
    category: "Market Analysis",
    date: "TBD",
    readTime: "7 min read",
  },
  {
    slug: "bagasse-vs-plastic",
    title: "Bagasse vs. plastic: what actually changes for your kitchen",
    excerpt:
      "Cost, durability, and customer perception — a practical comparison, not just an environmental one.",
    category: "Eco Packaging",
    date: "TBD",
    readTime: "5 min read",
  },
  {
    slug: "bulk-ordering-checklist",
    title: "A bulk-ordering checklist for new food businesses",
    excerpt:
      "What to work out before you place your first wholesale packaging order — quantities, storage, and cash flow.",
    category: "Business Guide",
    date: "TBD",
    readTime: "4 min read",
  },
];

const categories: BlogCategory[] = [
  "Market Analysis",
  "Eco Packaging",
  "Business Guide",
  "Pakistan Market",
];

const BlogCatalog = () => {
  const [active, setActive] = useState<"All" | BlogCategory>("All");

  const filtered = useMemo(
    () => (active === "All" ? posts : posts.filter((p) => p.category === active)),
    [active]
  );

  return (
    <section className="bg-white px-6 py-8 md:py-12 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        {/* Category tabs */}
        <div className="flex flex-wrap gap-2">
          <TabChip label="All" active={active === "All"} onClick={() => setActive("All")} />
          {categories.map((c) => (
            <TabChip key={c} label={c} active={active === c} onClick={() => setActive(c)} />
          ))}
        </div>

        <div className="mt-6 flex items-center gap-4">
          <h3 className="font-heading text-lg 2xl:text-2xl font-bold text-gold">
            All Articles
          </h3>
          <p className="font-text text-sm text-stone">
            Showing <span className="font-medium text-onyx">{filtered.length}</span>{" "}
            {filtered.length === 1 ? "post" : "posts"}
          </p>
          <div className="h-px flex-1 bg-hairline" />
        </div>

        {filtered.length > 0 ? (
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col rounded-2xl border border-hairline bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <span className="w-fit rounded-full bg-ivory px-3 py-1 font-text text-[11px] font-semibold uppercase tracking-wide text-onyx">
                  {post.category}
                </span>

                <h3 className="mt-4 font-heading text-lg font-bold leading-snug text-onyx">
                  {post.title}
                </h3>
                <p className="mt-2 flex-1 font-text text-sm leading-relaxed text-stone">
                  {post.excerpt}
                </p>

                <div className="mt-5 flex items-center justify-between border-t border-hairline pt-4">
                  <span className="flex items-center gap-1.5 font-text text-xs text-stone">
                    <Calendar className="size-3.5" />
                    {post.date} · {post.readTime}
                  </span>
                  <span className="flex size-7 items-center justify-center rounded-full bg-ivory text-onyx transition-all duration-300 group-hover:rotate-45 group-hover:bg-gold group-hover:text-white">
                    <ArrowUpRight className="size-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="py-16 text-center">
            <p className="font-heading text-lg font-bold text-onyx">
              No posts in this category yet
            </p>
            <p className="mt-2 font-text text-sm text-stone">
              Check back soon, or browse another category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default BlogCatalog



function TabChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full border px-4 py-1 2xl:py-1.5 font-text text-sm font-medium transition-colors ${
        active
          ? "border-gold bg-gold text-white"
          : "border-hairline bg-white text-charcoal hover:border-gold"
      }`}
    >
      {label}
    </button>
  );
}