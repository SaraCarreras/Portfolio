import { SvgAbout } from "@/icons/SvgAbout";
import { SectionContainer } from "../SectionContainer";

export function AboutSection() {
  return (
    <SectionContainer id="about">
      <h2 className="text-3xl font-semibold pb-8 flex gap-x-2 items-center">
        <SvgAbout />
        About me
      </h2>
      <article className="text-lg [&>p]:mb-4">
        <p className="text-pretty">
          Hello, I'm Sara, I'm a web developer from Barcelona. I studied
          Psychology and after a few years I switched to the world of
          programming. Since then I enjoy{" "}
          <span className=" text-[#c792ff]">creating web experiences.</span>
        </p>
        <p className="text-pretty">
          In addition to actively participating in the dev community, I like to
          <span className=" text-[#c792ff]">
            collaborate with my peers to create better user experiences.
          </span>
          Bringing together my two passions, people and technology 🚀.
        </p>
        <p className="text-pretty">
          In my free time, I enjoy working on my own projects, tackling coding
          challenges, and practicing with the{" "}
          <span className=" text-[#c792ff]">newest technologies.</span>
        </p>
      </article>
    </SectionContainer>
  );
}
