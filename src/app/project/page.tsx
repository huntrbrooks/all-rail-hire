import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Projects",
  description: "Transport Sector, the RAIL INDUSTRY Specialists",
};

const projects = [
  "NORTH EAST RAIL LINE UPGRADE",
  "SOUTHERN PROGRAM ALLIANCE [A LEVEL CROSSING REMOVAL PROJECT]",
  "BARWON RIVER BRIDGE RENEWAL",
  "VARIOUS HUNTER VALLEY CLOSE DOWN POSSESSIONS",
  "MANANGATANG RE-SLEEPER PROJECT",
  "PAKENHAM HCMT STABLING DEPOT High Capacity Metro Trains",
  "MOSSVALE TURNOUT INSTALL",
  "SYDNEY LIGHT RAIL",
  "GOLD COAST LIGHT RAIL",
  "WICKHAM STABLING YARD",
  "HEXHAM RELIEF ROADS",
  "MORETON BAY RAIL LINK",
];

export default function ProjectsPage() {
  return (
    <>
      <PageHero title="Projects" imageSrc="/images/pages/projects-hero.jpg" />

      <Section className="bg-white">
        <h2 className="font-heading text-2xl font-semibold uppercase tracking-wide text-brand-dark md:text-3xl">
          Completed Projects
        </h2>
        <p className="mt-4 max-w-3xl text-brand-muted">
          All Rail Hire have worked on and completed some major projects which
          include:
        </p>
        <ul className="mt-8 grid gap-3 md:grid-cols-2">
          {projects.map((project) => (
            <li
              key={project}
              className="flex items-start gap-3 border-l-4 border-brand-accent bg-brand-light px-4 py-3 font-medium uppercase tracking-wide text-brand-dark"
            >
              {project}
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
