import type { MajorTopic } from "../../../types/topic";
import { searchingSubtopic } from "./searching";
import { sortingSubtopic } from "./sorting";

export const algorithmsTopic: MajorTopic = {
  id: "algorithms",
  title: "Algorithms",
  slug: "algorithms",
  summary: "Searching, sorting, tracing, and reasoning about algorithm efficiency.",
  subtopics: [searchingSubtopic, sortingSubtopic],
};
