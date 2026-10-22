import ContactForm from "../components/contact/ContactForm";
import PageHero from "../components/global/PageHero";
import ContactInfo from "../components/contact/ContactInfo";

export const metadata = { title: "Contact — Ittehad Traderz" };

const page = () => {

  return (
    <main className="bg-background text-foreground">
      <PageHero
        title="Let's Get Your Order Moving"
        highlight="Moving"
        description="Reach out on WhatsApp, call, or send a written inquiry — we'll get back to you the same day."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />
      <section className="bg-white px-6 py-8 md:py-12 xl:py-16 2xl:py-24 lg:px-8">

        <div className="mx-auto w-full max-w-7xl space-y-6 lg:space-y-8">
          <div className="space-y-4 4xl:space-y-5">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-crate text-gold">
              Contact
            </p>
            <h2 className="font-display text-xl xs:text-2xl md:text-3xl lg:text-4xl xl:text-[40px] 4xl:text-5xl font-bold leading-[1.3] text-secondary!">
              Request a <span className="text-secondary">Quote</span> 
            </h2>
            
            <p className="text-sm md:text-base 4xl:text-lg font-normal leading-relaxed text-text-body 4xl:max-w-2xl">
              Tell us what you need and we&apos;ll get back with pricing. Fastest response is via WhatsApp using the button in the corner.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
            <ContactForm/>
            <ContactInfo/>
          </div>    
        </div>
      </section>
    </main>
  )
}

export default page

