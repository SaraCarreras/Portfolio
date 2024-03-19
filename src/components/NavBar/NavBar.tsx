import { SvgDarkMode } from "@/icons/SvgDarkMode";
import { SvgLightMode } from "@/icons/SvgLightMode";
import { useEffect, useState } from "react";
import { SvgKey } from "./types";
import { returnOppositeTheme } from "@/utils/returnOppositeTheme";
import { navItems } from "./NavBarData";
import { showOneActiveSection } from "@/hooks/useShowOneSection";
import { iSections } from "@/types/types";

export function NavBar({ activeSection }: { activeSection: iSections }) {
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

  return (
    <nav className="flex mx-auto sticky dark:bg-white/40 w-fit top-0 z-10 border rounded-full border-black bg-purple-400/10 backdrop-blur ">
      <ul className="flex flex-row items-center self-end font-bold sm:text-lg gap-x-3 px-3  sm:gap-x-7 sm:px-5">
        {navItems.map((item) => {
          return (
            <li
              className={`hover:scale-110 ${showOneActiveSection(activeSection) === item.label ? "text-yellow-500" : ""} `}
              key={item.title}
            >
              <a
                className="dark:hover:text-purple-900 hover:text-purple-800"
                href={item.url}
                aria-label={item.label}
              >
                {item.title}
              </a>
            </li>
          );
        })}
        <li>
          <button
            className="mt-2  hover:text-purple-900 hover:scale-110"
            onClick={handleChangeTheme}
          >
            {SvgComponente}
          </button>
        </li>
      </ul>
    </nav>
  );
}
