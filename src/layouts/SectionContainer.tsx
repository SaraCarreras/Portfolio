import { ForwardedRef, ReactNode, forwardRef } from "react";

export const SectionContainer = forwardRef<
  HTMLElement,
  { id: string; children: ReactNode }
>(({ id, children }, ref: ForwardedRef<HTMLElement>) => {
  return (
    <section
      ref={ref}
      data-section
      id={id}
      className="justify-center items-center py-10 sm:py-16 mx-auto w-full  md:max-w-3xl lg:max-w-4xl dark:text-gray-300 "
    >
      {children}
    </section>
  );
});
