import type { ReactElement } from "react";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Exercises } from "./pages/Exercises";
import { Projects } from "./pages/Projects";
import { References } from "./pages/References";
import { Tutorials } from "./pages/Tutorials";
import { TutorialCategory } from "./pages/TutorialCategory";
import { TutorialTopic } from "./pages/TutorialTopic";
import { Visualisers } from "./pages/Visualisers";
import { getCategoryBySlug, getTopicBySlug } from "./data/topics";

export type RoutePath = "/" | "/tutorials" | "/references" | "/exercises" | "/visualisers" | "/projects";

export type AppRoute = {
  path: RoutePath;
  label: string;
};

export const routes: AppRoute[] = [
  { path: "/tutorials", label: "Tutorials" },
  { path: "/references", label: "References" },
  { path: "/exercises", label: "Exercises" },
  { path: "/visualisers", label: "Visualisers" },
  { path: "/projects", label: "Projects" },
];

type ResolvedRoute = {
  activePath: RoutePath;
  element: ReactElement;
};

const staticPages: Record<RoutePath, ReactElement> = {
  "/": <Home />,
  "/tutorials": <Tutorials />,
  "/references": <References />,
  "/exercises": <Exercises />,
  "/visualisers": <Visualisers />,
  "/projects": <Projects />,
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

  const [section, categorySlug, topicSlug] = path.split("/").filter(Boolean);

  if (section === "tutorials" && categorySlug) {
    const category = getCategoryBySlug(categorySlug);

    if (!category) {
      return { activePath: "/tutorials", element: <NotFound /> };
    }

    if (!topicSlug) {
      return { activePath: "/tutorials", element: <TutorialCategory category={category} /> };
    }

    const topic = getTopicBySlug(categorySlug, topicSlug);

    if (!topic) {
      return { activePath: "/tutorials", element: <NotFound /> };
    }

    return { activePath: "/tutorials", element: <TutorialTopic category={category} topic={topic} /> };
  }

  return { activePath: "/", element: <NotFound /> };
}
