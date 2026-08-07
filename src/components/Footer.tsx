import Image from "next/image";
import Link from "next/link";
import { contact } from "@/lib/contact";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-white">
      <div className="border-b border-white/10 bg-[#152025]">
        <div className="mx-auto max-w-7xl px-4 py-10 text-center lg:px-6">
          <p className="font-heading text-2xl font-semibold uppercase tracking-wide md:text-3xl">
            Any size project, however complex
          </p>
          <p className="mt-2 font-heading text-xl text-brand-accent md:text-2xl">
            We will do the job
          </p>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-10 text-center lg:px-6">
        <Link href="/">
          <Image
            src="/images/logo-footer.png"
            alt="All Rail Hire"
            width={120}
            height={42}
            className="h-10 w-auto"
          />
        </Link>
        <div className="space-y-2 text-sm text-white/80">
          <p>
            © {year} All Rights Reserved | {contact.company}
          </p>
          <p>Melbourne Head Office: {contact.address}</p>
          <p>
            M:{" "}
            <a
              href={`tel:${contact.phoneTel}`}
              className="hover:text-brand-accent"
            >
              {contact.phoneDisplay}
            </a>
          </p>
          <p>
            E:{" "}
            <a
              href={`mailto:${contact.email}`}
              className="hover:text-brand-accent"
            >
              {contact.email}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
