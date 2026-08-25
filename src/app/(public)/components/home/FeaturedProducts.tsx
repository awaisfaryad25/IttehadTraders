import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { DomGlass12OZ, Aluminum2Foil, Bowl16OZ, Box1500ml, CofeeCupBrown, PaperCoatedGlass, TeaCup, UmbrellaStraw, } from "@/assets";

type FeaturedProduct = {
  name: string;
  meta: string;
  category: string;
  image?: StaticImageData;
};

const featured: FeaturedProduct[] = [
  { name: "Karahi Container", meta: "500ml – 3000ml", category: "Containers", image: Box1500ml },
  { name: "Dom Glass", meta: "8oz – 16oz", category: "Glasses", image: DomGlass12OZ },
  { name: "Raita Bowl", meta: "10oz – 16oz", category: "Bowls", image: Bowl16OZ },
  { name: "Coffee Cup", meta: "6oz / 8oz", category: "Cups", image: CofeeCupBrown },
  { name: "Tea Cup", meta: "Standard", category: "Cups", image: TeaCup },
  { name: "Paper Coated Glass", meta: "14oz", category: "Glasses", image: PaperCoatedGlass },
  { name: "Straw", meta: "Megic", category: "Cutlery", image: UmbrellaStraw },
  { name: "Aluminum Foil", meta: "f1 / f2 / f3", category: "Bags & Wrap", image: Aluminum2Foil },
];

const FeaturedProducts = () => {
  return (
    <section className="bg-white px-6 py-12 md:py-16 lg:px-8 lg:py-20 2xl:py-24">
      <div className="mx-auto w-full max-w-7xl text-center">
        <div className="mx-auto max-w-lg text-center">
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-8 bg-gold"></div>
            <p className="font-text text-xs font-bold uppercase tracking-widest text-gold">
              Featured Products
            </p>
          </div>
          <h2 className="mt-3 font-heading text-2xl font-bold tracking-tight text-onyx md:text-3xl lg:text-4xl 2xl:text-5xl">
            Popular <span className="text-gold">Items</span>
          </h2>
          <p className="mt-4 font-medium text-stone">
            A handpicked set from across our most-ordered categories. Open the
            full catalog for every size and item.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
          {featured.map((p) => (
            <Link
              href="/products"
              key={p.name}
              className="rounded-2xl border border-gold/30 bg-white shadow transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl cursor-pointer"
            >
              <div className="flex aspect-square items-center justify-center overflow-hidden rounded-t-2xl bg-surfacealt">
                {p.image ? (
                  <Image
                    src={p.image}
                    alt={p.name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <span className="font-text text-xs text-stone">
                    Photo coming soon
                  </span>
                )}
              </div>
              <div className="p-5 mt-2">
                <p className=" font-text text-[10px] font-medium uppercase tracking-wide text-gold lg:text-xs">
                  {p.category}
                </p>
                <h3 className="mt-1 font-heading text-sm font-bold text-onyx lg:text-base">
                  {p.name}
                </h3>
                <p className="mt-0.5 font-text text-sm text-stone">{p.meta}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12">
          <Link
            href="/products"
            className="group mx-auto flex w-fit items-center gap-2 rounded-xl bg-gold px-6 py-3 font-medium text-onyx shadow-md transition-shadow hover:shadow-xl 2xl:py-3.5"
          >
            Browse All Products
            <span className="flex size-7 items-center justify-center rounded-full p-1 transition-transform duration-300 group-hover:rotate-45 group-hover:bg-white/15">
              <ArrowUpRight className="size-4" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;