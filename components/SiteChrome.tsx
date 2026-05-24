import type { ReactNode } from "react";
import NextLink from "next/link";
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { FiArrowUpRight, FiDownload, FiMail } from "react-icons/fi";
import { navItems, profile } from "../data/portfolio";

type CtaLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
  icon?: ReactNode;
};

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8"
        aria-label="Main navigation"
      >
        <NextLink href="/" className="group">
          <span className="block text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 sm:text-sm">
            Chai Qi Qian
          </span>
          <span className="block text-sm font-bold text-slate-950 transition-colors group-hover:text-blue-700 sm:text-base">
            Software Engineer
          </span>
        </NextLink>

        <div className="hidden items-center gap-7 text-sm font-medium text-slate-600 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-blue-700"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={`mailto:${profile.email}`}
            className="hidden rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 sm:inline-flex"
          >
            Contact
          </a>
          <a
            href={profile.resumeHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
          >
            <FiDownload aria-hidden="true" />
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between lg:px-8">
        <p>Copyright 2026 Chai Qi Qian. Built with Next.js and Tailwind CSS.</p>
        <SocialLinks />
      </div>
    </footer>
  );
}

export function SocialLinks() {
  const links = [
    { label: "LinkedIn", href: profile.linkedInHref, icon: <AiFillLinkedin /> },
    { label: "Instagram", href: profile.instagramHref, icon: <AiFillInstagram /> },
    { label: "Facebook", href: profile.facebookHref, icon: <AiFillFacebook /> },
  ];

  return (
    <div className="flex items-center gap-3">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-xl text-slate-600 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] text-blue-700">
        {eyebrow}
      </p>
      <h2 className="text-balance text-3xl font-bold text-slate-950 md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600 shadow-sm">
      {children}
    </span>
  );
}

export function CtaLink({
  href,
  children,
  variant = "primary",
  external = false,
  icon,
}: CtaLinkProps) {
  const className =
    variant === "primary"
      ? "inline-flex items-center justify-center gap-2 rounded-full bg-blue-700 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-700/20 transition hover:bg-slate-950"
      : "inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-800 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700";

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={className}
    >
      {icon}
      {children}
      {external ? <FiArrowUpRight aria-hidden="true" /> : null}
    </a>
  );
}

export function EmailLink() {
  return (
    <CtaLink href={`mailto:${profile.email}`} icon={<FiMail aria-hidden="true" />}>
      Contact Me
    </CtaLink>
  );
}
