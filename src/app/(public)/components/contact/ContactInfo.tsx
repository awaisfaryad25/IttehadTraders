import { Clock, Mail, Phone, TriangleAlert, type LucideIcon } from "lucide-react";

const CONTACT_CARDS: {
  icon: LucideIcon;
  title: string;
  text: string;
  value: string;
  /** Makes the value a link */
  href?: string;
}[] = [
  {
    icon: Mail,
    title: "Email us",
    text: "We're happy to answer your questions.",
    value: "support@homewellness.com",
    href: "mailto:support@homewellness.com",
  },
  {
    icon: Phone,
    title: "Call our team",
    text: "Mon–Fri, 9 AM – 6 PM",
    value: "+92 300 1234567",
    href: "tel:+923001234567",
  },
  {
    icon: Clock,
    title: "Typical response time",
    text: "We aim to reply within",
    value: "1 business day",
  },
];

const NEXT_STEPS = [
  { title: "We receive your message", text: "It arrives safely in our system." },
  {
    title: "Our care team reviews your request",
    text: "We'll look at the details and get back to you.",
  },
  {
    title: "We'll contact you with next steps",
    text: "By email or phone, whichever you prefer.",
  },
];

const card = "rounded-2xl border border-slate-200 bg-white shadow-[0_1px_3px_rgba(16,24,40,0.06)]";

const ContactInfo

= () => {
  return (
    <aside className="space-y-4 lg:col-span-2">
      {CONTACT_CARDS.map(({ icon: Icon, title, text, value, href }) => (
        <section key={title} className={`${card} flex items-center gap-4 p-5`}>
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-slate-100 text-[#00236F]">
            <Icon size={18} aria-hidden />
          </span>
          <div className="min-w-0">
            <h2 className="text-sm font-semibold text-[#0F2236]">{title}</h2>
            <p className="text-xs text-slate-500">{text}</p>
            {href ? (
              <a
                href={href}
                className="mt-1 block truncate text-sm font-semibold text-[#0A3396] hover:underline"
              >
                {value}
              </a>
            ) : (
              <strong className="mt-1 block text-sm font-semibold text-[#0A3396]">
                {value}
              </strong>
            )}
          </div>
        </section>
      ))}

      <section className={`${card} p-5`}>
        <h2 className="text-sm font-semibold text-[#0F2236]">What happens next?</h2>
        <ol className="mt-4 space-y-4">
          {NEXT_STEPS.map(({ title, text }, index) => (
            <li key={title} className="flex items-start gap-3">
              <span className="grid size-6 shrink-0 place-items-center rounded-full bg-[#2A4A5B] text-[11px] font-bold text-white">
                {index + 1}
              </span>
              <div>
                <h3 className="text-xs font-bold text-slate-900">{title}</h3>
                <p className="text-xs text-slate-500">{text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <p
        role="note"
        className="flex items-center gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-xs font-medium text-red-700"
      >
        <TriangleAlert className="size-4 shrink-0" aria-hidden />
        For medical emergencies, contact your local emergency services.
      </p>
    </aside>
  );
}

export default ContactInfo

