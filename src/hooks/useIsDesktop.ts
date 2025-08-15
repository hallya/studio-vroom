import { useState, useEffect } from "react";

export function useIsDesktop(): boolean {
  const [isDesktop, setIsDesktop] = useState<boolean>(false);

  useEffect(() => {
    const updateIsDesktop = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    updateIsDesktop();
    window.addEventListener("resize", updateIsDesktop);
    window.addEventListener("orientationchange", updateIsDesktop);

    return () => {
      window.removeEventListener("resize", updateIsDesktop);
      window.removeEventListener("orientationchange", updateIsDesktop);
    };
  }, []);

  return isDesktop;
}
