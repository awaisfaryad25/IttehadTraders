import React from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Ittehad Traderz has been reliable for every karahi order we place — from 500ml to 3000ml, they always have the size in stock. No more running to three different shops mid-week. Bulk pricing is fair and delivery to our kitchen in Lahore is quick.",
    name: "Add real name",
    role: "Owner",
    shop: "Add shop name",
    city: "Lahore",
    avatarBg: "bg-linear-to-r from-[#0C2340] to-[#2C5282]",
  },
  {
    quote: "We order containers, Dom glasses, paper cups and tissue all from one place now instead of juggling four suppliers. Ittehad Traderz stocks the full range for a cafe our size, and having one WhatsApp thread for the whole order saves real time every week.",
    name: "Add real name",
    role: "Manager",
    shop: "Add shop name",
    city: "Lahore",
    avatarBg: "bg-linear-to-r from-[#D4A017] to-[#F5C842]",
  },
  {
    quote: "Running a delivery kitchen means packaging can't run out, ever. Ittehad Traderz keeps our fast food boxes and biryani packs stocked even on our busiest weekends. Ordering over WhatsApp is straightforward and they've never once left us short.",
    name: "Add real name",
    role: "Owner",
    shop: "Add shop name",
    city: "Lahore",
    avatarBg: "bg-linear-to-r from-[#166534] to-[#22C55E]",
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

const Testimonials = () => {
  return (
    <section className="bg-white px-6 py-12 md:py-16 lg:px-8 lg:py-20 2xl:py-28">
      <div className="mx-auto w-full max-w-7xl text-center">
        <div className="mx-auto max-w-lg text-center">
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-8 bg-gold"></div>
            <p className="font-text text-xs font-bold uppercase tracking-widest text-gold">
              What Clients Say
            </p>
          </div>
          <h2 className="mt-3 font-heading text-2xl font-bold tracking-tight text-onyx md:text-3xl lg:text-4xl 2xl:text-5xl">
            Food Businesses <span className="text-gold">Trust</span>
          </h2>
          <p className="mt-4 font-medium text-stone">
            From restaurants and bakeries to cloud kitchens and caterers,
            businesses across Pakistan rely on Ittehad Traders.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 lg:gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="flex flex-col rounded-2xl bg-white p-6 text-left border border-gold/30 shadow hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-ou"
            >
              <div className="flex items-center justify-between gap-6">
                <div className="flex items-center gap-0.5 text-yellow-400">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="size-4" fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <Quote className="size-6 text-yellow-400/40" fill="currentColor" strokeWidth={0} />
              </div>

              <p className="mt-4 flex-1 font-text text-sm italic leading-relaxed text-charcoal">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="mt-5 flex items-center gap-3 border-t border-hairline pt-4">
                <span
                  className={`flex size-10 shrink-0 items-center justify-center rounded-full font-heading text-sm text-white font-bold ${t.avatarBg}`}
                >
                  {initials(t.name)}
                </span>
                <div>
                  <p className="font-heading text-sm font-bold text-onyx">
                    {t.name}
                  </p>
                  <p className="font-text text-xs text-stone">
                    {t.role} · {t.shop}, {t.city}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;