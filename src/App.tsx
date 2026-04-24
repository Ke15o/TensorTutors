import { useEffect, useMemo, useState } from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { normalizePath, resolveRoute, routes } from "./routes";

function getPathFromHash(): string {
  const rawPath = window.location.hash.replace("#", "") || "/";

  return normalizePath(rawPath);
}

export default function App() {
  const [currentPath, setCurrentPath] = useState(getPathFromHash);

  useEffect(() => {
    const syncPath = () => setCurrentPath(getPathFromHash());

    window.addEventListener("hashchange", syncPath);
    return () => window.removeEventListener("hashchange", syncPath);
  }, []);

  const activeRoute = useMemo(() => resolveRoute(currentPath), [currentPath]);

  return (
    <div className="min-h-screen bg-ink-950 text-chalk-100">
      <Navbar activePath={activeRoute.activePath} routes={routes} />
      <main>{activeRoute.element}</main>
      <Footer />
    </div>
  );
}
