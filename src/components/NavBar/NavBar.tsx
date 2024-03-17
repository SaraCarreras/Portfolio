import { SvgDarkMode } from "@/icons/SvgDarkMode";
import { SvgLightMode } from "@/icons/SvgLightMode";
import { useEffect, useState } from "react";
import { SvgKey } from "./types";
import { returnOppositeTheme } from "@/utils/returnOppositeTheme";

export function NavBar() {
  const [themeMode, setThemeMode] = useState<SvgKey>(() => {
    if (window.matchMedia("(prefers-color-scheme: light)").matches) {
      return "light";
    }
    return "dark";
  });

  const SvgModeMapper = {
    dark: <SvgDarkMode />,
    light: <SvgLightMode />,
  };

  const SvgComponente = SvgModeMapper[returnOppositeTheme(themeMode)];

  function handleChangeTheme() {
    setThemeMode((prevTheme) => returnOppositeTheme(prevTheme));
  }

  useEffect(() => {
    if (themeMode === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [themeMode]);

  //sm:w-[740px]
  return (
    <nav className="flex mx-auto sticky dark:bg-white/40 w-fit top-0 z-10 border rounded-full border-black bg-purple-400/10 backdrop-blur ">
      <ul className="flex flex-row items-center self-end font-bold sm:text-lg sm:gap-x-5 ">
        <li className="hover:scale-110">
          <a
            className=" dark:hover:text-purple-900 hover:text-purple-800 pl-5"
            href="#header"
          >
            Header
          </a>
        </li>
        <li className="hover:scale-110">
          <a className=" hover:text-purple-900 px-2" href="#experience">
            Experience
          </a>
        </li>

        <li className="hover:scale-110">
          <a className=" hover:text-purple-900 px-2" href="#projects">
            Projects
          </a>
        </li>
        <li className="hover:scale-110">
          <a className=" hover:text-purple-900 px-2" href="#about">
            About
          </a>
        </li>
        <li>
          <button
            className="mt-2  hover:text-purple-900 pr-4  hover:scale-110"
            onClick={handleChangeTheme}
          >
            {SvgComponente}
          </button>
        </li>
      </ul>
    </nav>
  );
}
