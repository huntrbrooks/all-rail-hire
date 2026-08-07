import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Rail Industry Services",
  description:
    "All Rail Hire offers construction, maintenance, and labour hire services for the Australian rail industry, prioritizing environmental safety and sustainability.",
};

const equipment = [
  "Complete rail industry welding units",
  "Track certification instruments",
  "Broad and standard gauge hi-rail vehicle",
  "Fully equipped gang trucks for all track and fastening types",
  "Hi-rail excavators",
  "Loaders",
  "Highly qualified personnel trained in First Aid and equipped with their Work At Heights and Confined Space tickets",
];

export default function ServicesPage() {
  return (
    <>
      <PageHero title="Services." imageSrc="/images/pages/services-hero.jpg" />

      <Section className="bg-brand-dark text-white">
        <div className="grid gap-8 md:grid-cols-3">
          {[
            "Construction",
            "Maintenance",
            "Rail Industry Labour Hire Plant & Equipment",
          ].map((title) => (
            <div
              key={title}
              className="border border-white/15 bg-white/5 px-6 py-10 text-center"
            >
              <h2 className="font-heading text-xl font-bold uppercase tracking-wide text-brand-accent md:text-2xl">
                {title}
              </h2>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-white">
        <h2 className="font-heading text-2xl font-semibold uppercase tracking-wide text-brand-dark md:text-3xl">
          Fully Equipped
        </h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-brand-muted">
          All Rail Hire provides the highest quality tools and personnel to
          complete any job presented including:
        </p>
        <ul className="mt-6 max-w-3xl space-y-3">
          {equipment.map((item) => (
            <li key={item} className="flex items-start gap-3 text-brand-dark">
              <span
                className="mt-2 inline-block h-1.5 w-1.5 shrink-0 bg-brand-accent"
                aria-hidden
              />
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section className="bg-brand-light">
        <h2 className="font-heading text-2xl font-semibold uppercase tracking-wide text-brand-dark md:text-3xl">
          Sustainable Work Practices
        </h2>
        <div className="mt-6 max-w-3xl space-y-4 leading-relaxed text-brand-muted">
          <p>
            We place great importance on performing all works to strict
            environmental practices.
          </p>
          <p>
            We do this by ensuring that our method statements control every
            risk associated with the environment through effective practices in
            sustainability and caring for our surroundings.
          </p>
          <p>
            As far as possible, we aim to eliminate any risk of environmental
            harm by adopting safe planning before we undertake any work.
          </p>
        </div>
      </Section>
    </>
  );
}
