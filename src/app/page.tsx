import Image from "next/image";
import { HeroSlider } from "@/components/HeroSlider";
import { Section } from "@/components/Section";

const services = [
  "Heavy rail welding",
  "Re-railing",
  "Level crossing renewal",
  "Transom and bridge renewal",
  "Reconditioning",
  "Crane rail welding",
  "Light rail welding",
  "Track certification",
  "Track inspection",
  "Track construction",
  "Rail adjusting (PW3)",
  "Turnout and crossover Construction",
  "Supervision",
];

const gallery = [
  "/images/gallery/img-1.jpg",
  "/images/gallery/img-2.jpg",
  "/images/gallery/img-3.jpg",
  "/images/gallery/img-4.jpg",
  "/images/gallery/img-5.jpg",
  "/images/gallery/img-6.jpg",
];

const stats = [
  { value: "10+", label: "Years of experience" },
  { value: ">500", label: "Successful projects" },
  { value: "10", label: "Trained professionals" },
];

export default function HomePage() {
  return (
    <>
      <HeroSlider />

      <Section className="bg-white">
        <h1 className="max-w-4xl font-heading text-3xl font-bold uppercase leading-tight tracking-wide text-brand-dark md:text-4xl lg:text-5xl">
          Transport Sector, the Rail Industry Specialists —{" "}
          <span className="text-brand-accent">Trust in the Best</span>
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-brand-muted md:text-xl">
          We are a specialist railway industry company committed to delivering
          quality works efficiently and cost effectively, with safety as our
          top priority.
        </p>
      </Section>

      <Section className="bg-brand-light">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-heading text-2xl font-semibold text-brand-dark md:text-3xl">
              Setting the standard for the rail industry
            </h2>
            <p className="mt-4 leading-relaxed text-brand-muted">
              All Rail Hire have a strict and thorough recruitment process to
              ensure we employ the best personnel to deliver works in line with
              our high standards of quality that our clients should expect.
            </p>
            <p className="mt-4 leading-relaxed text-brand-muted">
              Although All Rail Hire is a new concept within the industry, it
              brings over a decade of knowledge and rail transport experience.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-2xl font-semibold text-brand-dark md:text-3xl">
              Professional and high grade services
            </h2>
            <p className="mt-4 text-brand-muted">
              Services that we provide include, but are not limited to:
            </p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {services.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-brand-dark md:text-base"
                >
                  <span
                    className="mt-2 inline-block h-1.5 w-1.5 shrink-0 bg-brand-accent"
                    aria-hidden
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section className="bg-white !py-8">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((src) => (
            <div
              key={src}
              className="relative aspect-[4/3] overflow-hidden bg-brand-dark/10"
            >
              <Image
                src={src}
                alt=""
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-brand-dark text-white">
        <h2 className="text-center font-heading text-2xl font-semibold uppercase tracking-wide md:text-3xl">
          Why All Rail Hire
        </h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-heading text-5xl font-bold text-brand-accent md:text-6xl">
                {stat.value}
              </p>
              <p className="mt-3 text-sm uppercase tracking-wider text-white/80 md:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
