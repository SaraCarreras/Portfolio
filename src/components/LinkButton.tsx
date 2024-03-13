import { ReactNode } from "react";

export type LinkButtonProps = {
  href: string;
  children: ReactNode;
};
export function LinkButton({ children, href }: LinkButtonProps) {
  return (
    <a
      href={href}
      rel="noopener noreferer"
      target="_blank"
      className="inline-flex items-center justify-center gap-2 px-3 py-2 space-x-2 text-base text-white transition rounded-full bg-gray-800 border border-gray-600 focus-visible:ring-yellow-500/80 text-md hover:bg-gray-800 hover:border-gray-900 group max-w-fit hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black hover:scale-110"
    >
      {children}
    </a>
  );
}
