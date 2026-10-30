import { FaLinkedinIn, FaXTwitter, FaFacebookF, FaInstagram, FaTiktok  } from "react-icons/fa6";

const socialLinks = [
  { icon: FaFacebookF, href: "https://facebook.com/ittehadtraderz", label: "Facebook" },
  { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
  { icon: FaLinkedinIn, href: "https://www.linkedin.com/company/ittehadtraderz", label: "LinkedIn" },
  { icon: FaXTwitter, href: "https://twitter.com", label: "Twitter" },
  { icon: FaTiktok, href: "https://tiktok.com", label: "Tiktok" },
];

const SocialLinks = () => {
  return (
    <div>
      <div className=" flex items-center gap-4">
        {socialLinks.map(({ icon: Icon, href, label }) => (
          <a           key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="flex size-9 items-center justify-center rounded-full border border-hairline text-charcoal transition-colors hover:border-gold bg-white hover:bg-gold hover:text-white shadow-sm"
          >
            <Icon className="size-4" />
          </a>
        ) )}

      </div>
    </div>
  );
};

export default SocialLinks;
