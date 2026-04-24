import { useEffect, useMemo, useState } from "react";
import { Footer } from "./components/Footer";
import { normalizePath, resolveRoute } from "./routes";

function getPathFromLocation(): string {
  const rawPath = window.location.pathname || "/";

  return normalizePath(rawPath);
}

export default function App() {
  const [currentPath, setCurrentPath] = useState(getPathFromLocation);

  useEffect(() => {
    const redirectedPath = window.sessionStorage.getItem("tensortutors.redirect");

    if (redirectedPath) {
      window.sessionStorage.removeItem("tensortutors.redirect");
      window.history.replaceState(null, "", redirectedPath);
      setCurrentPath(normalizePath(new URL(redirectedPath, window.location.origin).pathname));
    }

    const syncPath = () => setCurrentPath(getPathFromLocation());

    const handleClick = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement).closest("a");

      if (!anchor || anchor.target) {
        return;
      }

      const href = anchor.getAttribute("href");

      if (!href || href.startsWith("#") || href.startsWith("mailto:")) {
        return;
      }

      const url = new URL(anchor.href);

      if (url.origin !== window.location.origin) {
        return;
      }

      event.preventDefault();
      window.history.pushState(null, "", `${url.pathname}${url.search}${url.hash}`);
      setCurrentPath(normalizePath(url.pathname));
      window.scrollTo({ top: 0 });
    };

    window.addEventListener("popstate", syncPath);
    document.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("popstate", syncPath);
      document.removeEventListener("click", handleClick);
    };
  }, []);

  const activeRoute = useMemo(() => resolveRoute(currentPath), [currentPath]);

  return (
    <div className="min-h-screen bg-ink-950 text-chalk-100">
      <main>{activeRoute.element}</main>
      <Footer />
    </div>
  );
}
