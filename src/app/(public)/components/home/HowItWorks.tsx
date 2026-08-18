import { Search, MessageCircle, Box } from "lucide-react";
import React from "react";

const steps = [
  {
    number: "01",
    title: "Browse the catalog",
    body: "Look through our full range online and shortlist what your kitchen needs — sizes, quantities, all in one place.",
    iconBoxColor: "bg-blue-950",
    icon: Search,
    tag: "No signup required",
  },
  {
    number: "02",
    title: "Send an inquiry",
    body: "Message us on WhatsApp or send a written inquiry with your list. We confirm stock and bulk pricing the same day.",
    iconBoxColor: "bg-gold",
    icon: MessageCircle,
    tag: "1–2 hour response",
  },
  {
    number: "03",
    title: "Receive your order",
    body: "We pack and dispatch your order. No lengthy paperwork, no minimum-order runaround for regular items.",
    iconBoxColor: "bg-[#1C9549]",
    icon: Box,
    tag: "Nationwide delivery",
  },
];

const HowItWorks = () => {
  return (
    <section className="px-6 lg:px-8 py-12 md:py-16 lg:py-20 2xl:py-24 ">
      <div className="w-full max-w-7xl mx-auto text-center">
        <div className="mx-auto max-w-lg text-center">
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-8 bg-gold"></div>
            <p className="font-text text-xs font-bold uppercase tracking-widest text-gold">
              How It Works
            </p>
            {/* <div className="h-px w-12 bg-gold/40"></div> */}
          </div>
          <h2 className="mt-3 font-heading text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl font-bold tracking-tight text-onyx">
             3 Steps to <span className="text-gold">Your Order</span>
          </h2>
          <p className="mt-4 font-medium text-stone">
            No more endless email chains or waiting on hold. Browse our range, ask your questions, and get delivery—fast.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 lg:gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <div key={step.number} className="relative bg-white p-4 md:p-6 rounded-2xl text-start border border-gold/30 shadow hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out">
              <div className="flex items-center justify-between gap-4">
                <span className={`${step.iconBoxColor} p-3 xl:p-3.5 rounded-lg xl:rounded-xl`}>
                  <step.icon className="size-5 xl:size-6.5 text-white" />
                </span>
                <span className="font-heading text-5xl 2xl:text-7xl font-bold text-ivory leading-0">
                  {step.number}
                </span>
              </div>
              
              <div className="mt-4 lg:mt- space-y-2">
                <h3 className="mt-2 font-heading text-xl lg:text-2xl font-semibold text-forestdark">
                  {step.title}
                </h3>
                <p className="mt-2 font-text text-sm lg:text-base leading-relaxed text-slatelight">
                  {step.body}
                </p>
              </div>
              <span className="mt-4 inline-block px-3 py-0.5 text-xs font-medium rounded-full bg-ivory">
                {step.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
