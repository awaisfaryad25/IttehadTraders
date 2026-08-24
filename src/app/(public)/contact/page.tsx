import { Mail, Phone, MessageSquareMore } from "lucide-react";
import ContactForm from "../components/contact/ContactForm";
// import PageHero from "../components/global/PageHero";
// import { ContactHero } from "@/assets";

export const metadata = { title: "Contact — Ittehad Traderz" };

const page = () => {

  const contactDetails = [
    { icon: Mail, title: 'Email', value: 'info@devcollab.com', href: 'mailto:info@devcollab.com' },
    { icon: Phone, title: 'Phone', value: '+923012525017', href: 'tel:+923012525017' },
    { icon: MessageSquareMore, title: 'WhatsApp', value: '+923012525017', href: 'tel:+923012525017' },
  ]

  return (
    <main className="bg-background text-foreground">
      <section className="bg-whit px-6 py-8 md:py-12 lg:px-8">
        <div className="mx-auto w-full max-w-7xl grid gap-12 md:grid-cols-2">
          <div className="space-y-4 4xl:space-y-5">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-crate">
              Contact
            </p>
            <h2 className="font-display text-xl xs:text-2xl md:text-3xl lg:text-4xl xl:text-[40px] 4xl:text-5xl font-bold leading-[1.3] text-secondary!">
              Request a <span className="text-secondary">Quote</span> 
            </h2>
            
            <p className="text-sm md:text-base 4xl:text-lg font-normal leading-relaxed text-text-body 4xl:max-w-2xl">
              Tell us what you need and we&apos;ll get back with pricing. Fastest response is via WhatsApp using the button in the corner.
            </p>

            {/* Contact Details */}
            <div className="space-y-4 4xl:space-y-5 text-text-body my-7">
              {contactDetails.map(({ icon: Icon, title, value, href }) => (
                <div key={title} className="flex items-start gap-3">
                  <Icon className="size-4.5 4xl:size-5 text-text-muted shrink-0" />
                  <div className='4xl:space-y-1'>
                    <h4 className="font-bold text-sm 4xl:text-base">{title}</h4>
                    <a href={href} className="font-medium text-sm 4xl:text-base hover:text-brand-green transition-colors">
                      {value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
            {/* <CalendlyButton/> */}
          </div>

          <ContactForm/>
        </div>
      </section>
    </main>
  )
}

export default page

