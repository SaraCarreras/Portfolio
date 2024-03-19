import { ReactNode } from "react";
export interface iExperienceItem {
  company: string;
  date: string;
  description: string;
  latest?: boolean;
}
export interface iProjectItem {
  title: string;
  description: string;
  preview?: string;
  github?: string;
  isDisabledLink?: boolean;
  image: string;
  technology: technologyTag[];
}
export interface technologyTag {
  name: string;
  class: string;
  icon: () => JSX.Element;
}
export interface iSections {
  header: boolean;
  experience: boolean;
  projects: boolean;
  about: boolean;
}

export type svgProp = {
  size: {
    width: string;
    height: string;
  };
};

export type LinkButtonProps = {
  href?: string;
  children: ReactNode;
  disabled?: boolean;
};
