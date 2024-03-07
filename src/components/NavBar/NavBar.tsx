import { SvgDarkMode } from "@/icons/SvgDarkMode";
import { SvgLightMode } from "@/icons/SvgLightMode";
import { useState } from "react";
import { SvgKey } from "./types";

export function NavBar() {
  const [themeMode, setThemeMode] = useState<SvgKey>("dark");

  const SvgModeMapper = {
    dark: <SvgDarkMode />,
    light: <SvgLightMode />,
  };

  const SvgComponente = SvgModeMapper[themeMode];

  function changeMode() {
    themeMode === "dark" ? setThemeMode("light") : setThemeMode("dark");
  }
  //sm:w-[740px]
  return (
    <nav className="flex justify-center items-center py-5 mx-auto  ">
      <ul className="flex flex-row gap-x-5 self-end text-sm sm:text-lg sm:gap-x-10">
        <li>
          <a href="#header">Header</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <button onClick={changeMode}>{SvgComponente}</button>
        </li>
      </ul>
    </nav>
  );
}
