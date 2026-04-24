import type { ReactElement } from "react";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { TutorialPage } from "./pages/TutorialPage";
import { Tutorials } from "./pages/Tutorials";
import { getConceptLocation } from "./data/topics";

export type RoutePath = "/" | "/tutorials";

type ResolvedRoute = {
  activePath: RoutePath;
  element: ReactElement;
};

const staticPages: Record<RoutePath, ReactElement> = {
  "/": <Home />,
  "/tutorials": <Tutorials />,
};

export function normalizePath(rawPath: string): string {
  const path = rawPath.trim() || "/";
  const withLeadingSlash = path.startsWith("/") ? path : `/${path}`;
  const withoutTrailingSlash =
    withLeadingSlash.length > 1 ? withLeadingSlash.replace(/\/+$/, "") : withLeadingSlash;

  return withoutTrailingSlash.toLowerCase();
}

export function resolveRoute(rawPath: string): ResolvedRoute {
  const path = normalizePath(rawPath);
  const staticPage = staticPages[path as RoutePath] as ReactElement | undefined;

  if (staticPage) {
    return { activePath: path as RoutePath, element: staticPage };
  }

  const [section, topicSlug, subtopicSlug, conceptSlug] = path.split("/").filter(Boolean);

  if (section === "tutorials" && topicSlug) {
    const location = getConceptLocation(topicSlug, subtopicSlug, conceptSlug);

    if (!location) {
      return { activePath: "/tutorials", element: <NotFound /> };
    }

    return { activePath: "/tutorials", element: <TutorialPage location={location} /> };
  }

  return { activePath: "/", element: <NotFound /> };
}
