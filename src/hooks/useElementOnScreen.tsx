import { useEffect, useRef, useState } from "react";

interface ElementOnScreen {
  containerRef: React.MutableRefObject<HTMLElement | null>;
  activeSection: boolean;
}

export const useElementOnScreen = (): ElementOnScreen => {
  const [activeSection, setActiveSection] = useState(false);
  const containerRef = useRef<HTMLElement | null>(null);

  const callbackFunction = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    setActiveSection(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [containerRef]);
  return { containerRef, activeSection };
};
