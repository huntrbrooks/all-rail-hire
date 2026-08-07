import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export function Section({ children, className = "", id }: SectionProps) {
  return (
    <section id={id} className={`px-4 py-12 md:py-16 lg:px-6 ${className}`}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}
