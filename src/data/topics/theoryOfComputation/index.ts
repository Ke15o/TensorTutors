import type { MajorTopic } from "../../../types/topic";
import { computationFoundationsSubtopic } from "./computationFoundations";

export const theoryOfComputationTopic: MajorTopic = {
  id: "theory-of-computation",
  title: "Theory of Computation",
  slug: "theory-of-computation",
  summary: "Automata, formal languages, computability, and the limits of what algorithms can solve.",
  subtopics: [computationFoundationsSubtopic],
};
