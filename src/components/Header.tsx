import photoSara from "@/assets/photo-cv-optimized.webp";
import { Badge } from "@/components/Badge";
import { SvgGithub } from "@/icons/SvgGithub";
import { SvgLinkedin } from "@/icons/linkedin";
import { SvgDarkMode } from "@/icons/SvgDarkMode";
import { SvgLightMode } from "@/icons/SvgLightMode";
import { SvgPreview } from "@/icons/SvgPrevie";
import { SvgEmail } from "@/icons/SvgEmail";
import { SvgContact } from "@/icons/SvgContact";
import { BaseButton } from "./BaseButton";
import { SectionContainer } from "./SectionContainer";

export function Header() {
  return (
    <SectionContainer id="header">
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
        <li className="flex gap-3 py-5">
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
            <SvgLinkedin size={{ width: 20, height: 20 }} />
          </BaseButton>

          <BaseButton href="https://github.com/SaraCarreras" text="Github">
            <SvgGithub size={{ width: 30, height: 30 }} />{" "}
          </BaseButton>
        </li>
      </ul>
    </SectionContainer>
  );
}
