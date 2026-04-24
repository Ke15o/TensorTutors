import type { ReactElement } from "react";
import { ExamPrep } from "./pages/ExamPrep";
import { Glossary } from "./pages/Glossary";
import { Home } from "./pages/Home";
import { Learn } from "./pages/Learn";
import { LessonPage } from "./pages/LessonPage";
import { NotFound } from "./pages/NotFound";
import { PathwayPage } from "./pages/PathwayPage";
import { Practise } from "./pages/Practise";
import { Projects } from "./pages/Projects";
import { Roadmaps } from "./pages/Roadmaps";
import { TopicPage } from "./pages/TopicPage";
import { Visualisers } from "./pages/Visualisers";
import { getPathwayById, getTopicForPathway } from "./data/topics";
import type { PathwayId } from "./types/topic";

export type RoutePath =
  | "/"
  | "/learn"
  | "/practise"
  | "/visualisers"
  | "/projects"
  | "/exam-prep"
  | "/roadmaps"
  | "/glossary";

export type AppRoute = {
  path: RoutePath;
  label: string;
};

export const routes: AppRoute[] = [
  { path: "/", label: "Home" },
  { path: "/learn", label: "Learn" },
  { path: "/practise", label: "Practise" },
  { path: "/visualisers", label: "Visualisers" },
  { path: "/projects", label: "Projects" },
  { path: "/exam-prep", label: "Exam Prep" },
  { path: "/roadmaps", label: "Roadmaps" },
  { path: "/glossary", label: "Glossary" },
];

type ResolvedRoute = {
  activePath: RoutePath;
  element: ReactElement;
};

const staticPages: Record<RoutePath, ReactElement> = {
  "/": <Home />,
  "/learn": <Learn />,
  "/practise": <Practise />,
  "/visualisers": <Visualisers />,
  "/projects": <Projects />,
  "/exam-prep": <ExamPrep />,
  "/roadmaps": <Roadmaps />,
  "/glossary": <Glossary />,
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

  const segments = path.split("/").filter(Boolean);
  const [section, pathwaySegment, topicId, lessonSegment] = segments;

  if (section === "learn" && pathwaySegment) {
    const pathway = getPathwayById(pathwaySegment);

    if (!pathway) {
      return { activePath: "/learn", element: <NotFound /> };
    }

    const pathwayId = pathway.id as PathwayId;

    if (segments.length === 2) {
      return { activePath: "/learn", element: <PathwayPage pathwayId={pathwayId} /> };
    }

    const topic = getTopicForPathway(pathwayId, topicId);

    if (!topic) {
      return { activePath: "/learn", element: <NotFound /> };
    }

    if (segments.length === 3) {
      return { activePath: "/learn", element: <TopicPage pathwayId={pathwayId} topicId={topic.id} /> };
    }

    if (segments.length === 4 && lessonSegment === "lesson") {
      return { activePath: "/learn", element: <LessonPage pathwayId={pathwayId} topicId={topic.id} /> };
    }

    return { activePath: "/learn", element: <NotFound /> };
  }

  return { activePath: "/", element: <NotFound /> };
}
