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
  console.log(themeMode, "thememode");

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
    <nav className="flex p-3 mx-auto sticky dark:bg-white/50 w-fit top-0 z-10 border rounded-full border-black bg-black/10 backdrop-blur-2xl ">
      <ul className="flex flex-row gap-x-5  items-center self-end text-sm sm:text-lg sm:gap-x-10 ">
        <li className=" hover:bg-white/10 rounded-full px-3 py-1 ">
          <a href="#header">Header</a>
        </li>
        <li className=" hover:bg-white/10 rounded-full px-3 py-1">
          <a href="#experience">Experience</a>
        </li>
        <li className=" hover:bg-white/10 rounded-full px-3 py-1">
          <a href="#about">About</a>
        </li>
        <li className=" hover:bg-white/10 rounded-full px-3 py-1">
          <a href="#projects">Projects</a>
        </li>
        <li className=" hover:bg-white/10 rounded-full px-3 py-1">
          <a href="#contact">Contact</a>
        </li>
        <li className=" hover:bg-white/10 rounded-full px-2  items-center">
          <button className="mt-2  items-center" onClick={handleChangeTheme}>
            {SvgComponente}
          </button>
        </li>
      </ul>
    </nav>
  );
}
