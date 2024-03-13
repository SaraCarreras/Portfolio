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
}: iProjectItem) {
  return (
    <article>
      <h3 className="text-2xl font-semibold  text-purple-500 mt-6 mb-4 ">
        {title}
      </h3>
      <p className="text-lg text-pretty">{description}</p>

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
      <img
        className="rounded shadow-2xl shadow-gray dark:shadow/white"
        src={image}
        alt="project's screenshot"
      />
      <span className="flex gap-3 mt-4 ">
        <LinkButton href={preview}>
          <SvgPreview /> View
        </LinkButton>
        <LinkButton href={github}>
          <SvgGithub /> Github
        </LinkButton>
      </span>
    </article>
  );
}
