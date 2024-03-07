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
      className="justify-center items-center py-20 mx-auto w-full tracking-normal md:w-[740px]  "
    >
      {children}
    </section>
  );
}
