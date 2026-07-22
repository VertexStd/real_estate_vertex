import { Share2, Globe, MessageCircle, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  Properties: [
    { label: "Featured Estates", href: "#properties" },
    { label: "Signature Residence", href: "#showcase" },
    { label: "Communities", href: "#communities" },
    { label: "Lifestyle", href: "#lifestyle" },
  ],
  Company: [
    { label: "About Us", href: "#about" },
    { label: "Our Agents", href: "#agents" },
    { label: "Why Aurelius", href: "#about" },
  ],
  Connect: [
    { label: "Book Consultation", href: "#agents" },
    { label: "Market Insights", href: "#" },
    { label: "Press", href: "#" },
  ],
};

const socials = [
  { Icon: Share2, label: "Share" },
  { Icon: Globe, label: "Website" },
  { Icon: MessageCircle, label: "Message" },
];

export function Footer() {
  return (
    <footer className="overflow-x-hidden bg-foreground text-background" role="contentinfo">
      <div className="site-container pb-10 pt-14 sm:pb-8 sm:pt-16 lg:pt-20">
        <div className="grid grid-cols-1 gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-5 lg:gap-10">
          <div className="lg:col-span-2">
            <a href="#" className="mb-5 inline-flex items-center gap-3 sm:mb-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold">
                <span className="font-display text-sm font-semibold text-white">A</span>
              </span>
              <span>
                <span className="block font-display text-xl font-medium tracking-wide">
                  AURELIUS
                </span>
                <span className="block text-[10px] tracking-[0.28em] uppercase text-background/45">
                  Realty
                </span>
              </span>
            </a>
            <p className="mb-7 max-w-sm text-sm leading-relaxed text-background/55 sm:mb-8">
              Curating extraordinary properties for discerning clients since
              1991. Where architecture meets aspiration.
            </p>
            <div className="flex gap-2.5">
              {socials.map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-background/15 text-background/55 transition-colors hover:border-gold hover:bg-gold hover:text-white"
                  aria-label={label}
                >
                  <Icon size={15} aria-hidden />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="mb-4 text-[11px] font-medium tracking-[0.2em] uppercase text-gold">
                {title}
              </h4>
              <ul className="space-y-1">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="inline-flex min-h-11 items-center text-sm text-background/55 transition-colors hover:text-background"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-background/10 pt-7 sm:mt-14">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-col gap-1 text-sm text-background/45 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2">
              <span className="flex min-h-11 items-center gap-2">
                <MapPin size={13} className="text-gold" aria-hidden />
                9665 Wilshire Blvd, Beverly Hills, CA
              </span>
              <a
                href="tel:+13105550192"
                className="flex min-h-11 items-center gap-2 hover:text-background"
              >
                <Phone size={13} className="text-gold" aria-hidden />
                +1 (310) 555-0192
              </a>
              <a
                href="mailto:concierge@aureliusrealty.com"
                className="flex min-h-11 items-center gap-2 break-all hover:text-background sm:break-normal"
              >
                <Mail size={13} className="shrink-0 text-gold" aria-hidden />
                concierge@aureliusrealty.com
              </a>
            </div>
            <p className="text-xs text-background/35">
              &copy; {new Date().getFullYear()} Aurelius Realty. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
