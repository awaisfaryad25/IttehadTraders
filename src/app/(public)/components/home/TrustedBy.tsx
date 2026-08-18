import React from "react";
import { UtensilsCrossed, Coffee, Croissant, ChefHat, Building2, PartyPopper } from "lucide-react";

const segments = [
  { label: "Restaurants", icon: UtensilsCrossed },
  { label: "Cafés", icon: Coffee },
  { label: "Bakeries", icon: Croissant },
  { label: "Cloud Kitchens", icon: ChefHat },
  { label: "Hotels", icon: Building2 },
  { label: "Caterers", icon: PartyPopper },
];

const TrustedBy = () => {
  return (
    <section className="bg-white px-6 py-8 md:py-12 lg:px-8">
      <div className="mx-auto w-full max-w-7xl text-center">
        <h2 className="uppercase font-semibold text-stone">
          Trusted by <span className="text-onyx">100+ Pakistani Food Businesses</span> — from corner stalls to national chains
        </h2>

        <div className="mt-8 flex flex-wrap items-start justify-center gap-x-10 gap-y-6">
          {segments.map(({ label, icon: Icon }) => (
            <div key={label} className="group flex flex-col items-center gap-2.5">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-ivory group-hover:bg-gold ">
                <Icon className="size-6 text-gold group-hover:text-white" strokeWidth={1.75} />
              </span>
              <span className="font-text text-xs lg:text-sm font-medium text-charcoal">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;