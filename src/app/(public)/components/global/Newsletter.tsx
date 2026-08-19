import React, { useState, FormEvent } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    console.log("Subscribed:", email);
    setEmail("");
  };

  return (
    <div className="max-w-sm space-y-2">
      <span className="inline-block font-heading text-sm font-semibold text-onyx md:text-base">
        Stay Updated
      </span>
      <form
        onSubmit={handleSubscribe}
        className="flex w-full items-center justify-between rounded-full border border-hairline pl-6 transition-colors focus-within:border-gold"
      >
        <input
          type="email"
          required
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-transparent py-2 font-text text-sm text-charcoal outline-none placeholder:text-sm placeholder:text-stone md:text-base"
        />
        <button
          type="submit"
          className="flex shrink-0 items-center justify-center rounded-r-full bg-onyx px-4 py-3 font-text text-xs font-semibold text-white transition-colors hover:bg-gold md:text-sm cursor-pointer"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Newsletter;