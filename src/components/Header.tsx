import photoSara from "@/assets/photo-cv-optimized.webp";
import { Badge } from "@/components/Badge";
import { SvgGithub } from "@/icons/SvgGithub";
import { SvgLinkedin } from "@/icons/SvgLinkedin";
import { SvgEmail } from "@/icons/SvgEmail";
import { BaseButton } from "./BaseButton";
import { SectionContainer } from "./SectionContainer";
import { HeroButton } from "./HeroButton";
import cv from "@/assets/Sara_Carreras_frontend_dev.pdf";

export function Header() {
  return (
    <SectionContainer id="header">
      <div className="flex direction-row items-center gap-7">
        <img
          src={photoSara}
          alt="Sara's face"
          className="rounded-full w-24 h-24 object-cover"
        />
        {/* <Badge>Coding 👩🏻‍💻</Badge> */}
        <HeroButton href={cv}>Download Cv</HeroButton>
      </div>
      <h1 className="flex text-3xl sm:text-5xl font-bold gap-x-4 py-4">
        Hi👋🏼 I'm Sara
      </h1>
      <h2 className="  text-[#c792ff] sm:text-2xl">
        Frontend developer you'll need for{" "}
        <span className="line-through">almost</span> any app!
      </h2>
      <ul>
        <li className="flex gap-3 py-5 flex-wrap">
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
}
