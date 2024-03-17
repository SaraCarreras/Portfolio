import { LinkButtonProps } from "@/types/types";

export function LinkBadge({ children, href, disabled }: LinkButtonProps) {
  const isDisabledLink = disabled
    ? "cursor-not-allowed bg-gray-400 pointer-events-none border-none"
    : "bg-gray-800 border border-gray-600 focus-visible:ring-yellow-500/80 text-md hover:bg-gray-800 hover:border-gray-900 group max-w-fit hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black hover:scale-110";
  return (
    <a
      href={href}
      rel="noopener noreferer"
      target="_blank"
      className={`${isDisabledLink} inline-flex items-center justify-center gap-2 px-3 py-2 space-x-2 text-base
       text-white transition rounded-full `}
    >
      {children}
    </a>
  );
}
//DISABLE A BUTTON https://stackoverflow.com/questions/71320193/how-can-i-disable-the-button-in-design-as-well
