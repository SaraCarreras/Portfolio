import { SvgDarkMode } from "@/icons/SvgDarkMode";
import { SvgLightMode } from "@/icons/SvgLightMode";
import { useEffect, useState } from "react";
import { SvgKey } from "./types";
import { returnOppositeTheme } from "@/utils/returnOppositeTheme";
import { navItems } from "./NavBarData";

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

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navItems = document.querySelectorAll("header nav a");

    const callback = (entries: IntersectionObserverEntry[]) => {
      console.log(entries, "entries");
      entries.forEach((entry: IntersectionObserverEntry) => {
        console.log(entry, "entry");
        if (entry.isIntersecting) {
          navItems.forEach((item) => {
            if (item.getAttribute("aria-label") === entry.target.id) {
              item.classList.add("text-yellow-500");
            } else {
              item.classList.remove("text-yellow-500");
            }
          });
        }
      });
    };

    const observer = new IntersectionObserver(callback, {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    });

    sections.forEach((section) => {
      observer.observe(section);
    });

    // Cleanup function
    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        observer.disconnect();
      } else {
        sections.forEach((section) => {
          observer.observe(section);
        });
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      observer.disconnect();
    };
  }, []);

  return (
    <nav className="flex mx-auto sticky dark:bg-white/40 w-fit top-0 z-10 border rounded-full border-black bg-purple-400/10 backdrop-blur ">
      <ul className="flex flex-row items-center self-end font-bold sm:text-lg gap-x-3 px-3  sm:gap-x-5 sm:px-5">
        {navItems.map((item) => {
          return (
            <li className="hover:scale-110">
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
          {/* px-3 */}
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
