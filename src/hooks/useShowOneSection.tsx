import { iSections } from "@/types/types";

export function showOneActiveSection(activeSection: iSections) {
  if (activeSection["header"] && activeSection["experience"]) return "header";
  if (activeSection["about"]) return "about";

  const sectionKeys: Array<keyof iSections> = [
    "header",
    "experience",
    "projects",
    "about",
  ];

  const sectionKey = sectionKeys.find(
    (key) => key in activeSection && activeSection[key]
  );

  return sectionKey;
}
