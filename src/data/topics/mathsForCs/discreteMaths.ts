import type { Subtopic } from "../../../types/topic";
import { stubConcept } from "../stubConcept";

export const discreteMathsSubtopic: Subtopic = {
  id: "discrete-maths",
  title: "Discrete Maths",
  slug: "discrete-maths",
  summary: "Mathematical structures used for algorithms and systems.",
  concepts: [
    stubConcept("boolean-logic", "Boolean Logic", "Reasoning with true and false values."),
    stubConcept("graphs", "Graphs", "Vertices and edges used to model relationships."),
  ],
};
