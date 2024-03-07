import { ReactNode } from "react";

export function SectionContainer({ children }: { children: ReactNode }) {
  return (
    <section className="justify-center items-center py-20 w-full mx-auto lg:w-[740px] tracking-normal">
      {children}
    </section>
  );
}
