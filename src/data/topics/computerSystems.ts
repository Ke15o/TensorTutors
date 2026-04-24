import type { MajorTopic } from "../../types/topic";
import { stubConcept } from "./stubConcept";

export const computerSystemsTopic: MajorTopic = {
  id: "computer-systems",
  title: "Computer Systems",
  slug: "computer-systems",
  summary: "Hardware, operating systems, memory, storage, and data representation.",
  subtopics: [
    {
      id: "architecture",
      title: "Architecture",
      slug: "architecture",
      summary: "How computer components work together to execute programs.",
      concepts: [
        stubConcept("cpu", "CPU", "The processor that fetches, decodes, and executes instructions."),
        stubConcept("memory", "Memory", "Fast working storage used while programs run."),
      ],
    },
  ],
};
