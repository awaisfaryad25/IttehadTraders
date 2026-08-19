import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_NUMBER = "923012525017";

export default function WhatsAppFloat() {
  const link = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Assalam-o-Alaikum, I'd like to inquire about your products at Ittehad Traderz."
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="animate-bob">
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          className="group relative flex size-12 lg:size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform hover:scale-105"
        >
          <span className="ripple absolute inset-0 rounded-full bg-[#25D366]" style={{ animationDelay: "0s" }} />
          <span className="ripple absolute inset-0 rounded-full bg-[#25D366]" style={{ animationDelay: "0.9s" }} />
          <span className="ripple absolute inset-0 rounded-full bg-[#25D366]" style={{ animationDelay: "1.8s" }} />

          <span className="absolute inset-0 rounded-full bg-[#25D366]" />

          <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full bg-onyx px-3 py-1.5 font-text text-xs font-medium text-white opacity-0 shadow-md transition-opacity duration-200 group-hover:opacity-100 lg:block">
            Chat with us
          </span>

          <FaWhatsapp className="relative z-10 size-7 lg:size-8" fill="white" />
        </Link>
      </div>
    </div>
  );
}