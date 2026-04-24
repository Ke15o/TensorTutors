import type { ReactElement } from "react";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { TutorialPage } from "./pages/TutorialPage";
import { getConceptLocation } from "./lib/learning";

export type RoutePath = "/";

type ResolvedRoute = {
  element: ReactElement;
};

const staticPages: Record<RoutePath, ReactElement> = {
  "/": <Home />,
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
    return { element: staticPage };
  }

  if (path === "/tutorials") {
    return { element: <Home /> };
  }

  const [section, topicSlug, subtopicSlug, conceptSlug] = path.split("/").filter(Boolean);

  if (section === "tutorials" && topicSlug) {
    const location = getConceptLocation(topicSlug, subtopicSlug, conceptSlug);

    if (!location) {
      return { element: <NotFound /> };
    }

    return { element: <TutorialPage location={location} /> };
  }

  return { element: <NotFound /> };
}
