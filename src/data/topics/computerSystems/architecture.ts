import type { Subtopic } from "../../../types/topic";
import { stubConcept } from "../stubConcept";

export const architectureSubtopic: Subtopic = {
  id: "architecture",
  title: "Architecture",
  slug: "architecture",
  summary: "How computer components work together to execute programs.",
  concepts: [
    stubConcept("cpu", "CPU", "The processor that fetches, decodes, and executes instructions."),
    stubConcept("memory", "Memory", "Fast working storage used while programs run."),
  ],
};
