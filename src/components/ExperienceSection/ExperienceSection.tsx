import { ExperienceItem } from "./ExperienceItem";
import { SectionContainer } from "../../layouts/SectionContainer";
import { SvgExperience } from "@/icons/SvgExperience";
import { EXPERIENCE_DATA } from "./ExperienceData";
import { forwardRef } from "react";

export const Experience = forwardRef<HTMLElement>((_, ref) => {
  return (
    <SectionContainer ref={ref} id="experience">
      <h2 className="text-3xl font-semibold pb-8 flex gap-x-2 items-center">
        <SvgExperience />
        Experience
      </h2>
      <ol className="relative border-s border-purple-200 dark:border-purple-700 ml-4">
        {EXPERIENCE_DATA.map((item, index) => {
          const isLatestExp = index === 0;
          return (
            <li className="mb-10 ms-6" key={item.date}>
              <ExperienceItem
                company={item.company}
                date={item.date}
                description={item.description}
                latest={isLatestExp}
              />
            </li>
          );
        })}
      </ol>
    </SectionContainer>
  );
});
