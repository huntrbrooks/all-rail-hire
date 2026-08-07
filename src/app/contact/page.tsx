import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { contact } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get quality railway industry services in Australia. Contact us at ${contact.phoneDisplay} or email ${contact.email}. Operating 24/7 nationwide.`,
};

export default function ContactPage() {
  const mapQuery = encodeURIComponent(contact.address);

  return (
    <>
      <section className="bg-brand-dark px-4 py-10 text-white lg:px-6">
        <div className="mx-auto max-w-7xl">
          <h1 className="font-heading text-3xl font-bold uppercase tracking-wide md:text-5xl">
            Contact us today
          </h1>
        </div>
      </section>

      <Section className="bg-white">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-8">
            <div>
              <h2 className="font-heading text-xl font-semibold uppercase tracking-wide text-brand-accent">
                Hours
              </h2>
              <p className="mt-2 text-2xl font-semibold text-brand-dark">
                {contact.hours}
              </p>
            </div>
            <div className="border-t border-brand-dark/10 pt-8">
              <h2 className="font-heading text-xl font-semibold uppercase tracking-wide text-brand-accent">
                Service Area
              </h2>
              <p className="mt-2 text-2xl font-semibold text-brand-dark">
                {contact.serviceArea}
              </p>
            </div>
            <div className="border-t border-brand-dark/10 pt-8">
              <h2 className="font-heading text-xl font-semibold uppercase tracking-wide text-brand-accent">
                Contact
              </h2>
              <div className="mt-3 space-y-2 text-lg text-brand-dark">
                <p>
                  <a
                    href={`tel:${contact.phoneTel}`}
                    className="font-semibold hover:text-brand-accent"
                  >
                    {contact.phoneDisplay}
                  </a>
                </p>
                <p>
                  <a
                    href={`mailto:${contact.email}`}
                    className="font-semibold hover:text-brand-accent"
                  >
                    {contact.email}
                  </a>
                </p>
                <p className="pt-2 text-base text-brand-muted">
                  Melbourne Head Office
                  <br />
                  {contact.address}
                </p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden border border-brand-dark/10 bg-brand-light">
            <iframe
              title="All Rail Hire Melbourne Head Office map"
              src={`https://www.openstreetmap.org/export/embed.html?bbox=145.000%2C-37.700%2C145.040%2C-37.670&layer=mapnik&marker=-37.6835%2C145.0205`}
              className="h-[420px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <p className="px-4 py-3 text-center text-sm text-brand-muted">
              <a
                href={`https://www.openstreetmap.org/search?query=${mapQuery}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-primary hover:text-brand-accent"
              >
                View larger map
              </a>
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
