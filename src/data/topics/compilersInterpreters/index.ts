import type { MajorTopic } from "../../../types/topic";
import { translationFoundationsSubtopic } from "./translationFoundations";

export const compilersInterpretersTopic: MajorTopic = {
  id: "compilers-interpreters",
  title: "Compilers & Interpreters",
  slug: "compilers-interpreters",
  summary: "How programming languages are translated, analysed, optimised, and executed.",
  subtopics: [translationFoundationsSubtopic],
};
