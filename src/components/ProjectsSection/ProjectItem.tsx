import { iProjectItem } from "@/types/types";
import { LinkButton } from "../LinkButton";
import { SvgPreview } from "@/icons/SvgPreview";
import { SvgGithub } from "@/icons/SvgGithub";
export function ProjectItem({
  title,
  description,
  preview,
  github,
  image,
  technology,
  isDisabledLink,
}: iProjectItem) {
  return (
    <>
      <div className="flex items-center mx-auto w-full  md:w-1/2 md:items-start">
        <div className="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:hover:-translate-y-1 md:hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50">
          <img
            alt="project's screenshot"
            className="object-cover object-top max-w-xl w-full transition duration-500 aspect-[4/3] sm:h-full md:scale-110 md:hover:scale-105"
            loading="lazy"
            src={image}
          />
        </div>
      </div>

      <div className="w-full md:w-1/2 md:max-w-lg">
        <h3 className="text-2xl font-semibold  text-purple-500  ">{title}</h3>
        <ul className="flex gap-4 flew-row flex-wrap my-4 ">
          {technology?.map((el) => {
            return (
              <li key={el.name}>
                <span
                  className={`flex gap-x-2 rounded-full items-center text-md   ${el.class} py-1 px-4 `}
                >
                  <el.icon />

                  {el.name}
                </span>
              </li>
            );
          })}
        </ul>
        <p className="text-lg text-pretty">{description}</p>

        <span className="flex gap-3 mt-4 ">
          <LinkButton href={preview} disabled={isDisabledLink}>
            <SvgPreview /> View
          </LinkButton>
          <LinkButton href={github} disabled={isDisabledLink}>
            <SvgGithub /> Github
          </LinkButton>
        </span>
      </div>
    </>
  );
}
