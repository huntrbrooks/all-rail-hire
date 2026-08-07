"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { contact, navLinks } from "@/lib/contact";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-brand-dark text-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 lg:px-6">
        <Link href="/" className="shrink-0" onClick={() => setOpen(false)}>
          <Image
            src="/images/logo-sm.png"
            alt="All Rail Hire"
            width={160}
            height={56}
            className="h-12 w-auto md:h-14"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium uppercase tracking-wide transition-colors hover:text-brand-accent ${
                  active ? "text-brand-accent" : "text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 xl:flex">
          <div className="border-l border-white/20 pl-4 text-left text-xs leading-relaxed">
            <p className="font-semibold uppercase tracking-wider text-brand-primary">
              Get in touch
            </p>
            <p>
              <span className="text-white/50">M: </span>
              <a
                href={`tel:${contact.phoneTel}`}
                className="hover:text-brand-accent"
              >
                {contact.phoneDisplay}
              </a>
            </p>
            <p>
              <span className="text-white/50">E: </span>
              <a
                href={`mailto:${contact.email}`}
                className="hover:text-brand-accent"
              >
                {contact.email}
              </a>
            </p>
          </div>
          <a
            href={`tel:${contact.phoneTel}`}
            className="bg-brand-accent px-4 py-2.5 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-[#d96a14]"
          >
            Call - {contact.phoneDisplay}
          </a>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded border border-white/30 p-2 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-brand-dark px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-2 py-2 text-sm font-medium uppercase tracking-wide hover:text-brand-accent"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 space-y-1 border-t border-white/10 pt-4 text-sm">
            <p className="font-semibold text-brand-primary">Get in touch</p>
            <p>
              M:{" "}
              <a href={`tel:${contact.phoneTel}`}>{contact.phoneDisplay}</a>
            </p>
            <p>
              E: <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </p>
            <a
              href={`tel:${contact.phoneTel}`}
              className="mt-3 inline-block bg-brand-accent px-4 py-2 text-sm font-semibold uppercase text-white"
            >
              Call - {contact.phoneDisplay}
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
