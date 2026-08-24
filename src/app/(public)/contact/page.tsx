import { Mail, Phone, MessageSquareMore } from "lucide-react";
import ContactForm from "../components/contact/ContactForm";
// import PageHero from "../components/global/PageHero";
// import { ContactHero } from "@/assets";

export const metadata = { title: "Contact — Ittehad Traderz" };
const FORMSPREE_ENDPOINT = "https://formspree.io/f/your-form-id";

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
          <div className="space-y-4 4xl:space-y-6">
            <h2 className="font-display text-xl xs:text-2xl md:text-3xl lg:text-4xl xl:text-[40px] 4xl:text-5xl font-bold leading-[1.3] text-secondary!">
              <span className="text-primary">Let&#8217;s Discuss</span> <span className="text-secondary">Your Next Project</span> 
            </h2>
            
            <p className="text-sm md:text-base 4xl:text-lg font-normal leading-relaxed text-text-body 4xl:max-w-2xl">
              Whether you're building a new product, scaling an existing application, or looking for skilled developers to collaborate with, DevCollab is here to help. Connect with talented software engineers, contribute to meaningful projects, and turn innovative ideas into reality together.
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

      <main className="mx-auto max-w-2xl px-5 py-20">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-crate">
        Contact
      </p>
      <h1 className="crate-title mt-3 font-display text-3xl font-bold uppercase text-ink md:text-4xl">
        Request a Quote
      </h1>
      <p className="mt-4 text-inkmuted">
        Tell us what you need and we&apos;ll get back with pricing. Fastest
        response is via WhatsApp using the button in the corner.
      </p>

      <form
        action={FORMSPREE_ENDPOINT}
        method="POST"
        className="mt-10 flex flex-col gap-5"
      >
        <div>
          <label className="font-mono text-xs uppercase tracking-widest text-inkmuted">
            Name
          </label>
          <input
            type="text"
            name="name"
            required
            className="mt-1 w-full rounded-sm border border-line bg-white px-4 py-3 text-ink outline-none focus:border-ink"
          />
        </div>
        <div>
          <label className="font-mono text-xs uppercase tracking-widest text-inkmuted">
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            required
            className="mt-1 w-full rounded-sm border border-line bg-white px-4 py-3 text-ink outline-none focus:border-ink"
          />
        </div>
        <div>
          <label className="font-mono text-xs uppercase tracking-widest text-inkmuted">
            What do you need?
          </label>
          <textarea
            name="message"
            required
            rows={5}
            className="mt-1 w-full rounded-sm border border-line bg-white px-4 py-3 text-ink outline-none focus:border-ink"
            placeholder="e.g. 500x Karahi Container 1000ml, 1000x Dom Glass 12oz"
          />
        </div>
        <button
          type="submit"
          className="mt-2 rounded-sm bg-ink px-6 py-3 font-body text-sm font-semibold text-paper transition-colors hover:bg-crate"
        >
          Send Request
        </button>
      </form>
    </main>
    </main>
  )
}

export default page

