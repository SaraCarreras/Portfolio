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
import { SvgNodeJs } from "@/icons/techStack/SvgNodeJs";
import { SvgSQLite } from "@/icons/techStack/SvgSQLite";
import { SvgSocketIo } from "@/icons/techStack/SvgSocketIo";

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
  NODEJS: {
    name: "Node.js",
    class: "bg-[#abff9a7d] dark:bg-[#6da68274] dark:text-[currentColor] ",
    icon: SvgNodeJs,
  },
  SQLITE: {
    name: "SQLite",
    class: "bg-[#023b572a] dark:bg-[#81939a] text-[currentColor] ",
    icon: SvgSQLite,
  },
  SOCKETI0: {
    name: "Socket.io",
    class: "bg-[#34c7a77e] text-[currentColor] ",
    icon: SvgSocketIo,
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
    title: "Realtime Chat app",
    description:
      "You can log in and chat with others in real time! Built to explore the potential of SQL database and the versatility of Socket.io, the creation of a Node.js server and its integration with Socket.io.",

    image: `${comingSoon}`,
    isDisabledLink: true,
    technology: [
      TAGS.NODEJS,
      TAGS.SQLITE,
      TAGS.SOCKETI0,
      TAGS.TYPESCRIPT,
      TAGS.TAILWIND,
    ],
  },
  {
    title: "FullStack Social Media app",
    description:
      "A complete social app for sharing thoughts, following others and commenting. User search with pagination, activity pages for replies, profile management, and exclusive groups with top thoughts and members.",

    image: `${comingSoon}`,
    isDisabledLink: true,
    technology: [
      TAGS.NEXTJS,
      TAGS.REACT,
      TAGS.MONGODB,
      TAGS.TYPESCRIPT,
      TAGS.TAILWIND,
    ],
  },
];
