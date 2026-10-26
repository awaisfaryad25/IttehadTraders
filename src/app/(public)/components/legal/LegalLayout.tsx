import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

// Change these in one place; both legal pages use them.
export const BUSINESS = {
  name: "Ittehad Traders",
  phone: "+92 301 2525017",
  phoneHref: "tel:+923012525017",
  email: "info@ittehadtraders.pk", // TODO: real email
  address: "Near Abdullah Mobile, Chowk Mohlanwal, Multan Road, Lahore",
  hours: "Mon–Sat, 9 AM – 9 PM",
};

export type LegalSection = {
  id: string;
  title: string;
  content: React.ReactNode;
};

export function LegalP({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-text text-sm leading-relaxed text-charcoal md:text-base">
      {children}
    </p>
  );
}

export function LegalList({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li
          key={i}
          className="flex gap-3 font-text text-sm leading-relaxed text-charcoal md:text-base"
        >
          <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-gold" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function LegalLayout({
  sections,
  lastUpdated,
}: {
  sections: LegalSection[];
  lastUpdated: string;
}) {
  return (
    <section className="bg-white px-6 py-12 md:py-16 lg:px-8">
      <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[240px_1fr] lg:gap-14">
        {/* Table of contents */}
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <p className="font-text text-xs font-bold uppercase tracking-widest text-gold">
            On this page
          </p>
          <nav className="mt-4 flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:gap-0 lg:overflow-visible lg:pb-0">
            {sections.map((s, i) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="shrink-0 whitespace-nowrap rounded-full border border-hairline px-3 py-1.5 font-text text-xs text-charcoal transition-colors hover:border-gold hover:text-onyx lg:whitespace-normal lg:rounded-none lg:border-0 lg:border-l-2 lg:border-hairline lg:px-4 lg:py-2 lg:text-sm lg:hover:border-gold"
              >
                <span className="mr-1.5 text-stone">{i + 1}.</span>
                {s.title}
              </a>
            ))}
          </nav>
        </aside>

        {/* Content */}
        <div>
          <p className="font-text text-xs text-stone">
            Last updated:{" "}
            <span className="font-medium text-onyx">{lastUpdated}</span>
          </p>

          <div className="mt-8 space-y-12">
            {sections.map((s, i) => (
              <section key={s.id} id={s.id} className="scroll-mt-24">
                <div className="flex items-baseline gap-3 border-b border-hairline pb-3">
                  <span className="font-heading text-sm font-bold text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-heading text-xl font-bold text-onyx md:text-2xl">
                    {s.title}
                  </h2>
                </div>
                <div className="mt-4 space-y-4">{s.content}</div>
              </section>
            ))}
          </div>

          {/* Contact card */}
          <div className="mt-14 rounded-2xl border border-gold/30 bg-ivory p-6 md:p-8">
            <h3 className="font-heading text-lg font-bold text-onyx">
              Questions about this page?
            </h3>
            <p className="mt-1 font-text text-sm text-stone">
              Reach out and we&apos;ll respond as soon as we can.
            </p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              <ContactItem icon={Phone} text={BUSINESS.phone} href={BUSINESS.phoneHref} />
              <ContactItem icon={Mail} text={BUSINESS.email} href={`mailto:${BUSINESS.email}`} />
              <ContactItem icon={Clock} text={BUSINESS.hours} />
              <ContactItem icon={MapPin} text={BUSINESS.address} />
            </ul>
            <Link
              href="/contact"
              className="mt-6 inline-flex rounded-lg bg-onyx px-6 py-3 font-text text-sm font-semibold text-white transition-colors hover:bg-onyxsoft"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  icon: Icon,
  text,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  text: string;
  href?: string;
}) {
  const inner = (
    <span className="flex items-start gap-2.5 font-text text-sm text-charcoal">
      <Icon className="mt-0.5 size-4 shrink-0 text-gold" />
      {text}
    </span>
  );
  return (
    <li>
      {href ? (
        <a href={href} className="hover:text-onyx">
          {inner}
        </a>
      ) : (
        inner
      )}
    </li>
  );
}