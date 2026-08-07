import type { Metadata } from "next";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Capabilities",
  description: "All Rail Hire Capability Statement 2024/2025",
};

export default function CapabilitiesPage() {
  return (
    <>
      <section className="bg-brand-dark px-4 py-10 text-white lg:px-6">
        <div className="mx-auto max-w-7xl">
          <h1 className="font-heading text-3xl font-bold uppercase tracking-wide md:text-5xl">
            Capabilities
          </h1>
          <p className="mt-3 text-white/80">
            Capability Statement 2024 / 2025
          </p>
        </div>
      </section>

      <Section className="bg-white">
        <div className="overflow-hidden border border-brand-dark/10 bg-brand-light shadow-sm">
          <iframe
            title="All Rail Hire Capability Statement"
            src="https://e.issuu.com/embed.html?backgroundColor=%23ffffff&d=all_rail_hire_capability_statement_24-25&u=websitewise"
            className="h-[70vh] min-h-[480px] w-full"
            allow="fullscreen"
            loading="lazy"
          />
        </div>
      </Section>
    </>
  );
}
