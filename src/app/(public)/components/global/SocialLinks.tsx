import { FaGithub, FaLinkedinIn, FaXTwitter, FaFacebookF, } from "react-icons/fa6";

const socialLinks = [
  { icon: FaXTwitter, href: "https://twitter.com", label: "Twitter" },
  { icon: FaGithub, href: "https://github.com", label: "GitHub" },
  { icon: FaLinkedinIn, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: FaFacebookF, href: "https://facebook.com/ittehadtraderz", label: "Facebook" },
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
          className="flex size-9 items-center justify-center rounded-full border border-hairline text-charcoal transition-colors hover:border-gold hover:bg-gold hover:text-white"
          >
            <Icon className="size-4" />
          </a>
        ) )}

      </div>
    </div>
  );
};

export default SocialLinks;
