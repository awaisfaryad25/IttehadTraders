"use client";

import { useMemo, useState } from "react";
import { Box, Grid2X2, LucideIcon, Search, X } from "lucide-react";
import { categories } from "@/lib/products";
// import SizeStamp from "@/components/SizeStamp";

type FlatProduct = {
  name: string;
  sizes: string[];
  popular?: boolean;
  categorySlug: string;
  categoryTitle: string;
};

const allProducts: FlatProduct[] = categories.flatMap((cat) =>
  cat.items.map((item) => ({
    ...item,
    categorySlug: cat.slug,
    categoryTitle: cat.title,
  })),
);

type FilterKey = "all" | "popular" | string;

export function FilterChip({ label, active, onClick, }: { label: string; active: boolean; onClick: () => void; }) {
  return (
    <button
      onClick={onClick}
      className={`shrink-0 whitespace-nowrap rounded-full border px-4 py-2 font-text text-sm font-medium transition-colors ${
        active ? "border-onyx bg-onyx text-white" : "border-hairline bg-white text-charcoal hover:border-gold" }`}
    >
      {label}
    </button>
  );
}

type SolutionItem = { icon: LucideIcon; title: string; body: string };
const byCategory: SolutionItem[] = [];
const byAllProducts: SolutionItem[] = [];

const ProductsCatalog = () => {
  const [tab, setTab] = useState<"category" | "products">("category");
  const items = tab === "category" ? byCategory : allProducts;

  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<FilterKey>("all");

  const filtered = useMemo(() => {
    let list = allProducts;

    if (filter === "popular") {
      list = list.filter((p) => p.popular);
    } else if (filter !== "all") {
      list = list.filter((p) => p.categorySlug === filter);
    }

    if (query.trim()) {
      const q = query.trim().toLowerCase();
      list = list.filter(
        (p) => p.name.toLowerCase().includes(q) || p.categoryTitle.toLowerCase().includes(q),
      );
    }

    return list;
  }, [query, filter]);

  return (
    <section className="bg-white px-6 py-8 md:py-12 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <div className="">
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-gold"></div>
            <p className="font-text text-xs font-bold uppercase tracking-widest text-gold">
              19 Product Categories
            </p>
          </div>
          <h2 className="mt-3 font-heading text-2xl font-bold tracking-tight text-onyx lg:text-3xl 2xl:text-4xl">
            Shop by <span className="text-gold">Product Category</span>
          </h2>
          <p className="mt-4 font-medium text-stone max-w-2xl">
            Every packaging type your food business needs — organised,
            searchable, and each with its own dedicated page for easy browsing.
          </p>
        </div>

        <div className="mt-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className=" flex w-fit gap-2 rounded-full border border-gold/30 bg-ivory p-1">
            <button
              onClick={() => setTab("category")}
              className={`rounded-full px-5 py-2 font-text text-sm font-semibold transition-colors flex items-center gap-1.5 ${
                tab === "category"
                  ? "border-b-3 border-gold bg-white text-onyx"
                  : "bg-surfacealt text-stone hover:bg-hairline/40"
              }`}
            >
              <Grid2X2 className="size-4" strokeWidth={2.2} />
              Browse By Category
            </button>
            <button
              onClick={() => setTab("products")}
              className={`rounded-full px-5 py-2 font-text text-sm font-semibold transition-colors flex items-center gap-1.5 ${
                tab === "products"
                  ? "border-b-3 border-gold bg-white text-onyx"
                  : "bg-surfacealt text-stone hover:bg-hairline/40"
              }`}
            >
              <Box className="size-4" />
              All Products
            </button>
          </div>

          {/* Search */}
          <div className="relative w-full max-w-xs lg:max-w-sm">
            <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-stone" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products…"
              className="w-full rounded-full border border-hairline bg-white py-3 pl-11 pr-10 font-text text-sm text-onyx outline-none transition-colors focus:border-gold"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-stone hover:text-onyx"
              >
                <X className="size-4" />
              </button>
            )}
          </div>
        </div>
        {/* Filter chips */}
        <div className="mt-6 flex gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <FilterChip
            label="All"
            active={filter === "all"}
            onClick={() => setFilter("all")}
          />
          <FilterChip
            label="Popular"
            active={filter === "popular"}
            onClick={() => setFilter("popular")}
          />
          {categories.map((cat) => (
            <FilterChip
              key={cat.slug}
              label={cat.title}
              active={filter === cat.slug}
              onClick={() => setFilter(cat.slug)}
            />
          ))}
        </div>

        {/* Results count */}
        <p className="mt-6 font-text text-sm text-stone">
          Showing{" "}
          <span className="text-onyx font-medium">{filtered.length}</span>{" "}
          {filtered.length === 1 ? "item" : "items"}
        </p>
        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <div
                key={`${p.categorySlug}-${p.name}`}
                id={p.categorySlug}
                className="rounded-xl border border-hairline bg-white p-5 transition-colors hover:border-gold"
              >
                <div className="flex items-start justify-between gap-2">
                  <p className="font-text text-xs font-medium uppercase tracking-wide text-gold">
                    {p.categoryTitle}
                  </p>
                  {p.popular && (
                    <span className="rounded-full bg-ivory px-2 py-0.5 font-text text-[10px] font-semibold text-onyx">
                      Popular
                    </span>
                  )}
                </div>
                <h3 className="mt-1.5 font-heading text-base font-bold text-onyx">
                  {p.name}
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {/* {p.sizes.map((size) => (
                  <SizeStamp key={size} size={size} />
                ))} */}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-16 text-center">
            <p className="font-heading text-lg font-bold text-onyx">
              No products found
            </p>
            <p className="mt-2 font-text text-sm text-stone">
              Try a different search term or browse by category instead.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductsCatalog;
