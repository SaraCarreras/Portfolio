import photoSara from "@/assets/photo-cv-optimized.webp";
import { Badge } from "./Badge";

export function Header() {
  return (
    <section className="justify-center items-center py-6 w-full mx-auto lg:w-[740px] tracking-normal">
      <div className="flex direction-row items-center gap-5">
        <img
          src={photoSara}
          alt="Sara's face"
          className="rounded-full w-24 h-24 object-cover"
        />
        <Badge>Coding 👩🏻‍💻</Badge>
      </div>

      <h1 className="flex text-5xl font-bold gap-x-4 py-4">Hi👋🏼 I'm Sara</h1>

      <h2 className="text-2xl opacity-80">
        Frontend developer you'll need for{" "}
        <span className="line-through">almost</span> any app!
      </h2>
    </section>
  );
}
