import React from "react";
import Link from "next/link";
import { ShieldCheck, PackageCheck, HandCoins, MapPin, ArrowUpRight } from "lucide-react";
import PageHero from "../components/global/PageHero";
import CTABanner from "../components/home/CTABanner";

export const metadata = { title: "About — Ittehad Traderz" };

const values = [
  {
    icon: PackageCheck,
    title: "Full Range, One Order",
    body: "Containers, glasses, cups, wrap and cutlery — everything a kitchen needs from a single supplier instead of five.",
  },
  {
    icon: ShieldCheck,
    title: "Stock You Can Rely On",
    body: "We keep regular-demand items in stock so a busy week doesn't turn into a packaging shortage.",
  },
  {
    icon: HandCoins,
    title: "Straightforward Pricing",
    body: "Clear bulk rates per carton, no back-and-forth negotiation on every order.",
  },
  {
    icon: MapPin,
    title: "Based in Lahore",
    body: "Local stock, local delivery, and a real person to talk to on WhatsApp — not a call center.",
  },
];

const page = () => {
  return (
    <main className="bg-background text-foreground">
      <PageHero
        title="Built to Keep Your Kitchen Stocked"
        highlight="Stocked"
        description="A closer look at Ittehad Traderz — who we are and how we supply disposable packaging across Lahore."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      <section className="bg-white px-6 py-8 md:py-12 lg:px-8">
        <div className="mx-auto w-full max-w-7xl grid lg:grid-cols-2 gap-6">
          <div>
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-gold"></div>
              <p className="font-text text-xs font-bold uppercase tracking-widest text-gold">
                Our Story
              </p>
              {/* <div className="h-px w-12 bg-gold/40"></div> */}
            </div>
            <h2 className="mt-3 font-heading text-2xl font-bold tracking-tight text-onyx md:text-3xl">
              Started to solve a problem every kitchen knows
            </h2>
            <p className="mt-4 font-text text-sm leading-relaxed text-charcoal md:text-base">
              Ittehad Traderz was started to fix a simple, recurring
              headache — food businesses running out of packaging mid-week
              and scrambling between multiple suppliers just to keep
              service running. We built one supply line that covers
              containers, glasses, cups, wrap and cutlery, so restaurants,
              cafes, and cloud kitchens in Lahore can order once and stop
              worrying about it.
            </p>
            <p className="mt-4 font-text text-sm leading-relaxed text-charcoal md:text-base">
              We&apos;re a young business, and we&apos;re building this the
              right way — by keeping the sizes our customers actually need
              in stock, answering WhatsApp inquiries the same day, and
              being straightforward about pricing from the first message.
            </p>
          </div>
          <div className="rounded-2xl border border-hairline bg-ivory p-6 2xl:p-10">
            <p className="font-heading text-4xl font-bold text-onyx">8+</p>
            <p className="mt-1 font-text text-sm text-stone">
              product categories in stock
            </p>
            <div className="mt-6 h-px bg-hairline" />
            <p className="mt-6 font-heading text-4xl font-bold text-onyx">
              60+
            </p>
            <p className="mt-1 font-text text-sm text-stone">
              sizes and item variants
            </p>
          </div>
        </div>
      </section>

      <section className="bg-whit px-6 py-8 md:py-12 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <div className="mx-auto max-w-lg text-center">
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-8 bg-gold"></div>
              <p className="font-text text-xs font-bold uppercase tracking-widest text-gold">
                What We Stand For
              </p>
              {/* <div className="h-px w-12 bg-gold/40"></div> */}
            </div>
            <h2 className="mt-3 font-heading text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl font-bold tracking-tight text-onyx">
              How we work with <span className="text-gold">Food Businesses</span>
            </h2>
            <p className="mt-4 font-medium text-stone">
              We built this business around one job: making sure your kitchen never has to think twice about packaging.          
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-xl border border-hairline bg-white p-5"
              >
                <span className="flex size-11 items-center justify-center rounded-xl bg-onyx">
                  <v.icon className="size-5 text-gold" />
                </span>
                <h3 className="mt-4 font-heading text-base font-bold text-onyx">
                  {v.title}
                </h3>
                <p className="mt-2 font-text text-sm leading-relaxed text-stone">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Link
              href="/contact"
              className="group mx-auto flex w-fit items-center gap-2 rounded-xl bg-gold px-6 py-3 font-medium text-onyx shadow-md transition-shadow hover:shadow-xl 2xl:py-3.5"
            >
              Talk to Us
              <span className="flex size-7 items-center justify-center rounded-full p-1 transition-transform duration-300 group-hover:rotate-45 group-hover:bg-white/15">
                <ArrowUpRight className="size-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </main>
  );
};

export default page;
