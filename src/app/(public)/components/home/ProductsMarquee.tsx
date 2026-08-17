"use client";

import {
  Container,
  GlassWater,
  Coffee,
  Soup,
  Sandwich,
  Wind,
  Layers,
  CupSoda,
  ShoppingBag,
  UtensilsCrossed,
} from "lucide-react";

const marqueeItems = [
  { label: "Karahi Containers", icon: Container },
  { label: "Dom Glasses", icon: GlassWater },
  { label: "Coffee Cups", icon: Coffee },
  { label: "Biryani Boxes", icon: Soup },
  { label: "Fast Food Boxes", icon: Sandwich },
  { label: "Cling Film", icon: Wind },
  { label: "Aluminum Foil", icon: Layers },
  { label: "Paper Cups", icon: CupSoda },
  { label: "Shopping Bags", icon: ShoppingBag },
  { label: "Cutlery", icon: UtensilsCrossed },
];

const ProductsMarquee = () => {
  return (
    <section>
      <div className="relative overflow-hidden bg-gold/50 py-8">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-background to-transparent" />
        <div className="flex w-max animate-marquee gap-3 lg:gap-4">
          {[...marqueeItems, ...marqueeItems].map((item, i) => {
            const Icon = item.icon;
            return (
              <span
                key={`${item.label}-${i}`}
                className="flex items-center gap-2 whitespace-nowrap rounded-full border border-gold bg-white px-4 py-2 font-text text-sm font-medium text-onyx shadow"
              >
                <Icon className="size-4.5 text-gold" />
                {item.label}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductsMarquee;