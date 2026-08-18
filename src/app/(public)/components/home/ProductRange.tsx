import React from "react";
import Link from "next/link";
import { categories } from "@/lib/products";
import Image, { StaticImageData } from "next/image";
import { CraftItems, } from "@/assets";
import { ArrowUpRight, } from "lucide-react";

const totalVariants = categories.reduce(
  (sum, c) => sum + c.items.reduce((s, i) => s + i.sizes.length, 0),
  0
);

function variantCount(slug: string) {
  const cat = categories.find((c) => c.slug === slug);
  if (!cat) return 0;
  return cat.items.reduce((s, i) => s + i.sizes.length, 0);
}

function BentoImageCard({ image, alt, title, count, href, className, }: {
  image: StaticImageData;
  alt: string;
  title: string;
  count: number;
  href: string;
  className: string;
}) {
  return (
    <Link
      href={href}
      className={`group relative overflow-hidden rounded-xl ${className}`}
    >
      <Image
        src={image}
        alt={alt}
        fill
        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-linear-to-t from-onyx/80 via-black/30 to-transparent" />
      <div className="relative z-10 flex h-full flex-col justify-end p-6 text-white">
        <span className="absolute right-4 top-4 flex size-7 items-center justify-center rounded-full bg-black/15 p-1 transition-transform duration-300 group-hover:rotate-45 group-hover:bg-gold">
          <ArrowUpRight className="size-4" />
        </span>
        <h3 className="mt-2 text-start text-xl font-semibold">{title}</h3>
        <span className="mt-1 w-fit rounded-full bg-white/15 px-4 py-0.5 text-xs lg:text-sm">
          {String(count).padStart(2, "0")} sizes
        </span>
      </div>
    </Link>
  );
}

const ProductRange = () => {
  return (
    <section className="bg-white px-6 py-12 md:py-16 lg:px-8 lg:py-20 2xl:py-28">
      <div className="mx-auto w-full max-w-7xl text-center">
        <div className="mx-auto max-w-lg text-center">
          <div className="flex items-center justify-center gap-3">
    <div className="h-px w-8 bg-gold"></div>
    <p className="font-text text-xs font-bold uppercase tracking-widest text-gold">
      Our Product Range
    </p>
    {/* <div className="h-px w-12 bg-gold/40"></div> */}
          </div>
          <h2 className="mt-3 font-heading text-3xl lg:text-4xl 2xl:text-5xl font-bold tracking-tight text-onyx md:text-4xl">
            Browse  <span className="text-gold">By Category</span>
          </h2>
          <p className="mt-4 font-medium text-stone">
            From karahi containers to cling film — everything your kitchen packs, wraps, and serves with, sorted so you find it fast.
          </p>
        </div>

        {/* <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/products#${cat.slug}`}
              className="group rounded-xl border border-hairline bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-gold hover:shadow-sm"
            >
              <span className="font-text text-xs font-medium uppercase tracking-widest text-gold">
                {String(
                  cat.items.reduce((s, i) => s + i.sizes.length, 0)
                ).padStart(2, "0")}{" "}
                sizes
              </span>
              <h3 className="mt-2 font-heading text-lg font-bold text-onyx">
                {cat.title}
              </h3>
              <p className="mt-1.5 font-text text-sm text-stone">
                {cat.tagline}
              </p>
              <span className="mt-4 inline-block font-text text-sm font-semibold text-onyx group-hover:underline">
                View items →
              </span>
            </Link>
          ))}
        </div> */}

        <div className="mt-12 2xl:mt-16 grid md:grid-cols-2 lg:grid-cols-7 grid-rows-2 gap-4 lg:gap-6">
          <BentoImageCard
            image={CraftItems}
            alt="Karahi containers and takeaway boxes"
            title="Karahi Containers"
            count={variantCount("containers")}
            href="/products#containers"
            className="lg:col-span-2 min-h-72"
          />

          <BentoImageCard
            image={CraftItems}
            alt="Karahi containers and takeaway boxes"
            title="Aluminium Foil"
            count={variantCount("containers")}
            href="/products#containers"
            className="lg:col-span-2 min-h-72"
          />

          <BentoImageCard
            image={CraftItems}
            alt="Disposable glasses and cups"
            title="Glasses & Cups"
            count={variantCount("glasses") + variantCount("cups")}
            href="/products#glasses"
            className="lg:col-span-3 lg:col-start-3 lg:row-span-2 lg:row-start-1 min-h-60"
          />

          <BentoImageCard
            image={CraftItems}
            alt="Thermopol boxes and biryani packs"
            title="Thermopol Items"
            count={variantCount("thermopol")}
            href="/products#thermopol"
            className="lg:col-span-2 lg:col-start-6 lg:row-start-1 min-h-60"
          />

          <BentoImageCard
            image={CraftItems}
            alt="Bags, wrap and cutlery"
            title="Bags & Cutlery"
            count={variantCount("bags-wrap") + variantCount("cutlery-tissue")}
            href="/products#bags-wrap"
            className="lg:col-span-2 lg:col-start-6lg: row-start-2 min-h-60"
          />
        </div>

        <div className="mt-12">
          <Link href="" className="group px-6 py-3 2xl:py-3.5 text-onyx font-medium bg-gold rounded-xl flex items-center gap-2 w-fit mx-auto shadow-md hover:shadow-xl">
            View All Categories
            <span className=" flex size-7 items-center justify-center rounded-full p-1 transition-transform duration-300 group-hover:rotate-45 group-hover:bg-white/15">
          <ArrowUpRight className="size-4" />
        </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductRange;