import type { ReactElement } from "react";
import { ExamPrep } from "./pages/ExamPrep";
import { Glossary } from "./pages/Glossary";
import { Home } from "./pages/Home";
import { Learn } from "./pages/Learn";
import { Practise } from "./pages/Practise";
import { Projects } from "./pages/Projects";
import { Roadmaps } from "./pages/Roadmaps";
import { Visualisers } from "./pages/Visualisers";

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
  element: ReactElement;
};

export const routes: AppRoute[] = [
  { path: "/", label: "Home", element: <Home /> },
  { path: "/learn", label: "Learn", element: <Learn /> },
  { path: "/practise", label: "Practise", element: <Practise /> },
  { path: "/visualisers", label: "Visualisers", element: <Visualisers /> },
  { path: "/projects", label: "Projects", element: <Projects /> },
  { path: "/exam-prep", label: "Exam Prep", element: <ExamPrep /> },
  { path: "/roadmaps", label: "Roadmaps", element: <Roadmaps /> },
  { path: "/glossary", label: "Glossary", element: <Glossary /> },
];
