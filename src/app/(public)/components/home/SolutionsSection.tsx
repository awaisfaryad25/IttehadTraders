"use client";
import { useState } from "react";
import Link from "next/link";

import {
  UtensilsCrossed, Coffee, ChefHat, PartyPopper, Cookie, CupSoda, Building2, Store, ShoppingBasket, Briefcase, Moon, Heart,
  Gift, Cake, Sun, Trophy, GraduationCap, Users, Sparkles, type LucideIcon,
} from "lucide-react";

type SolutionItem = { icon: LucideIcon; title: string; body: string };

const businessTypes: SolutionItem[] = [
  { icon: UtensilsCrossed, title: "Restaurants", body: "Karahi containers, biryani boxes and fast-food packaging sized for full-menu service." },
  { icon: Coffee, title: "Cafes & Coffee Shops", body: "Coffee cups, handle cups, pastry boxes and paper cups for counter service." },
  { icon: ChefHat, title: "Cloud Kitchens", body: "Leak-proof containers and sturdy bags built for delivery, not dine-in." },
  { icon: PartyPopper, title: "Caterers", body: "Bulk bowls, glasses and trays for large-batch events and function orders." },
  { icon: Cookie, title: "Bakeries & Sweet Shops", body: "Boxes, trays and wrap sized for pastries, cakes and traditional sweets." },
  { icon: CupSoda, title: "Juice & Beverage Stalls", body: "Dom glasses, soft drink glasses and straws for high-volume drink service." },
  { icon: Building2, title: "Hotels & Guest Houses", body: "Consistent packaging supply for room service, banquets and daily dining." },
  { icon: Store, title: "Street Food Vendors", body: "Affordable bulk packaging built for fast turnover thela and stall setups." },
  { icon: ShoppingBasket, title: "Grocery Stores", body: "Shopping bags, cling film and containers for packed and ready-to-eat items." },
  { icon: Briefcase, title: "Corporate Cafeterias", body: "Standing bulk supply for office canteens and staff dining facilities." },
];

const occasions: SolutionItem[] = [
  { icon: Moon, title: "Ramadan & Iftar", body: "Extra bowls, glasses and takeaway boxes for the seasonal order spike." },
  { icon: Heart, title: "Weddings & Events", body: "Bulk glasses, plates and cutlery in the quantities event catering needs." },
  { icon: Gift, title: "Eid Rush", body: "Stock up ahead of peak footfall with pre-planned bulk quantities." },
  { icon: Building2, title: "Corporate Orders", body: "Standing monthly supply arrangements for offices and canteens." },
  { icon: Cake, title: "Birthday Parties", body: "Cups, plates and cutlery sized right for home and hall celebrations." },
  { icon: Sun, title: "Picnics & Outdoor Events", body: "Lightweight, disposable packaging built for outdoor group gatherings." },
  { icon: Trophy, title: "Sports Events", body: "Bulk cups and food boxes for concession stands and match-day crowds." },
  { icon: GraduationCap, title: "School & College Events", body: "Budget-friendly packaging for annual days, farewells and canteens." },
  { icon: Users, title: "Community Gatherings", body: "Bulk bowls and glasses for large group meals and community events." },
  { icon: Sparkles, title: "Year-End Celebrations", body: "Extra stock for the New Year rush when order volumes peak citywide." },
];

const SolutionsSection = () => {
  const [tab, setTab] = useState<"business" | "occasions">("business");
  const items = tab === "business" ? businessTypes : occasions;

  return (
    <section className="px-6 py-12 md:py-16 lg:px-8 lg:py-20 2xl:py-24">
      <div className="mx-auto w-full max-w-7xl text-center">
        <div className="mx-auto max-w-lg text-center">
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-8 bg-gold"></div>
            <p className="font-text text-xs font-bold uppercase tracking-widest text-gold">
              Shop by Need
            </p>
          </div>
          <h2 className="mt-3 font-heading text-2xl font-bold tracking-tight text-onyx md:text-3xl lg:text-4xl 2xl:text-5xl">
            Solutions for <span className="text-gold">Every Business</span>
          </h2>
          <p className="mt-4 font-medium text-stone">
            Packaging picked for how you actually operate — by business type
            or by the season you&apos;re gearing up for.
          </p>
        </div>

        <div className="mx-auto mt-10 flex w-fit justify-center gap-2 rounded-full border border-gold/30 p-1">
          <button
            onClick={() => setTab("business")}
            className={`rounded-full px-5 py-2 font-text text-sm font-semibold transition-colors ${
              tab === "business" ? "border-b-3 border-gold bg-white text-onyx" : "bg-surfacealt text-stone hover:bg-hairline/40"
            }`}
          >
            Business Types
          </button>
          <button
            onClick={() => setTab("occasions")}
            className={`rounded-full px-5 py-2 font-text text-sm font-semibold transition-colors ${
              tab === "occasions" ? "border-b-3 border-gold bg-white text-onyx" : "bg-surfacealt text-stone hover:bg-hairline/40"
            }`}
          >
            Occasions
          </button>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 lg:gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl border border-gold/30 bg-white p-5 text-start shadow transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl"
            >
              <span className="flex size-11 items-center justify-center rounded-xl bg-ivory group-hover:bg-gold shadow xl:size-12 group-hover:-rotate-15">
                <item.icon className="size-5 text-onyx group-hover:text-white xl:size-6" />
              </span>
              <h3 className="mt-4 font-heading text-base font-bold text-onyx">
                {item.title}
              </h3>
              <p className="mt-2 mb-2 lg:mb-4 font-text text-sm leading-relaxed text-stone">
                {item.body}
              </p>

              <Link href="/products" className="mt-6 text-xs font-medium text-gold group-hover:underline">
                View Products
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;