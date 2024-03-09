import { iProjectItem, technologyTag } from "@/types/types";
import cornerFilms from "@/assets/cornerFilms.webp";
import { SvgReact } from "@/icons/SvgReact";

const TAGS = {
  REACT: {
    name: "React",
    class: "bg-black text-white",
    icon: SvgReact,
  },
  REDUX: {},
};
//TODO: FALTA crear los wue están abajo comentados con la misma strategia la class cone l bg que yo decida cogiendolo de svgl

export const PROJECTS_DATA: iProjectItem[] = [
  {
    title: "Corner Films",
    description:
      "You can search for any film you'd like to know about. You can also register yourself and save your favorite film. There is an infinite scroll implemented too! ",
    preview: "https://cornerfilms.netlify.app",
    github:
      "https://github.com/SaraCarreras/cornerFilmsRedux?tab=readme-ov-file",
    image: ` ${cornerFilms}`,
    technology: [TAGS.REACT],
  },
  {
    title: "Project 2",
    description: "description",
    preview: "preview2",
    github: "githubLink2",
    image: "http://via.placeholder.com/300x200",
  },
];

//"Redux", "TypeScript", "Sass", "Firebase"
