import React from 'react'

const testimonials = [
  {
    quote:
      "Sample quote — swap in a real customer's words about reliability, pricing, or delivery speed.",
    name: "Add real name",
    role: "Add business type, e.g. Restaurant owner",
  },
  {
    quote:
      "Sample quote — swap in a real customer's words about order turnaround.",
    name: "Add real name",
    role: "Add business type, e.g. Bakery",
  },
  {
    quote:
      "Sample quote — swap in a real customer's words about product quality.",
    name: "Add real name",
    role: "Add business type, e.g. Cloud kitchen",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-white px-6 py-12 md:py-16 lg:px-8 lg:py-20 2xl:py-28">
      <div className="mx-auto w-full max-w-7xl text-center">
        <div className="mx-auto max-w-lg text-center">
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-8 bg-gold"></div>
            <p className="font-text text-xs font-bold uppercase tracking-widest text-gold">
              What Clients Say
            </p>
            {/* <div className="h-px w-12 bg-gold/40"></div> */}
          </div>
          <h2 className="mt-3 font-heading text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl font-bold tracking-tight text-onyx">
            Food Businesses  <span className="text-gold"> Trust</span>
          </h2>
          <p className="mt-4 font-medium text-stone">
            From restaurants and bakeries to cloud kitchens and caterers, businesses across Pakistan rely on Ittehad Traders.        
          </p>
        </div>

      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="rounded-xl border border-hairline bg-white p-6"
          >
            <p className="font-text text-sm italic leading-relaxed text-slate">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div className="mt-5 border-t border-hairline pt-4">
              <p className="font-heading text-sm font-bold text-forestdark">
                {t.name}
              </p>
              <p className="font-text text-xs text-slatelight">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  )
}

export default Testimonials