import { ReactNode } from "react";

export function SectionContainer({
  children,
  id,
}: {
  children: ReactNode;
  id: string;
}) {
  return (
    <section
      id={id}
      className="justify-center items-center py-10 sm:py-16 mx-auto w-full tracking-normal md:max-w-3xl lg:max-w-4xl dark:text-gray-300 "
    >
      {children}
    </section>
  );
}
