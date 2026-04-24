import type { MajorTopic } from "../../types/topic";
import { stubConcept } from "./stubConcept";

export const mathsForCsTopic: MajorTopic = {
  id: "maths-for-cs",
  title: "Maths for CS",
  slug: "maths-for-cs",
  summary: "Logic, graphs, sets, functions, and notation used in Computer Science.",
  subtopics: [
    {
      id: "discrete-maths",
      title: "Discrete Maths",
      slug: "discrete-maths",
      summary: "Mathematical structures used for algorithms and systems.",
      concepts: [
        stubConcept("boolean-logic", "Boolean Logic", "Reasoning with true and false values."),
        stubConcept("graphs", "Graphs", "Vertices and edges used to model relationships."),
      ],
    },
  ],
};
