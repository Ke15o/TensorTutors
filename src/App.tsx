import { useEffect, useMemo, useState } from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { routes, type RoutePath } from "./routes";

const routePaths = routes.map((route) => route.path);

function getPathFromHash(): RoutePath {
  const rawPath = window.location.hash.replace("#", "") || "/";
  return routePaths.includes(rawPath as RoutePath) ? (rawPath as RoutePath) : "/";
}

export default function App() {
  const [activePath, setActivePath] = useState<RoutePath>(getPathFromHash);

  useEffect(() => {
    const syncPath = () => setActivePath(getPathFromHash());

    window.addEventListener("hashchange", syncPath);
    return () => window.removeEventListener("hashchange", syncPath);
  }, []);

  const activeRoute = useMemo(
    () => routes.find((route) => route.path === activePath) ?? routes[0],
    [activePath],
  );

  return (
    <div className="min-h-screen bg-ink-950 text-chalk-100">
      <Navbar activePath={activePath} routes={routes} />
      <main>{activeRoute.element}</main>
      <Footer />
    </div>
  );
}
