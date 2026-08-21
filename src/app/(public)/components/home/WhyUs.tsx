import {
  BadgeDollarSign,
  Boxes,
  Clock3,
  PackageCheck,
  Repeat2,
  Truck,
} from "lucide-react";

const pillars = [
  {
    title: "Wholesale Pricing",
    body: "Bulk rates for restaurants, caterers, food chains and resellers. The more you order, the better the price. Competitive quotes on large volumes.",
    iconBoxColor: "bg-blue-950",
    icon: BadgeDollarSign,
  },
  {
    title: "Fast Delivery",
    body: "Same-day collection from any of our 3 Lahore branches. Nationwide delivery across Pakistan. We understand food businesses can't wait.",
    iconBoxColor: "bg-gold",
    icon: Truck,
  },
  {
    title: "Stock You Can Count On",
    body: "We keep regular-demand items in stock so a busy week doesn't turn into a supply problem. Reliable availability means fewer last-minute sourcing issues.",
    iconBoxColor: "bg-blue-950",
    icon: PackageCheck,
  },
  {
    title: "Straightforward Bulk Pricing",
    body: "Ask once, get a clear rate per carton with no back-and-forth over every order. Simple, transparent pricing helps you plan your costs with confidence.",
    iconBoxColor: "bg-gold",
    icon: BadgeDollarSign,
  },
  {
    title: "One Supplier, Full Range",
    body: "Containers, glasses, cups, wrap and cutlery from a single order instead of five different vendors. Get your everyday packaging needs sorted in one place.",
    iconBoxColor: "bg-blue-950",
    icon: Boxes,
  },
  {
    title: "Built For Repeat Orders",
    body: "Once we know your usual list, reordering is a one-line WhatsApp message. We make repeat purchases quick and simple so you can focus on your business.",
    iconBoxColor: "bg-gold",
    icon: Repeat2,
  },
];

const WhyUs = () => {
  return (
    <section className=" px-6 py-12 md:py-16 lg:px-8 lg:py-20 2xl:py-28">
      <div className="mx-auto w-full max-w-7xl text-center">
        <div className="mx-auto max-w-lg text-center">
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-8 bg-gold"></div>
            <p className="font-text text-xs font-bold uppercase tracking-widest text-gold">
              Why Ittehad Traderz
            </p>
            {/* <div className="h-px w-12 bg-gold/40"></div> */}
          </div>
          <h2 className="mt-3 font-heading text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl font-bold tracking-tight text-onyx">
            Your Packaging   <span className="text-gold">Partner</span>
          </h2>
          <p className="mt-4 font-medium text-stone">
            We built this business around one job: making sure your kitchen never has to think twice about packaging.          
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.title} className="relative bg-white p-4 md:p-6 rounded-2xl text-start border border-gold/30 shadow hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out">
              <div className="flex items-center justify-between gap-4">
                <span className={`${p.iconBoxColor} p-3 xl:p-3.5 rounded-lg xl:rounded-xl shadow-lg`}>
                  <p.icon className="size-5 xl:size-6.5 text-white" />
                </span>
              </div>
              
              <div className="mt-4 lg:mt- space-y-2">
                <h3 className="mt-2 font-heading text-xl lg:text-2xl font-semibold text-forestdark">
                  {p.title}
                </h3>
                <p className="mt-2 font-text text-sm lg:text-base leading-relaxed text-slatelight">
                  {p.body}
                </p>
              </div>
            </div>
            // <div key={p.title}>
            //   <div className="h-1 w-8 rounded-full bg-mango" />
            //   <h3 className="mt-4 font-heading text-lg font-bold">
            //     {p.title}
            //   </h3>
            //   <p className="mt-2 font-text text-sm leading-relaxed text-white/70">
            //     {p.body}
            //   </p>
            // </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyUs