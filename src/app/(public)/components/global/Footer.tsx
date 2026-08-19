// components/footer/Footer.tsx
import Link from "next/link";
import MainLogo from "./MainLogo";
import SocialLinks from "./SocialLinks";
import Newsletter from "./Newsletter";
import { Phone, Mail, MapPin, type LucideIcon, Clock } from "lucide-react";

type FooterLink = { label: string; href: string };
type ContactItem = { icon: LucideIcon; text: string; href?: string };

const footerLinks: Record<string, FooterLink[]> = {
  Company: [
    { label: "About", href: "/about" },
    { label: "Blogs", href: "/blog" },
    { label: "Products", href: "/products" },
    { label: "Solutions", href: "/#solutions" },
    { label: "Contact", href: "/contact" },
  ],
  Products: [
    { label: "Plastic Items", href: "/products#containers" },
    { label: "Paper Items", href: "/products#cups" },
    { label: "Aluminium Foil", href: "/products#bags-wrap" },
    { label: "Shopping Bags", href: "/products#bags-wrap" },
    { label: "All Items", href: "/products" },
  ],
};

const contactInfo: ContactItem[] = [
  { icon: Phone, text: "+92 301 2525017", href: "tel:+923012525017" }, // TODO: real number
  { icon: Mail, text: "info@ittehadtraders.pk", href: "mailto:info@ittehadtraders.pk" }, // TODO: real email
  { icon: Clock, text: "Mon-Sat 09 AM - 09 PM" },
];

function FooterLinkGroup({ title, links }: { title: string; links: FooterLink[] }) {
  return (
    <div>
      <h4 className="mb-4 text-sm font-semibold text-onyx">{title}</h4>
      <ul className="space-y-3">
        {links.map((l) => (
          <li key={l.label}>
            <Link href={l.href} className="text-sm text-charcoal hover:text-gold">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ContactRow({ icon: Icon, text, href }: ContactItem) {
  const content = (
    <span className="flex items-center gap-2 text-sm text-charcoal hover:text-gold">
      <Icon className="size-4 text-gold" />
      {text}
    </span>
  );
  return <li>{href ? <a href={href} className="hover:text-onyx">{content}</a> : content}</li>;
}

const Footer = () => {
  return (
    <footer className="border-t border-hairline bg-ivory px-6 pb-6 pt-16 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        {/* Column count = 2 (brand) + link groups + 1 (contact) — update grid-cols below if that changes */}
        <div className="grid grid-cols-2 gap-12 md:grid-cols-3 lg:grid-cols-5">
          <div className="space-y-3 col-span-2">
            <MainLogo />
            <p className="mb-5 max-w-xs text-sm leading-relaxed text-stone">
              Wholesale disposable packaging for restaurants, cafes, and
              cloud kitchens across Pakistan.
            </p>
            <SocialLinks />
            <div className="mt-5">
              <Newsletter />
            </div>
          </div>

          {Object.entries(footerLinks).map(([group, links]) => (
            <FooterLinkGroup key={group} title={group} links={links} />
          ))}

          <div>
            <h4 className="mb-4 text-sm font-semibold text-onyx">Get in Touch</h4>
            <ul className="space-y-3 mb-4">
              {contactInfo.map((item) => (
                <ContactRow key={item.text} {...item} />
              ))}
            </ul>
            <p className="text-sm text-charcoal">Chowk Mohlanwal, Defence & Multan Road - Lahore</p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-hairline pt-6 text-xs text-stone sm:flex-row">
          <p>© {new Date().getFullYear()} Ittehad Traders. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;