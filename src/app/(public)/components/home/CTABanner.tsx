import { ArrowUpRight } from "lucide-react";
import Link from "next/link";


const CTABanner = () => {
  return (
    <div>
      <section className="px-6 lg:px-8 py-12 md:py-16 lg:py-20 2xl:py-28 bg-white">
        <div className="w-full max-w-7xl mx-auto text-center px-5 py-20 bg-gold rounded-2xl 2xl:rounded-3xl text-white">
          <h2 className="mx-auto max-w-xl font-heading text-3xl font-bold tracking-tight text-forestdark md:text-4xl">
            Ready to stock up your kitchen?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-text text-slatelight">
            Containers, glasses, cups, wrap and cutlery — get bulk pricing on
            everything in one order. Send us your list and we&apos;ll quote it
            the same day.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="group px-5 py-3 2xl:py-3.5  text-gold font-medium bg-white rounded-xl flex items-center gap-2 w-fit mx-auto shadow-md hover:shadow-xl"
            >
              Request Bulk Pricing
              <span className=" flex size-7 items-center justify-center rounded-full p-1 transition-transform duration-300 group-hover:rotate-45 group-hover:bg-gold group-hover:text-white">
                <ArrowUpRight className="size-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>
      {/* <section className="px-6 lg:px-8 py-12 md:py-16 lg:py-20 2xl:py-28 bg-white">
        <div className="w-full max-w-7xl mx-auto text-center px-5 py-20 bg-gold rounded-2xl 2xl:rounded-3xl text-white">
          <h2 className="mx-auto max-w-xl font-heading text-3xl font-bold tracking-tight text-forestdark md:text-4xl">
            Want your logo on the packaging?
          </h2>
          <p className="mx-auto mt-4 max-w-lg font-text text-slatelight">
            Custom branding on kraft boxes, cups, bags and containers — minimum
            order quantities apply. Tell us what you have in mind.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="group px-5 py-3 2xl:py-3.5  text-gold font-medium bg-white rounded-xl flex items-center gap-2 w-fit mx-auto shadow-md hover:shadow-xl"
            >
              Discuss Custom Packaging
              <span className=" flex size-7 items-center justify-center rounded-full p-1 transition-transform duration-300 group-hover:rotate-45 group-hover:bg-gold group-hover:text-white">
                <ArrowUpRight className="size-4" />
              </span>
            </Link>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default CTABanner;
