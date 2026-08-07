import Image from "next/image";

type PageHeroProps = {
  title: string;
  imageSrc: string;
  imageAlt?: string;
};

export function PageHero({ title, imageSrc, imageAlt = "" }: PageHeroProps) {
  return (
    <section className="relative flex h-[220px] items-end overflow-hidden bg-brand-dark md:h-[300px]">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-brand-dark/55" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-8 lg:px-6">
        <h1 className="font-heading text-3xl font-bold uppercase tracking-wide text-white md:text-5xl">
          {title}
        </h1>
      </div>
    </section>
  );
}
