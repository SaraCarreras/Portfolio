import { EXPERIENCE_DATA } from "@/constants/Experience";
import { ExperienceItem } from "./ExperienceItem";
import { SectionContainer } from "./SectionContiainer";

export function Experience() {
  return (
    <SectionContainer>
      <h2 className="text-2xl bold pb-8">Experience</h2>
      <ol className="relative border-s border-purple-200 dark:border-purple-700">
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
}
