import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { DomGlass,  } from "@/assets";

const featured = [
  { name: "Karahi Container", meta: "500ml – 3000ml", category: "Containers" },
  { name: "Dom Glass", meta: "8oz – 16oz", category: "Glasses" },
  { name: "Biryani Box", meta: "Standard", category: "Thermopol" },
  { name: "Fast Food Box", meta: "F1 – F4", category: "Fast Food" },
  { name: "Coffee Cup", meta: "6oz / 8oz", category: "Cups" },
  { name: "Shopping Bag", meta: "Standard", category: "Bags & Wrap" },
  { name: "Cling Film", meta: "30cm / 45cm", category: "Bags & Wrap" },
  { name: "Aluminum Foil", meta: "30cm / 45cm", category: "Bags & Wrap" },
];

const FeaturedProducts = () => {
  return (
    <section className="bg-white px-6 lg:px-8 py-12 md:py-16 lg:py-20 2xl:py-24 ">
      <div className="w-full max-w-7xl mx-auto text-center">
        <div className="mx-auto max-w-lg text-center">
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-8 bg-gold"></div>
            <p className="font-text text-xs font-bold uppercase tracking-widest text-gold">
              Featured Products
            </p>
            {/* <div className="h-px w-12 bg-gold/40"></div> */}
          </div>
          <h2 className="mt-3 font-heading text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl font-bold tracking-tight text-onyx">
            Popular <span className="text-gold">Items</span>
          </h2>
          <p className="mt-4 font-medium text-stone">
            A handpicked set from across our most-ordered categories. Open the full catalog for every size and item.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 lg:gap-6 md:grid-cols-3 lg:grid-cols-4">
                  {featured.map((p) => (
          <div
            key={p.name}
            className="rounded-2xl bg-white p-5 border border-gold/30 shadow hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out"
          >
            <div className="flex aspect-square items-center justify-center rounded-lg bg-surfacealt">
              {/* TODO: replace with a real product photo */}
              <span className="font-text text-xs text-slatelight">
                Photo coming soon
              </span>
            </div>
            <p className="mt-4 font-text text-[10px] lg:text-xs font-medium uppercase tracking-wide text-mango">
              {p.category}
            </p>
            <h3 className="mt-1 font-heading text-sm lg:text-base font-bold text-forestdark">
              {p.name}
            </h3>
            <p className="mt-0.5 font-text text-sm text-slatelight">
              {p.meta}
            </p>
          </div>
        ))}
        </div>

        <div className="mt-12">
          <Link href="" className="group px-6 py-3 2xl:py-3.5 text-onyx font-medium bg-gold rounded-xl flex items-center gap-2 w-fit mx-auto shadow-md hover:shadow-xl">
            Browse All Products
            <span className=" flex size-7 items-center justify-center rounded-full p-1 transition-transform duration-300 group-hover:rotate-45 group-hover:bg-white/15">
              <ArrowUpRight className="size-4" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts