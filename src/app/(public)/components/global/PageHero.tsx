import Link from "next/link";
import { ChevronRight } from "lucide-react";

type Crumb = { label: string; href?: string };

type PageHeroProps = {
  badge?: string;
  title: string;
  highlight?: string;
  description?: string;
  breadcrumbs: Crumb[];
};

function renderTitle(title: string, highlight?: string) {
  if (!highlight || !title.includes(highlight)) return title;
  const [before, after] = title.split(highlight);
  return (
    <>
      {before}
        <span className="text-gold italic">{highlight}</span>
      {after}
    </>
  );
}

const PageHero = ({
  badge = "Ittehad Traderz",
  title,
  highlight,
  description,
  breadcrumbs,
}: PageHeroProps) => {
  return (
    <section className="relative overflow-hidden bg-ivory bg-grid">
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-onyx/5 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-8 md:py-16  lg:px-8 lg:py-20 2xl:px-0">
        <nav aria-label="Breadcrumb" className="mt-6 flex">
          <ol className="flex items-center gap-1.5 font-text text-xs text-stone">
            {breadcrumbs.map((crumb, i) => (
              <li key={crumb.label} className="flex items-center gap-1.5 font-medium">
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-gold">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="font-medium text-onyx">{crumb.label}</span>
                )}
                {i < breadcrumbs.length - 1 && (
                  <ChevronRight className="size-3.5" />
                )}
              </li>
            ))}
          </ol>
        </nav>
        {/* <div className="inline-flex items-center gap-2 rounded-full border border-hairline bg-white px-4 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          <span className="font-text text-xs font-medium tracking-wide text-stone">
            {badge}
          </span>
        </div> */}

        <h1 className="mt-3 lg:mt-6 max-w-60 lg:max-w-md font-heading text-2xl font-bold leading-[1.15] tracking-tight text-onyx md:text-5xl">
          {renderTitle(title, highlight)}
        </h1>

        {description && (
          <p className="mt-4 max-w-xl font-text text-sm leading-relaxed text-charcoal 2xl:text-base">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}

export default PageHero