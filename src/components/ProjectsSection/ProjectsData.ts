import { iProjectItem } from "@/types/types";
import cornerFilms from "@/assets/cornerFilms.webp";
import comingSoon from "@/assets/coming-soon.webp";
import { SvgReact } from "@/icons/techStack/SvgReact";
import { SvgRedux } from "@/icons/techStack/SvgRedux";
import { SvgSass } from "@/icons/techStack/SvgSass";
import { SvgTypeScript } from "@/icons/techStack/SvgTypeScript";
import { SvgFirebase } from "@/icons/techStack/SvgFirebase";
import { SvgNextJs } from "@/icons/techStack/SvgNextJs";
import { SvgTailwind } from "@/icons/techStack/SvgTailwind";
import { SvgMongoDB } from "@/icons/techStack/SvgMongoDB";

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
  NEXTJS: {
    name: "Next.js",
    class: "bg-[#393939] text-white dark:text-[currentColor] ",
    icon: SvgNextJs,
  },
  TAILWIND: {
    name: "Tailwind",
    class: "bg-[#1c94a77b] dark:text-[currentColor] ",
    icon: SvgTailwind,
  },
  MONGODB: {
    name: "MongoDB",
    class: "bg-[#008d4298] dark:text-[currentColor] ",
    icon: SvgMongoDB,
  },
};

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
    title: "FullStack Social Media app",
    description:
      "A complete social app for sharing thoughts, following others and commenting. User search with pagination, activity pages for replies, profile management, and exclusive groups with top thoughts and members.",
    preview: "#",
    github: "#",
    image: `${comingSoon}`,
    technology: [
      TAGS.NEXTJS,
      TAGS.REACT,
      TAGS.MONGODB,
      TAGS.TYPESCRIPT,
      TAGS.TAILWIND,
    ],
  },
];
//https://www.youtube.com/watch?v=O5cmLDVTgAs&t=12652s
