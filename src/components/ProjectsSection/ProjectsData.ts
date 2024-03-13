import { iProjectItem } from "@/types/types";
import cornerFilms from "@/assets/cornerFilms.webp";
import { SvgReact } from "@/icons/techStack/SvgReact";
import { SvgRedux } from "@/icons/techStack/SvgRedux";
import { SvgSass } from "@/icons/techStack/SvgSass";
import { SvgTypeScript } from "@/icons/techStack/SvgTypeScript";
import { SvgFirebase } from "@/icons/techStack/SvgFirebase";

const TAGS = {
  REACT: {
    name: "React",
    class: "bg-black text-white dark:text-[currentColor]",
    icon: SvgReact,
  },
  REDUX: {
    name: "Redux",
    class: "bg-[#7025e94d] text-[currentColor] ",
    icon: SvgRedux,
  },
  SASS: {
    name: "Sass",
    class: "bg-[#e44a9740] text-[currentColor] ",
    icon: SvgSass,
  },
  TYPESCRIPT: {
    name: "TypeScript",
    class: "bg-[#2a7ad04d] text-[currentColor] ",
    icon: SvgTypeScript,
  },
  FIREBASE: {
    name: "Firebase",
    class: "bg-[#f6820d41] text-[currentColor] ",
    icon: SvgFirebase,
  },
};
//#C46495
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
    technology: [
      TAGS.REACT,
      TAGS.REDUX,
      TAGS.SASS,
      TAGS.TYPESCRIPT,
      TAGS.FIREBASE,
    ],
  },
  {
    title: "Project 2",
    description: "description",
    preview: "preview2",
    github: "githubLink2",
    image: "http://via.placeholder.com/300x200",
    technology: [TAGS.REACT],
  },
];

//"", "TypeScript", "", "Firebase"
