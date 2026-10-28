import PageHero from "../components/global/PageHero";
import LegalLayout, { LegalP, LegalList, BUSINESS, type LegalSection,} from "../components/legal/LegalLayout";

export const metadata = { title: "Terms of Service — Ittehad Traders" };

const sections: LegalSection[] = [
  {
    id: "about",
    title: "About these terms",
    content: (
      <LegalP>
        These terms apply when you use the {BUSINESS.name} website or place an
        order with us. By using the site or ordering from us, you agree to
        them.
      </LegalP>
    ),
  },
  {
    id: "products",
    title: "Products and availability",
    content: (
      <LegalP>
        We supply disposable packaging in bulk. Product sizes, photos and
        descriptions on this website are for guidance. Actual items may vary
        slightly in size, shade or appearance. Stock changes quickly, so
        listing an item on the website does not guarantee it is available.
      </LegalP>
    ),
  },
  {
    id: "pricing",
    title: "Pricing and quotes",
    content: (
      <>
        <LegalP>
          Prices are not fixed on the website. We give quotes by WhatsApp,
          phone or email.
        </LegalP>
        <LegalList
          items={[
            "Quotes are valid only for the period stated when we give them, and can change with market and supplier prices.",
            "A quote is not a confirmed order until we confirm it and the order details are agreed.",
          ]}
        />
      </>
    ),
  },
  {
    id: "orders",
    title: "Placing an order",
    content: (
      <LegalP>
        Orders are placed directly with us, usually over WhatsApp or phone.
        Please check quantities, sizes and delivery address carefully before
        confirming. We may decline or limit an order, for example if an item
        is out of stock.
      </LegalP>
    ),
  },
  {
    id: "payment",
    title: "Payment",
    content: (
      <LegalP>
        {/* TODO: state your actual payment terms (cash on delivery, advance, bank transfer, credit for regular clients, etc.) */}
        Payment terms are agreed when the order is confirmed. We do not take
        payments through this website.
      </LegalP>
    ),
  },
  {
    id: "delivery",
    title: "Delivery",
    content: (
      <LegalP>
        {/* TODO: add your delivery areas, charges and usual timelines */}
        Delivery areas, charges and timelines are shared when your order is
        confirmed. Delivery times are estimates and can be affected by traffic,
        weather or supply delays.
      </LegalP>
    ),
  },
  {
    id: "issues",
    title: "Damaged or wrong items",
    content: (
      <>
        <LegalP>
          If an item arrives damaged or isn&apos;t what you ordered, tell us as
          soon as possible, ideally on the day of delivery.
        </LegalP>
        <LegalList
          items={[
            "Send photos of the items and the packaging on WhatsApp.",
            // TODO: set your exact reporting window and replacement/refund policy
            "We will review the issue and offer a replacement or adjustment where appropriate.",
          ]}
        />
      </>
    ),
  },
  {
    id: "website-use",
    title: "Using this website",
    content: (
      <LegalP>
        Please use the website lawfully and do not try to disrupt it, copy it
        in bulk, or submit false information. Website content, including text,
        logo and images, belongs to {BUSINESS.name} unless stated otherwise.
      </LegalP>
    ),
  },
  {
    id: "liability",
    title: "Limits of liability",
    content: (
      <LegalP>
        To the extent allowed by law, our liability for any issue related to
        an order is limited to the value of the affected products. We are not
        responsible for indirect losses such as lost sales or business
        interruption. Nothing here limits rights you have under law that
        cannot be excluded.
      </LegalP>
    ),
  },
  {
    id: "changes",
    title: "Changes to these terms",
    content: (
      <LegalP>
        We may update these terms from time to time. The date at the top of
        this page shows when they were last changed.
      </LegalP>
    ),
  },
  {
    id: "law",
    title: "Governing law",
    content: (
      <LegalP>
        {/* TODO: confirm jurisdiction wording with a local lawyer if you want it formal */}
        These terms are governed by the laws of Pakistan.
      </LegalP>
    ),
  },
];

const TermsOfService = () => {
  return (
    <main className="bg-background text-foreground">
      <PageHero
        badge="Legal"
        title="Simple Terms for Every Order"
        highlight="Simple"
        description="How quotes, orders, delivery and issues work when you buy from us."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Terms of Service" }]}
      />

      <LegalLayout sections={sections} lastUpdated="October 23, 2026" />
    </main>
  )
}

export default TermsOfService