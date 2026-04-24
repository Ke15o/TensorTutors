import type { Subtopic } from "../../../types/topic";
import { stubConcept } from "../stubConcept";

export const linearStructuresSubtopic: Subtopic = {
  id: "linear-structures",
  title: "Linear Structures",
  slug: "linear-structures",
  summary: "Structures where items are arranged in a sequence.",
  concepts: [
    stubConcept("arrays", "Arrays", "Indexed collections where each position stores a value."),
    stubConcept("stacks", "Stacks", "Last-in, first-out collections."),
    stubConcept("queues", "Queues", "First-in, first-out collections."),
    stubConcept("linked-lists", "Linked Lists", "Nodes connected by references rather than direct indexing."),
  ],
};
