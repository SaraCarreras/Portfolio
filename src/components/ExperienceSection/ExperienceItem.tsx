import { SvgCalendar } from "@/icons/SvgCalendar";
import { iExperienceItem } from "@/types/types";

export function ExperienceItem({
  company,
  date,
  description,
  latest,
}: iExperienceItem) {
  return (
    <>
      <span className="absolute flex items-center justify-center size-6 bg-purple-300 rounded-full -start-3 ring-8 ring-purple dark:ring-purple-900 dark:bg-purple-900">
        <SvgCalendar />
      </span>
      <div className="ml-3">
        <h3 className="flex items-center gap-3 text-lg font-semibold text-purple-500 text-balance dark:text-white">
          {company}
          {latest && (
            <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">
              Latest
            </span>
          )}
        </h3>
        <time className="block my-4 text-sm font-normal leading-none  text-blue-200 text-pretty dark:text-gray-500">
          {date}
        </time>
        <p className="mb-4 text-base font-normal text-gray-300 text-pretty dark:text-gray-400">
          {description}
        </p>
      </div>
    </>
  );
}
