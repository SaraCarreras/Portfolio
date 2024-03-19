import { SvgAbout } from "@/icons/SvgAbout";
import { SectionContainer } from "../../layouts/SectionContainer";
import { forwardRef } from "react";

export const AboutSection = forwardRef<HTMLElement>((_, ref) => {
  return (
    <SectionContainer ref={ref} id="about">
      <h2 className="text-3xl font-semibold pb-8 flex gap-x-2 items-center">
        <SvgAbout />
        About me
      </h2>
      <article className="text-lg [&>p]:mb-4 [&>p>strong]:font-semibold">
        <p className="text-pretty">
          Hello, I'm Sara, I'm a web developer from Barcelona. I studied
          Psychology and after a few years I switched to the world of
          programming. Since then I enjoy
          <strong className=" text-[#ae63ff] dark:text-[#c792ff]">
            {" "}
            creating web experiences.
          </strong>
        </p>
        <p className="text-pretty">
          In addition to actively participating in the dev community, I like to
          <strong className=" text-[#ae63ff] dark:text-[#c792ff]">
            {" "}
            collaborate with my peers to create better user experiences.
          </strong>
          Bringing together my two passions, people and technology 🚀.
        </p>
        <p className="text-pretty">
          In my free time, I enjoy working on my own projects, tackling coding
          challenges, and practicing with the
          <strong className=" text-[#ae63ff] dark:text-[#c792ff]">
            {" "}
            newest technologies.
          </strong>
        </p>
      </article>
    </SectionContainer>
  );
});
