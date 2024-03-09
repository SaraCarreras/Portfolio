export interface iExperienceItem {
  company: string;
  date: string;
  description: string;
  latest?: boolean;
}

export interface iProjectItem {
  title: string;
  description: string;
  preview: string;
  github: string;
  image: string;
  technology?: technologyTag[];
}

export interface technologyTag {
  name: string;
  class: string;
  icon: () => JSX.Element;
}

export type svgProp = {
  size: {
    width: string;
    height: string;
  };
};
