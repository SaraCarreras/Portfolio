import photoSara from "@/assets/photo-cv-optimized.webp";
import { SvgGithub } from "@/icons/SvgGithub";
import { SvgLinkedin } from "@/icons/SvgLinkedin";
import { SvgEmail } from "@/icons/SvgEmail";
import { BaseButton } from "./shared/BaseButton";
import { SectionContainer } from "../layouts/SectionContainer";
import { HeroButton } from "./shared/HeroButton";
import cv from "@/assets/Sara_Carreras_frontend_dev.pdf";
import { forwardRef } from "react";

export const Header = forwardRef<HTMLElement>((_, ref) => {
  return (
    <SectionContainer ref={ref} id="header">
      <div className="flex direction-row items-center gap-8">
        <img
          src={photoSara}
          alt="Sara's avatar"
          className="rounded-full w-40 h-40  object-cover shadow-2xl border border-black dark:shadow-slate-700 dark:shadow-lg"
        />
        <HeroButton href={cv}>Download Cv</HeroButton>
      </div>
      <h1 className="flex text-3xl sm:text-5xl font-bold gap-x-4 py-5 dark:text-gray-300">
        Hi👋🏼 I'm Sara
      </h1>
      <h2 className="  text-[#c792ff] sm:text-2xl">
        Frontend developer you'll need for{" "}
        <span className="line-through">almost</span> any app!
      </h2>
      <ul>
        <li className="flex gap-3 py-6 flex-wrap dark:text-gray-300">
          <BaseButton
            text="saracc621@gmail.com"
            href="mailto:saracc621@gmail.com"
          >
            <SvgEmail />
          </BaseButton>

          <BaseButton
            text="Linkedin"
            href="https://www.linkedin.com/in/saracarreras-frontend-developer"
          >
            <SvgLinkedin />
          </BaseButton>

          <BaseButton href="https://github.com/SaraCarreras" text="Github">
            <SvgGithub />
          </BaseButton>
        </li>
      </ul>
    </SectionContainer>
  );
});
