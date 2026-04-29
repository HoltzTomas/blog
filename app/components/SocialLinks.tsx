import { Github, Instagram, Twitter } from "lucide-react";

import { socialLinks } from "./site-data";

type SocialLinksProps = {
  variant?: "icons" | "text";
};

const iconMap = {
  github: Github,
  twitter: Twitter,
  instagram: Instagram,
};

export function SocialLinks({ variant = "icons" }: SocialLinksProps) {
  if (variant === "text") {
    return (
      <>
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            data-cursor="hover"
          >
            {link.label}
          </a>
        ))}
      </>
    );
  }

  return (
    <>
      {socialLinks.map((link) => {
        const Icon = iconMap[link.icon];

        return (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className="social-icon-link"
            data-cursor="hover"
          >
            <Icon strokeWidth={1.8} />
          </a>
        );
      })}
    </>
  );
}
