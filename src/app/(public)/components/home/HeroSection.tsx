import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { AluminumTray, GlassCup, FoodPacks, PlasticBoxs } from "@/assets";

function FloatingTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-hairline bg-white px-3 py-1 font-text text-[11px] font-semibold text-onyx shadow-sm">
      {children}
    </span>
  );
}

function FloatingTagItem({ children, className, rot, delay,
}: { children: React.ReactNode; className: string; rot: string; delay: string;
}) {
  return (
    <div
      className={`animate-float pointer-events-none absolute ${className}`}
      style={{ ["--rot" as string]: rot, animationDelay: delay }}
    >
      <FloatingTag>{children}</FloatingTag>
    </div>
  );
}

function FloatingProduct({ src, alt, className, rot, delay, }: {
  src: string | StaticImageData;
  alt: string;
  className: string;
  rot: string;
  delay: string;
}) {
  return (
    <div
      className={`animate-float pointer-events-none absolute ${className}`}
      style={{ ["--rot" as string]: rot, animationDelay: delay }}
    >
      <Image
        src={src}
        alt={alt}
        width={140}
        height={140}
        className="h-auto w-full object-contain drop-shadow-xl"
      />
    </div>
  );
}

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-ivory bg-grid">
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-onyx/5 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 2xl:px-0 py-20 md:py-24 lg:py-32 2xl:py-36">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="">
            <div className="inline-flex items-center gap-2 rounded-full border border-hairline bg-white px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              <span className="font-text text-xs font-medium tracking-wide text-stone">
                Wholesale packaging, delivered across Pakistan
              </span>
            </div>

            <h1 className="mt-4 lg:mt-8 max-w-2xl font-heading text-4xl font-bold leading-[1.15] tracking-tight text-onyx md:text-6xl">
              Packaging That <span className="text-gold italic">Keeps</span> Up With Your <span className="text-gold italic">Kitchen.</span>
            </h1>

            <p className="mt-4 max-w-xl font-text text-sm leading-relaxed text-charcoal">
              Ittehad Traderz supplies disposable containers, cups, glasses and
              packaging in bulk — so your kitchen never runs short and never
              overpays.
            </p>

            <div className="mt-6 lg:mt-10 flex flex-wrap gap-4">
              <Link
                href="/products"
                className="rounded-lg bg-onyx px-7 py-3.5 font-text text-sm font-semibold text-white transition-colors hover:bg-onyxsoft"
              >
                Browse the Catalog
              </Link>
              <Link
                href="/contact"
                className="rounded-lg border border-hairline bg-white px-7 py-3.5 font-text text-sm font-semibold text-onyx transition-colors hover:border-gold"
              >
                Talk to Us
              </Link>
            </div>
          </div>
          <div className="relative min-h-72">
            <FloatingProduct
              src={GlassCup}
              alt="Disposable food container"
              className="right-6 lg:right-0 top-[10%] w-32 lg:w-44"
              rot="-6deg"
              delay="0s"
            />
            <FloatingProduct
              src={AluminumTray}
              alt="Disposable glass"
              className="right-[10%] bottom-[10%] w-28 lg:w-40"
              rot="5deg"
              delay="1.1s"
            />
            <FloatingProduct
              src={FoodPacks}
              alt="Plastic shopping bag"
              className="right-[55%] lg:right-[35%] top-[20%] w-32 lg:w-50"
              rot="-4deg"
              delay="1.6s"
            />
            <FloatingProduct
              src={PlasticBoxs}
              alt="Takeaway food box"
              className="right-[50%] bottom-[5%] w-32 lg:w-44"
              rot="-3deg"
              delay="2.1s"
            />
            <FloatingTagItem
              className="right-[45%] top-[10%] lg:right-[35%] lg:top-[25%]"
              rot="-3deg"
              delay="0.4s"
            >
              Food-Safe
            </FloatingTagItem>
            <FloatingTagItem
              className="right-[65%] top-[55%]"
              rot="4deg"
              delay="1.8s"
            >
              Bulk Ready
            </FloatingTagItem>
            
             <FloatingTagItem
              className="right-0 lg:-right-20 top-[45%]"
              rot="-20deg"
              delay="2s"
            >
              Food Grade Certified
            </FloatingTagItem>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
