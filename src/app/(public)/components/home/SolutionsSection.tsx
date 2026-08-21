"use client";

import { useState } from "react";

const businessTypes = [
  { title: "Restaurants", body: "Karahi containers, biryani boxes and fast-food packaging sized for full-menu service." },
  { title: "Cafes & Bakeries", body: "Coffee cups, handle cups, pastry boxes and paper cups for counter service." },
  { title: "Cloud Kitchens", body: "Leak-proof containers and sturdy bags built for delivery, not dine-in." },
  { title: "Caterers", body: "Bulk bowls, glasses and trays for large-batch events and function orders." },
];

const occasions = [
  { title: "Ramadan & Iftar", body: "Extra bowls, glasses and takeaway boxes for the seasonal order spike." },
  { title: "Weddings & Events", body: "Bulk glasses, plates and cutlery in the quantities event catering needs." },
  { title: "Eid Rush", body: "Stock up ahead of peak footfall with pre-planned bulk quantities." },
  { title: "Corporate Orders", body: "Standing monthly supply arrangements for offices and canteens." },
];

const SolutionsSection = () => {
  const [tab, setTab] = useState<"business" | "occasions">("business");
  const items = tab === "business" ? businessTypes : occasions;

  return (
    <section className=" px-6 lg:px-8 py-12 md:py-16 lg:py-20 2xl:py-24 ">
      <div className="w-full max-w-7xl mx-auto text-center">
        <div className="mx-auto max-w-lg text-center">
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-8 bg-gold"></div>
            <p className="font-text text-xs font-bold uppercase tracking-widest text-gold">
              Shop by Need
            </p>
            {/* <div className="h-px w-12 bg-gold/40"></div> */}
          </div>
          <h2 className="mt-3 font-heading text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl font-bold tracking-tight text-onyx">
            Solutions for <span className="text-gold">Every Business</span>
          </h2>
          <p className="mt-4 font-medium text-stone">
            Packaging picked for how you actually operate — by business type or by the season you're gearing up for.
          </p>
        </div>
        <div className="p-1 mt-10 flex justify-center gap-2 border border-gold/30 w-fit mx-auto rounded-full">
          <button
            onClick={() => setTab("business")}
            className={`rounded-full px-5 py-2 font-text text-sm font-semibold transition-colors ${
              tab === "business" ? "bg-white text-onyx border-b-3 border-gold" : "bg-surfacealt text-stone hover:bg-hairline/40"
            }`}
          >
            Business Types
          </button>
          <button
            onClick={() => setTab("occasions")}
            className={`rounded-full px-5 py-2 font-text text-sm font-semibold transition-colors ${
              tab === "occasions" ? "bg-white text-onyx border-b-3 border-gold" : "bg-surfacealt text-stone hover:bg-hairline/40"
            }`}
          >
            Occasions
          </button>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 lg:gap-6 md:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl p-5 bg-white border border-gold/30 shadow hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out"
            >
              <h3 className="font-heading text-base font-bold text-forestdark">
                {item.title}
              </h3>
              <p className="mt-2 font-text text-sm leading-relaxed text-slatelight">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SolutionsSection