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
      className="justify-center items-center py-10 sm:py-16 mx-auto w-full tracking-normal md:w-[740px] dark:text-gray-300 "
    >
      {children}
    </section>
  );
}
