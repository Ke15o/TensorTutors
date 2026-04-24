import type { MajorTopic } from "../../../types/topic";
import { paradigmFoundationsSubtopic } from "./paradigmFoundations";

export const programmingParadigmsTopic: MajorTopic = {
  id: "programming-paradigms",
  title: "Programming Paradigms",
  slug: "programming-paradigms",
  summary: "Imperative, object-oriented, functional, and declarative ways of structuring programs.",
  subtopics: [paradigmFoundationsSubtopic],
};
