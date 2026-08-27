"use client";

import { useMemo, useState } from "react";
import { Box, LayoutGrid, Search, X, RotateCcw } from "lucide-react";
import { categories } from "@/lib/products";
import SizeStamp from "./SizeStamp";

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
  }))
);

export function FilterChip({
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
      className={`flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full px-5 py-2 font-text text-sm font-semibold transition-colors ${
        active
          ? "border-b-3 border-gold bg-white text-onyx"
          : "bg-surfacealt text-stone hover:bg-hairline/40"
      }`}
    >
      {label}
    </button>
  );
}


function ProductCard({ p }: { p: FlatProduct }) {
  return (
    <div className="rounded-xl border border-hairline bg-white p-5 transition-colors hover:border-gold">
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
        {p.sizes.map((size) => (
          <SizeStamp key={size} size={size} />
        ))}
      </div>
    </div>
  );
}

const ProductsCatalog = () => {
  const [tab, setTab] = useState<"category" | "products">("category");
  const [query, setQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<Set<string>>(new Set());
  const [popularOnly, setPopularOnly] = useState(false);

  function toggleCategory(slug: string) {
    setSelectedCategories((prev) => {
      const next = new Set(prev);
      next.has(slug) ? next.delete(slug) : next.add(slug);
      return next;
    });
  }

  function clearFilters() {
    setSelectedCategories(new Set());
    setPopularOnly(false);
  }

  const hasActiveFilters = selectedCategories.size > 0 || popularOnly;

  const filteredFlat = useMemo(() => {
    let list = allProducts;

    if (selectedCategories.size > 0) {
      list = list.filter((p) => selectedCategories.has(p.categorySlug));
    }
    if (popularOnly) {
      list = list.filter((p) => p.popular);
    }
    if (query.trim()) {
      const q = query.trim().toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.categoryTitle.toLowerCase().includes(q)
      );
    }
    return list;
  }, [query, selectedCategories, popularOnly]);

  const filteredByCategory = useMemo(() => {
    const q = query.trim().toLowerCase();
    return categories
      .map((cat) => ({
        ...cat,
        items: cat.items.filter((item) =>
          q ? item.name.toLowerCase().includes(q) : true
        ),
      }))
      .filter((cat) => cat.items.length > 0);
  }, [query]);

  return (
    <section className="bg-white px-6 py-8 md:py-12 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <div>
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-gold" />
            <p className="font-text text-xs font-bold uppercase tracking-widest text-gold">
              {categories.length} Product Categories
            </p>
          </div>
          <h2 className="mt-3 font-heading text-2xl font-bold tracking-tight text-onyx lg:text-3xl 2xl:text-4xl">
            Shop by <span className="text-gold">Product Category</span>
          </h2>
          <p className="mt-4 max-w-2xl font-medium text-stone">
            Every packaging type your food business needs — organised,
            searchable, and each with its own dedicated page for easy
            browsing.
          </p>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div className="flex w-fit gap-2 rounded-full border border-gold/30 bg-ivory p-1">
            <button
              onClick={() => setTab("category")}
              className={`flex items-center gap-1.5 rounded-full px-5 py-2 font-text text-sm font-semibold transition-colors ${
                tab === "category"
                  ? "border-b-3 border-gold bg-white text-onyx"
                  : "bg-surfacealt text-stone hover:bg-hairline/40"
              }`}
            >
              <LayoutGrid className="size-4" />
              Browse By Category
            </button>
            <button
              onClick={() => setTab("products")}
              className={`flex items-center gap-1.5 rounded-full px-5 py-2 font-text text-sm font-semibold transition-colors ${
                tab === "products"
                  ? "border-b-3 border-gold bg-white text-onyx"
                  : "bg-surfacealt text-stone hover:bg-hairline/40"
              }`}
            >
              <Box className="size-4" />
              All Products
            </button>
          </div>

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

        {/* ---------- Browse By Category ---------- */}
        {tab === "category" && (
          <div className="mt-10 flex flex-col gap-14">
            {filteredByCategory.length > 0 ? (
              filteredByCategory.map((cat) => (
                <div key={cat.slug} id={cat.slug} className="scroll-mt-24">
                  <div className="mb-5 flex items-baseline justify-between border-b border-hairline pb-3">
                    <h3 className="font-heading text-xl font-bold text-onyx">
                      {cat.title}
                    </h3>
                    <span className="font-text text-xs text-stone">
                      {cat.items.length} {cat.items.length === 1 ? "item" : "items"}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {cat.items.map((item) => (
                      <ProductCard
                        key={item.name}
                        p={{ ...item, categorySlug: cat.slug, categoryTitle: cat.title }}
                      />
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <EmptyState />
            )}
          </div>
        )}

        {/* ---------- All Products ---------- */}
        {tab === "products" && (
          <div className="mt-10 flex flex-col gap-8 lg:flex-row">
            <aside className="shrink-0 lg:w-64">
              <div className="rounded-xl border border-hairline p-5">
                <div className="flex items-center justify-between">
                  <h4 className="font-heading text-sm font-bold text-onyx">
                    Filter by Category
                  </h4>
                  {hasActiveFilters && (
                    <button
                      onClick={clearFilters}
                      className="flex items-center gap-1 font-text text-xs font-medium text-gold hover:text-onyx"
                    >
                      <RotateCcw className="size-3" />
                      Clear
                    </button>
                  )}
                </div>

                <label className="mt-4 flex cursor-pointer items-center justify-between gap-2 border-b border-hairline py-2.5">
                  <span className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={popularOnly}
                      onChange={() => setPopularOnly((v) => !v)}
                      className="size-4 accent-[#C9973D]"
                    />
                    <span className="font-text text-sm text-charcoal">Popular</span>
                  </span>
                  <span className="font-text text-xs text-stone">
                    {allProducts.filter((p) => p.popular).length}
                  </span>
                </label>

                <ul className="mt-1">
                  {categories.map((cat) => (
                    <li key={cat.slug}>
                      <label className="flex cursor-pointer items-center justify-between gap-2 py-2.5">
                        <span className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            checked={selectedCategories.has(cat.slug)}
                            onChange={() => toggleCategory(cat.slug)}
                            className="size-4 accent-[#C9973D]"
                          />
                          <span className="font-text text-sm text-charcoal">
                            {cat.title}
                          </span>
                        </span>
                        <span className="font-text text-xs text-stone">
                          {cat.items.length}
                        </span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            <div className="flex-1">
              <p className="mb-4 font-text text-sm text-stone">
                Showing{" "}
                <span className="font-medium text-onyx">{filteredFlat.length}</span>{" "}
                {filteredFlat.length === 1 ? "item" : "items"}
              </p>

              {filteredFlat.length > 0 ? (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {filteredFlat.map((p) => (
                    <ProductCard key={`${p.categorySlug}-${p.name}`} p={p} />
                  ))}
                </div>
              ) : (
                <EmptyState />
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

function EmptyState() {
  return (
    <div className="py-16 text-center">
      <p className="font-heading text-lg font-bold text-onyx">No products found</p>
      <p className="mt-2 font-text text-sm text-stone">
        Try a different search term or clear your filters.
      </p>
    </div>
  );
}

export default ProductsCatalog;