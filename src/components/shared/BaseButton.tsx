import { ReactNode } from "react";

export function BaseButton({
  children,
  text,
  href,
}: {
  children: ReactNode;
  text: string;
  href: string;
}) {
  return (
    <button className="rounded-full border border-black/10 bg-black/5 dark:border-white/10 dark:bg-white/5 px-3 py-1 hover:scale-110 hover:bg-black/10 dark:hover:bg-white/20 transition text-xs sm:base">
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="flex justify-center items-center flex-row gap-3"
      >
        <span>{children}</span>
        <span className="text-sm sm:text-md"> {text}</span>
      </a>
    </button>
  );
}
