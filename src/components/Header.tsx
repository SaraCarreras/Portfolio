import photoSara from "@/assets/photo-cv-optimized.webp";
import { Badge } from "./Badge";
import contact from "@/icons/contact.png";
import social from "@/icons/social.png";
import github from "@/icons/github.svg";
import linkedinM from "@/icons/linkedinM.svg";

export function Header() {
  return (
    <section className="justify-center items-center py-20 w-full mx-auto lg:w-[740px] tracking-normal">
      <div className="flex direction-row items-center gap-5">
        <img
          src={photoSara}
          alt="Sara's face"
          className="rounded-full w-24 h-24 object-cover"
        />
        <Badge>Coding 👩🏻‍💻</Badge>
      </div>

      <h1 className="flex text-5xl font-bold gap-x-4 py-4">Hi👋🏼 I'm Sara</h1>

      <h2 className="text-2xl text-[#c792ff]">
        Frontend developer you'll need for{" "}
        <span className="line-through">almost</span> any app!
      </h2>
      <ul>
        <li>
          <a href="mailto:saracc621@gmail.com">
            LinkedinM
            <img
              alt="email"
              src={linkedinM}
              className="w-8 h-8 dark:stroke-cyan-500"
            />
          </a>
          <a href="https://www.linkedin.com/in/saracarreras-frontend-developer">
            <img alt="linkedin" src={social} className="w-8 h-8" />
          </a>
          <a href="https://www.linkedin.com/in/saracarreras-frontend-developer">
            Github <img alt="linkedin" src={github} className="w-8 h-8" />
          </a>
        </li>
      </ul>
    </section>
  );
}
