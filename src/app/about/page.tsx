import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "With over a decade of industry experience and expertise in best practice railway industry techniques operating all across Australia, we have you covered.",
};

const clients = [
  "/images/clients/client-1.png",
  "/images/clients/client-2.jpg",
  "/images/clients/client-3.png",
  "/images/clients/client-4.png",
  "/images/clients/client-5.png",
  "/images/clients/client-6.png",
  "/images/clients/client-7.png",
  "/images/clients/client-8.png",
  "/images/clients/client-9.png",
  "/images/clients/client-10.png",
  "/images/clients/client-11.png",
];

export default function AboutPage() {
  return (
    <>
      <PageHero title="About Us." imageSrc="/images/pages/about-hero.jpg" />

      <Section className="bg-white">
        <p className="max-w-4xl text-xl font-medium leading-relaxed text-brand-dark md:text-2xl">
          With over a decade of industry experience and expertise in best
          practice railway industry techniques operating all across Australia,
          we have you covered.
        </p>
        <div className="mt-8 max-w-4xl space-y-5 leading-relaxed text-brand-muted">
          <p>
            We are proud to have created a culture where safety is the
            foundation of our company. Through intensive training, monitoring
            and solid leadership, we have built a culture which fosters a safe
            work environment and where the health and well-being of our
            workforce is of utmost importance.
          </p>
          <p>
            We identify risks first before commencing any work, ensuring all
            personnel are aware and have the opportunity to participate in
            implementing safety controls, while we supervise and evaluate
            continually.
          </p>
          <p>
            We maintain uncompromising adherence to meeting the Australian
            Standards as a minimum, along with precisely following the codes of
            practice, such as the Work Health and Safety Act 2012, the Rail
            Safety Act for each relevant state (2012 or newer) and the Work
            Health and Safety Regulations 2012.
          </p>
        </div>
      </Section>

      <Section className="bg-brand-light">
        <h2 className="text-center font-heading text-2xl font-semibold uppercase tracking-wide text-brand-dark md:text-3xl">
          Some of our clients
        </h2>
        <div className="mt-10 grid grid-cols-2 items-center gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {clients.map((src) => (
            <div
              key={src}
              className="flex h-24 items-center justify-center bg-white px-4 py-3 shadow-sm"
            >
              <Image
                src={src}
                alt="Client logo"
                width={180}
                height={60}
                className="max-h-14 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
